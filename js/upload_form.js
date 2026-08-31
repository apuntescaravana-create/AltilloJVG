/**
 * AltilloJVG - Cascading Dropdowns & File Upload Logic (1° a 6° Año)
 * Instituto Superior del Profesorado "Joaquín V. González"
 * [Vercel Staging Trigger]
 */

const CURRICULUM_DATA = {
  "Profesorado de Biología": {
    "1° Año": [
      "Matemática",
      "Física",
      "Química",
      "Introducción a los sistemas vivientes",
      "Psicología educacional",
      "PsicologÍa del desarrollo y del aprendizaje",
      "Leo"
    ],
    "2° Año": [
      "Biología de los animales 1",
      "Biología de las plantas 1",
      "Biología molecular y celular",
      "Ciencias de la tierra",
      "Física biológica",
      "Química biológica",
      "Pedagogía",
      "Trabajo de Campo I",
      "DDHH, sociedad y estado",
      "Taller de lengua extranjera",
      "Taller de actualización en didacticas especificas",
      "Taller de actualización disciplinar y su didactica",
      "Nuevas tecnologias"
    ],
    "3° Año": [
      "Genética clasica, molecular y poblacional",
      "Biología de las plantas 2",
      "Biología humana 1",
      "Biodiversidad de las plantas",
      "Biología de los animales 2",
      "Didactica general",
      "Filosofía",
      "Trabajod de campo 2",
      "La experimentación en biología y su didactica"
    ],
    "4° Año": [
      "Biología de los microorganimos, las algas y los hongos",
      "Biología de los animales 3",
      "Biología humana 2",
      "Dinamica terrestre",
      "Historia. filosofia y sociologia de la biología",
      "Construcción practica docente 1 para el nivel medio",
      "Taller de educación no formal",
      "El lenguaje de la biología y su didactica",
      "Historia de la educación Argentina",
      "Ecología y etología"
    ],
    "5° Año": [
      "Morfofisiologia comparada de los animales y ambiente",
      "Genetica, ambiente y sociedad",
      "Evolución e historia de la vida",
      "Construcción practica docente 2 y residencia niveles medio y superior",
      "Metodologia de la investigación",
      "Educación para la salud",
      "Sistema y politica educativa",
      "Didactica de la educación en el ambiente y la sustentabilidad"
    ]
  },
  "Profesorado de Ciencias de la Educación": {
    "1° Año": [
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Antropología social y cultural",
      "Psicología General",
      "Bases biologicas de la subjetividad",
      "Filosofía",
      "Estudios culturales y educación",
      "Trabajo de Campo I",
      "Esi"
    ],
    "2° Año": [
      "Psicología ciclos vitales",
      "Lectura, Escritura y Oralidad II (LEO 2)",
      "Didáctica general",
      "Sociología de la educación",
      "Filosofía de la educación",
      "Instituciones educativas",
      "Psicologia de la educación",
      "Estado, sociedad y DDHH",
      "Nuevas tecnologias",
      "Trabajo de Campo II",
      "Psicología social y analisis de las organizaciones educativas"
    ],
    "3° Año": [
      "Historia social de la educación",
      "Problemas didacticos 1",
      "Educación no formal e informal",
      "Trabajo de Campo III",
      "Curriculum",
      "Evaluación",
      "Trabajo docente",
      "Lengua Extranjera",
      "Epistemologia de las ciencias sociales",
      "Sistema y política educativa"
    ],
    "4° Año": [
      "Metodologia de la investigación educativa",
      "Estadistica socioeducativa",
      "Legislación educativa",
      "Construcción de la practica docente 1",
      "Políticas epistematicas",
      "Historia de la educación Argentina",
      "Autoridad pedagógica",
      "Problemas didacticos 2",
      "Dimensión etica del trabajo docente",
      "Pedagogía social"
    ],
    "5° Año": [
      "Configuración dinamica de roles profesionales",
      "Practica de la investigación educativa"
    ],
    "Tramo Superior / Seminarios": [
      "Construcción de la practica docente 2",
      "Ateneo de politicas publicas",
      "Experiencias educativas en contexto"
    ]
  },
  "Profesorado de Ciencia Política": {
    "1° Año": [
      "Introducción a las ciencias sociales: Política y Jurídica",
      "Fundamentos de la ciencia política",
      "Historia mundial contemporánea",
      "Historia del pensamiento político",
      "Historia de los hechos y de las ideas económicas",
      "Sociología",
      "Antropología cultural",
      "Lectura, escritura y oralidad 1",
      "Pedagogía general",
      "Psicología Educacional",
      "Sujeto de nivel",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Teoría y prática política 1",
      "Historia política y social latinoamericana y Argentina contemporánea",
      "Historia de los movimientos políticos y sociales",
      "Derecho constitucional",
      "Economía política",
      "Didactica general",
      "Lectura, escritura y oralidad 2",
      "Filosofía",
      "Esi",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Teoría y prática política 2",
      "Movimientos políticos y sociales",
      "Gobierno y administración nacional, provincial y municipal",
      "Derecho a las relaciones internacionales",
      "Epistemología y metodología de la investigación",
      "Construcción de la práctica docente",
      "Enseñanza de la ciencia política 1",
      "Ecología y ambiente",
      "Historia de la educación Argentina",
      "DDHH, sociedad y estado",
      "Taller optativo: Estrategias para el analisis del discurso político"
    ],
    "Tramo Superior / Seminarios": [],
    "4° Año": [
      "Ética",
      "Relaciones internacionales",
      "Psicología política y social",
      "Política educacional y legislación escolar / Sistema y política educativa",
      "Lengua extranjera",
      "Nuevas tecnologias"
    ],
    "5° Año": [
      "Enseñanza de la ciencia política 2",
      "Residencia pedagógica",
      "Medios de comunicación y opinión publica",
      "Const. políticas de los pueblos originarios de America Latina y en especial Argentina",
      "Análisis de las políticas publicas"
    ]
  },
  "Profesorado de Ciencias de la Administración": {
    "1° Año": [
      "Sistemas de Información Contable",
      "Análisis Matemático",
      "Derecho Público",
      "Introducción a la Economía",
      "Historia Económica General y Argentina",
      "Lectura, escritura y oralidad 1",
      "Pedagogía",
      "Psicología educacional",
      "Sujetos de la enseñanza",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Pricipios de administración",
      "Estadística",
      "Derecho civil y societario",
      "Didactica general",
      "Filosofía",
      "Geografía económica",
      "Lectura, escritura y oralidad 2",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Contabilidad de gestión y costos",
      "Régimen tributario y laboral",
      "Derecho comercial y Económico",
      "Didáctica Específica de las Ciencias de la Administración y Constr. de la Práctica Docente",
      "Historia de la educación Argentina",
      "DD HH, sociedad y estado",
      "Matemática financiera"
    ],
    "4° Año": [
      "Administración estratégica",
      "Taller diseño y gestión de organizaciones",
      "Taller de nuevas tecnologias",
      "Metodología de la investigación",
      "Sistema y política educativa",
      "Aplicativos informáticos",
      "Didáctica de la educación superior",
      "Didactica de educación a distancia",
      "Comercialización y marketing",
      "Administración de recursos humanos"
    ],
    "5° Año": [
      "Taller de lengua extranjera - ingles",
      "Taller de informática",
      "Esi",
      "Construccion de la practica docente 2"
    ],
    "Tramo Superior / Seminarios": [
      "Taller optativo: Valuación contable"
    ]
  },
  "Profesorado de Ciencias Jurídicas": {
    "1° Año": [
      "Derecho político",
      "Historia de las instituciones Argentinas 1",
      "Historia de las ideas e instituciones politicas",
      "Historia de los hechos y de las ideas económicas",
      "Introducción al derecho",
      "Taller de expresión oral y escrita 1",
      "Pedagogia general",
      "Sociología general",
      "Psicologia del desarrollo y del aprendizaje",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Derecho privado 1",
      "Historia de las instituciones Argentinas 2",
      "Derecho penal y criminalidad",
      "Economía política",
      "Derecho constitucional",
      "Derechos humanos y garantias",
      "Didactica General",
      "Introducción a la filosofía",
      "Taller de expresión oral y escrita 2",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Derecho privado 2",
      "Derecho administrativo y municipal",
      "Elementos de derecho procesal y régimen legal de concursos y quiebras",
      "Relaciones laborales y seguridad social",
      "Demografía, ecología y geografía humana",
      "Didactica especifica 1 y trabajo de campo 3",
      "Estado, sociedad y DDHH",
      "Historia mundial contemporanea"
    ],
    "4° Año": [
      "Derecho internacional público",
      "Derecho ambiental y de los recursos naturales"
    ],
    "Tramo Superior / Seminarios": [
      "Psicología social y jurídica",
      "Derecho de las comunicaciones de los transportes",
      "Nociones de etica",
      "Historia social de la educación",
      "Didáctica específica 2 y residencia",
      "Política educacional y legislación escolar",
      "Finanzas y legislación impositiva",
      "Taller optativo: El adulto como sujeto del aprendizaje",
      "Esi",
      "Politica educacional y legislación escolar",
      "Para cursar Trabajo de campo 1 es necesario estar cursando o haber cursado: • Pedagogía general • Psicología del desarrollo y del aprendizaje"
    ]
  },
  "Profesorado de Economía": {
    "1° Año": [
      "Sistenas de información contable",
      "Analisis matemático",
      "Derecho publico",
      "Introduccion a la economía",
      "Historia economica general y Argentina",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Pedagogía",
      "Psicología Educacional",
      "Sujetos de la enseñanza",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Principios de administración",
      "Estadistica",
      "Derecho civil y societario",
      "Didactica general",
      "Filosofía",
      "Geografia economica",
      "Lectura, Escritura y Oralidad II (LEO 2)",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Microeconomía",
      "Finanzas publicas",
      "Didactica especifica y construcción de la practica docente 1",
      "Historia del pensamiento economico",
      "Historia de la educación Argentina",
      "DDHH, sociedad y estado",
      "Sem/taller opt. Economias comparadas",
      "Sem/taller opt. Politica economia"
    ],
    "4° Año": [
      "Macroeconomia",
      "Crecimiento y desarrollo economico",
      "Dinero, credito y bancos",
      "Aplicativos informaticos",
      "Metodología de la investigación",
      "Taller de nuevas tecnologias",
      "Sistema y politica educativa",
      "Didactica de la educación superior",
      "Didactica de la educación a distancia"
    ],
    "5° Año": [
      "Taller de idioma extranjero ingles",
      "Taller de informatica",
      "Esi",
      "Construcción de la practica docente 2",
      "Econometria"
    ],
    "Tramo Superior / Seminarios": []
  },
  "Profesorado de Filosofía": {
    "1° Año": [
      "Lógica 1 y teoría de la argumentación",
      "Introducción a la filosofía",
      "Psicología educacional",
      "Psicología del desarrollo",
      "Sociología",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I",
      "Esi",
      "Lengua extranjera"
    ],
    "2° Año": [
      "Didáctica general",
      "Historia de la Educación Argentina",
      "Historia de la filosofía antigua",
      "Filosofía Argentina y Latinoamericana",
      "Historia del arte",
      "Metodología de la investigación",
      "Nuevas tecnologias",
      "Lectura, Escritura y Oralidad II (LEO 2)",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Logica 2",
      "Filosofía de la logica",
      "Historia de la filosofia medieval",
      "Metafisica",
      "Historia de la ciencia",
      "Trabajo de Campo III",
      "Sistema y política educativa",
      "Taller filosofía y educación",
      "Teoría del conocimiento",
      "Etica"
    ],
    "4° Año": [],
    "Tramo Superior / Seminarios": [
      "Filosofia del lenguaje",
      "Estetica",
      "Filosofica politca",
      "Historia de la filosofia moderna",
      "Residencia",
      "Filosofía de la historia",
      "Filosofía de la ciencia"
    ],
    "5° Año": [
      "Antropologia cultural",
      "Filosofia de genero",
      "Filosofia de la religión",
      "Sociedad, estado y DDHH",
      "Filosofia contemporanea"
    ]
  },
  "Profesorado de Física": {
    "1° Año": [
      "Física 1",
      "Análisis Matemático I",
      "Álgebras 1",
      "Geometría"
    ],
    "Tramo Superior / Seminarios": [
      "Trabajo de Campo I",
      "Lectura, escritura y oralidad 1",
      "Pedagogía",
      "Nuevas tecnologias",
      "Trabajo de Campo II",
      "Didáctica general",
      "Psicología educacional",
      "Sujeros del nivel",
      "Astrofísica",
      "Matemática superior A",
      "Matemática superior B",
      "Didáctica de la física 1",
      "Trabajo de Campo III",
      "DDHH, estado y sociedad",
      "Esi",
      "Filosofía",
      "Lectura, escritura y oralidad 2"
    ],
    "2° Año": [
      "Física 2",
      "Análisis Matemático II",
      "Álgebra II",
      "Química"
    ],
    "3° Año": [
      "Física 3 A",
      "Física 3 B"
    ],
    "4° Año": [
      "Física 4",
      "Física teórica 1 A",
      "Física experimental",
      "Didáctica de la física 2 para el nivel medio",
      "Residencia pedagógica para el nivel medio",
      "Epistemología e historia de la física",
      "Historia de la educación Argentina",
      "Sistema y política educativa",
      "Lengua extranjera"
    ],
    "5° Año": [
      "Física teórica 2",
      "Física teórica 1 B",
      "Mecánica cuántica",
      "Astronomía",
      "Didáctica de la física 2 para el nivel superior",
      "Residencia pedagógica para el nivel superior"
    ]
  },
  "Profesorado de Francés": {
    "1° Año": [
      "Trabajo de Campo I",
      "Lengua francesa 1",
      "Introducción a los estudios socioculturales",
      "Leo",
      "Pedagogía",
      "Taller de oralidad en frances",
      "Fonética y fonología 1",
      "Gramática 1",
      "Sujetos del nivel",
      "Psicología educacional"
    ],
    "2° Año": [
      "Nuevas tecnologias",
      "DDHH, sociedad y estado",
      "Trabajo de Campo II",
      "Lengua francesa 2",
      "Gramática 2",
      "Introducción a la literatura",
      "Fonética y fonología 2",
      "Historia de Francia 1",
      "Didáctica general",
      "Lengua Extranjera 1",
      "Lengua Extranjera 2"
    ],
    "3° Año": [
      "Historia de Francia 2",
      "Fonética y fonología 3",
      "Esi",
      "Didáctica para el nivel incial y primario / Construcción de la práctica docente",
      "Lengua francesa 3",
      "Linguistica general y análisis del discurso",
      "Literatura francesa 1",
      "Didactica para nivel medio 1 y construcción de la práctica docente"
    ],
    "4° Año": [
      "Didáctica de la fonética",
      "Sistema y política educativa",
      "Residencia para el nivel inicial y primario",
      "Literatura francesa 2",
      "Gramática del texto",
      "Lengua francesa 4",
      "Didáctica del FLE para el nivel medio 2 y residencia"
    ],
    "5° Año": [
      "Historia de la Educación Argentina",
      "Introducción a la investigación en ciencias del lenguaje",
      "Literatura francesa contemporánea",
      "Estudios linguísticos comparados",
      "Historia de la lengua francesa",
      "Historia del Arte",
      "Filosofía",
      "Didactica del FLE para nivel superior y residencia"
    ]
  },
  "Profesorado de Geografía": {
    "1° Año": [
      "Ciencias de la tierra 1: Geologia y paleontologia",
      "Información Geográfica 1",
      "Dinamica de los procesos climaticos",
      "Introdución a la geografía",
      "Economía y territorios",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Pedagogía",
      "Psicología educacional",
      "Psicología del sujeto del nviel",
      "Historia mundial",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Posicionamiento espacial y geomatico",
      "Geografía Política",
      "Ciencias de la tierra 2",
      "Ecología y biogeografía",
      "Geografía Económica Mundial",
      "Territorios 1: America latina y anglosajona",
      "Didáctica general",
      "Trabajo de Campo II",
      "Historia social latinoamericana"
    ],
    "3° Año": [
      "Información geográfica 2",
      "Territorios 2: Europa",
      "Geografia de la Argentina 1",
      "Geografia de la Argentina 2",
      "Construcción de la práctica docente y enseñanza de la geografía 1",
      "Historia de la educación Argentina",
      "Lectura, Escritura y Oralidad II (LEO 2)",
      "Filosofía",
      "DDHH, sociedad y estado"
    ],
    "4° Año": [
      "Epistemología e historia de la geografía",
      "Geografía de la Republica Argentina 3",
      "Geografía social",
      "Teledetección geográfica",
      "Problemáticas socioambientales"
    ],
    "Tramo Superior / Seminarios": [
      "Territorios 3: Asia",
      "Geografía urbana y rural",
      "Enseñanza de la geografía 2 y residemcia pedagógica",
      "Territorios 4: Africa y Oceania",
      "Nuevas tecnologias",
      "Lengua extranjera: Portugues",
      "Antropologia",
      "Esi"
    ],
    "5° Año": []
  },
  "Profesorado de Historia": {
    "1° Año": [
      "Introducción a la Historia",
      "PreHistoria y Arqueología",
      "Introducción a la Historia Antigua",
      "Historia Argentina y Americana 1",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Pedagogía General",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Historia Argentina y Americana 2",
      "Historia de Roma",
      "Historia de Grecia",
      "Historia de España",
      "Didáctica General",
      "Trabajo de Campo II",
      "Lectura, Escritura y Oralidad II (LEO 2)"
    ],
    "3° Año": [
      "Historia Argentina y Americana 3",
      "Historia de la Edad Media",
      "Historia de la Edad Moderna",
      "Enseñanza de la Historia y Construcción de la Práctica Docente 1",
      "Introducción a la Geografía",
      "Psicología Educacional",
      "Sujetos del Nivel"
    ],
    "4° Año": [
      "Historia Argentina Contemporánea"
    ],
    "Tramo Superior / Seminarios": [
      "Historia Americana Contemporánea",
      "Construcción de la Práctica Docente 2 / Residencia Media y Superior",
      "Historia Contemporánea",
      "Filosofía"
    ],
    "5° Año": [
      "Teoría e Historia de la historiografía",
      "Historia de la Educación Argentina",
      "DDHH, Sociedad y Estado",
      "Historia del Arte",
      "Sistema y política educativa",
      "Lengua Extranjera",
      "Esi",
      "Nuevas Tecnologías",
      "Historia de Asia",
      "Historia de África",
      "Historia del Pensamiento Social y Económico",
      "Historia del Pensamiento Político",
      "Historia de las Mujeres y de género",
      "Historia Americana desde los Orígenes"
    ]
  },
  "Profesorado de Informática": {
    "1° Año": [
      "Álgebra",
      "Herramientas informaticas",
      "Trabajo de Campo I",
      "Programación 1",
      "Diseño 1",
      "Informatica",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Psicología Educacional",
      "Sujetos de nivel",
      "Pedagogía"
    ],
    "2° Año": [
      "Calculo para informatica",
      "Tecnologia de la información y la comunicación",
      "Trabajo de Campo II",
      "Sistemas informaticos",
      "Lectura, Escritura y Oralidad II (LEO 2)",
      "Diseño 2",
      "Programación 2",
      "Didáctica general",
      "Esi"
    ],
    "3° Año": [
      "Informatica educativa",
      "Filosofía",
      "Ingles 1",
      "Redes y comunicaciones de datos",
      "Discursos digitales",
      "Logica informatica",
      "Programación 3",
      "DDHH, sociedad y estado"
    ],
    "4° Año": [
      "Recursos informaticos aplicados a otras disciplinas",
      "Proyectos educativos",
      "Construcción de la practica docente 1",
      "Historia de la educación Argentina",
      "Nuevos escenarios, cultura tecnologica y subjetividad",
      "Ingles 2",
      "Informatica educativa 2",
      "Tecnicas digitales"
    ],
    "5° Año": [
      "Diseño de sistemas",
      "Modelizacion matemática y simulación",
      "Inteligencia artifical",
      "Lengua extranjera",
      "Sistema y politica educativa"
    ]
  },
  "Profesorado de Inglés": {
    "1° Año": [
      "Lengua Inglesa I",
      "Gramática Inglesa I",
      "Fonética y Fonología I",
      "Prácticas en el Laboratorio de Idiomas I",
      "Geografía y Cultura de las Islas Británicas",
      "Geografía y Cultura de los EEUU y Otros Pueblos de Habla Inglesa",
      "Leo",
      "Psicología Educacional",
      "Sujetos de Nivel",
      "Pedagogía",
      "Trabajo de campo I"
    ],
    "2° Año": [
      "Lengua Inglesa II",
      "Gramática Inglesa II",
      "Fonética y Fonología II",
      "Prácticas en el Laboratorio de Idiomas II",
      "Historia de la Civilización Inglesa I",
      "Literatura Inglesa I",
      "Didáctica General",
      "Análisis del Discurso",
      "Trabajo de Campo II",
      "Construcción de la Práctica Docente en los Niveles Inicial y Primario I"
    ],
    "3° Año": [
      "Lengua Inglesa III",
      "Fonología en Laboratorio y Su Didáctica I",
      "Historia de la Civilización Inglesa II",
      "Literatura Inglesa II",
      "Historia Norteamericana",
      "Filosofía",
      "Adquisición de la Lengua Materna y Extranjera",
      "Construcción de la Práctica Docente en el Nivel medio I",
      "Esi",
      "Construcción de la Práctica docente en los Niveles Inicial y Primario II y Residencia",
      "Introducción a la Lingüística"
    ],
    "4° Año": [
      "Lengua Inglesa IV",
      "Literatura Inglesa III",
      "Literatura Contemporánea en Lengua Inglesa",
      "Fonología en Laboratorio y su Didáctica II",
      "Literatura Norteamericana",
      "Historia de la Educación Argentina",
      "Sistema y Política Educativa",
      "DDHH, Sociedad y Estado",
      "Construcción de la Práctica Docente en el Nivel Medio II y Residencia"
    ],
    "5° Año": [
      "Metodología de la Investigación en Lenguas Extranjeras",
      "Escritura Académica",
      "Construcción de la Práctica Docente en el Nivel Superior y Residencia",
      "Lengua Extranjera Nivel I",
      "Lengua Extranjera Nivel II",
      "Prerrequisitos",
      "Nuevas Tecnologías",
      "Taller formativo docente I",
      "El Texto Literario en el Aula",
      "Saberes Lúdicos, Motores y Corporales",
      "Historia Contemporánea de los Pueblos Angloparlantes",
      "Literaturas en Lengua Inglesa",
      "El Profesor de Inglés y el Maestro de Grado / Sala",
      "Taller formativo docente II",
      "Alfabetización",
      "El Uso de la Voz en el Aula",
      "Escritura Creativa",
      "Técnicas Teatrales en el Aula de Inglés",
      "Redacción del Discurso Académico",
      "Taller de Didáctica Específica",
      "Multimedios Aplicados a la Enseñanza del Inglés",
      "Enseñanza de las Lenguas Extranjeras en Educación Especial",
      "Técnicas Informáticas Aplicadas a la Enseñanza de la Lengua Extranjera",
      "Dinámica de Grupos"
    ]
  },
  "Profesorado de Italiano": {
    "1° Año": [
      "Lengua italiana 1",
      "Gramatica italiana 1",
      "Fonterica y fonologia 1",
      "Literatura italiana medieval",
      "Historia Romana y medieval",
      "La enseñanza del Italiano a partir de las culturas regionales",
      "La enseñanza del Italiano a partir del cine y teatro italianos",
      "Lectura, escritura y oralidad",
      "Pedagogía",
      "Psicología Educacional",
      "Psicologia y Sujetos del nivel",
      "Trabajo de Campo I",
      "Taller de consolidacion de la lengua italiana"
    ],
    "2° Año": [
      "Lengua italiana 2",
      "Gramatica italiana 2",
      "Fonterica y fonologia 2",
      "Literatura del humanismo y del renacimiento",
      "Historia italiana moderna",
      "Latin 1",
      "Didactica general",
      "Trabajo de Campo II",
      "La enseñanza del italiano y la divina comedia 1",
      "Nuevas tecnologias"
    ],
    "3° Año": [
      "Lengua italiana 3",
      "Literatura italiana del barroco y del iluminismo",
      "Latin 2",
      "Construcción de la practica docente en el nivel medio",
      "Filosofía",
      "Lingüistica",
      "Construcción de la practica docente en el nivel inicial y primario",
      "La enseñanza del italiano y la divina comedia 2",
      "Esi"
    ],
    "4° Año": [
      "Lengua italina 4",
      "La enseñanza del italiano a partir del arte italiano",
      "Residencia en contextos de injerencia profesional / Didáctica especifica 2 y residencia",
      "Historia de la educación Argentina",
      "DDHH, sociedad y estado",
      "Sistema y política educativa",
      "Taller de didactica de la fonetica",
      "Lengua extranjera 1",
      "Lengua extranjera 2"
    ],
    "5° Año": [
      "Historia civilización italina del risogimento y siglo xx",
      "Historia de la lengua italiana",
      "La enseñanza del italiano a partir de la musica italiana",
      "Taller de tecnicas de lectocomprensión e investigación",
      "Construcción de la práctica doncete en el nivel superior y residencia en contextos de injerencia profesional",
      "Lengua 5: Sociolingüistica",
      "Taller de la didáctica del italiano en el nivel superior",
      "• Taller de consolidación de la lengua italiana cursan con carácter obligatorio SOLO los ingresantes que hayan aprobado el examen de admisión con 5 (cinco) ó 6 (seis) puntos. Aquellos ingresantres que hayan obtenido 7 (siete) o más puntos estarán en condiciones de acreditar el Taller de consolidación y, por lo tanto, no deberán cursalo (Ver Acta de Acreditación de 2.11.2018)."
    ]
  },
  "Profesorado de Lengua y Literatura": {
    "1° Año": [
      "Lectura, escritura y oralidad 1: generos académicos",
      "Taller de lectura de textos literarios",
      "Taller de gramatica y lingüistica",
      "Taller de literatura y teoría literaria",
      "Taller de literatura Argentina y Latinoamericana conectada con la literatura española",
      "Teoría literaria",
      "Fílosofia",
      "Introducción al estudio del lenguaje y elemento de semiología",
      "Introducción a la lengua y la literatura latina",
      "Latín 1 y literatura latina",
      "Pedagogía",
      "Psicología educacional",
      "Sujetos del nivel medio y superior"
    ],
    "2° Año": [
      "Lectura, escritura y oralidad 2: generos e intercursividad",
      "Gramática 1",
      "Literatura francesa e italiana",
      "Historia del arte",
      "Latín 2 y literatura latina",
      "Didáctica general",
      "La lectura y la escritura en la educación formal y no formal",
      "Lectocomprensión de lengua extranjera 1",
      "Lectocomprensión de lengua extranjera 2",
      "Nuevas tecnologias"
    ],
    "Tramo Superior / Seminarios": [
      "Lenguaje, sociedad y educacíon",
      "Canon literario, canon escolar y formación del gusto",
      "Representación y proyección de los discrusos de la Antigüedad en la escuela",
      "Retórica y poética",
      "Literatura rusa y de otros patrimonios culturales no occidentales",
      "Análisis del discurso",
      "Estudios hispánicos"
    ],
    "3° Año": [
      "Gramática 2",
      "Literatura en la lengua inglesa y alemana",
      "Literatura española del siglo de oro",
      "Latín 3 y literatura latina",
      "Griego 1 y literatura griega",
      "Historia de la educación Argentina",
      "Sistema y politica educativa"
    ],
    "4° Año": [
      "Gramática 3",
      "Gramática histórica",
      "Literatura Argentina",
      "Literatura Latinoamericana",
      "Lengua y literatura Latinas y su enseñanza en el nivel medio y superior",
      "Griego 2 y literatura griega",
      "Metodología especial y prácticas de la enseñanza"
    ],
    "5° Año": [
      "DDHH, sociedad y estado",
      "Lingüistica",
      "Estudio de la diversidad lingüística y su enseñanza en el nivel medio y superior",
      "Problemas de literatura contemporánea en lengua española",
      "Literatura, cine y otros lenguajes en los siglos XX y XXI",
      "Metodología especial y Residencia"
    ]
  },
  "Profesorado de Matemática": {
    "1° Año": [
      "Elementos Básicos de Matemática",
      "Álgebra I",
      "Geometría I",
      "Análisis Matemático I",
      "Introducción a la Matemática Superior",
      "Pedagogía",
      "Psicología Educacional",
      "Sujeto del aprendizaje",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Álgebra II",
      "Geometría II",
      "Análisis Matemático II",
      "Física",
      "Nuevas tecnologías",
      "Filosofía",
      "Didáctica general",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "TICS en el aula de matemática",
      "Álgebra III",
      "Probabilidades y estadística",
      "Historia de la Matemática",
      "Historia de la Educación Argentina",
      "DDHH, Estado y Sociedad",
      "Didáctica de la Matemática 1",
      "Lectura, Escritura y Oralidad II (LEO 2)",
      "Trabajo de Campo III"
    ],
    "4° Año": [
      "Fundamentos de la Matemática",
      "Astronomía General Básica",
      "Lengua Extranjera",
      "Sistema y Política Educativa",
      "Didáctica de la Matemática 2",
      "Construcción de la Práctica Docente 1",
      "Reflexión y actualización de la práctica docente",
      "Esi"
    ],
    "5° Año": [
      "Construcción de la Práctica Docente 2",
      "Temas avanzados de matemática",
      "Fundamentos de la física",
      "Análisis Matemático III",
      "Astronomía superior"
    ]
  },
  "Profesorado de Psicología": {
    "1° Año": [
      "Pedagogía",
      "Antropología social y cultural",
      "Psicología General",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Filosofía",
      "Procesos colectivos y problemas sociales",
      "Metedo de la investigación social",
      "Lógica",
      "Biología",
      "Trabajo de Campo I",
      "Teórica de la argumentación",
      "Estadística",
      "Neurobiología y adaptación"
    ],
    "2° Año": [
      "Psicología social",
      "Estadi, sociedad y DDHH",
      "Nuevas tecnologias",
      "Psicología de los ciclos vitales 1",
      "Psicologiía educacional",
      "Didáctica general",
      "Bases neurofisiológicas",
      "Epistemología general y especial",
      "Lectura, Escritura y Oralidad II (LEO 2)",
      "Aproximación al proceso salud y enfermedad",
      "Trabajo de Campo II"
    ],
    "Tramo Superior / Seminarios": [
      "Escuela y comunidad"
    ],
    "3° Año": [
      "Historia de la educación Argentina",
      "Psicología de los ciclos vitales 2",
      "Adolescencia y mundo contemporaneo",
      "Teória de las organizaciones y análisis institucionales",
      "Teória psicoanalitica",
      "Tecnicas de exploración psicologica",
      "Teória y dinamica de los grupos de aprendizaje",
      "Estrategias para la resolución de conflictos",
      "Sistema y política educativa",
      "Teória psicoanalitica post Freudiana",
      "Teória y practica de la comunicación",
      "Neuropsicología del aprendizaje"
    ],
    "4° Año": [
      "Esi",
      "Taller didáctico para la enseñanza de la piscología",
      "Historia de la psicología",
      "Prácticas de la investigación psicologíca",
      "Piscopedagogia",
      "Psicopatologia",
      "Psicologia del arte",
      "Escuela y violencia",
      "Práctica de la enseñanza psicologica nivel medio y superior",
      "Lengua extranjera"
    ],
    "5° Año": [
      "Práctica de la enseñanza psicologica nivel medio y residencia",
      "Introducción a los estudios de genero",
      "Pedagogía de la convivencia escolar",
      "Psicología aplicada al deporte",
      "Orientación vocacional y ocupacional",
      "Epistemologia y psicologia genetica",
      "• Es obligatorio cursar y apobrar a lo largo de la carrera cuatro instancias curriculares optativas."
    ]
  },
  "Profesorado de Química": {
    "1° Año": [
      "Análisis Matemático I",
      "Mecánica y óptica geométrica",
      "Introducción a la química",
      "Química general e inorgánica 1",
      "Trabajo de Campo I",
      "Sujetos de nivel",
      "Psicología educacional",
      "Lectura, escritura y oralidad 1",
      "Pedagogía"
    ],
    "2° Año": [
      "Análisis Matemático II",
      "Electromagnetismo y fenomenos ondulatorios",
      "Introducción a la dinámica terrestre y mineralogía",
      "Química general e inorgánica 2",
      "Química orgánica 1",
      "Trabajo de Campo II",
      "Didáctica general",
      "DDHH, sociedad y estado"
    ],
    "3° Año": [
      "Matemática aplicada",
      "Calor y termodinámica",
      "Dinamica terrestre",
      "Química orgánica 2",
      "Química analitica",
      "Biología celular",
      "Fisiologia celular y humana",
      "Construcción de la practica docente 1",
      "Filosofía",
      "Esi"
    ],
    "4° Año": [
      "Química física",
      "Intoducción a la química industrial",
      "Química industrial descriptiva",
      "Química biológica",
      "Epistemología e historia de la química"
    ],
    "Tramo Superior / Seminarios": [
      "Lectura, escritura y oralidad 2",
      "Sistema y política educativa",
      "Historia de la educación Argentina"
    ],
    "5° Año": [
      "Biología molecular",
      "Biotecnologia",
      "Metodologia de la investigación",
      "Nuevas tecnologias",
      "Lengua extranjera",
      "Construcción de la practica docente 2"
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
