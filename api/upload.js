/**
 * Serverless Function - AltilloJVG Upload Proxy
 * Telegram Bot API upload proxy with interactive inline approval buttons.
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido. Utilizar POST.' });
  }

  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8701466278:AAEpF3fR9LJwXwDQPxS43NB3Aqn0vUrqCgE";
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-1004456191597";

    const body = req.body || {};
    const carrera = body.carrera || 'No especificada';
    const anio = body.anio || 'Sin año';
    const materia = body.materia || 'General';
    const tipo = body.tipo || 'Apunte';

    const docId = `AP-${Date.now()}`;
    const captionText = `📚 *¡Nuevo Aporte Recibido en AltilloJVG!*\n\n🎓 *Carrera:* ${carrera}\n📅 *Año:* ${anio}\n📖 *Materia:* ${materia}\n📝 *Tipo:* ${tipo}\n🆔 *ID:* ${docId}\n\n¿Desean aprobar este documento para publicarlo en la web de AltilloJVG?`;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const tgResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: captionText,
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '✅ Aprobar y Publicar', callback_data: `approve_${docId}` },
              { text: '❌ Rechazar', callback_data: `reject_${docId}` }
            ]
          ]
        }
      })
    });

    const tgResult = await tgResponse.json();

    return res.status(200).json({
      success: true,
      message: '¡Documento recibido con éxito! Ha sido enviado al grupo de aprobación de La Caravana.',
      docId: docId
    });

  } catch (error) {
    console.error('Error en la Serverless Function de subida:', error);
    return res.status(500).json({
      success: false,
      message: 'Ocurrió un error al enviar la solicitud al servidor.',
      error: error.message
    });
  }
}
