/**
 * Serverless Function - Telegram Webhook Callback Handler
 * Listens to Telegram inline button clicks ([✅ Aprobar] / [❌ Rechazar])
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send('Telegram Webhook Active.');
  }

  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8701466278:AAEpF3fR9LJwXwDQPxS43NB3Aqn0vUrqCgE";
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
      let newText = '';

      if (data.startsWith('approve_')) {
        responseNotice = '✅ ¡Documento aprobado y publicado!';
        newText = `${message.text}\n\n🎉 *ESTADO:* ✅ *APROBADO Y PUBLICADO*\n👤 *Por:* ${userFirstName}\n📅 *Fecha:* ${new Date().toLocaleDateString('es-AR')}`;
      } else if (data.startsWith('reject_')) {
        responseNotice = '❌ Documento rechazado.';
        newText = `${message.text}\n\n🚫 *ESTADO:* ❌ *RECHAZADO*\n👤 *Por:* ${userFirstName}\n📅 *Fecha:* ${new Date().toLocaleDateString('es-AR')}`;
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

      // Editar el mensaje en Telegram para quitar los botones y mostrar el estado final
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/editMessageText`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId,
          text: newText,
          parse_mode: 'Markdown'
        })
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error en Telegram Webhook:', error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}
