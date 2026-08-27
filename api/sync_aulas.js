/**
 * Serverless Function - Trigger GitHub Actions Workflow to sync classrooms
 * POST /api/sync_aulas
 */

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const GITHUB_PAT = process.env.GITHUB_PAT;

  if (!ADMIN_PASSWORD) {
    return res.status(500).json({ error: 'La clave de administrador no está configurada.' });
  }

  // Validar contraseña
  const passwordHeader = req.headers['x-admin-password'];
  if (passwordHeader !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'No autorizado. Contraseña incorrecta.' });
  }

  if (!GITHUB_PAT) {
    return res.status(500).json({ 
      error: 'Falta configurar la variable GITHUB_PAT en Vercel. Por favor, generá un Personal Access Token en GitHub con alcance "repo" y cargalo.' 
    });
  }

  try {
    const owner = 'apuntescaravana-create';
    const repo = 'AltilloJVG';
    const githubUrl = `https://api.github.com/repos/${owner}/${repo}/dispatches`;

    const response = await fetch(githubUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${GITHUB_PAT}`,
        'User-Agent': 'AltilloJVG-Sync-App',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event_type: 'sync_aulas'
      })
    });

    // GitHub responde 204 No Content cuando el dispatch es exitoso
    if (response.status === 204) {
      return res.status(200).json({ 
        success: true, 
        message: '¡Sincronización iniciada! El bot de GitHub está descargando y procesando los PDFs oficiales en este momento. La base de datos de aulas se actualizará en unos 2 minutos.' 
      });
    } else {
      const errText = await response.text();
      throw new Error(`GitHub API respondió con estado ${response.status}: ${errText}`);
    }
  } catch (error) {
    console.error('Error triggering GitHub Action:', error);
    return res.status(500).json({ error: error.message });
  }
}
