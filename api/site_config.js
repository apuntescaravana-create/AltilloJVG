/**
 * Serverless Endpoint - Gestión Dinámica de Configuración del Sitio (AltilloJVG)
 * GET /api/site_config  -> Público: Devuelve currículo activo, planes y visibilidad de herramientas
 * POST /api/site_config -> Admin: Guarda modificaciones en materias, planes y herramientas
 */

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const SUPABASE_URL = process.env.SUPABASE_URL || 'https://nfpmrjvdjzzyzjskmiqt.supabase.co';
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  const localConfigPath = path.join(process.cwd(), 'data', 'site_config.json');
  const localCurriculumJsPath = path.join(process.cwd(), 'data', 'curriculum_data.js');

  function getLocalConfig() {
    try {
      if (fs.existsSync(localConfigPath)) {
        const parsed = JSON.parse(fs.readFileSync(localConfigPath, 'utf-8'));
        if (parsed && typeof parsed === 'object') {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error al leer site_config local:', e);
    }
    return { curriculum: {}, tools_config: {} };
  }

  function saveLocalConfig(configData) {
    try {
      const dir = path.dirname(localConfigPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(localConfigPath, JSON.stringify(configData, null, 2), 'utf-8');

      if (configData.curriculum) {
        const jsCode = '/**\n * AltilloJVG - Currículo Oficial y Estructura de Planes de Estudio\n * Sincronizado dinámicamente desde el Panel de Administración\n */\n\nconst CURRICULUM_DATA = ' + JSON.stringify(configData.curriculum, null, 2) + ';\n\nif (typeof window !== "undefined") {\n  window.CURRICULUM_DATA = CURRICULUM_DATA;\n}\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = CURRICULUM_DATA;\n}\n';
        fs.writeFileSync(localCurriculumJsPath, jsCode, 'utf-8');
      }
    } catch (e) {
      console.error('Error al guardar site_config local:', e);
    }
  }

  if (req.method === 'GET') {
    try {
      if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
        const resp = await fetch(SUPABASE_URL + '/rest/v1/site_config?key=eq.active_config&select=*', {
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': 'Bearer ' + SUPABASE_SERVICE_ROLE_KEY
          }
        });
        if (resp.ok) {
          const rows = await resp.json();
          if (Array.isArray(rows) && rows.length > 0 && rows[0].value) {
            return res.status(200).json(rows[0].value);
          }
        }
      }
    } catch (e) {
      console.warn('Supabase site_config query fallback to local:', e.message);
    }

    const localData = getLocalConfig();
    return res.status(200).json(localData);
  }

  if (req.method === 'POST') {
    const adminPass = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !adminPass || adminPass !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    const body = req.body || {};
    if (!body.curriculum && !body.tools_config) {
      return res.status(400).json({ error: 'Datos de configuración no válidos.' });
    }

    const currentConfig = getLocalConfig();
    const updatedConfig = {
      curriculum: body.curriculum || currentConfig.curriculum || {},
      tools_config: body.tools_config || currentConfig.tools_config || {},
      updated_at: new Date().toISOString()
    };

    saveLocalConfig(updatedConfig);

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      try {
        await fetch(SUPABASE_URL + '/rest/v1/site_config', {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': 'Bearer ' + SUPABASE_SERVICE_ROLE_KEY,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates'
          },
          body: JSON.stringify({
            key: 'active_config',
            value: updatedConfig,
            updated_at: updatedConfig.updated_at
          })
        });
      } catch (e) {
        console.warn('Error guardando en Supabase site_config:', e.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Configuración del sitio guardada y publicada exitosamente.',
      updated_at: updatedConfig.updated_at
    });
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
