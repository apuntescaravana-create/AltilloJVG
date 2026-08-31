/**
 * Serverless Function - Fetch, Edit, or Delete materials from Supabase
 * GET /api/materials?carrera=...&anio=...&materia=...
 * PUT /api/materials (Admin Only - Edit record)
 * DELETE /api/materials?id=... (Admin Only - Delete record)
 * [Vercel Env Reload V4]
 */

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY || !ADMIN_PASSWORD) {
    return res.status(500).json({ error: 'Falta configurar variables de entorno en el servidor.' });
  }

  // Si envían la cabecera de contraseña (ej. desde el panel admin), validar que sea correcta
  const passwordHeader = req.headers['x-admin-password'];
  if (passwordHeader && passwordHeader !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'No autorizado. Contraseña incorrecta.' });
  }

  // ==========================================
  // METODO GET: Publico / Admin
  // ==========================================
  if (req.method === 'GET') {
    try {
      const { carrera, anio, materia } = req.query;

      const queryParams = new URLSearchParams();
      if (carrera) queryParams.append('carrera', `eq.${carrera}`);
      if (anio) queryParams.append('anio', `eq.${anio}`);
      if (materia) queryParams.append('materia', `eq.${materia.toUpperCase()}`);
      queryParams.append('order', 'created_at.desc');

      const supabaseRestUrl = `${SUPABASE_URL}/rest/v1/materials?${queryParams.toString()}`;

      const response = await fetch(supabaseRestUrl, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Supabase REST error: ${errorText}`);
      }

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching materials:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  // ==========================================
  // METODO DELETE: Administrador (Borrar registro)
  // ==========================================
  if (req.method === 'DELETE') {
    const passwordHeader = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !passwordHeader || passwordHeader !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'No autorizado. Contraseña incorrecta.' });
    }

    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: 'Falta especificar el ID a eliminar.' });
    }

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/materials?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Supabase DELETE error: ${errorText}`);
      }

      return res.status(200).json({ success: true, message: 'Registro eliminado correctamente.' });
    } catch (error) {
      console.error('Error deleting material:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  // ==========================================
  // METODO PUT: Administrador (Editar registro)
  // ==========================================
  if (req.method === 'PUT') {
    const passwordHeader = req.headers['x-admin-password'];
    if (!ADMIN_PASSWORD || !passwordHeader || passwordHeader !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'No autorizado. Contraseña incorrecta.' });
    }

    const { id, anio, tipo, materia, nombre, link } = req.body || {};
    if (!id || !materia || !nombre || !link) {
      return res.status(400).json({ error: 'Faltan parámetros requeridos para la actualización.' });
    }

    try {
      // Nota: En PostgREST/Supabase, la actualización se realiza con PATCH
      const response = await fetch(`${SUPABASE_URL}/rest/v1/materials?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          anio,
          tipo,
          materia: materia.toUpperCase(),
          nombre,
          link
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Supabase PATCH error: ${errorText}`);
      }

      return res.status(200).json({ success: true, message: 'Registro actualizado correctamente.' });
    } catch (error) {
      console.error('Error updating material:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
