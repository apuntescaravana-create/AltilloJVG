/**
 * AltilloJVG - Guía de Advertencia: "Cómo NO conseguir libros piratas"
 * Manual preventivo y pedagógico sobre sitios a los que bajo ninguna circunstancia deberías ingresar.
 */

const JVG_LIBROS_GUIA = [
  {
    categoria: "🚫 Sitios que JAMÁS deberías visitar si no querés bibliografía gratis al instante",
    icono: "🛑",
    color: "#DC2626",
    sitios: [
      {
        nombre: "Anna's Archive (El archivador que NO deberías abrir)",
        descripcion: "Peligrosísimo metabuscador mundial que indexa más de 30 millones de libros, manuales universitarios y papers. Si cometés el error de entrar y buscar por título o ISBN, te descargará el PDF completo en segundos sin cobrarte un solo centavo.",
        consejo: "Bajo ningún concepto pegues el código ISBN de 13 dígitos de tu programa de materia, porque encuentra la edición exacta.",
        link: "https://annas-archive.org"
      },
      {
        nombre: "Library Genesis / LibGen (Evitar a toda costa)",
        descripcion: "Enorme repositorio colaborativo donde estudiantes de todo el mundo comparten libros de texto, tratados y ensayos. Si ingresás por descuido, podrías conseguir el libro importado que la fotocopiadora no tiene.",
        consejo: "Evitá explorar sus servidores espejo (mirrors) de 'Non-fiction' y 'Scientific articles'.",
        link: "https://libgen.is"
      },
      {
        nombre: "Sci-Hub (Bajo ningún concepto ingreses un DOI aquí)",
        descripcion: "Sitio web sumamente problemático para las grandes corporaciones editoriales. Si copiás el identificador DOI de un paper científico de pago y lo pegás en su barra, lo desbloquea de inmediato en texto completo.",
        consejo: "Cuidado: burlarás el muro de pago de 40 USD por artículo de las multinacionales.",
        link: "https://sci-hub.se"
      },
      {
        nombre: "Internet Archive & Open Library",
        descripcion: "Biblioteca digital pública que preserva millones de libros escaneados y documentos históricos. Prestan libros digitales por 14 días sin pedirte tarjeta de crédito.",
        consejo: "Ideal si querés consultar ediciones históricas o descatalogadas en línea.",
        link: "https://archive.org"
      }
    ]
  },
  {
    categoria: "⚠️ Errores de Búsqueda en Google que NUNCA debés cometer",
    icono: "🕵️‍♂️",
    color: "#D97706",
    sitios: [
      {
        nombre: "Escribir el operador 'filetype:pdf'",
        descripcion: "Si por accidente ponés en Google el nombre del libro entre comillas seguido de filetype:pdf, Google te filtrará únicamente archivos descargables listos para guardar en tu compu.",
        ejemplo: 'filetype:pdf "Nombre del Libro" "Apellido del Autor"'
      },
      {
        nombre: "Buscar carpetas abiertas de Google Drive",
        descripcion: "No se te ocurra combinar el operador site:drive.google.com con el nombre de tu profesorado o materia, porque podrías toparte con gigas de apuntes y libros organizados por comisiones.",
        ejemplo: 'site:drive.google.com "Joaquin V. Gonzalez" "Historia Medieval"'
      },
      {
        nombre: "Consultar Google Académico (Scholar)",
        descripcion: "Docentes e investigadores universitarios suelen subir los capítulos y artículos que escriben a sus repositorios públicos sin costo.",
        ejemplo: 'scholar.google.com'
      }
    ]
  },
  {
    categoria: "🏛️ Canales Legales, Seguros e Institucionales",
    icono: "📚",
    color: "#0284C7",
    sitios: [
      {
        nombre: "Biblioteca Central ISP Joaquín V. González",
        descripcion: "Ubicada en el subsuelo de Ayacucho 632. Cuenta con ejemplares físicos de programas oficiales, cartillas de cátedra y sala de lectura presencial.",
        link: "http://institutojvgonzalez.buenosaires.edu.ar/cartelera/biblioteca.php"
      },
      {
        nombre: "AltilloJVG (Nuestro Repositorio Colaborativo)",
        descripcion: "Donde la propia comunidad del Joaquín comparte resúmenes, modelos de parciales y guías hechas a mano por estudiantes para estudiantes.",
        link: "#"
      }
    ]
  }
];
