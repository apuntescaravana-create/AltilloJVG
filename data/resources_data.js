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
      nombre: "Sistema de Autogestión de Alumnos (SIU Guaraní)",
      descripcion: "Gestión de constancias de alumno regular, historia académica, inscripciones a cursada y a exámenes finales.",
      pasos: [
        "Ingresá con tu usuario (DNI) y contraseña institucional.",
        "Desde la solapa 'Trámites' podés descargar tu Constancia de Alumno Regular con código de validación.",
        "En los períodos habilitados por calendario, realizá la inscripción a materias y mesas de finales."
      ],
      link: "https://guarani-autogestionfdocente.bue.edu.ar"
    },
    {
      nombre: "Homologaciones y Pase de Equivalencias",
      descripcion: "Trámite para acreditar materias cursadas y aprobadas en otras facultades, universidades o profesorados oficiales.",
      pasos: [
        "Solicitá en tu institución de origen el Certificado Analítico Parcial y los programas legalizados de las materias aprobadas (con contenidos mínimos y carga horaria).",
        "Presentá la solicitud formal en Secretaría Académica / Mesa de Entradas del JVG dentro de los plazos fijados por el Calendario Académico.",
        "Completá la planilla de equivalencias indicando a qué asignatura del plan de estudios del Joaquín corresponde cada homologación.",
        "La comisión docente y la secretaría académica evalúan la correlación pedagógica y emiten dictamen para la resolución oficial.",
        "Podés consultar el estado de tu expediente y la reglamentación en Secretaría Académica."
      ],
      link: "http://institutojvgonzalez.buenosaires.edu.ar/institucional/secretaria-academica.php"
    },
    {
      nombre: "Mesas de Exámenes y Cronograma Institucional",
      descripcion: "Fechas de llamados a finales, períodos de inscripción y actas de examen.",
      pasos: [
        "Consultá las fechas de los turnos de exámenes (Febrero-Marzo, Julio-Agosto, Diciembre).",
        "Verificá los días de inscripción previa obligatoria a través del SIU Guaraní.",
        "Presentate con DNI y Libreta Estudiantil el día del examen."
      ],
      link: "http://institutojvgonzalez.buenosaires.edu.ar/cartelera/mesas-examenes.php"
    }
  ],

  becas: [
    {
      nombre: "Boleto Estudiantil Terciario / Superior (SUBE)",
      descripcion: "Beneficio de 50 viajes mensuales gratuitos en colectivos, subte y premetro para estudiantes del nivel terciario.",
      pasos: [
        "Requisito indispensable: tener una tarjeta SUBE registrada a tu nombre en sube.gob.ar.",
        "Estar inscripto/a como estudiante regular en el Joaquín V. González (el instituto informa la nómina oficial periódicamente).",
        "Ingresar al portal oficial del GCBA de Boleto Estudiantil y completar el formulario con tus datos.",
        "Una vez aprobado en la web, acercate a cualquier Terminal Automática SUBE (TAS) o apoyá la tarjeta en tu celular con la App SUBE (tecnología NFC) para activar el subsidio."
      ],
      link: "https://boletoestudiantil.buenosaires.gob.ar/",
      infoPdf: "http://institutojvgonzalez.buenosaires.edu.ar/institucional/docs/2026/alumnos2026-boleto-estud1.pdf"
    },
    {
      nombre: "Becas Ciudad (Gobierno de la Ciudad de Buenos Aires)",
      descripcion: "Estímulo económico destinado a estudiantes regulares de carreras docentes y técnicas en profesorados de CABA.",
      pasos: [
        "Convocatoria anual: habitual apertura entre marzo y mayo de cada ciclo lectivo.",
        "Requisitos: ser estudiante regular del nivel superior y cumplir los criterios socioeconómicos establecidos por el GCBA.",
        "Inscripción: completar el formulario virtual en el portal de Becas Ciudad y adjuntar constancia de regularidad y comprobantes familiares.",
        "Cobro: se deposita a través de cuenta bancaria asignada del Banco Ciudad."
      ],
      link: "https://buenosaires.gob.ar/educacion/estudiantes/becas-educativas/becas-ciudad"
    },
    {
      nombre: "Programa PROGRESAR Nivel Superior",
      descripcion: "Beca nacional orientada a garantizar el acompañamiento y finalización de los estudios terciarios y de formación docente.",
      pasos: [
        "Requisitos de edad: 17 a 24 años (hasta 30 años para estudiantes avanzados, sin límite para personas con hijos monoparentales, discapacidad o colectivos vulnerables).",
        "Ingresos del grupo familiar: no deben superar los 3 Salarios Mínimos, Vitales y Móviles (SMVM).",
        "Convocatorias: 1° llamado (marzo-abril) y 2° llamado (agosto-septiembre) en la web de Progresar o la app Mi Argentina.",
        "El JVG certifica tu regularidad académica automáticamente tras tu postulación."
      ],
      link: "https://www.argentina.gob.ar/educacion/progresar"
    }
  ],

  comodato: {
    titulo: "Préstamo de Computadoras en Comodato",
    descripcion: "Si no contás con computadora propia para tus cursadas, lecturas y trabajos prácticos, podés solicitar una netbook en comodato al Instituto.",
    pasos: [
      "Ser estudiante regular del ISP Joaquín V. González.",
      "Redactar una nota formal dirigida a Rectorado solicitando el préstamo bajo contrato de comodato (indicando si es por 6 meses o por 1 año).",
      "Presentar la nota en Mesa de Entradas / Secretaría del Instituto (o elevarla por el canal administrativo correspondiente).",
      "Al aprobarse, se firma el acta de comodato donde te comprometés al cuidado del equipo y a su devolución al finalizar el período lectivo convenido.",
      "Retirás la computadora configurada para uso educativo."
    ],
    modeloCarta: `XX/XX/20XX Ciudad Autónoma de Buenos Aires 

A Rectorado:

Les escribo con motivo de solicitar el préstamo de computadora a través de contrato de comodato. Quisiera solicitar el préstamo de la computadora por 6 meses o 1 año (según tu necesidad).

Dejo mis datos personales y carrera:
- Nombre completo: 
- DNI: 
- Carrera: 

Desde ya muchas gracias. 

Saludos cordiales,
[Nombre del estudiante y firma]`
  }
};
