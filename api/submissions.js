/**
 * Serverless Function - AltilloJVG Peticiones de Subida (Submissions Management)
 * GET /api/submissions (Admin - Listar pendientes e historial)
 * POST /api/submissions (Admin - Aprobar o Rechazar y sincronizar con Telegram)
 */

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'Supabase credentials not configured in Vercel.' });
  }

  // Todas las acciones de submissions requieren autenticación de administrador
  const passwordHeader = req.headers['x-admin-password'];
  if (!ADMIN_PASSWORD || !passwordHeader || passwordHeader !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'No autorizado. Contraseña incorrecta.' });
  }

  // ==========================================
  // GET: Listar peticiones (pendientes e historial)
  // ==========================================
  if (req.method === 'GET') {
    try {
      let submissions = [];
      const subRes = await fetch(`${SUPABASE_URL}/rest/v1/submissions?order=created_at.desc`, {
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });

      if (subRes.ok) {
        submissions = await subRes.json();
      }

      // Si la tabla submissions está vacía o aún no tiene historial pero en materials hay archivos,
      // agregamos los materiales existentes al historial para que se vean reflejados
      const matRes = await fetch(`${SUPABASE_URL}/rest/v1/materials?order=created_at.desc`, {
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });
      let materials = [];
      if (matRes.ok) {
        materials = await matRes.json();
      }

      // Filtrar pendientes e historial
      const pending = submissions.filter(s => s.estado === 'pendiente');
      const history = submissions.filter(s => s.estado !== 'pendiente');

      // Si hay materiales publicados que no están en submissions, agregarlos al historial como aprobados
      const submissionLinks = new Set(submissions.map(s => s.link));
      materials.forEach(m => {
        if (!submissionLinks.has(m.link)) {
          history.push({
            id: `mat-${m.id}`,
            carrera: m.carrera,
            anio: m.anio,
            materia: m.materia,
            tipo: m.tipo,
            nombre: m.nombre,
            link: m.link,
            estado: 'aprobado',
            aprobado_por: 'Telegram / Sistema',
            created_at: m.created_at
          });
        }
      });

      return res.status(200).json({
        pending,
        history,
        totalPending: pending.length
      });
    } catch (err) {
      console.error('Error fetching submissions:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  // ==========================================
  // POST: Aprobar o Rechazar Petición
  // ==========================================
  if (req.method === 'POST') {
    const { action, id } = req.body || {};
    if (!action || !id || (action !== 'approve' && action !== 'reject')) {
      return res.status(400).json({ error: 'Acción no válida o falta el ID de la petición.' });
    }

    try {
      // 1. Obtener la petición
      const getRes = await fetch(`${SUPABASE_URL}/rest/v1/submissions?id=eq.${id}`, {
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });

      if (!getRes.ok) throw new Error('No se pudo encontrar la petición.');
      const items = await getRes.json();
      if (!items || items.length === 0) {
        return res.status(404).json({ error: 'Petición no encontrada.' });
      }

      const submission = items[0];
      const esAprobacion = action === 'approve';
      const nuevoEstado = esAprobacion ? 'aprobado' : 'rechazado';
      const aprobadoPorTexto = esAprobacion 
        ? 'Aprobado desde el panel de admin del altillo' 
        : 'Rechazado desde el panel de admin del altillo';

      // 2. Si es aprobación, insertar en la tabla de materiales públicos
      if (esAprobacion) {
        const matInsert = await fetch(`${SUPABASE_URL}/rest/v1/materials`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            carrera: submission.carrera,
            anio: submission.anio,
            materia: submission.materia.toUpperCase(),
            tipo: submission.tipo,
            nombre: submission.nombre,
            link: submission.link
          })
        });

        if (!matInsert.ok) {
          const matErr = await matInsert.text();
          console.error('Error insertando en materials:', matErr);
        }
      }

      // 3. Actualizar el registro en la tabla submissions
      await fetch(`${SUPABASE_URL}/rest/v1/submissions?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          estado: nuevoEstado,
          aprobado_por: aprobadoPorTexto
        })
      });

      // 4. Sincronizar el mensaje en Telegram (si existe message_id y chat_id)
      if (TELEGRAM_BOT_TOKEN && submission.telegram_message_id && submission.telegram_chat_id) {
        const estadoEmoji = esAprobacion ? '✅ *APROBADO Y PUBLICADO*' : '❌ *RECHAZADO*';
        const updatedCaption = `📚 *¡Nuevo Aporte Recibido en AltilloJVG!*\n\n` +
          `🎓 *Carrera:* ${submission.carrera}\n` +
          `📅 *Año:* ${submission.anio}\n` +
          `📖 *Materia:* ${submission.materia}\n` +
          `📝 *Tipo:* ${submission.tipo}\n` +
          `🏷️ *Título:* ${submission.nombre}\n` +
          (submission.link ? `🔗 *Enlace:* [Ver material en la nube](${submission.link})\n\n` : '\n') +
          `🎉 *ESTADO:* ${estadoEmoji}\n` +
          `👤 *Por:* ${aprobadoPorTexto}\n` +
          `📅 *Fecha:* ${new Date().toLocaleDateString('es-AR')}`;

        // Intentar actualizar como caption (si fue enviado como documento)
        try {
          const editCaptionRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/editMessageCaption`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: submission.telegram_chat_id,
              message_id: submission.telegram_message_id,
              caption: updatedCaption,
              parse_mode: 'Markdown',
              reply_markup: { inline_keyboard: [] }
            })
          });

          // Si falla editMessageCaption, intentar con editMessageText
          if (!editCaptionRes.ok) {
            await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/editMessageText`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: submission.telegram_chat_id,
                message_id: submission.telegram_message_id,
                text: updatedCaption,
                parse_mode: 'Markdown',
                reply_markup: { inline_keyboard: [] }
              })
            });
          }
        } catch (tgErr) {
          console.error('Error sincronizando con mensaje de Telegram:', tgErr);
        }
      }

      return res.status(200).json({
        success: true,
        message: esAprobacion ? 'Documento aprobado y publicado con éxito.' : 'Documento rechazado con éxito.',
        estado: nuevoEstado
      });
    } catch (err) {
      console.error('Error processing submission action:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
