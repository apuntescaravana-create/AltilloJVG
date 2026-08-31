/**
 * Serverless Function - Telemetría y Métricas Globales Persistentes (AltilloJVG)
 * POST /api/metrics?action=visit          (Público - Registrar visita diaria)
 * POST /api/metrics?action=tool&key=...   (Público - Registrar uso de herramienta)
 * GET /api/metrics                        (Admin - Obtener métricas consolidadas)
 */
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const SUPABASE_URL = process.env.SUPABASE_URL || 'https://nfpmrjvdjzzyzjskmiqt.supabase.co';
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  const localFilePath = path.join(process.cwd(), 'data', 'metrics.json');

  function getLocalMetrics() {
    try {
      if (fs.existsSync(localFilePath)) {
        return JSON.parse(fs.readFileSync(localFilePath, 'utf-8'));
      }
    } catch (e) {
      console.error('Error reading local metrics:', e);
    }
    return {
      visits: {},
      tools: {
        aulas: 0,
        apuntes: 0,
        mapas: 0,
        promedio: 0,
        computadoras: 0,
        becas: 0,
        tablon: 0,
        feedback: 0
      }
    };
  }

  function saveLocalMetrics(data) {
    try {
      const dir = path.dirname(localFilePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(localFilePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e) {
      console.error('Error saving local metrics:', e);
    }
  }

  // ============================================================================
  // GET: Obtener Métricas Consolidadas (Admin)
  // ============================================================================
  if (req.method === 'GET') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || adminPass !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    // Intentar leer de Supabase
    try {
      if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
        const resp = await fetch(SUPABASE_URL + '/rest/v1/site_metrics?select=*', {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': 'Bearer ' + SUPABASE_SERVICE_ROLE_KEY
          }
        });

        if (resp.ok) {
          const rows = await resp.json();
          if (Array.isArray(rows) && rows.length > 0) {
            const visits = {};
            const tools = { aulas: 0, apuntes: 0, mapas: 0, promedio: 0, computadoras: 0, becas: 0, tablon: 0, feedback: 0 };
            
            rows.forEach(r => {
              if (r.metric_type === 'visit') {
                visits[r.metric_key] = (visits[r.metric_key] || 0) + Number(r.count || 0);
              } else if (r.metric_type === 'tool') {
                tools[r.metric_key] = (tools[r.metric_key] || 0) + Number(r.count || 0);
              }
            });

            return res.status(200).json({ visits, tools });
          }
        }
      }
    } catch (e) {
      console.warn('Supabase site_metrics query fallback to local:', e.message);
    }

    const localData = getLocalMetrics();
    return res.status(200).json(localData);
  }

  // ============================================================================
  // POST: Registrar Telemetría (Público, ligero y asíncrono)
  // ============================================================================
  if (req.method === 'POST') {
    const action = req.query.action || req.body?.action || 'visit';
    const toolKey = req.query.key || req.body?.key;
    const todayStr = new Date().toISOString().split('T')[0];

    const localData = getLocalMetrics();
    if (!localData.visits) localData.visits = {};
    if (!localData.tools) localData.tools = {};

    if (action === 'visit') {
      localData.visits[todayStr] = (localData.visits[todayStr] || 0) + 1;
      saveLocalMetrics(localData);

      // Sincronizar en segundo plano con Supabase si está disponible
      if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
        try {
          await fetch(SUPABASE_URL + '/rest/v1/rpc/increment_metric', {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY,
              'Authorization': 'Bearer ' + SUPABASE_SERVICE_ROLE_KEY,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ m_type: 'visit', m_key: todayStr })
          });
        } catch (e) {}
      }

      return res.status(200).json({ success: true, type: 'visit', date: todayStr });
    }

    if (action === 'tool' && toolKey) {
      const sanitizedKey = String(toolKey).toLowerCase().replace(/[^a-z0-9_]/g, '').substring(0, 30);
      localData.tools[sanitizedKey] = (localData.tools[sanitizedKey] || 0) + 1;
      saveLocalMetrics(localData);

      // Sincronizar en segundo plano con Supabase
      if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
        try {
          await fetch(SUPABASE_URL + '/rest/v1/rpc/increment_metric', {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY,
              'Authorization': 'Bearer ' + SUPABASE_SERVICE_ROLE_KEY,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ m_type: 'tool', m_key: sanitizedKey })
          });
        } catch (e) {}
      }

      return res.status(200).json({ success: true, type: 'tool', key: sanitizedKey });
    }

    return res.status(400).json({ error: 'Acción no válida.' });
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
