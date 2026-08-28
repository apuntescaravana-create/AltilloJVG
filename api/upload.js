/**
 * Serverless Function - AltilloJVG Upload Proxy (Vercel Edge Runtime)
 * Handles file uploads and link submissions, sending them directly to a Telegram group.
 */

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Método no permitido. Utilizar POST.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Error de configuración en el servidor. Faltan variables de entorno.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const formData = await req.formData();
    const carrera = formData.get('carrera') || 'No especificada';
    const anio = formData.get('anio') || 'Sin año';
    const materia = formData.get('materia') || 'General';
    const tipo = formData.get('tipo') || 'Apunte';
    const link = formData.get('link') || '';
    const file = formData.get('file'); // Objeto File de la Web API
    const nombrePersonalizado = formData.get('nombre') || '';

    const docId = `AP-${Date.now()}`;
    const timestampStr = new Date().toLocaleDateString('es-AR');

    // Construcción del mensaje descriptivo para los administradores en Telegram
    let captionText = `📚 *¡Nuevo Aporte Recibido en AltilloJVG!*\n\n🎓 *Carrera:* ${carrera}\n📅 *Año:* ${anio}\n📖 *Materia:* ${materia}\n📝 *Tipo:* ${tipo}`;
    
    if (nombrePersonalizado) {
      captionText += `\n🏷️ *Título:* ${nombrePersonalizado}`;
    }
    
    captionText += `\n🆔 *ID:* ${docId}\n📅 *Fecha:* ${timestampStr}`;

    if (link) {
      captionText += `\n🔗 *Enlace:* [Ver material en la nube](${link})`;
    }

    captionText += `\n\n¿Desean aprobar este documento para publicarlo en la web de AltilloJVG?`;

    // Botones interactivos para aprobación directa desde Telegram
    const replyMarkup = {
      inline_keyboard: [
        [
          { text: '✅ Aprobar y Publicar', callback_data: `approve_${docId}` },
          { text: '❌ Rechazar', callback_data: `reject_${docId}` }
        ]
      ]
    };

    let response;

    // Si se subió un archivo físico y tiene tamaño válido
    if (file && file.size > 0 && file.name) {
      const tgFormData = new FormData();
      tgFormData.append('chat_id', TELEGRAM_CHAT_ID);
      tgFormData.append('document', file, file.name);
      tgFormData.append('caption', captionText);
      tgFormData.append('parse_mode', 'Markdown');
      tgFormData.append('reply_markup', JSON.stringify(replyMarkup));

      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;
      response = await fetch(telegramUrl, {
        method: 'POST',
        body: tgFormData
      });
    } else {
      // Si solo es un enlace, enviar mensaje de texto plano con formato
      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: captionText,
          parse_mode: 'Markdown',
          reply_markup: replyMarkup
        })
      });
    }

    const tgResult = await response.json();

    if (!tgResult.ok) {
      console.error('Error de Telegram Bot API:', tgResult);
      return new Response(JSON.stringify({
        success: false,
        message: `Error al enviar a Telegram: ${tgResult.description || 'Intenta de nuevo.'}`
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Registrar la petición en la base de datos de Supabase para el panel de administración
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const tgMessageId = tgResult.result?.message_id;
    const tgChatId = tgResult.result?.chat?.id || TELEGRAM_CHAT_ID;

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      try {
        await fetch(`${SUPABASE_URL}/rest/v1/submissions`, {
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
            nombre: nombrePersonalizado || `${tipo} de ${materia}`,
            link: link,
            estado: 'pendiente',
            telegram_message_id: tgMessageId,
            telegram_chat_id: tgChatId
          })
        });
      } catch (subErr) {
        console.error('Error guardando submission en Supabase:', subErr);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      message: '¡Aporte recibido con éxito! Ha sido enviado al grupo de aprobación de La Caravana.',
      docId: docId
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en la Serverless Function de subida:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Ocurrió un error procesando la subida en el servidor.',
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
