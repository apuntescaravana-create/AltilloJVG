/**
 * Serverless Function - Fetch materials from Supabase
 * GET /api/materials?carrera=...&anio=...&materia=...
 * [Vercel Env Reload V3]
 */

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { carrera, anio, materia } = req.query;

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return res.status(500).json({ error: 'Supabase credentials not configured in Vercel.' });
    }

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
