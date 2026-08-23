/**
 * Serverless Function - Telegram Webhook Callback Handler
 * Listens to Telegram inline button clicks ([✅ Aprobar] / [❌ Rechazar])
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send('Telegram Webhook Active.');
  }

  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    if (!TELEGRAM_BOT_TOKEN) {
      return res.status(500).json({ ok: false, error: 'Falta configurar TELEGRAM_BOT_TOKEN.' });
    }
    const update = req.body || {};

    // 1. Manejo de clics en botones inline (Callback Query)
    if (update.callback_query) {
      const callbackQuery = update.callback_query;
      const callbackId = callbackQuery.id;
      const data = callbackQuery.data;
      const userFirstName = callbackQuery.from?.first_name || 'Administrador';
      const message = callbackQuery.message;

      const chatId = message.chat.id;
      const messageId = message.message_id;

      let responseNotice = '¡Acción procesada!';
      const isDocument = !!message.document;
      const rawText = message.text || message.caption || '';
      let newText = '';

      if (data.startsWith('approve_')) {
        responseNotice = '✅ ¡Documento aprobado y publicado!';
        newText = `${rawText}\n\n🎉 *ESTADO:* ✅ *APROBADO Y PUBLICADO*\n👤 *Por:* ${userFirstName}\n📅 *Fecha:* ${new Date().toLocaleDateString('es-AR')}`;

        // 1. Extraer metadatos usando regex
        const carreraMatch = rawText.match(/Carrera:\*?\s*([^\n\r]+)/i);
        const anioMatch = rawText.match(/Año:\*?\s*([^\n\r]+)/i);
        const materiaMatch = rawText.match(/Materia:\*?\s*([^\n\r]+)/i);
        const tipoMatch = rawText.match(/Tipo:\*?\s*([^\n\r]+)/i);

        const carrera = carreraMatch ? carreraMatch[1].trim() : 'Desconocida';
        const anio = anioMatch ? anioMatch[1].trim() : 'Sin año';
        const materia = materiaMatch ? materiaMatch[1].trim() : 'General';
        const tipo = tipoMatch ? tipoMatch[1].trim() : 'Apunte';

        // Intentar extraer el link de los entities de Telegram
        let link = '';
        const entities = message.entities || message.caption_entities || [];
        const textLinkEntity = entities.find(e => e.type === 'text_link');
        if (textLinkEntity) {
          link = textLinkEntity.url;
        }

        const nombre = `${tipo} de ${materia}`;

        // 2. Guardar en Supabase usando llamadas REST nativas
        const SUPABASE_URL = process.env.SUPABASE_URL;
        const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY && link) {
          try {
            const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/materials`, {
              method: 'POST',
              headers: {
                'apikey': SUPABASE_SERVICE_ROLE_KEY,
                'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
              },
              body: JSON.stringify({
                carrera: carrera,
                anio: anio,
                materia: materia.toUpperCase(),
                tipo: tipo,
                nombre: nombre,
                link: link
              })
            });

            if (!insertResponse.ok) {
              const errTxt = await insertResponse.text();
              console.error('Error insertando en Supabase:', errTxt);
            } else {
              console.log('Material insertado exitosamente en Supabase.');
            }
          } catch (dbError) {
            console.error('Excepción al conectar con Supabase:', dbError);
          }
        }
      } else if (data.startsWith('reject_')) {
        responseNotice = '❌ Documento rechazado.';
        newText = `${rawText}\n\n🚫 *ESTADO:* ❌ *RECHAZADO*\n👤 *Por:* ${userFirstName}\n📅 *Fecha:* ${new Date().toLocaleDateString('es-AR')}`;
      }

      // Responder al click del usuario para quitar la animación de carga en Telegram
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          callback_query_id: callbackId,
          text: responseNotice,
          show_alert: true
        })
      });

      // Editar el mensaje en Telegram (usando editMessageCaption si es un documento)
      const editEndpoint = isDocument ? 'editMessageCaption' : 'editMessageText';
      const editPayload = {
        chat_id: chatId,
        message_id: messageId,
        parse_mode: 'Markdown'
      };

      if (isDocument) {
        editPayload.caption = newText;
      } else {
        editPayload.text = newText;
      }

      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/${editEndpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editPayload)
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error en Telegram Webhook:', error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}
