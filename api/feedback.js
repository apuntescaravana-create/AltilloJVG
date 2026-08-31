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
        return res.status(200).json(data);
      }
    } catch (e) {
      console.warn('Supabase feedback query error, fallback to local:', e.message);
    }

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

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(newFeedback)
      });
    } catch (e) {
      console.warn('Supabase insert feedback error:', e.message);
    }

    // Respaldo en archivo local
    const localList = getLocalFeedback();
    localList.unshift({
      id: Date.now(),
      ...newFeedback
    });
    saveLocalFeedback(localList);

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

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/feedback?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });
    } catch (e) {
      console.warn('Supabase delete feedback error:', e.message);
    }

    let localList = getLocalFeedback();
    localList = localList.filter(item => String(item.id) !== String(id));
    saveLocalFeedback(localList);

    return res.status(200).json({ success: true, message: 'Mensaje eliminado correctamente.' });
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
