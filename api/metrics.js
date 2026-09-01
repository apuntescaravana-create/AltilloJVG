/**
 * Serverless Function - Telemetria y Metricas Globales Persistentes (AltilloJVG)
 * POST /api/metrics?action=visit          (Publico - Registrar visita diaria)
 * POST /api/metrics?action=tool&key=...   (Publico - Registrar uso de herramienta)
 * GET /api/metrics                        (Admin - Obtener metricas consolidadas)
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

  const VALID_TOOLS = ['aulas', 'apuntes', 'mapas', 'upload', 'computadoras', 'becas', 'tablon', 'feedback', 'tramites'];

  function getLocalMetrics() {
    try {
      if (fs.existsSync(localFilePath)) {
        const parsed = JSON.parse(fs.readFileSync(localFilePath, 'utf-8'));
        if (parsed && typeof parsed === 'object') {
          // Limpiar si existia 'promedio' de versiones previas
          if (parsed.tools && 'promedio' in parsed.tools) {
            delete parsed.tools.promedio;
          }
          if (parsed.tools_by_date) {
            Object.keys(parsed.tools_by_date).forEach(d => {
              if (parsed.tools_by_date[d] && 'promedio' in parsed.tools_by_date[d]) {
                delete parsed.tools_by_date[d].promedio;
              }
            });
          }
          if (!parsed.visits) parsed.visits = {};
          if (!parsed.tools) parsed.tools = {};
          if (!parsed.tools_by_date) parsed.tools_by_date = {};
          return parsed;
        }
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
        upload: 0,
        computadoras: 0,
        becas: 0,
        tablon: 0,
        feedback: 0,
        tramites: 0
      },
      tools_by_date: {}
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
  // GET: Obtener Metricas Consolidadas (Admin)
  // ============================================================================
  if (req.method === 'GET') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || adminPass !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contrasena incorrecta.' });
    }

    // Leer archivo local (que se actualiza con cada request)
    const localData = getLocalMetrics();

    // Intentar complementar o enriquecer con Supabase si esta configurado
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
            rows.forEach(r => {
              const count = Number(r.count || 0);
              if (r.metric_type === 'visit') {
                localData.visits[r.metric_key] = Math.max(localData.visits[r.metric_key] || 0, count);
              } else if (r.metric_type === 'tool' && VALID_TOOLS.includes(r.metric_key)) {
                localData.tools[r.metric_key] = Math.max(localData.tools[r.metric_key] || 0, count);
              } else if (r.metric_type === 'tool_daily') {
                const parts = String(r.metric_key).split(':');
                if (parts.length === 2) {
                  const [date, tool] = parts;
                  if (VALID_TOOLS.includes(tool)) {
                    if (!localData.tools_by_date[date]) localData.tools_by_date[date] = {};
                    localData.tools_by_date[date][tool] = Math.max(localData.tools_by_date[date][tool] || 0, count);
                  }
                }
              }
            });
          }
        }
      }
    } catch (e) {
      console.warn('Supabase site_metrics query fallback to local:', e.message);
    }

    return res.status(200).json(localData);
  }

  // ============================================================================
  // POST: Registrar Telemetria (Publico, ligero y asincrono)
  // ============================================================================
  if (req.method === 'POST') {
    const action = req.query.action || req.body?.action || 'visit';
    const toolKey = req.query.key || req.body?.key;
    const todayStr = new Date().toISOString().split('T')[0];

    const localData = getLocalMetrics();

    if (action === 'visit') {
      localData.visits[todayStr] = (localData.visits[todayStr] || 0) + 1;
      saveLocalMetrics(localData);

      // Sincronizar con Supabase en background
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
      let sanitizedKey = String(toolKey).toLowerCase().replace(/[^a-z0-9_]/g, '').substring(0, 30);
      // Reasignar finales o promedio a tramites o descartar
      if (sanitizedKey === 'promedio' || sanitizedKey === 'finales') sanitizedKey = 'tramites';
      if (!VALID_TOOLS.includes(sanitizedKey)) {
        return res.status(400).json({ error: 'Herramienta no valida.' });
      }

      // 1. Total historico
      localData.tools[sanitizedKey] = (localData.tools[sanitizedKey] || 0) + 1;

      // 2. Total por fecha diaria
      if (!localData.tools_by_date[todayStr]) localData.tools_by_date[todayStr] = {};
      localData.tools_by_date[todayStr][sanitizedKey] = (localData.tools_by_date[todayStr][sanitizedKey] || 0) + 1;

      saveLocalMetrics(localData);

      // Sincronizar en segundo plano con Supabase
      if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
        try {
          // Total de la herramienta
          fetch(SUPABASE_URL + '/rest/v1/rpc/increment_metric', {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY,
              'Authorization': 'Bearer ' + SUPABASE_SERVICE_ROLE_KEY,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ m_type: 'tool', m_key: sanitizedKey })
          }).catch(() => {});

          // Total diario de la herramienta
          fetch(SUPABASE_URL + '/rest/v1/rpc/increment_metric', {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY,
              'Authorization': 'Bearer ' + SUPABASE_SERVICE_ROLE_KEY,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ m_type: 'tool_daily', m_key: todayStr + ':' + sanitizedKey })
          }).catch(() => {});
        } catch (e) {}
      }

      return res.status(200).json({ success: true, type: 'tool', key: sanitizedKey });
    }

    return res.status(400).json({ error: 'Accion no valida.' });
  }

  return res.status(405).json({ error: 'Metodo no permitido.' });
}
