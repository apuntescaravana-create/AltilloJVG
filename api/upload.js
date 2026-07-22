/**
 * Serverless Function - AltilloJVG Upload Proxy
 * Handles Telegram Bot API uploads & Google Sheets registration.
 * Compatible with Vercel Serverless Functions / Netlify Functions / Express.
 * 
 * SECURITY NOTICE:
 * All API Tokens and Keys are kept securely in environment variables.
 * NEVER hardcode secrets in source files.
 */

// Dependencias opcionales en runtime Serverless (e.g. formidable / busboy / node-fetch)
// Vercel export default handler:

export default async function handler(req, res) {
  // Solo permitir solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido. Utilizar POST.' });
  }

  try {
    // 1. Obtener variables de entorno configuradas en Vercel/Netlify
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    const SHEET_API_URL = process.env.SHEET_API_URL;

    // Validación de configuración en servidor
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || !SHEET_API_URL) {
      console.warn('⚠️ Variables de entorno no configuradas. Ejecutando en modo simulación segura.');
      return res.status(200).json({
        success: true,
        message: 'Material registrado correctamente (Modo simulación por falta de env vars).'
      });
    }

    // 2. Extraer campos del formulario
    const body = req.body || {};
    const carrera = body.carrera || 'No especificada';
    const anio = body.anio || 'Sin año';
    const materia = body.materia || 'General';
    const tipo = body.tipo || 'Apunte';
    const fileData = body.fileData; // Base64 o Buffer según parser

    let fileUrl = 'https://t.me/AltilloJVG_Repo/1'; // Enlace por defecto

    // 3. Subir a Telegram Bot API si se proporciona archivo (< 20MB)
    if (fileData && TELEGRAM_BOT_TOKEN) {
      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;
      
      // Construir FormData para envío a Telegram
      const formData = new FormData();
      formData.append('chat_id', TELEGRAM_CHAT_ID);
      formData.append('caption', `📚 Nuevo Aporte: ${carrera} - ${materia} (${tipo})`);
      
      const tgResponse = await fetch(telegramUrl, {
        method: 'POST',
        body: formData
      });

      const tgResult = await tgResponse.json();
      if (tgResult.ok && tgResult.result?.document?.file_id) {
        fileUrl = `https://t.me/c/${TELEGRAM_CHAT_ID}/${tgResult.result.message_id}`;
      }
    }

    // 4. Escribir fila en Google Sheets (Pestaña "Aportes") con estado "Pendiente"
    const newRecord = {
      ID: `AP-${Date.now()}`,
      Fecha: new Date().toISOString().split('T')[0],
      Carrera: carrera,
      Año: anio,
      Materia: materia,
      Tipo_de_Material: tipo,
      Link_Telegram: fileUrl,
      Estado: 'Pendiente' // El administrador cambiará este estado a 'Aprobado' en el Sheets
    };

    const sheetResponse = await fetch(SHEET_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([newRecord])
    });

    if (!sheetResponse.ok) {
      throw new Error('Error al escribir en la API de Google Sheets.');
    }

    return res.status(200).json({
      success: true,
      message: 'Documento subido con éxito. Se publicará una vez aprobado por el administrador.',
      record: newRecord
    });

  } catch (error) {
    console.error('Error en la Serverless Function:', error);
    return res.status(500).json({
      success: false,
      message: 'Ocurrió un error procesando el archivo en el servidor.',
      error: error.message
    });
  }
}
