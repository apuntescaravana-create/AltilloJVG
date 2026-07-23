/**
 * AltilloJVG - Guía "Cómo NO conseguir libros piratas"
 * Recursos, repositorios académicos digitales y técnicas de búsqueda para estudiantes.
 */

const JVG_LIBROS_GUIA = [
  {
    categoria: "🌐 Metabuscadores y Repositorios Abiertos",
    icono: "🔍",
    color: "#009BE3",
    sitios: [
      {
        nombre: "Anna's Archive",
        descripcion: "El buscador abierto más completo del mundo para libros académicos, papers y manuales de estudio.",
        consejo: "Buscá escribiendo el ISBN de 13 dígitos para encontrar exactamente la edición que te piden en la cátedra.",
        link: "https://annas-archive.org"
      },
      {
        nombre: "Library Genesis (LibGen)",
        descripcion: "Biblioteca digital colectiva enfocada en libros de texto universitarios, literatura científica y ensayos.",
        consejo: "Probá las distintas solapas de descarga (Fiction, Non-fiction, Scientific Articles).",
        link: "https://libgen.is"
      },
      {
        nombre: "Internet Archive & Open Library",
        descripcion: "Biblioteca digital sin fines de lucro con millones de libros digitalizados, revistas históricas y audiolibros.",
        consejo: "Permite la lectura en línea y préstamos digitales por 14 días.",
        link: "https://archive.org"
      },
      {
        nombre: "Sci-Hub",
        descripcion: "Base de datos abierta para el acceso libre a artículos de investigación científica y publicaciones académicas.",
        consejo: "Pegá la URL o el DOI del paper que necesitas desbloquear.",
        link: "https://sci-hub.se"
      }
    ]
  },
  {
    categoria: "💡 Trucos de Búsqueda Avanzada en Google",
    icono: "⚡",
    color: "#C65100",
    sitios: [
      {
        nombre: "Operador filetype:pdf",
        descripcion: "Forma más rápida de filtrar sólo archivos PDF reales directamente desde Google.",
        ejemplo: 'Escribí en Google: filetype:pdf "Nombre del Libro Autor"'
      },
      {
        nombre: "Búsqueda de Carpetas de Google Drive",
        descripcion: "Encontrá carpetas compartidas de estudiantes con resúmenes y libros escaneados.",
        ejemplo: 'Escribí en Google: site:drive.google.com "Joaquin V. Gonzalez" "Materia"'
      },
      {
        nombre: "Google Académico (Scholar)",
        descripcion: "Artículos, tesis de grado y capítulos de libros liberados directamente por docentes de universidades públicas.",
        ejemplo: 'Accedé a scholar.google.com y filtrá por año de publicación.'
      }
    ]
  },
  {
    categoria: "🏛️ Fuentes Institucionales y Presenciales",
    icono: "📚",
    color: "#0B2545",
    sitios: [
      {
        nombre: "Biblioteca del ISP Joaquín V. González",
        descripcion: "Ubicada en el subsuelo de la sede central (frente a Bedelía). Cuenta con los programas, cartillas y libros de consulta presencial.",
        link: "http://institutojvgonzalez.buenosaires.edu.ar/cartelera/biblioteca.php"
      },
      {
        nombre: "Repositorio Digital AltilloJVG",
        descripcion: "Nuestra biblioteca colaborativa donde los propios estudiantes del JVG suben resúmenes, programas y libros escaneados de cada materia.",
        link: "#"
      }
    ]
  }
];
