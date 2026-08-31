/**
 * AltilloJVG - Cascading Dropdowns & File Upload Logic (1° a 6° Año)
 * Instituto Superior del Profesorado "Joaquín V. González"
 * [Vercel Staging Trigger]
 */

const CURRICULUM_DATA = {
  "Profesorado de Biología": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "Aytp",
      "Biodiversidad de las Plantas",
      "Biología DE LAS PLANTAS II",
      "Biología DE LOS ANIMALES I",
      "Biología DE LOS ANIMALES III",
      "Biología DE LOS MICROORGANISMOS",
      "Biología HUMANA I",
      "Biología MOLECULAR Y CELULAR",
      "Ciencias DE LA TIERRA",
      "Didáctica. DE Educación EN EL AMBIENTE",
      "Dinamica Terrestre",
      "Evolucion e Historia de Vida",
      "Física",
      "HISTORIA DE LA Educación ARGENTINA",
      "Introduccion a los Sist. Vivientes",
      "Matemática",
      "Morfofisiología Comparada DE LOS ANIMALES y Ambiente",
      "Psicología DEL DESARROLLO Y APREND",
      "Química",
      "Trabajo de Campo I"
    ]
  },
  "Profesorado de Ciencias de la Administración": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ]
  },
  "Profesorado de Ciencias de la Educación": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ]
  },
  "Profesorado de Ciencias Jurídicas": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ]
  },
  "Profesorado de Ciencia Política": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "Análisis DE LAS POLÍTICAS PÚBLICAS",
      "CONSTRUCCION DE LA Práctica DOCENTE",
      "Educación Sexual Integral",
      "ENSEÑANZA DE LA CIENCIA Política I",
      "ENSEÑANZA DE LA CIENCIA Política II",
      "Ética",
      "FUNDAMENTOS DE LA CIENCIA Política",
      "Gobierno y Administración Nacional Provincial y Municipal",
      "HISTORIA DE LA Educación ARGENTINA",
      "Historia de los Movimientos Sociales",
      "Historia del Pensamiento Politico",
      "Historia Polit. y Social Lat. y Arg. Contemp",
      "Introducción. Ciencias. SOCIALES: Política Y JURIDICA",
      "Lectura Escritura y Oralidad I",
      "Lectura Escritura y Oralidad II",
      "Movimientos Pol. y Sociales Contemp",
      "Relaciones Internacionales",
      "Residencia Pedagogica",
      "Teoría Y Práctica Política I",
      "Teoría Y Práctica Política II"
    ]
  },
  "Profesorado de Economía": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "Didáctica ESP. Y CONST. Práctica DOCENTE I",
      "Dinero, Credito y Bancos",
      "Econometria",
      "Estadistica",
      "Filosofía",
      "Finanzas Publicas",
      "Historia del Pensamiento Economico",
      "INTRODUCCION A LA Economía",
      "Introduccion a la Eonomia",
      "Lectura Escritura y Oralidad II",
      "Macroeconomia",
      "METODOLOGIA DE LA Investigación",
      "Taller de Aplicativos Informaticos",
      "TALLER DE Informática",
      "Trabajo de Campo I",
      "Derecho Público",
      "Microeconomía"
    ]
  },
  "Profesorado de Filosofía": {
    "1° Año": [
      "INTRODUCCION A LA Filosofía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "LOGICA I Y Teoría DE LA ARGUMENTACION",
      "Pedagogía",
      "Psicología EDUCACIONAL",
      "Sociología",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Didáctica GENERAL",
      "Filosofía ARGENTINA Y LATINOAMERICANA",
      "HISTORIA DE LA Educación ARGENTINA",
      "HISTORIA DE LA Filosofía ANTIGUA",
      "Historia del Arte",
      "Lectura, Escrita y Oralidad II",
      "METODOLOGIA DE LA Investigación",
      "Nuevas Tecnologias (1° Cuatr.)",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Ética",
      "Historia de la Ciencia",
      "HISTORIA DE LA Filosofía MEDIEVAL",
      "Logica II",
      "Metafisica",
      "SISTEMA Y Política Educativa (1° CUATR.)",
      "TALLER DidácticaDE LA FILO Y PROD.MAT.ED",
      "TALLER Filosofía Y Educación",
      "Teoría DEL CONOCIMIENTO",
      "Trabajo de Campo III"
    ],
    "4° Año": [
      "Estetica",
      "Filosofía DEL LENGUAJE",
      "Filosofía Política",
      "HISTORIA DE LA Filosofía MODERNA",
      "Seminario de Antropología Filosófica",
      "SEMINARIO DE Filosofía ANTIGUA Y MEDIEVAL"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Antropologia Cultural (optativa I)",
      "Filosofía CONTEMPORANEA",
      "Filosofía DE GENERO (OPTATIVA II)",
      "Filosofía DE LA CIENCIA",
      "Filosofía DE LA HISTORIA",
      "Filosofía DE LA RELIGION",
      "Residencia",
      "SEMINARIO DE Filosofía MODERNA Y CONTEMPORANEA",
      "SOCIEDAD, ESTADO Y Derechos Humanos"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ]
  },
  "Profesorado de Física": {
    "1° Año": [
      "Álgebra I",
      "Análisis MATEMATICO I",
      "Física I",
      "Geometria",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "NUEVAS TECNOLOGIAS (Cuatrimestral)",
      "Pedagogía",
      "Seminario Experimental I",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Álgebra II",
      "Análisis MATEMATICO II",
      "Didáctica GENERAL",
      "Física II",
      "Psicología EDUCACIONAL",
      "Química",
      "Seminario Experimental II",
      "Sujetos del Nivel",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "ASTRONOMIA (1ª CUATRIMESTRE )",
      "Derechos Humanos, Sociedad y Estado",
      "Didáctica DE LA Física I",
      "Educación Sexual Integral",
      "Filosofía",
      "Física III",
      "Matemática SUPERIOR A",
      "SEMINARIO DE Física",
      "Trabajo de Campo III"
    ],
    "4° Año": [
      "Didáctica Específica II P/nivel Secundario",
      "EPISTEMOLOGIA E HISTORIA DE LA Física",
      "Física EXPERIMENTAL",
      "Física IV",
      "Física TEORICA I (1° CUATR.)",
      "HISTORIA DE LA Educación ARGENTINA",
      "Lengua Extranjera (cuatrimestral)",
      "RESIDENCIA PEDAGÓGICA PARA en Nivel Medio"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Didáctica DE LA FÍSICA PARA EL NIVEL SUP",
      "Física TEORICA II",
      "Mecanica Cuantica",
      "Residencia Pedagogica en el Nivel Sup"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ]
  },
  "Profesorado de Francés": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ]
  },
  "Profesorado de Geografía": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "Antropologia",
      "Derechos Humanos SOCIEDAD Y ESTADO",
      "Ecologia y Biogeografia",
      "Economía Y TERRITORIOS",
      "Educación Sexual Integral",
      "ENS. DE LA Geografía. I Y CONST. Práctica DOCENTE",
      "ENSEÑANZA Geografía II y Residencia",
      "Filosofía",
      "Geografía DE LA REPUBLICA ARGENTINA III",
      "Geografía ECONOMICA MUNDIAL",
      "Historia Mundial",
      "Informacion Geografica I",
      "Posicionamiento Espacial y Geomatico",
      "Territorios I: America Latina y Anglo",
      "Territorios I: America Latina y Anglosaj",
      "Territorios Ii: Europa",
      "Teledetección Geográfica"
    ]
  },
  "Profesorado de Historia": {
    "1° Año": [
      "Historia. ARGENTINA Y AMERICANA I",
      "Introducción. A LA Historia. ANTIGUA",
      "Introduccion a la Historia",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Pedagogía",
      "Pedagogía GENERAL",
      "Prehistoria y Arqueologia",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Didáctica GENERAL",
      "Historia. ARGENTINA Y AMERICANA II",
      "Historia de España",
      "Historia de Grecia",
      "Historia de Roma",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Construcción de la Práctica Docente. / ENSEÑANZA DE LA Historia",
      "Historia Argentina y Americana III",
      "Historia de la Edad Media",
      "Historia de la Edad Moderna",
      "INTRODUCCION A LA Geografía",
      "Psicología EDUCACIONAL",
      "Sujeto de Nivel"
    ],
    "4° Año": [
      "Filosofía",
      "Historia Americana Contemporanea",
      "Historia Argentina Contemporanea",
      "Historia Contemporanea",
      "PRACT. DOC. II y Residencia MEDIA Y SUP",
      "Seminario de Metod. Invest / Residencia"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Dd.hh., Sociedad y Estado",
      "Educación SEXUAL INTEGRAL (cuatrim.)",
      "HISTORIA DE LA Educación ARGENTINA",
      "Historia del Arte",
      "Lengua Extranjera a (cuatrimestral)",
      "SISTEMA Y Política (CUATRIMESTRAL)",
      "Teoría E HISTORIA DE LA HISTORIOG"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "Historia de Africa",
      "Historia de Asia",
      "Historia de la Edad Media y Tp",
      "Introduccion a la Historia y Tp",
      "SEMINARIO DE MET. DE LA Investigación",
      "Seminario Opt. I",
      "Seminario Optativo II"
    ]
  },
  "Profesorado de Informática": {
    "1° Año": [
      "Álgebra I",
      "Diseño I",
      "Herramientas Informaticas",
      "Informática",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Pedagogía",
      "Programacion I",
      "Psicología EDUCACIONAL",
      "Sujetos de Nivel",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "CALCULO PARA Informática",
      "Didáctica GENERAL",
      "Diseño II (taller)",
      "Educación SEXUAL INTEGRAL",
      "Programacion II",
      "Sistemas Informaticos",
      "Tecnologia de la Informacion y la Comun",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Derecho Humanos, Sociedad y Estado",
      "Discursos Digitales",
      "Filosofía",
      "Informática Educativa I",
      "Inglés I",
      "LOGICA Informática",
      "Programacion III",
      "Redes y Comunicación de Datos"
    ],
    "4° Año": [
      "Const. de la Pract. Docente I",
      "HISTORIA DE LA Educación ARGENTINA",
      "Informática Educativa II",
      "Inglés II",
      "Nuevos Escenarios Cultura Tecnol y Sub",
      "Proyectos Educativos",
      "Recursos Inform. Aplic.a Otras Discip",
      "Recursos Informaticos",
      "Tecnicas Digitales"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Construcción de la Práctica DocenteII Y RESID. N. SUPERIOR",
      "Diseño de Sistemas (seminario)",
      "Inteligencia Artificial",
      "LENGUA EXTRANJERA PORTUGUES (Cuatrim)",
      "SISTEMA Y Política Educativa (1° CUATRIM.)",
      "Modelización Matemática y Simulación"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "Álgebra",
      "Derechos Humanos SOCIEDAD Y ESTADO",
      "Diseño de Sistemas",
      "Diseño II",
      "Nuevos Escenarios, Culturas Tecnolog"
    ]
  },
  "Profesorado de Inglés": {
    "1° Año": [
      "Fonética Y Fonología I",
      "Geografía. Y Cultura DE LAS ISLAS Británicas",
      "Geografía. Y Cultura. DE EE.UU",
      "Geografía. Y CULTURA DE LAS ISLAS BRIT. (1º C)",
      "Geografía. Y CULTURA DE LOS EE.UU.. (1ºC)",
      "Geografía Y CULTURA DE LAS I. Británicas",
      "Gramática INGLESA I",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Lengua Inglesa I",
      "Pedagogía",
      "Práctica EN LABORATORIO DE IDIOMAS I",
      "Práctica EN LABORATORIO I",
      "Psicología EDUCACIONAL",
      "Sujetos de Nivel",
      "Sujetos del Nivel",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Análisis DEL DISCURSO",
      "Construcción de la Práctica Docente. en Nivel Inicial y Primario I",
      "Construcción de la Práctica DocenteN INIC. Y PRIM I",
      "Didáctica GENERAL",
      "Fonética Y Fonología II",
      "Gramática INGLESA II",
      "Historia de la Civilizacion Inglesa I",
      "Lengua Inglesa II",
      "Literatura Inglesa I",
      "Práctica EN LABORATORIO DE IDIOMAS II",
      "Práctica EN LABORATORIO II",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Adquisición de la Lengua Materna",
      "Construcción de la Práctica Docente. en Nivel Inicial y Primario II y Residencia",
      "Construcción de la Práctica Docente. en Nivel Medio I",
      "Construcción de la Práctica Docente EN en Nivel Medio I",
      "Educación SEXUAL INTEGRAL",
      "Filosofía",
      "Fonología EN Laboratorio. Y SU DIDATICA I",
      "Fonología EN LABORATORIO Y SU DIDAC. I",
      "Historia. DE LA CIVILIZACION INGLESA II",
      "Historia Norteamericana",
      "Introduccion a la Lingüística",
      "Lengua Inglesa III",
      "Literatura Inglesa II"
    ],
    "4° Año": [
      "Construcción de la Práctica Docente. en Nivel Medio II y Residencia",
      "Derechos Humanos, SOCIEDAD Y ESTADO",
      "Fonología EN Laboratorio. Y Didáctica II",
      "HISTORIA DE LA Educación ARGENTINA",
      "Lengua Inglesa IV",
      "Literatura Contemporanea",
      "Literatura Inglesa III",
      "Literatura Norteamericana",
      "SISTEMA Y Política Educativa (cuatr.)"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Fonología EN Laboratorio. Y SU Didáctica. II",
      "LENGUA EXTRANJERA: Francés NIVEL I",
      "Metod. de la Invest. en Lenguas Extr"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "El Uso de la Voz en el Aula",
      "Fonología EN Laboratorio. Y SU Didáctica. I",
      "Geografía DE LAS ISLAS Británicas",
      "Lectura Escritura y Oralidad I",
      "LENGUA EXTRANJERA NIVEL I - Francés",
      "Redaccion del Discurso Academico",
      "SISTEMA Y Política Educativa"
    ]
  },
  "Profesorado de Italiano": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "CONST.Práctica DOCENTE NIVEL SUPERIOR",
      "Derechos Humanos Soc y Estado",
      "Fonética Y Fonología I",
      "Fonética Y Fonología II",
      "Historia de la Lengua Italiana",
      "Historia Romana y Medieval",
      "La Ens. del Ital. a Partir del Arte Italiano",
      "La Ens. del Italiano a Partir del Cine",
      "La Ens. del Italiano y la Divina Comedia I",
      "La Ens. del Italiano y la Divina Comedia II",
      "La Enseñanza del Italiano a Partir de las Culturas Regionales",
      "Latin I",
      "LENGUA EXTRANJERA Francés I",
      "Lengua Italiana I",
      "Lengua Italiana II",
      "Lengua Italiana III",
      "Lengua Italiana IV",
      "LENGUA ITALIANA IV (1º CUATR.)",
      "Literatura Ital. del Romant. y S. Xx",
      "Nuevas Tecnologias"
    ]
  },
  "Profesorado de Lengua y Literatura": {
    "1° Año": [
      "Pedagogía",
      "Didáctica General",
      "Introducción a la Disciplina",
      "Práctica Docente I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "Educación SEXUAL INTEGRAL",
      "Estudio de la Diversidad Lingüística",
      "Gramática HISTORICA",
      "Griego II",
      "Historia del Arte",
      "Int. Estud. del Lenguaje y Elem. Semiol",
      "Latin II",
      "Latin III",
      "Lectura Escritura y Oralidad II",
      "Lengua y Lit. Latinas y Su Ens. Niv, M. y Sup",
      "Literatura Argentina",
      "Literatura Española del Siglo de Oro",
      "Literatura, Cine y Otros Lenguajes",
      "METODOLOGIA ESPECIAL y Residencia",
      "Sem. Rep. y Proy. Discursos de la Antig",
      "Seminario de Literatura Rusa",
      "Seminario Lenguaje, Sociedad y Educac",
      "Sujeto de Nivel",
      "TALLER DE Gramática Y LINGÜÍSTICA",
      "Taller de Lect. Escritura y Oralidad",
      "Taller de Lect. Escritura y Oralidad I : Generos Academicos",
      "Taller de Lectura Esc y Oralidad I",
      "TALLER DE LITER. Y Teoría LITERARIA",
      "Taller de Literatura Arg. y Latinoam"
    ]
  },
  "Profesorado de Matemática": {
    "1° Año": [
      "Álgebra I",
      "Análisis MATEMATICO I",
      "ELEMENTOS Básica DE Matemática (Cuatr.)",
      "ELEMENTOS Básica DE Matemática",
      "Geometria I",
      "INTR. A LA Matemática SUPERIOR",
      "INTRODUCCION A LA Matemática SUPERIOR",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Pedagogía",
      "Psicología EDUCACIONAL",
      "Psicología EDUCACIONAL (1° CUATR.)",
      "Sujeto del Aprendizaje",
      "Trabajo de Campo I",
      "Trabajo de Campo I (cuatrimestral)"
    ],
    "2° Año": [
      "Álgebra II",
      "Análisis MATEMATICO II",
      "Didáctica GENERAL",
      "Filosofía",
      "Física",
      "Geometria II",
      "Nuevas Tecnologias",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Álgebra III",
      "Derechos Humanos, SOCIEDAD Y ESTADO",
      "Didáctica DE LA Matemática",
      "HISTORIA DE LA Educación ARGENTINA",
      "HISTORIA DE LA Matemática",
      "Probabilidad y Estadistica",
      "Probabilidades y Estadistica",
      "TICS EN EL AULA DE Matemática",
      "Trab. de Campo Iii. Const. Trab. Mat",
      "Trabajo de Campo III"
    ],
    "4° Año": [
      "ASTRONOMIA GRAL. Básica",
      "Construcción de la Práctica Docente",
      "Didáctica DE LA Matemática II",
      "ECUACIONES DIFERENCIALES (1° Cuatrim)",
      "Educación SEXUAL INTEGRAL (1º CUATR.)",
      "FUNDAMENTOS DE LA Matemática",
      "Lengua Extranjera (cuatrimestral)",
      "Reflexion y Act. S/la Pract.doc. (1° Cuatr.)",
      "SISTEMA Y Política Educativa (1° CUATR.)"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Análisis MATEMÁTICO III",
      "CONSTRUCCION DE LA Práctica DOCENTE II",
      "FUNDAMENTOS DE LA Física",
      "TEMAS AVANZADOS DE Matemática"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ]
  },
  "Profesorado de Psicología": {
    "1° Año": [
      "Antropologia Social y Cultural",
      "Biología",
      "Filosofía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Logica",
      "METODOLOGIA DE LA INV.SOCIAL (1° Cuatr.)",
      "Pedagogía",
      "Proc. Colectivos y Problemas Sociales",
      "Psicología GENERAL",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Aprox. al Proceso Salud-enfermedad(1° Cuatr.)",
      "Bases Neurofisiológicas",
      "Didáctica GENERAL",
      "Epistemologia Gral y Especial",
      "ESTADO, SOCIEDAD Y Derechos Humanos",
      "NUEVAS TECNOLOGIAS (Cuatrimestral)",
      "Psicología DE LOS CICLOS VITALES I",
      "Psicología EDUCACIONAL",
      "Psicología SOCIAL",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Adolescencia y Mundo Cont",
      "Estrategias para la Res. de Conflictos",
      "HISTORIA DE LA Educación ARGENTINA",
      "Psicología DE LOS CICLOS VITALES II",
      "Tecnicas de Exploracion Psicologica",
      "Teoría DE LAS ORGANIZ. Y Análisis INST",
      "Teoría PSICOANALITICA",
      "Teoría PSICOANALITICA POST FREUDIANA",
      "Teoría y Práctica de la Comunic. (1° Cuatr.)"
    ],
    "4° Año": [
      "Didáctica DE LA ENS. DE LA Psicología",
      "HISTORIA DE LA Psicología",
      "LENGUA EXTRANJERA (Cuatrimestral)",
      "PRACT. DE ENS. PSICOL. en Nivel Medio Y SUPERIOR",
      "PRACT.DE LA INV. PSICOLOGICA (1º CUATR.)",
      "Psicología DEL ARTE (1° Cuatrim)",
      "Psicopatologia",
      "Psicopedagogia"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Pedagogía DE LA CONV. ESCOLAR",
      "PRACT. DE ENS. PSICOL. en Nivel Medio y Residencia",
      "Psicología APLICADA AL DEPORTE"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ]
  },
  "Profesorado de Química": {
    "1° Año": [
      "INTRODUCCION A LA Química",
      "Mecanica y Optica Geometrica",
      "Química GENERAL E INORGANICA I"
    ],
    "2° Año": [
      "Psicología Educacional",
      "Sociología de la Educación",
      "Sujetos de la Educación",
      "Práctica Docente II"
    ],
    "3° Año": [
      "Historia Social de la Educación",
      "Residencia I",
      "Espacio de Definición Institucional",
      "Práctica Docente III"
    ],
    "4° Año": [
      "Residencia II / Taller de Cierre",
      "Ética y Trabajo Docente",
      "Investigación Educativa",
      "Práctica Docente IV"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior I",
      "Taller de Investigación Aplicada",
      "Didáctica de Nivel Superior",
      "Práctica de Nivel Superior I"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "Análisis MATEMATICO II",
      "Biología CELULAR (1º cuat)",
      "Calor y Termodinamica",
      "Dinamica Terrestre",
      "Pedagogía",
      "Química ANALITICA",
      "Química BIOLOGICA",
      "Química Física",
      "Química GENERAL E INORGANICA II",
      "SEMINARIO DIDACTICO DISCIPLINAR DE Química",
      "SISTEMA Y Política Educativa",
      "Trabajo de Campo II"
    ]
  },
  "Profesorado de Cs. Jurídicas": {
    "1° Año": [
      "Derecho Politico",
      "Historia. DE LAS IDEAS E INSTITUCIONES POLITICAS",
      "Historia de las Instituciones Argentinas I",
      "Historia de los Hechos y las Ideas Econom",
      "Introduccion al Derecho",
      "Pedagogía GENERAL",
      "Psicología DEL DESARROLLO Y DEL APRED",
      "Sociología General",
      "Taller de Expresion Oral y Escrita I",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Derecho Constitucional",
      "Derecho Penal y Criminologia",
      "Derecho Privado I",
      "Derechos Humanos y Garantias",
      "Didáctica GENERAL",
      "Economía Política",
      "Historia de las Instituciones Argentinas II",
      "Introduccion a la Filosofía",
      "Taller de Expresion Oral y Escrita II",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "DEMOGRAFIA, ECOLOGIA Y Geografía. HUMANA",
      "Derecho Administrativo",
      "Derecho Privado II",
      "Didáctica ESP. I Y TRAB DE CAMPO III",
      "Didáctica ESPECIFICA I Y TRABAJO DE CAMPO III",
      "Elementos de Derecho Procesal",
      "ESTADO, SOCIEDAD Y Derechos Humanos",
      "Historia Mundial Contemporanea",
      "Relaciones Laborales"
    ],
    "4° Año": [
      "Derecho Ambiental y de los Rec. Nat",
      "Derecho de las Com. de los Transp. y Nav. Esp",
      "Derecho Internacional Publico",
      "Didáctica ESPECIFICA y Residencia",
      "Finanzas Publicas y Derecho Tributario",
      "HISTORIA SOCIAL DE LA Educación",
      "NOCIONES DE Ética",
      "Psicología SOCIAL Y JURIDICA",
      "Seminario de Ciencias Politicas",
      "T. OPTATIVO: El adulto como sujeto de aprend 1° cuatr"
    ]
  },
  "Profesorado de Cs. de la Educación": {
    "1° Año": [
      "Antropologia Social y Cultural",
      "Bases Biologicas de la Subjetivacion",
      "Educación SEXUAL INTEGRAL",
      "ESTUDIOS CULTURALES Y Educación",
      "Filosofía",
      "Lectura, Escrita y Oralidad I",
      "Pedagogía",
      "Psicología GENERAL",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Didáctica GENERAL",
      "ESTADO, SOCIEDAD Y Derechos Humanos",
      "Filosofía DE LA Educación",
      "Instituciones Educativas",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Psicología DE LA Educación",
      "Psicología DE LOS CICLOS VITALES",
      "Psicología SOCIAL Y Análisis DE LAS ORGANIZ.S EDUC",
      "Sociología DE LA Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Curriculum (1° Cuatr.)",
      "Epistemologia de las Ciencias Sociales",
      "HISTORIA SOCIAL DE LA Educación",
      "Problemas Didacticos I (1° Cuatr.)",
      "SISTEMA Y Política Educativa",
      "Trab.de Campo Iii.nivel Inicial y Prim",
      "TRABAJO DOCENTE ( 1º CUATRIMESTRE)"
    ],
    "4° Año": [
      "Construcción de la Práctica DocenteI N.SECUNDARIO",
      "DIMENSION Ética DEL TRABAJO DOCENTE",
      "HISTORIA DE LA Educación ARGENTINA",
      "LEGISLACION Educativa",
      "METODOLOGIA DE LA INV. EDUC. (1º CUATR.)",
      "Pedagogía SOCIAL (CUATRIMESTRAL)",
      "Politicas Epistemicas"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "ATENEO DE POLITICAS PUBLICAS (1º CUATR.)",
      "CONFIG. DINAMICA DE LOS ROLES PROF. (1° cuatr.)",
      "Construcción de la Práctica DocenteII NIVEL SUPERIOR",
      "Taller de Intervenciones Didácticas"
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const selectCarrera = document.getElementById('selectCarrera');
  const selectAnio = document.getElementById('selectAnio');
  const selectMateria = document.getElementById('selectMateria');
  const uploadForm = document.getElementById('uploadForm');

  const fileDropzone = document.getElementById('fileDropzone');
  const fileInput = document.getElementById('fileInput');
  const fileSelectText = document.getElementById('fileSelectText');

  // Generar el mapa unificado de materias combinando el estático (CURRICULUM_DATA) y el dinámico (de las aulas)
  function getMergedCurriculum() {
    const merged = {};

    // 1. Clonar el CURRICULUM_DATA estático
    for (const carrera in CURRICULUM_DATA) {
      merged[carrera] = {};
      for (const anio in CURRICULUM_DATA[carrera]) {
        merged[carrera][anio] = new Set(CURRICULUM_DATA[carrera][anio]);
      }
    }

    // 2. Incorporar las materias dinámicas de la base de datos de aulas reales (AULAS_DATABASE)
    if (typeof AULAS_DATABASE !== 'undefined' && Array.isArray(AULAS_DATABASE)) {
      AULAS_DATABASE.forEach(record => {
        let carrera = record.carrera;
        let anio = record.anio || "General";
        let materia = record.materia;

        if (!carrera || !materia) return;
        
        // Normalizar nombres de año para que coincidan con las claves de CURRICULUM_DATA
        let normalizedAnio = anio.replace('º', '°').trim();
        if (normalizedAnio.startsWith("5°")) {
          normalizedAnio = "5° Año (Nivel Superior / Tramo Superior)";
        } else if (normalizedAnio.startsWith("6°")) {
          normalizedAnio = "6° Año (Nivel Superior / Tramo Superior)";
        }

        // Si la carrera no existe en el mapa estático, la agregamos
        if (!merged[carrera]) {
          merged[carrera] = {};
        }

        // Si el año no existe en esa carrera, lo agregamos
        if (!merged[carrera][normalizedAnio]) {
          merged[carrera][normalizedAnio] = new Set();
        }

        // Agregamos la materia
        merged[carrera][normalizedAnio].add(materia.toUpperCase());
      });
    }

    // 3. Convertir los Sets a Arrays ordenados
    const finalCurriculum = {};
    for (const carrera in merged) {
      finalCurriculum[carrera] = {};
      for (const anio in merged[carrera]) {
        finalCurriculum[carrera][anio] = Array.from(merged[carrera][anio]).sort();
      }
    }

    return finalCurriculum;
  }

  window.ACTIVE_CURRICULUM = getMergedCurriculum();
  const ACTIVE_CURRICULUM = window.ACTIVE_CURRICULUM;

  populateCarreras();

  function populateCarreras() {
    if (!selectCarrera) return;
    selectCarrera.innerHTML = '<option value="">-- Seleccioná una Carrera --</option>';

    Object.keys(ACTIVE_CURRICULUM).sort().forEach(carrera => {
      const option = document.createElement('option');
      option.value = carrera;
      option.textContent = carrera;
      selectCarrera.appendChild(option);
    });
  }

  // 1. On Carrera Select -> Enable & Populate Años (1° a 6° Año)
  selectCarrera.addEventListener('change', (e) => {
    const selectedCarrera = e.target.value;
    
    selectAnio.innerHTML = '<option value="">-- Seleccioná el Año (1° a 6° Año) --</option>';
    selectMateria.innerHTML = '<option value="">-- Primero seleccioná Año --</option>';
    selectMateria.disabled = true;

    if (!selectedCarrera || !ACTIVE_CURRICULUM[selectedCarrera]) {
      selectAnio.disabled = true;
      return;
    }

    const anios = Object.keys(ACTIVE_CURRICULUM[selectedCarrera]);
    anios.forEach(anio => {
      const option = document.createElement('option');
      option.value = anio;
      option.textContent = anio;
      selectAnio.appendChild(option);
    });

    selectAnio.disabled = false;
  });

  // 2. On Año Select -> Enable & Populate Materias
  selectAnio.addEventListener('change', (e) => {
    const selectedCarrera = selectCarrera.value;
    const selectedAnio = e.target.value;

    selectMateria.innerHTML = '<option value="">-- Seleccioná la Materia --</option>';

    if (!selectedAnio || !ACTIVE_CURRICULUM[selectedCarrera] || !ACTIVE_CURRICULUM[selectedCarrera][selectedAnio]) {
      selectMateria.disabled = true;
      return;
    }

    const materias = ACTIVE_CURRICULUM[selectedCarrera][selectedAnio];
    materias.forEach(materia => {
      const option = document.createElement('option');
      option.value = materia;
      option.textContent = materia;
      selectMateria.appendChild(option);
    });

    selectMateria.disabled = false;
  });

  // Mostrar u ocultar el desplegable de examen condicionalmente
  const selectTipo = document.getElementById('selectTipo');
  const groupDetalleExamen = document.getElementById('groupDetalleExamen');
  const selectDetalleExamen = document.getElementById('selectDetalleExamen');

  if (selectTipo && groupDetalleExamen && selectDetalleExamen) {
    selectTipo.addEventListener('change', () => {
      if (selectTipo.value === 'Examen') {
        groupDetalleExamen.style.display = 'block';
        selectDetalleExamen.required = true;
      } else {
        groupDetalleExamen.style.display = 'none';
        selectDetalleExamen.required = false;
        selectDetalleExamen.value = '';
      }
    });
  }

  // File Dropzone Interaction
  if (fileDropzone && fileInput) {
    fileDropzone.addEventListener('click', () => fileInput.click());

    fileDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileDropzone.style.backgroundColor = '#E6F5FC';
    });

    fileDropzone.addEventListener('dragleave', () => {
      fileDropzone.style.backgroundColor = '';
    });

    fileDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      fileDropzone.style.backgroundColor = '';
      if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        updateFileLabel(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        updateFileLabel(e.target.files[0]);
      }
    });
  }

  function updateFileLabel(file) {
    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
    fileSelectText.innerHTML = `<strong>${file.name}</strong> (${fileSizeMB} MB)`;
    if (fileSizeMB > 20) {
      fileSelectText.innerHTML += `<br><span style="color:#C65100;">📌 Archivo de ${fileSizeMB} MB listo para procesar.</span>`;
    }
  }

  // URL de tu Google Apps Script Web App (dejar vacío si se desea subir directamente a Telegram < 4MB)
  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwN_rJDF4CTIwg2ut-WhurViMlLSXkJ2TcRTgem4WTQgjYRvbbIIP5UB2AZG-1LaRKj/exec";

  // Helper para convertir archivo a Base64
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // Handle Form Submit
  if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('submitBtn');
      const file = fileInput.files[0];

      // Validación: el archivo es obligatorio
      if (!file) {
        alert('⚠️ Por favor, seleccioná un archivo para continuar.');
        return;
      }

      // Si hay un archivo grande (> 4MB) y no hay Google Apps Script configurado, mostrar error
      if (file.size > 4 * 1024 * 1024 && !GOOGLE_APPS_SCRIPT_URL) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        alert(`⚠️ El archivo pesa ${fileSizeMB} MB y supera el límite de subida directa sin configurar Drive (4 MB).\n\nPor favor, pedile a los administradores que configuren la URL de Google Apps Script.`);
        return;
      }

      // Si el archivo supera el límite de Google Apps Script (50MB)
      if (file.size > 50 * 1024 * 1024) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        alert(`⚠️ El archivo pesa ${fileSizeMB} MB y supera el límite máximo permitido (50 MB).\n\nPor favor, intentá comprimir el PDF o subir un archivo más liviano.`);
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Subiendo documento...';

      let driveLink = "";

      try {
        // Si hay un archivo y está configurado Google Apps Script, subir a Google Drive primero
        if (GOOGLE_APPS_SCRIPT_URL) {
          submitBtn.textContent = 'Subiendo a Google Drive de La Caravana...';
          const base64Data = await getBase64(file);
          const rawBase64 = base64Data.split(',')[1];

          const gasResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'text/plain' // Para evitar CORS preflight OPTIONS en Google Apps Script
            },
            body: JSON.stringify({
              fileBase64: rawBase64,
              fileName: file.name,
              mimeType: file.type
            })
          });

          const gasResult = await gasResponse.json();
          if (gasResult.success && gasResult.link) {
            driveLink = gasResult.link;
          } else {
            throw new Error(gasResult.error || 'No se pudo obtener el enlace de Google Drive.');
          }
        }

        submitBtn.textContent = 'Enviando notificación al bot...';

        const formData = new FormData();
        formData.append('carrera', selectCarrera.value);
        formData.append('anio', selectAnio.value);
        formData.append('materia', selectMateria.value);
        
        // Obtener el tipo de material final (si es Examen, usar la especificación)
        let tipoFinal = selectTipo.value;
        if (tipoFinal === 'Examen' && selectDetalleExamen) {
          tipoFinal = selectDetalleExamen.value;
        }
        formData.append('tipo', tipoFinal);

        // Enviar título/tema personalizado si el usuario lo ingresó
        const inputNombre = document.getElementById('inputNombre');
        if (inputNombre && inputNombre.value.trim()) {
          formData.append('nombre', inputNombre.value.trim());
        }

        // Si subimos a Drive, enviamos el link de Drive generado al backend.
        // Si no subimos a Drive (porque no hay GAS config), enviamos el archivo directamente si pesa < 4MB.
        if (driveLink) {
          formData.append('link', driveLink);
        } else {
          formData.append('file', file);
        }

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert(result.message || '🎉 ¡Gracias! Tu material fue recibido y enviado al grupo de aprobación de La Caravana.');
          uploadForm.reset();
          if (groupDetalleExamen) {
            groupDetalleExamen.style.display = 'none';
            selectDetalleExamen.required = false;
          }
          fileSelectText.textContent = "Arrastrá tu archivo o hacé clic aquí";
          document.getElementById('uploadModal').classList.remove('active');
          document.body.style.overflow = '';
        } else {
          alert('❌ Error al subir: ' + (result.message || 'Ocurrió un problema en el servidor. Intenta de nuevo.'));
        }
      } catch (err) {
        console.error(err);
        alert('❌ Error en el proceso de subida: ' + (err.message || 'No se pudo conectar con el servidor. Por favor, intentá de nuevo.'));
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subir Material al Repositorio';
      }
    });
  }
});
