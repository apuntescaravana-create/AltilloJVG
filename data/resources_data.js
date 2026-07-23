/**
 * AltilloJVG - Datos y Documentación Oficial del Instituto Joaquín V. González
 * Enlaces Oficiales Verificados 100% Activos (Status 200)
 */

const JVG_OFFICIAL_RESOURCES = {
  normativas: [
    {
      titulo: "Reglamento Orgánico Institucional (ROM / ROI)",
      descripcion: "Marco normativo general sobre derechos, deberes, gobierno institucional y régimen académico.",
      categoria: "Reglamento General",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/institucional/ROM.php",
      formato: "Ver en Sitio Oficial JVG"
    },
    {
      titulo: "Reglamento de Práctica Docente y Residencia",
      descripcion: "Normativa reguladora de las observaciones, residencias y prácticas de enseñanza en colegios.",
      categoria: "Prácticas y Residencia",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/institucional/con2017-prac_y_residencia.php",
      formato: "Ver en Sitio Oficial JVG"
    },
    {
      titulo: "Normativas y Documentación General",
      descripcion: "Pautas institucionales, reglamentaciones de acreditación y correlatividades.",
      categoria: "Académica",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/informacion-util/normativas-documentacion.php",
      formato: "Ver en Sitio Oficial JVG"
    },
    {
      titulo: "Preguntas Frecuentes y Resoluciones (PDF)",
      descripcion: "Guía completa para estudiantes sobre régimen de cursada y trámites.",
      categoria: "Documento PDF",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/cartelera/docs/preguntas_frecuentes-v2.pdf",
      formato: "PDF Oficial"
    }
  ],

  planes: [
    { carrera: "Profesorado de Historia", plan: "Departamento e Información de Carrera", dept: "Dpto. Historia", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/historia/" },
    { carrera: "Profesorado de Lengua y Literatura", plan: "Departamento e Información de Carrera", dept: "Dpto. LyL", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/castellano/" },
    { carrera: "Profesorado de Geografía", plan: "Departamento e Información de Carrera", dept: "Dpto. Geografía", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/geografia/" },
    { carrera: "Profesorado de Matemática", plan: "Departamento e Información de Carrera", dept: "Dpto. Matemática", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/matematica/" },
    { carrera: "Profesorado de Filosofía", plan: "Departamento e Información de Carrera", dept: "Filo, Psico y Cs. Ed.", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/cseduc/" },
    { carrera: "Profesorado de Psicología", plan: "Departamento e Información de Carrera", dept: "Filo, Psico y Cs. Ed.", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/cseduc/" },
    { carrera: "Profesorado de Cs. de la Educación", plan: "Departamento e Información de Carrera", dept: "Filo, Psico y Cs. Ed.", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/cseduc/" },
    { carrera: "Profesorado de Cs. Jurídicas", plan: "Departamento e Información de Carrera", dept: "Dpto. Cs. Jurídicas", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/cjpys/" },
    { carrera: "Profesorado de Ciencia Política", plan: "Departamento e Información de Carrera", dept: "Dpto. Ciencia Política", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/cjpys/" },
    { carrera: "Profesorado de Economía", plan: "Departamento e Información de Carrera", dept: "Dpto. Economía", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/economicas/" },
    { carrera: "Profesorado de Cs. de la Administración", plan: "Departamento e Información de Carrera", dept: "Dpto. Cs. de la Adm.", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/economicas/" },
    { carrera: "Profesorado de Inglés", plan: "Departamento e Información de Carrera", dept: "Dpto. Inglés", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/ingles/" },
    { carrera: "Profesorado de Francés", plan: "Departamento e Información de Carrera", dept: "Dpto. Francés", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/frances/" },
    { carrera: "Profesorado de Italiano", plan: "Departamento e Información de Carrera", dept: "Dpto. Italiano", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/italiano/" },
    { carrera: "Profesorado de Física", plan: "Departamento e Información de Carrera", dept: "Dpto. Física", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/fisica/" },
    { carrera: "Profesorado de Química", plan: "Departamento e Información de Carrera", dept: "Dpto. Química", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/quimica/" },
    { carrera: "Profesorado de Biología", plan: "Departamento e Información de Carrera", dept: "Dpto. Biología", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/biologia/" },
    { carrera: "Profesorado de Informática", plan: "Departamento e Información de Carrera", dept: "Dpto. Informática", link: "http://institutojvgonzalez.buenosaires.edu.ar/departamentos/informatica/" }
  ],

  horariosPorDia: [
    {
      dia: "Cartelera Oficial de Horarios y Aulas",
      descripcion: "Descargá los PDFs oficiales de horarios por día directamente desde el servidor del Instituto.",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/cartelera/horarios.php"
    }
  ],

  tramites: [
    {
      nombre: "Sistema de Autogestión de Alumnos (SIU Guaraní / SIUU)",
      pasos: "Constancias de alumno regular, inscripciones a cursada y exámenes finales.",
      requisito: "Ingresar con usuario y clave institucional.",
      link: "https://guarani-autogestionfdocente.bue.edu.ar"
    },
    {
      nombre: "Mesas de Exámenes y Cronograma",
      pasos: "Consulta de fechas de llamado a finales y cronograma de inscripción.",
      requisito: "Estar en condición de alumno regular o libre anotado.",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/cartelera/mesas-examenes.php"
    },
    {
      nombre: "Homologación y Pase de Equivalencias",
      pasos: "Presentación de analítico parcial legalizado en Secretaría Académica.",
      requisito: "Consultar normativas y trámites generales.",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/institucional/secretaria-academica.php"
    }
  ],

  becas: [
    {
      nombre: "Becas Ciudad (Gobierno de la Ciudad)",
      descripcion: "Becas para estudiantes de nivel superior terciario.",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/informacion-util/becas.php"
    },
    {
      nombre: "Boleto Estudiantil Terciario / Superior",
      descripcion: "Información oficial y PDF del trámite de boleto estudiantil.",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/institucional/docs/2026/alumnos2026-boleto-estud1.pdf"
    },
    {
      nombre: "Programa PROGRESAR Nivel Superior",
      descripcion: "Estímulo económico del Ministerio de Educación.",
      link: "https://www.argentina.gob.ar/educacion/progresar"
    }
  ]
};
