/**
 * Serverless Function - Buzón de Consultas y Sugerencias (AltilloJVG)
 * POST /api/feedback         (Público - Enviar consulta o sugerencia)
 * GET /api/feedback          (Admin - Listar consultas y sugerencias)
 * DELETE /api/feedback?id=.. (Admin - Eliminar mensaje)
 */
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const SUPABASE_URL = process.env.SUPABASE_URL || "https://nfpmrjvdjzzyzjskmiqt.supabase.co";
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const localFilePath = path.join(process.cwd(), 'data', 'feedback.json');

  function getLocalFeedback() {
    try {
      if (fs.existsSync(localFilePath)) {
        return JSON.parse(fs.readFileSync(localFilePath, 'utf-8'));
      }
    } catch (e) {
      console.error('Error reading local feedback:', e);
    }
    return [];
  }

  function saveLocalFeedback(list) {
    try {
      const dir = path.dirname(localFilePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(localFilePath, JSON.stringify(list, null, 2), 'utf-8');
    } catch (e) {
      console.error('Error saving local feedback:', e);
    }
  }

  // ============================================================================
  // GET: Listar Mensajes (Admin)
  // ============================================================================
  if (req.method === 'GET') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || adminPass !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    // 1. Intentar leer de tabla dedicada public.feedback
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const resp = await fetch(`${SUPABASE_URL}/rest/v1/feedback?order=created_at.desc`, {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
          }
        });

        if (resp.ok) {
          const data = await resp.json();
          if (Array.isArray(data) && data.length > 0) {
            return res.status(200).json(data);
          }
        }
      } catch (e) {
        console.warn('Supabase feedback table query failed:', e.message);
      }

      // 2. Si tabla dedicada no existe o está vacía, consultar tabla submissions (estado = 'feedback')
      try {
        const subResp = await fetch(`${SUPABASE_URL}/rest/v1/submissions?estado=eq.feedback&order=created_at.desc`, {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
          }
        });

        if (subResp.ok) {
          const subData = await subResp.json();
          if (Array.isArray(subData)) {
            const mapped = subData.map(s => ({
              id: s.id,
              nombre: s.nombre || 'Estudiante anónimo',
              carrera: s.carrera || 'No especificada',
              tipo: s.tipo || 'Sugerencia',
              mensaje: s.link || '',
              created_at: s.created_at
            }));
            return res.status(200).json(mapped);
          }
        }
      } catch (e) {
        console.warn('Supabase submissions feedback fallback error:', e.message);
      }
    }

    // 3. Fallback a archivo local
    const localList = getLocalFeedback();
    return res.status(200).json(localList);
  }

  // ============================================================================
  // POST: Enviar Mensaje (Público)
  // ============================================================================
  if (req.method === 'POST') {
    const { nombre, carrera, tipo, mensaje } = req.body || {};

    if (!mensaje || !mensaje.trim()) {
      return res.status(400).json({ error: 'El contenido del mensaje no puede estar vacío.' });
    }

    const newFeedback = {
      nombre: (nombre || 'Estudiante anónimo').trim(),
      carrera: (carrera || 'No especificada').trim(),
      tipo: (tipo || 'Sugerencia').trim(),
      mensaje: mensaje.trim(),
      created_at: new Date().toISOString()
    };

    let savedInSupabase = false;

    // 1. Intentar guardar en Supabase (tabla feedback o fallback a submissions)
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const fbRes = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(newFeedback)
        });

        if (fbRes.ok) {
          savedInSupabase = true;
        }
      } catch (e) {
        console.warn('Error inserting into feedback table:', e.message);
      }

      // Si falló la tabla feedback (ej. 404 porque no existe), guardar en submissions con estado='feedback'
      if (!savedInSupabase) {
        try {
          const subRes = await fetch(`${SUPABASE_URL}/rest/v1/submissions`, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY,
              'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
              carrera: newFeedback.carrera,
              anio: 'General',
              materia: '[FEEDBACK]',
              tipo: newFeedback.tipo,
              nombre: newFeedback.nombre,
              link: newFeedback.mensaje,
              estado: 'feedback',
              created_at: newFeedback.created_at
            })
          });

          if (subRes.ok) {
            savedInSupabase = true;
          }
        } catch (e) {
          console.warn('Error inserting into submissions as feedback fallback:', e.message);
        }
      }
    }

    // 2. Notificación Instantánea a Telegram (Administradores)
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      try {
        const fechaStr = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
        const tgText = `📬 *¡Nueva Consulta o Sugerencia Recibida en AltilloJVG!*

` +
          `👤 *Nombre:* ${newFeedback.nombre}
` +
          `🎓 *Carrera:* ${newFeedback.carrera}
` +
          `🏷️ *Tipo:* ${newFeedback.tipo}

` +
          `💬 *Mensaje:*
${newFeedback.mensaje}

` +
          `📅 *Fecha:* ${fechaStr}`;

        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: tgText,
            parse_mode: 'Markdown'
          })
        });
      } catch (tgErr) {
        console.warn('Telegram feedback notification error:', tgErr.message);
      }
    }

    // 3. Respaldo en archivo local
    try {
      const localList = getLocalFeedback();
      localList.unshift({
        id: Date.now(),
        ...newFeedback
      });
      saveLocalFeedback(localList);
    } catch (e) {}

    return res.status(200).json({
      success: true,
      message: '¡Muchas gracias! Tu mensaje fue enviado con éxito a la administración del Altillo.'
    });
  }

  // ============================================================================
  // DELETE: Eliminar Mensaje (Admin)
  // ============================================================================
  if (req.method === 'DELETE') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || adminPass !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    const id = req.query.id || req.body.id;
    if (!id) {
      return res.status(400).json({ error: 'ID requerido para eliminar mensaje.' });
    }

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      try {
        // Intentar borrar en feedback
        await fetch(`${SUPABASE_URL}/rest/v1/feedback?id=eq.${id}`, {
          method: 'DELETE',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
          }
        });
      } catch (e) {}

      try {
        // Intentar borrar en submissions
        await fetch(`${SUPABASE_URL}/rest/v1/submissions?id=eq.${id}&estado=eq.feedback`, {
          method: 'DELETE',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
          }
        });
      } catch (e) {}
    }

    try {
      let localList = getLocalFeedback();
      localList = localList.filter(item => String(item.id) !== String(id));
      saveLocalFeedback(localList);
    } catch (e) {}

    return res.status(200).json({ success: true, message: 'Mensaje eliminado correctamente.' });
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
