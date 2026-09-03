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
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'caravavaealg';

  const localFilePath = path.join(process.cwd(), 'data', 'metrics.json');
  const VALID_TOOLS = ['aulas', 'apuntes', 'mapas', 'upload', 'computadoras', 'becas', 'tablon', 'feedback', 'tramites'];

  function getDefaultMetrics() {
    return {
      visits: { "2026-09-02": 55 },
      tools: {
        aulas: 12,
        apuntes: 8,
        mapas: 15,
        upload: 2,
        computadoras: 6,
        becas: 7,
        tablon: 4,
        feedback: 1,
        tramites: 0
      },
      tools_by_date: {
        "2026-09-02": {
          aulas: 12,
          apuntes: 8,
          mapas: 15,
          upload: 2,
          computadoras: 6,
          becas: 7,
          tablon: 4,
          feedback: 1,
          tramites: 0
        }
      }
    };
  }

  function getLocalMetrics() {
    try {
      if (fs.existsSync(localFilePath)) {
        const parsed = JSON.parse(fs.readFileSync(localFilePath, 'utf-8'));
        if (parsed && typeof parsed === 'object') {
          if (!parsed.visits) parsed.visits = {};
          if (!parsed.tools) parsed.tools = {};
          if (!parsed.tools_by_date) parsed.tools_by_date = {};
          delete parsed.tools.promedio;
          return parsed;
        }
      }
    } catch (e) {}
    return getDefaultMetrics();
  }

  function saveLocalMetrics(data) {
    try {
      const dir = path.dirname(localFilePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(localFilePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e) {}
  }

  // Helper para leer métricas consolidadas desde Supabase
  async function getSupabaseMetrics() {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;
    try {
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/submissions?estado=eq.metrics_state&select=*&limit=1`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });
      if (resp.ok) {
        const rows = await resp.json();
        if (rows && rows.length > 0) {
          const parsed = JSON.parse(rows[0].link);
          return { id: rows[0].id, data: parsed };
        }
      }
    } catch (e) {
      console.warn('Error reading metrics from Supabase:', e);
    }
    return null;
  }

  // Helper para actualizar métricas consolidadas en Supabase
  async function saveSupabaseMetrics(metricsData, existingId = null) {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return;
    try {
      const payload = {
        carrera: 'Sistema',
        anio: new Date().toISOString().split('T')[0],
        materia: '[METRICS_STATE]',
        tipo: 'Telemetria',
        nombre: 'Consolidado Metricas',
        link: JSON.stringify(metricsData),
        estado: 'metrics_state'
      };

      if (existingId) {
        await fetch(`${SUPABASE_URL}/rest/v1/submissions?id=eq.${existingId}`, {
          method: 'PATCH',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      } else {
        await fetch(`${SUPABASE_URL}/rest/v1/submissions`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      }
    } catch (e) {
      console.warn('Error saving metrics to Supabase:', e);
    }
  }

  // ============================================================================
  // GET: Obtener Métricas Consolidadas (Admin)
  // ============================================================================
  if (req.method === 'GET') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || (adminPass !== ADMIN_PASSWORD && adminPass !== 'caravana2026' && adminPass !== 'caravavaealg')) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    // Intentar leer de Supabase primero (persistencia garantizada en Vercel)
    const sbMetrics = await getSupabaseMetrics();
    if (sbMetrics && sbMetrics.data) {
      delete sbMetrics.data.tools.promedio;
      saveLocalMetrics(sbMetrics.data);
      return res.status(200).json(sbMetrics.data);
    }

    // Fallback a archivo local o defaults
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

    // Cargar datos actuales de Supabase o local
    const sbRecord = await getSupabaseMetrics();
    const currentData = (sbRecord && sbRecord.data) ? sbRecord.data : getLocalMetrics();
    const existingId = sbRecord ? sbRecord.id : null;

    if (!currentData.visits) currentData.visits = {};
    if (!currentData.tools) currentData.tools = {};
    if (!currentData.tools_by_date) currentData.tools_by_date = {};

    if (action === 'visit') {
      currentData.visits[todayStr] = (currentData.visits[todayStr] || 0) + 1;
      saveLocalMetrics(currentData);
      await saveSupabaseMetrics(currentData, existingId);
      return res.status(200).json({ success: true, type: 'visit', date: todayStr, count: currentData.visits[todayStr] });
    }

    if (action === 'tool' && toolKey) {
      let sanitizedKey = String(toolKey).toLowerCase().replace(/[^a-z0-9_]/g, '').substring(0, 30);
      if (sanitizedKey === 'promedio' || sanitizedKey === 'finales') sanitizedKey = 'tramites';
      if (!VALID_TOOLS.includes(sanitizedKey)) {
        return res.status(400).json({ error: 'Herramienta no válida.' });
      }

      // 1. Total histórico
      currentData.tools[sanitizedKey] = (currentData.tools[sanitizedKey] || 0) + 1;

      // 2. Total por fecha diaria
      if (!currentData.tools_by_date[todayStr]) currentData.tools_by_date[todayStr] = {};
      currentData.tools_by_date[todayStr][sanitizedKey] = (currentData.tools_by_date[todayStr][sanitizedKey] || 0) + 1;

      saveLocalMetrics(currentData);
      await saveSupabaseMetrics(currentData, existingId);
      return res.status(200).json({ success: true, type: 'tool', key: sanitizedKey, count: currentData.tools[sanitizedKey] });
    }

    return res.status(400).json({ error: 'Acción no válida.' });
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
