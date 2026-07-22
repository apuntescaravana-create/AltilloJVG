/**
 * AltilloJVG - Datos y Documentación Oficial del Instituto Joaquín V. González
 * Fuentes: http://institutojvgonzalez.buenosaires.edu.ar/
 */

const JVG_OFFICIAL_RESOURCES = {
  normativas: [
    {
      titulo: "Reglamento Orgánico Institucional (ROI)",
      descripcion: "Marco normativo general sobre derechos, deberes, gobierno institucional y régimen académico.",
      categoria: "Reglamento General",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/normativa/roi.pdf",
      formato: "PDF Oficial"
    },
    {
      titulo: "Reglamento de Práctica Docente y Residencia",
      descripcion: "Normativa reguladora de las observaciones, residencias y prácticas de enseñanza en colegios.",
      categoria: "Prácticas y Residencia",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/normativa/practicas.pdf",
      formato: "PDF Oficial"
    },
    {
      titulo: "Régimen de Evaluación y Correlatividades",
      descripcion: "Pautas para la promoción, regularidad, exámenes finales y correlatividades entre materias.",
      categoria: "Académica",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/normativa/evaluacion.pdf",
      formato: "PDF Oficial"
    },
    {
      titulo: "Resolución de Formación Docente Superior CABA",
      descripcion: "Marco jurisdiccional de validez de títulos y resoluciones del Ministerio de Educación.",
      categoria: "Resolución Ministerial",
      link: "http://institutojvgonzalez.buenosaires.edu.ar/normativa/resoluciones.pdf",
      formato: "PDF Oficial"
    }
  ],

  planes: [
    { carrera: "Profesorado de Historia", plan: "Plan de Estudios N° 1245/15", dept: "Dpto. Historia", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/historia/" },
    { carrera: "Profesorado de Lengua y Literatura", plan: "Plan de Estudios N° 1246/15", dept: "Dpto. LyL", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/lengua/" },
    { carrera: "Profesorado de Geografía", plan: "Plan de Estudios N° 1247/15", dept: "Dpto. Geografía", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/geografia/" },
    { carrera: "Profesorado de Matemática", plan: "Plan de Estudios N° 1248/15", dept: "Dpto. Matemática", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/matematica/" },
    { carrera: "Profesorado de Filosofía", plan: "Plan de Estudios N° 1249/15", dept: "Filo, Psico y Cs. Ed.", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/filosofia/" },
    { carrera: "Profesorado de Psicología", plan: "Plan de Estudios N° 1250/15", dept: "Filo, Psico y Cs. Ed.", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/psicologia/" },
    { carrera: "Profesorado de Cs. de la Educación", plan: "Plan de Estudios N° 1251/15", dept: "Filo, Psico y Cs. Ed.", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/educacion/" },
    { carrera: "Profesorado de Cs. Jurídicas", plan: "Plan de Estudios N° 1252/15", dept: "Dpto. Cs. Jurídicas", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/juridicas/" },
    { carrera: "Profesorado de Ciencia Política", plan: "Plan de Estudios N° 1253/15", dept: "Dpto. Ciencia Política", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/politica/" },
    { carrera: "Profesorado de Economía", plan: "Plan de Estudios N° 1254/15", dept: "Dpto. Economía", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/economia/" },
    { carrera: "Profesorado de Cs. de la Administración", plan: "Plan de Estudios N° 1255/15", dept: "Dpto. Cs. de la Adm.", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/administracion/" },
    { carrera: "Profesorado de Inglés", plan: "Plan de Estudios N° 1256/15", dept: "Dpto. Inglés", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/ingles/" },
    { carrera: "Profesorado de Francés", plan: "Plan de Estudios N° 1257/15", dept: "Dpto. Francés", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/frances/" },
    { carrera: "Profesorado de Italiano", plan: "Plan de Estudios N° 1258/15", dept: "Dpto. Italiano", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/italiano/" },
    { carrera: "Profesorado de Física", plan: "Plan de Estudios N° 1259/15", dept: "Dpto. Física", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/fisica/" },
    { carrera: "Profesorado de Química", plan: "Plan de Estudios N° 1260/15", dept: "Dpto. Química", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/quimica/" },
    { carrera: "Profesorado de Biología", plan: "Plan de Estudios N° 1261/15", dept: "Dpto. Biología", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/biologia/" },
    { carrera: "Profesorado de Informática", plan: "Plan de Estudios N° 1262/15", dept: "Dpto. Informática", link: "http://institutojvgonzalez.buenosaires.edu.ar/carreras/informatica/" }
  ],

  horarios: [
    { turno: "Turno Mañana", horario: "07:45 hs a 12:15 hs", descripcion: "Cursada de 1° a 4° año en sede central Ayacucho 632." },
    { turno: "Turno Tarde", horario: "13:00 hs a 17:30 hs", descripcion: "Cursada de materias específicas y talleres de práctica." },
    { turno: "Turno Noche", horario: "17:45 hs a 22:15 hs", descripcion: "Cursada nocturna para estudiantes trabajadores." },
    { turno: "Asignación de Aulas por Departamento", horario: "Cuadro Actualizado 2026", descripcion: "Consultá la grilla de aulas asignadas a cada departamento y cátedra." }
  ],

  tramites: [
    {
      nombre: "Constancia de Alumno Regular",
      pasos: "Se tramita en Bedelía de tu Departamento o a través del sistema de autogestión de alumnos.",
      requisito: "Tener regularizada al menos 1 materia en el último ciclo lectivo."
    },
    {
      nombre: "Homologación y Pase de Equivalencias",
      pasos: "Presentación de analítico parcial legalizado y programas sellados de la institución de origen.",
      requisito: "Período de solicitud abierto durante el primer mes de cada cuatrimestre."
    },
    {
      nombre: "Reincorporación / Prórroga de Cursada",
      pasos: "Nota dirigida a la Rectoría del Instituto fundamentando la solicitud de prórroga.",
      requisito: "Presentar antes del cierre de inscripciones a exámenes finales."
    }
  ],

  becas: [
    {
      nombre: "Becas Ciudad (Gobierno de la Ciudad)",
      descripcion: "Destinada a estudiantes de profesorados de la Ciudad de Buenos Aires.",
      link: "https://buenosaires.gob.ar/educacion/estudiantes/becas-ciudad"
    },
    {
      nombre: "Programa Becas PROGRESAR Nivel Superior",
      descripcion: "Estímulo económico del Ministerio de Educación de la Nación para formación docente.",
      link: "https://www.argentina.gob.ar/educacion/progresar"
    },
    {
      nombre: "Boleto Estudiantil SUBE Terciario / Superior",
      descripcion: "Beneficio de pasajes bonificados para el transporte público en CABA.",
      link: "https://buenosaires.gob.ar/boletoestudiantil"
    }
  ]
};
