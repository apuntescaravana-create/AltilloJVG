/**
 * Serverless Function - Suscripciones a Notificaciones de Novedades (AltilloJVG)
 * POST /api/subscribers?action=subscribe   (Público - Suscribirse)
 * POST /api/subscribers?action=unsubscribe (Público - Darse de baja)
 * GET /api/subscribers                     (Admin - Listar suscriptores)
 * PUT /api/subscribers                     (Admin - Editar email de suscriptor)
 * DELETE /api/subscribers?id=...           (Admin - Eliminar suscriptor)
 */
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const SUPABASE_URL = process.env.SUPABASE_URL || "https://nfpmrjvdjzzyzjskmiqt.supabase.co";
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  const localFilePath = path.join(process.cwd(), 'data', 'subscribers.json');

  function getLocalSubscribers() {
    try {
      if (fs.existsSync(localFilePath)) {
        return JSON.parse(fs.readFileSync(localFilePath, 'utf-8'));
      }
    } catch (e) {
      console.error('Error reading local subscribers:', e);
    }
    return [];
  }

  function saveLocalSubscribers(list) {
    try {
      const dir = path.dirname(localFilePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(localFilePath, JSON.stringify(list, null, 2), 'utf-8');
    } catch (e) {
      console.error('Error saving local subscribers:', e);
    }
  }

  // ============================================================================
  // GET: Listar Suscriptores (Admin)
  // ============================================================================
  if (req.method === 'GET') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || adminPass !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    try {
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?order=created_at.desc`, {
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
      console.warn('Supabase subscribers query failed, falling back to local file:', e.message);
    }

    const localList = getLocalSubscribers();
    return res.status(200).json(localList);
  }

  // ============================================================================
  // POST: Suscribirse o Darse de Baja (Público)
  // ============================================================================
  if (req.method === 'POST') {
    const action = req.query.action || req.body.action || 'subscribe';
    const emailRaw = req.body.email || '';
    const email = emailRaw.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Por favor, ingresá un correo electrónico válido.' });
    }

    // --- ACCIÓN: DARSE DE BAJA (UNSUBSCRIBE) ---
    if (action === 'unsubscribe') {
      let deletedFromSupabase = false;
      let foundInSupabase = false;

      try {
        // Verificar si existe en Supabase
        const checkResp = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?email=eq.${encodeURIComponent(email)}`, {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
          }
        });

        if (checkResp.ok) {
          const list = await checkResp.json();
          if (list && list.length > 0) {
            foundInSupabase = true;
            // Eliminar de Supabase
            const delResp = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?email=eq.${encodeURIComponent(email)}`, {
              method: 'DELETE',
              headers: {
                'apikey': SUPABASE_SERVICE_ROLE_KEY,
                'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
              }
            });
            if (delResp.ok) deletedFromSupabase = true;
          }
        }
      } catch (e) {
        console.warn('Supabase unsubscribe error:', e.message);
      }

      // También verificar y actualizar en archivo local
      const localList = getLocalSubscribers();
      const existingIdx = localList.findIndex(s => s.email.toLowerCase() === email);
      let deletedFromLocal = false;

      if (existingIdx !== -1) {
        localList.splice(existingIdx, 1);
        saveLocalSubscribers(localList);
        deletedFromLocal = true;
      }

      if (deletedFromSupabase || deletedFromLocal) {
        return res.status(200).json({
          success: true,
          message: 'Eliminado exitosamente de las notificaciones por mail de los anuncios.'
        });
      } else {
        return res.status(200).json({
          success: false,
          not_found: true,
          message: 'No se encuentra ningún mail suscrito a las notificaciones por mail.'
        });
      }
    }

    // --- ACCIÓN: SUSCRIBIRSE (SUBSCRIBE) ---
    let alreadySubscribed = false;

    try {
      const checkResp = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?email=eq.${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });

      if (checkResp.ok) {
        const list = await checkResp.json();
        if (list && list.length > 0) {
          alreadySubscribed = true;
        } else {
          // Insertar en Supabase
          const insertResp = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY,
              'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({ email })
          });
        }
      }
    } catch (e) {
      console.warn('Supabase subscribe insert error:', e.message);
    }

    // Respaldo en archivo local
    const localList = getLocalSubscribers();
    const localExists = localList.some(s => s.email.toLowerCase() === email);

    if (alreadySubscribed || localExists) {
      return res.status(200).json({
        success: true,
        already_subscribed: true,
        message: 'Este correo ya se encuentra suscrito a las notificaciones por mail.'
      });
    }

    localList.push({
      id: Date.now(),
      email,
      created_at: new Date().toISOString()
    });
    saveLocalSubscribers(localList);

    return res.status(200).json({
      success: true,
      message: '¡Te suscribiste exitosamente a las notificaciones por mail de los anuncios!'
    });
  }

  // ============================================================================
  // PUT: Editar Suscriptor (Admin)
  // ============================================================================
  if (req.method === 'PUT') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || adminPass !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    const { id, email } = req.body;
    if (!id || !email) {
      return res.status(400).json({ error: 'ID y nuevo email son requeridos.' });
    }

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/subscribers?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email.trim().toLowerCase() })
      });
    } catch (e) {
      console.warn('Supabase PUT subscriber error:', e.message);
    }

    const localList = getLocalSubscribers();
    const item = localList.find(s => String(s.id) === String(id));
    if (item) item.email = email.trim().toLowerCase();
    saveLocalSubscribers(localList);

    return res.status(200).json({ success: true, message: 'Email de suscriptor actualizado.' });
  }

  // ============================================================================
  // DELETE: Eliminar Suscriptor (Admin)
  // ============================================================================
  if (req.method === 'DELETE') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || adminPass !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    const id = req.query.id || req.body.id;
    if (!id) {
      return res.status(400).json({ error: 'ID es requerido para eliminar.' });
    }

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/subscribers?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });
    } catch (e) {
      console.warn('Supabase DELETE subscriber error:', e.message);
    }

    let localList = getLocalSubscribers();
    localList = localList.filter(s => String(s.id) !== String(id));
    saveLocalSubscribers(localList);

    return res.status(200).json({ success: true, message: 'Suscriptor eliminado.' });
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
