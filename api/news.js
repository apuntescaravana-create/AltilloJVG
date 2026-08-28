/**
 * Serverless Function - Tablón de Noticias / Novedades de AltilloJVG
 * GET /api/news (Público - Listar noticias)
 * POST /api/news (Admin - Publicar noticia)
 * PUT /api/news (Admin - Editar noticia)
 * DELETE /api/news?id=... (Admin - Eliminar noticia)
 */

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'Supabase credentials not configured in Vercel.' });
  }

  // ==========================================
  // GET: Público (Listar noticias)
  // ==========================================
  if (req.method === 'GET') {
    try {
      const supabaseUrl = `${SUPABASE_URL}/rest/v1/news?order=fijado.desc,created_at.desc`;
      const response = await fetch(supabaseUrl, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        // Si la tabla no existe aún, retornar array vacío con noticia por defecto
        if (response.status === 404 || errorText.includes('does not exist') || errorText.includes('relation "public.news" does not exist')) {
          return res.status(200).json([
            {
              id: 1,
              titulo: '¡Bienvenidos al nuevo AltilloJVG!',
              contenido: 'Compañeras y compañeros: lanzamos la versión renovada del repositorio digital estudiantil. Acá van a encontrar apuntes, resúmenes, programas y exámenes clasificados por carrera y año, además de buscadores de aulas y mapas de correlatividades. ¡Construyamos este espacio entre todos!',
              categoria: 'Importante',
              autor: 'La Caravana + Estudiantes Independientes',
              fijado: true,
              created_at: new Date().toISOString()
            }
          ]);
        }
        throw new Error(`Supabase error: ${errorText}`);
      }

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      return res.status(200).json([
        {
          id: 1,
          titulo: '¡Bienvenidos al nuevo AltilloJVG!',
          contenido: 'Compañeras y compañeros: lanzamos la versión renovada del repositorio digital estudiantil. Acá van a encontrar apuntes, resúmenes, programas y exámenes clasificados por carrera y año, además de buscadores de aulas y mapas de correlatividades. ¡Construyamos este espacio entre todos!',
          categoria: 'Importante',
          autor: 'La Caravana + Estudiantes Independientes',
          fijado: true,
          created_at: new Date().toISOString()
        }
      ]);
    }
  }

  // Las operaciones POST, PUT y DELETE requieren autenticación de administrador
  const passwordHeader = req.headers['x-admin-password'];
  if (!passwordHeader || passwordHeader !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'No autorizado. Contraseña incorrecta.' });
  }

  // ==========================================
  // POST: Crear Noticia
  // ==========================================
  if (req.method === 'POST') {
    const { titulo, contenido, categoria, autor, fijado } = req.body || {};
    if (!titulo || !contenido) {
      return res.status(400).json({ error: 'Título y contenido son obligatorios.' });
    }

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/news`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          titulo: titulo.trim(),
          contenido: contenido.trim(),
          categoria: categoria || 'Aviso',
          autor: autor || 'La Caravana + Estudiantes Independientes',
          fijado: !!fijado
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();
      return res.status(201).json({ success: true, item: result[0] });
    } catch (err) {
      console.error('Error creating news:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  // ==========================================
  // PUT: Editar Noticia
  // ==========================================
  if (req.method === 'PUT') {
    const { id, titulo, contenido, categoria, autor, fijado } = req.body || {};
    if (!id || !titulo || !contenido) {
      return res.status(400).json({ error: 'ID, título y contenido son obligatorios.' });
    }

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/news?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          titulo: titulo.trim(),
          contenido: contenido.trim(),
          categoria: categoria || 'Aviso',
          autor: autor || 'La Caravana + Estudiantes Independientes',
          fijado: !!fijado
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      return res.status(200).json({ success: true, message: 'Noticia actualizada correctamente.' });
    } catch (err) {
      console.error('Error updating news:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  // ==========================================
  // DELETE: Eliminar Noticia
  // ==========================================
  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: 'Falta especificar el ID.' });
    }

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/news?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      return res.status(200).json({ success: true, message: 'Noticia eliminada correctamente.' });
    } catch (err) {
      console.error('Error deleting news:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Método no permitido.' });
}
