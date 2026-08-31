/**
 * AltilloJVG - Cascading Dropdowns & File Upload Logic (1° a 6° Año)
 * Instituto Superior del Profesorado "Joaquín V. González"
 * [Vercel Staging Trigger]
 */

const CURRICULUM_DATA = {
  "Profesorado de Matemática": {
    "1° Año": [
      "Álgebra I",
      "Análisis Matemático I",
      "Geometría I",
      "Introducción a la Matemática Superior",
      "Elementos Básicos de Matemática",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Álgebra II",
      "Análisis Matemático II",
      "Geometría II",
      "Física General",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Álgebra III",
      "Análisis Matemático III",
      "Geometría III",
      "Probabilidad y Estadística",
      "Didáctica de la Matemática I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Fundamentos de la Matemática",
      "Ecuaciones Diferenciales",
      "Didáctica de la Matemática II",
      "Historia de la Matemática",
      "Tecnologías Digitales en la Enseñanza de la Matemática",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Especialización en Matemática",
      "Epistemología de la Matemática",
      "Taller de Investigación Educativa en Matemática"
    ]
  },
  "Profesorado de Filosofía": {
    "1° Año": [
      "Introducción a la Filosofía",
      "Lógica I",
      "Filosofía Antigua",
      "Historia de la Filosofía Antigua",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Filosofía Medieval",
      "Gnoseología",
      "Antropología Filosófica",
      "Lógica II",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Filosofía Moderna",
      "Metafísica",
      "Ética",
      "Filosofía Política",
      "Didáctica de la Filosofía",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Filosofía Contemporánea",
      "Filosofía Latinoamericana y Argentina",
      "Estética",
      "Filosofía de las Ciencias y Epistemología",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Textos Filosóficos I",
      "Seminario de Textos Filosóficos II",
      "Taller de Investigación en Filosofía"
    ]
  },
  "Profesorado de Historia": {
    "1° Año": [
      "Introducción a la Historia",
      "Historia Antigua de Oriente y Grecia",
      "Historia Antigua de Roma",
      "Historia de América I (Precolombina e Indígena)",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Historia Medieval",
      "Historia Moderna",
      "Historia de América II (Colonial)",
      "Historia Argentina I (Colonial e Independencia)",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Historia Contemporánea del Siglo XIX",
      "Historia de América III (Siglo XIX)",
      "Historia Argentina II (Siglo XIX)",
      "Didáctica de la Historia I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Historia Contemporánea del Siglo XX",
      "Historia de América IV (Siglo XX y Actual)",
      "Historia Argentina III (Siglo XX y Actual)",
      "Historiografía",
      "Didáctica de la Historia II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Historia Argentina y Latinoamericana",
      "Seminario de Historia Mundial Contemporánea",
      "Taller de Investigación Histórica"
    ]
  },
  "Profesorado de Lengua y Literatura": {
    "1° Año": [
      "Lingüística General I",
      "Gramática Española I",
      "Teoría y Análisis Literario I",
      "Literatura Española I (Medieval y Siglo de Oro)",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Lingüística General II",
      "Gramática Española II",
      "Teoría y Análisis Literario II",
      "Literatura Española II",
      "Literatura Latinoamericana I",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Historia de la Lengua Española",
      "Literatura Latinoamericana II",
      "Literatura Argentina I",
      "Didáctica de la Lengua y la Literatura I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Literatura Argentina II",
      "Literaturas Extranjeras Clásicas y Modernas",
      "Semiótica y Análisis del Discurso",
      "Didáctica de la Lengua y la Literatura II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Literatura Argentina y Latinoamericana",
      "Seminario de Lingüística Aplicada",
      "Taller de Escritura Creativa y Académica"
    ]
  },
  "Profesorado de Inglés": {
    "1° Año": [
      "Lengua Inglesa I",
      "Fonética y Fonología Inglesa I",
      "Gramática Inglesa I",
      "Dicción y Práctica de Laboratorio I",
      "Geografía y Cultura de los Pueblos de Habla Inglesa I",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Construcción de la Práctica Docente en Nivel Inicial y Primario I"
    ],
    "2° Año": [
      "Lengua Inglesa II",
      "Fonética y Fonología Inglesa II",
      "Gramática Inglesa II",
      "Literatura en Lengua Inglesa I",
      "Geografía y Cultura de los Pueblos de Habla Inglesa II",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Construcción de la Práctica Docente en Nivel Inicial y Primario II y Residencia"
    ],
    "3° Año": [
      "Lengua Inglesa III",
      "Fonología y Fonética Inglesa III",
      "Gramática Inglesa III",
      "Lingüística General y Aplicada",
      "Literatura en Lengua Inglesa II",
      "Historia de la Lengua Inglesa",
      "Didáctica Especial y Construcción de la Práctica Docente en Nivel Medio I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado"
    ],
    "4° Año": [
      "Lengua Inglesa IV",
      "Análisis del Discurso en Lengua Inglesa",
      "Literatura en Lengua Inglesa III y Contemporánea",
      "Estudios Culturales Anglófonos",
      "Didáctica Especial y Residencia en Nivel Medio y Superior",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Literatura en Lengua Inglesa",
      "Seminario de Lingüística y Adquisición del Lenguaje",
      "Taller de Traducción y Práctica Profesional"
    ]
  },
  "Profesorado de Biología": {
    "1° Año": [
      "Introducción a la Biología y Sistemas Vivientes",
      "Biología Celular y Molecular",
      "Diversidad Vegetal I",
      "Química General e Inorgánica",
      "Matemática y Estadística Aplicada",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Diversidad Vegetal II",
      "Diversidad Animal I (Invertebrados)",
      "Anatomía y Fisiología Humana",
      "Química Orgánica y Biológica",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Diversidad Animal II (Vertebrados)",
      "Genética General y Molecular",
      "Ecología General y de Poblaciones",
      "Didáctica de la Biología I",
      "Ciencias de la Tierra y Dinámica Terrestre",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Evolución y Paleontología",
      "Fisiología y Morfología Comparada",
      "Educación para la Salud y el Ambiente",
      "Didáctica de la Biología II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Biotecnología y Sociedad",
      "Seminario de Epistemología de la Biología",
      "Taller de Investigación en Ciencias Naturales"
    ]
  },
  "Profesorado de Física": {
    "1° Año": [
      "Física General I (Mecánica y Cinemática)",
      "Álgebra y Geometría Analítica I",
      "Análisis Matemático I",
      "Laboratorio de Física I",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Física General II (Calor, Termodinámica y Fluidos)",
      "Física General III (Óptica y Ondas)",
      "Análisis Matemático II",
      "Química General",
      "Laboratorio de Física II",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Física General IV (Electromagnetismo)",
      "Métodos Matemáticos de la Física",
      "Mecánica Teórica",
      "Didáctica de la Física I",
      "Laboratorio de Física III",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Introducción a la Física Moderna y Cuántica",
      "Termodinámica Estadística",
      "Astronomía y Astrofísica Básica",
      "Didáctica de la Física II",
      "Historia y Epistemología de la Física",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Física Contemporánea",
      "Taller de Experimentación y Modelización",
      "Taller de Investigación en Enseñanza de la Física"
    ]
  },
  "Profesorado de Química": {
    "1° Año": [
      "Química General e Inorgánica I",
      "Laboratorio de Química General",
      "Matemática I (Cálculo y Álgebra)",
      "Física I",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Química General e Inorgánica II",
      "Química Orgánica I",
      "Química Analítica Cualitativa",
      "Matemática II",
      "Física II",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Química Orgánica II",
      "Química Analítica Cuantitativa e Instrumental",
      "Fisicoquímica I",
      "Didáctica de la Química I",
      "Biología Celular y Bioquímica",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Fisicoquímica II",
      "Química Industrial y Ambiental",
      "Bromatología y Toxicología",
      "Didáctica de la Química II",
      "Historia y Epistemología de la Química",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Química Aplicada",
      "Taller de Seguridad e Higiene en Laboratorio",
      "Taller de Investigación en Enseñanza de la Química"
    ]
  },
  "Profesorado de Geografía": {
    "1° Año": [
      "Introducción a la Geografía",
      "Cartografía y Sistemas de Información Geográfica (SIG)",
      "Geografía Física I (Geomorfología y Geología)",
      "Geografía Humana y Social I",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Geografía Física II (Climatología, Hidrología y Biogeografía)",
      "Geografía Económica y Urbana",
      "Geografía de América Latina",
      "Geografía Rural y de la Población",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Geografía de la República Argentina I (Bases Físicas y Ambientales)",
      "Geografía de la República Argentina II (Socioeconómica y Regional)",
      "Geopolítica y Geografía Política",
      "Didáctica de la Geografía I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Geografía Mundial Contemporánea (Problemas Globales)",
      "Planificación Territorial y Problemáticas Ambientales",
      "Epistemología e Historia del Pensamiento Geográfico",
      "Didáctica de la Geografía II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Geografía Urbana y Metropolización",
      "Seminario de Recursos Naturales y Desarrollo Sustentable",
      "Taller de Investigación Geográfica"
    ]
  },
  "Profesorado de Informática": {
    "1° Año": [
      "Algoritmos y Estructuras de Datos I",
      "Arquitectura y Organización de Computadoras",
      "Fundamentos de Informática y Sistemas Digitales",
      "Matemática Discreta y Álgebra Lineal",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Algoritmos y Estructuras de Datos II",
      "Sistemas Operativos y Redes de Comunicación",
      "Bases de Datos I",
      "Programación Orientada a Objetos",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Ingeniería de Software y Desarrollo Web",
      "Bases de Datos II y Administración de Servidores",
      "Informática Educativa I y Entornos Virtuales",
      "Didáctica de la Informática I",
      "Seguridad Informática y Ética Digital",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Tecnologías Emergentes, IA y Ciencia de Datos",
      "Informática Educativa II y Robótica Pedagógica",
      "Discursos y Culturas Digitales",
      "Didáctica de la Informática II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Redes Avanzadas y Cloud Computing",
      "Seminario de Accesibilidad y Tecnologías Inclusivas",
      "Taller de Proyecto Final de Informática"
    ]
  },
  "Profesorado de Psicología": {
    "1° Año": [
      "Psicología General",
      "Antropología Social y Cultural",
      "Lógica y Epistemología General",
      "Biología y Neurociencias del Comportamiento",
      "Procesos Colectivos y Problemas Sociales",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Psicología del Desarrollo y Ciclos Vitales I (Niñez y Adolescencia)",
      "Psicoanálisis I (Teoría Freudiana)",
      "Psicología Social y Comunitaria",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Estado, Sociedad y Derechos Humanos",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Psicología del Desarrollo y Ciclos Vitales II (Adultez y Vejez)",
      "Psicoanálisis II (Teorías Posfreudianas)",
      "Teoría de las Organizaciones y Análisis Institucional",
      "Psicopatología Infanto-Juvenil y del Adulto",
      "Técnicas de Exploración y Evaluación Psicológica",
      "Didáctica de la Enseñanza de la Psicología I",
      "Historia Social de la Educación",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Historia de la Psicología",
      "Psicología Institucional y Forense",
      "Psicopedagogía y Orientación Vocacional",
      "Didáctica de la Enseñanza de la Psicología II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Psicología Comunitaria e Intervención Social",
      "Seminario de Epistemología Psicológica",
      "Taller de Investigación en Psicología"
    ]
  },
  "Profesorado de Ciencias de la Educación": {
    "1° Año": [
      "Pedagogía General",
      "Filosofía General",
      "Antropología y Educación",
      "Psicología General y del Desarrollo",
      "Sociología General",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Didáctica General",
      "Historia de la Educación Argentina y Latinoamericana",
      "Sociología de la Educación",
      "Psicología de la Educación",
      "Instituciones Educativas y Análisis Organizacional",
      "Filosofía de la Educación",
      "Estado, Sociedad y Derechos Humanos",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Teoría y Diseño Curricular",
      "Política y Legislación Educativa",
      "Metodología de la Investigación Educativa I (Cualitativa)",
      "Didáctica de Nivel Inicial, Primario y Secundario",
      "Historia Social de la Educación",
      "Problemas Didácticos Contemporáneos",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Planeamiento y Gestión Educativa",
      "Metodología de la Investigación Educativa II (Cuantitativa y Mixta)",
      "Evaluación de Proyectos Educativos",
      "Educación No Formal y Pedagogía Social",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Políticas Públicas Educativas",
      "Seminario de Educación Superior y Universitaria",
      "Taller de Trabajo Final / Tesis de Licenciatura"
    ]
  },
  "Profesorado de Ciencias Jurídicas": {
    "1° Año": [
      "Introducción al Derecho y Teoría General",
      "Derecho Político y Teoría del Estado",
      "Historia de las Ideas e Instituciones Políticas",
      "Sociología Jurídica",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Derecho Constitucional y Garantías",
      "Derechos Humanos y Derecho Internacional de los DD.HH.",
      "Derecho Privado I (Parte General y Personas)",
      "Derecho Penal I (Parte General)",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Derecho Privado II (Obligaciones y Contratos)",
      "Derecho Administrativo",
      "Derecho del Trabajo y Relaciones Laborales",
      "Didáctica de las Ciencias Jurídicas I",
      "Elementos de Derecho Procesal",
      "Historia Social de la Educación",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Derecho Internacional Público y de la Integración",
      "Finanzas Públicas y Derecho Tributario",
      "Derecho Ambiental y de los Recursos Naturales",
      "Didáctica de las Ciencias Jurídicas II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Derecho Constitucional Profundizado",
      "Seminario de Género y Sistema de Justicia",
      "Taller de Práctica Forense y Litigación Educativa"
    ]
  },
  "Profesorado de Ciencia Política": {
    "1° Año": [
      "Introducción a la Ciencia Política",
      "Teoría Política Clásica y Medieval",
      "Historia Política Argentina I",
      "Sociología Política",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Teoría Política Moderna",
      "Historia Política Argentina II",
      "Sistemas Políticos Comparados",
      "Opinión Pública y Comunicación Política",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Teoría Política Contemporánea",
      "Relaciones Internacionales y Política Exterior",
      "Políticas Públicas y Administración del Estado",
      "Didáctica de la Ciencia Política I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Partidos Políticos y Sistemas Electorales",
      "Filosofía Política Latinoamericana",
      "Metodología del Análisis Político",
      "Didáctica de la Ciencia Política II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Política Latinoamericana Contemporánea",
      "Seminario de Movimientos Sociales y Ciudadanía",
      "Taller de Investigación en Ciencia Política"
    ]
  },
  "Profesorado de Economía": {
    "1° Año": [
      "Principios de Economía y Microeconomía I",
      "Matemática para Economistas I (Álgebra y Cálculo)",
      "Historia del Pensamiento Económico I",
      "Contabilidad General y Social",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Macroeconomía I",
      "Microeconomía II",
      "Matemática para Economistas II",
      "Estadística Económica",
      "Historia Económica Argentina y Mundial",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Macroeconomía II (Dinero, Crédito y Bancos)",
      "Economía Internacional y Comercio Exterior",
      "Finanzas Públicas y Política Fiscal",
      "Didáctica de la Economía I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Desarrollo Económico y Estructura Productiva Argentina",
      "Economía Política y Distribución del Ingreso",
      "Formulación y Evaluación de Proyectos",
      "Didáctica de la Economía II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Economía Social y Cooperativismo",
      "Seminario de Integración Económica Regional",
      "Taller de Investigación Económica"
    ]
  },
  "Profesorado de Ciencias de la Administración": {
    "1° Año": [
      "Teoría de la Administración I (Fundamentos y Escuelas)",
      "Principios de Economía y Mercado",
      "Matemática Aplicada a la Administración",
      "Sistemas de Información y Contabilidad Básica",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Trabajo de Campo I"
    ],
    "2° Año": [
      "Teoría de la Administración II (Procesos Organizacionales)",
      "Contabilidad Financiera y de Costos",
      "Estadística Aplicada a las Organizaciones",
      "Derecho Aplicado a las Organizaciones",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Trabajo de Campo II"
    ],
    "3° Año": [
      "Administración de Recursos Humanos y Relaciones Laborales",
      "Administración Financiera y Presupuestaria",
      "Comercialización y Marketing Estratégico",
      "Didáctica de la Administración I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado",
      "Construcción de la Práctica Docente I"
    ],
    "4° Año": [
      "Planeamiento Estratégico y Dirección General",
      "Gestión de Organizaciones Públicas, Privadas y del Tercer Sector",
      "Emprendedorismo y Formulación de Proyectos",
      "Didáctica de la Administración II",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente",
      "Residencia y Construcción de la Práctica Docente II"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Innovación y Gestión Tecnológica",
      "Seminario de Responsabilidad Social Organizacional",
      "Taller de Simulación de Negocios y Práctica Profesional"
    ]
  },
  "Profesorado de Francés": {
    "1° Año": [
      "Lengua Francesa I",
      "Fonética y Fonología Francesa I",
      "Gramática Francesa I",
      "Práctica de Laboratorio y Expresión Oral I",
      "Civilización y Cultura Francesa I",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Construcción de la Práctica Docente en Nivel Inicial y Primario I"
    ],
    "2° Año": [
      "Lengua Francesa II",
      "Fonética y Fonología Francesa II",
      "Gramática Francesa II",
      "Literatura Francesa I (Siglos XVI al XVIII)",
      "Civilización y Cultura Francesa II",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Construcción de la Práctica Docente en Nivel Inicial y Primario II y Residencia"
    ],
    "3° Año": [
      "Lengua Francesa III",
      "Lingüística Aplicada al Francés",
      "Literatura Francesa II (Siglo XIX)",
      "Didáctica Especial y Construcción de la Práctica Docente en Nivel Medio I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado"
    ],
    "4° Año": [
      "Lengua Francesa IV",
      "Literatura Francesa y Francófona Contemporánea (Siglo XX y XXI)",
      "Estudios Francófonos y Diversidad Cultural",
      "Didáctica Especial y Residencia en Nivel Medio y Superior",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Literatura y Cine Francófono",
      "Seminario de Lingüística y Didáctica del FLE",
      "Taller de Traducción Francés-Español"
    ]
  },
  "Profesorado de Italiano": {
    "1° Año": [
      "Lengua Italiana I",
      "Fonética y Fonología Italiana I",
      "Gramática Italiana I",
      "Práctica de Laboratorio y Dicción I",
      "Cultura y Civilización Italiana I",
      "Pedagogía",
      "Lectura, Escritura y Oralidad I (LEO 1)",
      "Construcción de la Práctica Docente en Nivel Inicial y Primario I"
    ],
    "2° Año": [
      "Lengua Italiana II",
      "Fonética y Fonología Italiana II",
      "Gramática Italiana II",
      "Literatura Italiana I (Orígenes, Dante, Petrarca, Boccaccio)",
      "Cultura y Civilización Italiana II",
      "Didáctica General",
      "Psicología Educacional",
      "Sujetos de la Educación",
      "Construcción de la Práctica Docente en Nivel Inicial y Primario II y Residencia"
    ],
    "3° Año": [
      "Lengua Italiana III",
      "Lingüística Aplicada al Italiano",
      "Literatura Italiana II (Del Renacimiento al Romanticismo)",
      "Didáctica Especial y Construcción de la Práctica Docente en Nivel Medio I",
      "Historia Social de la Educación",
      "Derechos Humanos, Sociedad y Estado"
    ],
    "4° Año": [
      "Lengua Italiana IV",
      "Literatura Italiana Contemporánea (Siglos XX y XXI)",
      "Estudios Culturales de Italia y la Emigración Italiana en Argentina",
      "Didáctica Especial y Residencia en Nivel Medio y Superior",
      "Educación Sexual Integral (ESI)",
      "Ética y Trabajo Docente"
    ],
    "Tramo Superior / Seminarios": [
      "Seminario de Literatura Italiana y Traducción",
      "Seminario de Didáctica del Italiano como Lengua Extranjera",
      "Taller de Cultura y Cine Italiano"
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
