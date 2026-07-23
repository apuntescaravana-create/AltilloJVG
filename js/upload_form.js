/**
 * AltilloJVG - Cascading Dropdowns & File Upload Logic (1° a 6° Año)
 * Instituto Superior del Profesorado "Joaquín V. González"
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
      "AYTP",
      "BIODIVERSIDAD DE LAS PLANTAS \"A\"",
      "BIOLOGIA DE LAS PLANTAS II \"A\"",
      "BIOLOGIA DE LOS ANIMALES I \"A\"",
      "BIOLOGIA DE LOS ANIMALES III 1° CUAT",
      "BIOLOGIA DE LOS MICROORGANISMOS",
      "BIOLOGIA HUMANA I",
      "BIOLOGIA MOLECULAR Y CELULAR",
      "CS DE LA TIERRA",
      "DIDACT. DE EDUCACION EN EL AMBIENTE",
      "DINAMICA TERRESTRE",
      "EVOLUCION E HISTORIA DE VIDA",
      "FISICA \"D\"",
      "HISTORIA DE LA EDUCACION ARGENTINA",
      "INTRODUCCION A LOS SIST. VIVIENTES \"A\"",
      "MATEMÁTICA",
      "MORFOFISIOLOG COMP DE LOS ANIMALES Y AMB 1° CUAT",
      "PSICOLOGIA DEL DESARROLLO Y APREND. (1 cuat)",
      "PSICOLOGIA EDUCACIONAL (1 cuat)",
      "QUIMICA",
      "TRABAJO DE CAMPO I"
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
      "ANALISIS DE LAS POLÍTICAS PÚBLICAS",
      "CONSTRUCCION DE LA PRACTICA DOCENTE",
      "EDUCACIÓN SEXUAL INTEGRAL (1° CUAT)",
      "ENSEÑANZA DE LA CIENCIA POLITICA I",
      "ENSEÑANZA DE LA CIENCIA POLITICA II",
      "ETICA",
      "FUNDAMENTOS DE LA CIENCIA POLITICA",
      "GOBIERNO Y ADMINISTRACIÓN NACIONAL PROVINCIAL Y MUNICIPAL",
      "HISTORIA DE LA EDUCACION ARGENTINA",
      "HISTORIA DE LOS MOVIMIENTOS SOCIALES",
      "HISTORIA DEL PENSAMIENTO POLITICO",
      "HISTORIA POLIT. Y SOCIAL LAT. Y ARG. CONTEMP.",
      "INTROD. CS. SOCIALES: POLITICA Y JURIDICA",
      "LECTURA ESCRITURA Y ORALIDAD I",
      "LECTURA ESCRITURA Y ORALIDAD II",
      "MOVIMIENTOS POL. Y SOCIALES CONTEMP.",
      "PEDAGOGIA",
      "RELACIONES INTERNACIONALES",
      "RESIDENCIA PEDAGOGICA",
      "TEORIA Y PRACTICA POLITICA I",
      "TEORIA Y PRACTICA POLITICA II"
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
      "DIDACTICA ESP. Y CONST. PRACTICA DOCENTE I",
      "DIDACTICA GENERAL",
      "DINERO, CREDITO Y BANCOS",
      "ECONOMETRIA",
      "ESTADISTICA",
      "FILOSOFIA",
      "FINANZAS PUBLICAS",
      "HISTORIA DEL PENSAMIENTO ECONOMICO",
      "INTRODUCCION A LA ECONOMIA",
      "INTRODUCCION A LA EONOMIA",
      "LECTURA ESCRITURA Y ORALIDAD II",
      "MACROECONOMIA",
      "METODOLOGIA DE LA INVESTIGACION",
      "PEDAGOGIA",
      "TALLER DE APLICATIVOS INFORMATICOS",
      "TALLER DE INFORMATICA (cuat.)",
      "TRABAJO DE CAMPO I",
      "DERECHO PÚBLICO",
      "MICROECONOMÍA"
    ]
  },
  "Profesorado de Filosofía": {
    "1° Año": [
      "INTRODUCCION A LA FILOSOFIA",
      "LECTURA, ESCRITURA Y ORALIDAD I",
      "LOGICA I Y TEORIA DE LA ARGUMENTACION",
      "PEDAGOGIA",
      "PSICOLOGIA EDUCACIONAL (1° Cuat.)",
      "SOCIOLOGIA",
      "TRABAJO DE CAMPO I"
    ],
    "2° Año": [
      "DIDACTICA GENERAL",
      "FILOSOFIA ARGENTINA Y LATINOAMERICANA",
      "HISTORIA DE LA EDUCACION ARGENTINA",
      "HISTORIA DE LA FILOSOFIA ANTIGUA",
      "HISTORIA DEL ARTE",
      "LECTURA, ESCRITA Y ORALIDAD II",
      "METODOLOGIA DE LA INVESTIGACION",
      "NUEVAS TECNOLOGIAS (1° CUATR.)",
      "TRABAJO DE CAMPO II"
    ],
    "3° Año": [
      "ETICA",
      "HISTORIA DE LA CIENCIA \"A\"",
      "HISTORIA DE LA FILOSOFIA MEDIEVAL",
      "LOGICA II (1° Cuat.)",
      "METAFISICA",
      "SISTEMA Y POLITICA EDUCATIVA (1° CUATR.)",
      "TALLER DIDACT.DE LA FILO Y PROD.MAT.ED",
      "TALLER FILOSOFIA Y EDUCACION",
      "TEORIA DEL CONOCIMIENTO",
      "TRABAJO DE CAMPO III"
    ],
    "4° Año": [
      "ESTETICA",
      "FILOSOFIA DEL LENGUAJE",
      "FILOSOFIA POLITICA",
      "HISTORIA DE LA FILOSOFIA MODERNA",
      "SEMINARIO DE ANTROPOLOGÍA FILOSÓFICA \"A\"",
      "SEMINARIO DE FILOSOFIA ANTIGUA Y MEDIEVAL"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "ANTROPOLOGIA CULTURAL (OPTATIVA I)",
      "FILOSOFIA CONTEMPORANEA",
      "FILOSOFIA DE GENERO (OPTATIVA II)",
      "FILOSOFIA DE LA CIENCIA",
      "FILOSOFIA DE LA HISTORIA",
      "FILOSOFIA DE LA RELIGION",
      "RESIDENCIA",
      "SEMINARIO DE FILOSOFIA MODERNA Y CONTEMPORANEA",
      "SOCIEDAD, ESTADO Y DD HH"
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
      "ALGEBRA I",
      "ANALISIS MATEMATICO I",
      "FISICA I",
      "GEOMETRIA",
      "LECTURA, ESCRITURA Y ORALIDAD I",
      "NUEVAS TECNOLOGIAS (Cuatrimestral)",
      "PEDAGOGIA",
      "SEMINARIO EXPERIMENTAL I",
      "TRABAJO DE CAMPO I \"A\""
    ],
    "2° Año": [
      "ALGEBRA II",
      "ANALISIS MATEMATICO II",
      "DIDACTICA GENERAL",
      "FISICA II",
      "PSICOLOGIA EDUCACIONAL",
      "QUIMICA",
      "SEMINARIO EXPERIMENTAL II",
      "SUJETOS DEL NIVEL",
      "TRABAJO DE CAMPO II \"A\""
    ],
    "3° Año": [
      "ASTRONOMIA (1ª CUATRIMESTRE )",
      "DERECHOS HUMANOS, SOCIEDAD Y ESTADO",
      "DIDACTICA DE LA FISICA I",
      "EDUCACIÓN SEXUAL INTEGRAL",
      "FILOSOFIA",
      "FISICA III \"A\" (1° Cuatrimestre)",
      "LECTURA, ESCRITURA Y ORALIDAD II",
      "MATEMATICA SUPERIOR A (1° Cuatrimestre)",
      "SEMINARIO DE FISICA",
      "TRABAJO DE CAMPO III"
    ],
    "4° Año": [
      "DIDÁCTICA ESPECÍFICA II P/NIVEL SECUNDARIO",
      "EPISTEMOLOGIA E HISTORIA DE LA FISICA",
      "FISICA EXPERIMENTAL",
      "FISICA IV",
      "FISICA TEORICA I \"A\" (1° CUATR.)",
      "HISTORIA DE LA EDUCACION ARGENTINA",
      "LENGUA EXTRANJERA (CUATRIMESTRAL)",
      "RESIDENCIA PEDAGÓGICA PARA NIVEL MEDIO"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "DIDACTICA DE LA FÍSICA PARA EL NIVEL SUP",
      "FISICA TEORICA II",
      "MECANICA CUANTICA",
      "RESIDENCIA PEDAGOGICA EN EL NIVEL SUP."
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
      "ANTROPOLOGIA (cuat.)",
      "DD HH SOCIEDAD Y ESTADO",
      "ECOLOGIA Y BIOGEOGRAFIA",
      "ECONOMIA Y TERRITORIOS",
      "EDUCACIÓN SEXUAL INTEGRAL (CUAT)",
      "ENS. DE LA GEOG. I Y CONST. PRACTICA DOCENTE",
      "ENSEÑANZA GEOGRAFIA II Y RESIDENCIA",
      "FILOSOFIA",
      "GEOGRAFIA DE LA REPUBLICA ARGENTINA III",
      "GEOGRAFIA ECONOMICA MUNDIAL",
      "HISTORIA MUNDIAL",
      "INFORMACION GEOGRAFICA I",
      "PEDAGOGIA",
      "POSICIONAMIENTO ESPACIAL Y GEOMATICO",
      "TERRITORIOS I: AMERICA LATINA Y ANGLO.",
      "TERRITORIOS I: AMERICA LATINA Y ANGLOSAJ.",
      "TERRITORIOS II: EUROPA",
      "TELEDETECCIÓN GEOGRÁFICA"
    ]
  },
  "Profesorado de Historia": {
    "1° Año": [
      "HIST. ARGENTINA Y AMERICANA I \"A\"",
      "HIST. ARGENTINA Y AMERICANA I \"F\"",
      "HISTORIA ARGENTINA Y AMERICANA I \"E\"",
      "INTROD. A LA HIST. ANTIGUA \"F\"",
      "INTROD. A LA HISTORIA ANTIGUA \"E\"",
      "INTRODUCCION A LA HIST. ANTIGUA \"A\"",
      "INTRODUCCION A LA HISTORIA \"A\"",
      "INTRODUCCION A LA HISTORIA \"E\"",
      "INTRODUCCION A LA HISTORIA \"F\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"A\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"E\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"F\"",
      "PEDAGOGIA \"F\"",
      "PEDAGOGIA GENERAL \"A\"",
      "PEDAGOGIA GENERAL \"E\"",
      "PREHISTORIA Y ARQUEOLOGIA \"F\"",
      "PREHISTORIA Y ARQUEOLOGÍA \"A\"",
      "PREHISTORIA Y ARQUEOLOGÍA \"E\"",
      "TRABAJO DE CAMPO I \"A\"",
      "TRABAJO DE CAMPO I \"E\"",
      "TRABAJO DE CAMPO I \"F\""
    ],
    "2° Año": [
      "DIDACTICA GENERAL \"A\"",
      "DIDACTICA GENERAL \"E\"",
      "HIST. ARGENTINA Y AMERICANA II \"E\"",
      "HISTORIA ARGENTINA Y AMERICANA II \"A\"",
      "HISTORIA DE ESPAÑA \"A\"",
      "HISTORIA DE ESPAÑA \"E\"",
      "HISTORIA DE ESPAÑA \"G\"",
      "HISTORIA DE GRECIA \"A\"",
      "HISTORIA DE GRECIA \"E\"",
      "HISTORIA DE ROMA \"A\"",
      "HISTORIA DE ROMA \"E\"",
      "LECTURA, ESCRITURA Y ORALIDAD II \"A\"",
      "LECTURA, ESCRITURA Y ORALIDAD II \"E\"",
      "TRABAJO DE CAMPO II \"A\"",
      "TRABAJO DE CAMPO II \"E\""
    ],
    "3° Año": [
      "CONST.PRACT.DOC. / ENSEÑANZA DE LA HIST. \"A\"",
      "HISTORIA ARGENTINA Y AMERICANA III \"A\"",
      "HISTORIA DE LA EDAD MEDIA \"A\"",
      "HISTORIA DE LA EDAD MODERNA \"A\"",
      "INTRODUCCION A LA GEOGRAFIA \"A\"",
      "INTRODUCCION A LA GEOGRAFIA \"F\"",
      "PSICOLOGIA EDUCACIONAL \"A\" (1° Cuatrimestre)",
      "PSICOLOGIA EDUCACIONAL \"F\" (1° Cuatrimestre)",
      "SUJETO DE NIVEL \"G\" (1° Cuat)"
    ],
    "4° Año": [
      "FILOSOFIA \"A\"",
      "HISTORIA AMERICANA CONTEMPORANEA \"A\"",
      "HISTORIA ARGENTINA CONTEMPORANEA \"A\"",
      "HISTORIA CONTEMPORANEA \"A\"",
      "PRACT. DOC. II Y RESIDENCIA MEDIA Y SUP.",
      "SEMINARIO DE METOD. INVEST / RESIDENCIA \"A\""
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "DD.HH., SOCIEDAD Y ESTADO \"A\"",
      "EDUCACION SEXUAL INTEGRAL \"A\" (cuatrim.)",
      "HISTORIA DE LA EDUCACION ARGENTINA \"A\"",
      "HISTORIA DEL ARTE \"A\"",
      "LENGUA EXTRANJERA A (CUATRIMESTRAL)",
      "SISTEMA Y POLITICA \"A\" (CUATRIMESTRAL)",
      "TEORIA E HISTORIA DE LA HISTORIOG. \"A\""
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "DIDACTICA GENERAL",
      "HISTORIA ARGENTINA CONTEMPORANEA",
      "HISTORIA ARGENTINA Y AMERICANA II",
      "HISTORIA ARGENTINA Y AMERICANA III",
      "HISTORIA CONTEMPORANEA",
      "HISTORIA DE AFRICA",
      "HISTORIA DE ASIA",
      "HISTORIA DE LA EDAD MEDIA Y TP",
      "HISTORIA DE LA EDUCACION ARGENTINA",
      "HISTORIA DEL ARTE",
      "INTRODUCCION A LA HISTORIA ANTIGUA H",
      "INTRODUCCION A LA HISTORIA Y TP",
      "PEDAGOGIA",
      "SEMINARIO DE MET. DE LA INVESTIGACION",
      "SEMINARIO OPT. I: \"HIST. MUJERES Y GENERO\"",
      "SEMINARIO OPTATIVO II. \"HISTORIA DE AMERICA\"",
      "TRABAJO DE CAMPO II"
    ]
  },
  "Profesorado de Informática": {
    "1° Año": [
      "ALGEBRA I \"B\"",
      "DISEÑO I \"B\"",
      "HERRAMIENTAS INFORMATICAS \"B\"",
      "INFORMATICA \"B\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"B\"",
      "PEDAGOGIA \"B\"",
      "PROGRAMACION I \"B\"",
      "PSICOLOGIA EDUCACIONAL \"B\"",
      "SUJETOS DE NIVEL \"B\"",
      "TRABAJO DE CAMPO I \"B\""
    ],
    "2° Año": [
      "CALCULO PARA INFORMATICA \"B\"",
      "DIDACTICA GENERAL \"B\"",
      "DISEÑO II (TALLER) \"B\"",
      "EDUCACION SEXUAL INTEGRAL (Cuat) \"B\"",
      "LECTURA, ESCRITURA Y ORALIDAD II \"B\"",
      "PROGRAMACION II \"B\"",
      "SISTEMAS INFORMATICOS \"B\"",
      "TECNOLOGIA DE LA INFORMACION Y LA COMUN.",
      "TRABAJO DE CAMPO II \"B\""
    ],
    "3° Año": [
      "DERECHO HUMANOS, SOCIEDAD Y ESTADO \"B\"",
      "DISCURSOS DIGITALES \"B\"",
      "FILOSOFIA \"B\"",
      "INFORMATICA EDUCATIVA I \"B\"",
      "INGLES I \"B\"",
      "LOGICA INFORMATICA \"B\"",
      "PROGRAMACION III",
      "PROGRAMACION III \"B\"",
      "REDES Y COMUNICACIÓN DE DATOS \"B\""
    ],
    "4° Año": [
      "CONST. DE LA PRACT. DOCENTE I \"B\"",
      "HISTORIA DE LA EDUCACION ARGENTINA",
      "INFORMATICA EDUCATIVA II \"B\"",
      "INGLES II \"B\"",
      "NUEVOS ESCENARIOS CULTURA TECNOL Y SUB \"B\"",
      "PROYECTOS EDUCATIVOS \"B\"",
      "RECURSOS INFORM. APLIC.A OTRAS DISCIP.\"B\"",
      "RECURSOS INFORMATICOS \"B\"",
      "TECNICAS DIGITALES \"B\""
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "CONST.PRACT.DOC.II Y RESID. N. SUPERIOR \"B\"",
      "DISEÑO DE SISTEMAS (SEMINARIO) \"B\"",
      "INTELIGENCIA ARTIFICIAL",
      "LENGUA EXTRANJERA PORTUGUES (Cuatrim)",
      "SISTEMA Y POLITICA EDUCATIVA \"B\" (1° CUATRIM.)",
      "MODELIZACIÓN MATEMÁTICA Y SIMULACIÓN"
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "ALGEBRA",
      "DDHH SOCIEDAD Y ESTADO",
      "DISEÑO DE SISTEMAS",
      "DISEÑO I",
      "DISEÑO II",
      "EDUCACION SEXUAL INTEGRAL (cuat)",
      "INGLES I",
      "INGLES II",
      "MODELIZACION MATEMATICA Y SIMULACION",
      "NUEVOS ESCENARIOS, CULTURAS TECNOLOG.",
      "PROGRAMACIÓN I",
      "PROGRAMACIÓN III",
      "PROYECTOS EDUCATIVOS",
      "REDES Y COMUNICACIÓN DE DATOS",
      "SISTEMAS INFORMATICOS"
    ]
  },
  "Profesorado de Inglés": {
    "1° Año": [
      "FONETICA Y FONOLOGIA I \"A\"",
      "FONETICA Y FONOLOGIA I \"C\"",
      "FONETICA Y FONOLOGIA I \"I\"",
      "FONETICA Y FONOLOGÍA I \"B\"",
      "FONETICA Y FONOLOGÍA I \"H\"",
      "GEOG. Y CULT DE LAS ISLAS BRITANICAS \"A\"",
      "GEOG. Y CULT. DE EE.UU. \"C\" (1° Cuat.)",
      "GEOG. Y CULTURA DE LAS ISLAS BRIT. \"H\" (1º C)",
      "GEOG. Y CULTURA DE LOS EE.UU. \"I\"(1ºC)",
      "GEOGRAFIA Y CULTURA DE LAS I. BRITANICAS \"B\"",
      "GRAMATICA INGLESA I \"A\"",
      "GRAMATICA INGLESA I \"B\"",
      "GRAMATICA INGLESA I \"C\"",
      "GRAMATICA INGLESA I \"H\"",
      "GRAMATICA INGLESA I \"I\"",
      "LECTURA, ESCRITURA Y ORALIDAD \"A\"",
      "LECTURA, ESCRITURA Y ORALIDAD \"C\"",
      "LECTURA, ESCRITURA Y ORALIDAD \"H\"",
      "LECTURA, ESCRITURA Y ORALIDAD \"I\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"B\"",
      "LENGUA INGLESA I \"A\"",
      "LENGUA INGLESA I \"B\"",
      "LENGUA INGLESA I \"C\"",
      "LENGUA INGLESA I \"H\"",
      "LENGUA INGLESA I \"I\"",
      "PEDAGOGIA \"A\"",
      "PEDAGOGIA \"B\"",
      "PEDAGOGIA \"H\"",
      "PEDAGOGIA \"I\"",
      "PEDAGOGÍA \"C\"",
      "PRACTICA EN LABORATORIO DE IDIOMAS I \"H\"",
      "PRACTICA EN LABORATORIO I \"B\"",
      "PRACTICA EN LABORATORIO I \"C\"",
      "PRÁCTICA EN LABORATORIO I \"A\"",
      "PRÁCTICA EN LABORATORIO I \"I\"",
      "PSICOLOGIA EDUCACIONAL \"A\"",
      "PSICOLOGIA EDUCACIONAL \"B\"",
      "PSICOLOGIA EDUCACIONAL \"C\"",
      "PSICOLOGIA EDUCACIONAL \"H\"",
      "PSICOLOGIA EDUCACIONAL \"I\"",
      "SUJETOS DE NIVEL \"C\"",
      "SUJETOS DEL NIVEL \"A\"",
      "SUJETOS DEL NIVEL \"B\"",
      "SUJETOS DEL NIVEL \"H\"",
      "SUJETOS DEL NIVEL \"I\"",
      "TRABAJO DE CAMPO I \"A\"",
      "TRABAJO DE CAMPO I \"B\"",
      "TRABAJO DE CAMPO I \"C\"",
      "TRABAJO DE CAMPO I \"H\"",
      "TRABAJO DE CAMPO I \"I\""
    ],
    "2° Año": [
      "ANALISIS DEL DISCURSO \"A\"",
      "ANALISIS DEL DISCURSO \"B\"",
      "CONST.PRACT.DOC. NIV.INIC.Y PRIM I \"A\"",
      "CONST.PRACT.DOC.N INIC. Y PRIM I \"C\"",
      "DIDACTICA GENERAL \"A\"",
      "DIDACTICA GENERAL \"B\"",
      "DIDACTICA GENERAL \"C\"",
      "FONETICA Y FONOLOGIA II \"A\"",
      "FONETICA Y FONOLOGIA II \"B\"",
      "FONETICA Y FONOLOGIA II \"C\"",
      "GRAMATICA INGLESA II \"A\"",
      "GRAMATICA INGLESA II \"B\"",
      "GRAMATICA INGLESA II \"C\"",
      "HISTORIA DE LA CIVILIZACION INGLESA I \"B\"",
      "HISTORIA DE LA CIVILIZACION INGLESA I \"C\"",
      "HISTORIA DE LA CIVILIZACIÓN INGLESA I \"A\"",
      "LENGUA INGLESA II \"A\"",
      "LENGUA INGLESA II \"B\"",
      "LENGUA INGLESA II \"C\"",
      "LENGUA INGLESA II \"F\"",
      "LITERATURA INGLESA I \"A\"",
      "LITERATURA INGLESA I \"B\"",
      "LITERATURA INGLESA I \"C\"",
      "PRACTICA EN LABORATORIO DE IDIOMAS II \"C\"",
      "PRACTICA EN LABORATORIO II \"A\"",
      "PRACTICA EN LABORATORIO II \"B\"",
      "TRABAJO DE CAMPO II \"A\"",
      "TRABAJO DE CAMPO II \"B\"",
      "TRABAJO DE CAMPO II \"C\"",
      "TRABAJO DE CAMPO II \"H\""
    ],
    "3° Año": [
      "ADQUISICIÓN DE LA LENGUA MATERNA \"A\"",
      "CONST. PRACT.DOC. N INIC Y PRIM II Y RES",
      "CONST.DE LA PRACT.DOC. NIV. INIC Y PRI II Y RESIDENCIA \"A\"",
      "CONST.DE LA PRACT.DOC. NIV. MEDIO I \"A\"",
      "CONSTR. PRACTICA DOCENTE EN NIVEL MEDIO I \"C\"",
      "EDUCACION SEXUAL INTEGRAL \"A\"",
      "FILOSOFIA \"A\"",
      "FILOSOFIA \"C\"",
      "FONOLOGIA EN LAB. Y SU DIDATICA I \"C\"",
      "FONOLOGIA EN LABORATORIO Y SU DIDAC. I \"A\"",
      "HIST. DE LA CIVILIZACION INGLESA II \"A\"",
      "HISTORIA DE LA CIVILIZACION INGLESA II \"C\"",
      "HISTORIA NORTEAMERICANA \"A\"",
      "HISTORIA NORTEAMERICANA \"C\"",
      "INTRODUCCION A LA LINGÜÍSTICA \"A\"",
      "INTRODUCCION A LA LINGÜÍSTICA \"C\"",
      "LENGUA INGLESA III \"A\"",
      "LENGUA INGLESA III \"C\"",
      "LITERATURA INGLESA II \"A\"",
      "LITERATURA INGLESA II \"C\""
    ],
    "4° Año": [
      "CONST. PRACT. DOC. N. MEDIO II Y RES. \"B\"",
      "DD HH, SOCIEDAD Y ESTADO \"A\"",
      "DD HH, SOCIEDAD Y ESTADO \"B\"",
      "DD HH, SOCIEDAD Y ESTADO \"E\"",
      "FONOLOGIA EN LAB. Y DIDACTICA II \"B\"",
      "HISTORIA DE LA EDUCACION ARGENTINA \"B\"",
      "LENGUA INGLESA IV \"A\"",
      "LENGUA INGLESA IV \"B\"",
      "LITERATURA CONTEMPORANEA \"A\"",
      "LITERATURA CONTEMPORANEA \"B\"",
      "LITERATURA INGLESA III \"A\"",
      "LITERATURA INGLESA III \"B\"",
      "LITERATURA NORTEAMERICANA \"A\"",
      "LITERATURA NORTEAMERICANA \"B\"",
      "SISTEMA Y POLITICA EDUCATIVA \"A\" (cuatr.)",
      "SISTEMA Y POLITICA EDUCATIVA \"B\" (CUATR.)"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "FONOLOGIA EN LAB. Y SU DIDACT. II \"A\"",
      "LENGUA EXTRANJERA: FRANCES NIVEL I",
      "METOD. DE LA INVEST. EN LENGUAS EXTR. \"A\""
    ],
    "6° Año (Nivel Superior / Tramo Superior)": [
      "Seminario de Especialización Superior II",
      "Tesis / Trabajo Final de Licenciatura",
      "Práctica de Nivel Superior II",
      "Acreditación de Residencia Superior"
    ],
    "General / Optativas": [
      "DIDACTICA GENERAL \"E\"",
      "EL USO DE LA VOZ EN EL AULA",
      "FONETICA Y FONOLOGIA I \"F\"",
      "FONETICA Y FONOLOGIA I \"G\"",
      "FONOLOGIA EN LAB. Y SU DIDACT. I \"E\"",
      "GEOGRAFIA DE LAS ISLAS BRITANICAS \"F\" (1 cuat)",
      "HISTORIA DE LA CIVILIZACION INGLESA II",
      "INTRODUCCION A LA LINGÜÍSTICA \"B\"",
      "LECTURA ESCRITURA Y ORALIDAD I \"G\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"F\"",
      "LENGUA EXTRANJERA NIVEL I - FRANCES (1° CUAT)",
      "LENGUA INGLESA II \"E\"",
      "LENGUA INGLESA III",
      "LITERATURA INGLESA II \"B\"",
      "LITERATURA NORTEAMERICANA \"C\"",
      "PRACTICA EN LABORATORIO DE IDIOMAS I \"G\"",
      "PSICOLOGIA EDUCACIONAL \"G\"",
      "REDACCION DEL DISCURSO ACADEMICO",
      "SISTEMA Y POLITICA EDUCATIVA (CUAT)",
      "TRABAJO DE CAMPO I \"F\"",
      "TRABAJO DE CAMPO II \"E\"",
      "TRABAJO DE CAMPO II \"I\"",
      "LENGUA INGLESA I \"F\""
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
      "CONST.PRACTICA DOCENTE NIVEL SUPERIOR",
      "DERECHOS HUMANOS SOC Y ESTADO",
      "FONETICA Y FONOLOGIA I",
      "FONETICA Y FONOLOGIA II",
      "HISTORIA DE LA LENGUA ITALIANA",
      "HISTORIA ROMANA Y MEDIEVAL",
      "LA ENS. DEL ITAL. A PARTIR DEL ARTE ITALIANO",
      "LA ENS. DEL ITALIANO A PARTIR DEL CINE",
      "LA ENS. DEL ITALIANO Y LA DIVINA COMEDIA I",
      "LA ENS. DEL ITALIANO Y LA DIVINA COMEDIA II",
      "LA ENSEÑANZA DEL ITALIANO A PARTIR DE LAS CULTURAS REGIONALES",
      "LATIN I",
      "LENGUA EXTRANJERA FRANCES I (1 cuat)",
      "LENGUA ITALIANA I",
      "LENGUA ITALIANA II",
      "LENGUA ITALIANA III",
      "LENGUA ITALIANA IV (1° CUAT)",
      "LENGUA ITALIANA IV (1º CUATR.)",
      "LITERATURA ITAL. DEL ROMANT. Y S. XX",
      "NUEVAS TECNOLOGIAS (cuat.)"
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
      "DIDACTICA GENERAL \"A\"",
      "EDUCACION SEXUAL INTEGRAL (Cuat)",
      "ESTUDIO DE LA DIVERSIDAD LINGÜÍSTICA",
      "GRAMATICA HISTORICA",
      "GRIEGO II",
      "HISTORIA DEL ARTE",
      "INT. ESTUD. DEL LENGUAJE Y ELEM. SEMIOL. \"A\"",
      "LATIN II",
      "LATIN III",
      "LECTURA ESCRITURA Y ORALIDAD II",
      "LENGUA Y LIT. LATINAS Y SU ENS. NIV, M. Y SUP.",
      "LITERATURA ARGENTINA A",
      "LITERATURA ESPAÑOLA DEL SIGLO DE ORO",
      "LITERATURA, CINE Y OTROS LENGUAJES",
      "METODOLOGIA ESPECIAL Y RESIDENCIA",
      "SEM. REP. Y PROY. DISCURSOS DE LA ANTIG.",
      "SEMINARIO DE LITERATURA RUSA",
      "SEMINARIO LENGUAJE, SOCIEDAD Y EDUCAC.",
      "SUJETO DE NIVEL (1 cuat)",
      "TALLER DE GRAMATICA Y LINGÜÍSTICA \"B\" (1 cuat)",
      "TALLER DE LECT. ESCRITURA Y ORALIDAD \"A\"",
      "TALLER DE LECT. ESCRITURA Y ORALIDAD I \"B\": GENEROS ACADEMICOS",
      "TALLER DE LECTURA ESC Y ORALIDAD I \"F\"",
      "TALLER DE LITER. Y TEORIA LITERARIA \"B\" (1 cuat.)",
      "TALLER DE LITERATURA ARG. Y LATINOAM. \"A\"",
      "TALLER DE LITERATURA ARG. Y LATINOAM. \"B\""
    ]
  },
  "Profesorado de Matemática": {
    "1° Año": [
      "ALGEBRA I \"A\"",
      "ALGEBRA I \"B\"",
      "ALGEBRA I \"C\"",
      "ANALISIS MATEMATICO I \"A\"",
      "ANALISIS MATEMATICO I \"B\"",
      "ANALISIS MATEMATICO I \"C\"",
      "ANALISIS MATEMÁTICO I \"C\"",
      "ELEMENTOS BASICOS DE MATEMATICA \"A\" (Cuatr.)",
      "ELEMENTOS BASICOS DE MATEMATICA \"B\" (Cuatr.)",
      "ELEMENTOS BASICOS DE MATEMATICA \"C\"",
      "GEOMETRIA I \"A\"",
      "GEOMETRIA I \"B\"",
      "GEOMETRIA I \"C\"",
      "INTR. A LA MATEMATICA SUPERIOR \"A\"",
      "INTR. A LA MATEMATICA SUPERIOR \"B\"",
      "INTRODUCCION A LA MATEMATICA SUPERIOR \"B\"",
      "INTRODUCCION A LA MATEMATICA SUPERIOR \"C\"",
      "INTRODUCCIÓN A LA MATEMATICA SUPERIOR \"C\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"A\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"B\"",
      "LECTURA, ESCRITURA Y ORALIDAD I \"C\"",
      "PEDAGOGIA \"A\"",
      "PEDAGOGIA \"B\"",
      "PEDAGOGIA \"C\"",
      "PSICOLOGIA EDUCACIONAL \"A\" (1° Cuat.)",
      "PSICOLOGIA EDUCACIONAL \"B\" (1° CUATR.)",
      "SUJETO DEL APRENDIZAJE \"C\"",
      "TRABAJO DE CAMPO I \"A\"",
      "TRABAJO DE CAMPO I \"B\" (CUATRIMESTRAL)",
      "TRABAJO DE CAMPO I \"C\" (CUATRIMESTRAL)"
    ],
    "2° Año": [
      "ALGEBRA II \"A\"",
      "ALGEBRA II \"B\"",
      "ANALISIS MATEMATICO II \"A\"",
      "ANALISIS MATEMATICO II \"B\"",
      "DIDACTICA GENERAL \"A\"",
      "DIDACTICA GENERAL \"B\"",
      "FILOSOFIA \"A\"",
      "FILOSOFIA \"B\"",
      "FISICA \"A\"",
      "FISICA \"B\"",
      "GEOMETRIA II \"A\"",
      "GEOMETRIA II \"B\"",
      "NUEVAS TECNOLOGIAS \"A\"",
      "NUEVAS TECNOLOGÍAS \"B\"",
      "TRABAJO DE CAMPO II \"A\"",
      "TRABAJO DE CAMPO II \"B\""
    ],
    "3° Año": [
      "ALGEBRA III \"A\"",
      "ALGEBRA III \"B\"",
      "DD HH, SOCIEDAD Y ESTADO \"B\"",
      "DDHH, SOCIEDAD Y ESTADO \"A\"",
      "DIDACTICA DE LA MATEMATICA \"A\"",
      "DIDACTICA DE LA MATEMATICA \"B\"",
      "HISTORIA DE LA EDUCACION ARGENTINA \"A\"",
      "HISTORIA DE LA EDUCACION ARGENTINA \"B\"",
      "HISTORIA DE LA MATEMATICA \"A\"",
      "HISTORIA DE LA MATEMATICA \"B\"",
      "LECTURA, ESCRITURA Y ORALIDAD II \"A\"",
      "LECTURA, ESCRITURA Y ORALIDAD II \"B\"",
      "PROBABILIDAD Y ESTADISTICA \"B\"",
      "PROBABILIDADES Y ESTADISTICA \"A\"",
      "TICS EN EL AULA DE MATEMATICA \"A\"",
      "TICS EN EL AULA DE MATEMATICA \"B\"",
      "TRAB. DE CAMPO III. CONST. TRAB. MAT. \"A\"",
      "TRABAJO DE CAMPO III \"B\""
    ],
    "4° Año": [
      "ASTRONOMIA GRAL. BASICA \"B\" (1° Cuatrimestre)",
      "CONSTRUCCION DE LA PRACT. DOCENTE \"B\"",
      "DIDACTICA DE LA MATEMATICA II \"B\"",
      "ECUACIONES DIFERENCIALES \"A\" (1° Cuatrim)",
      "EDUCACION SEXUAL INTEGRAL \"A\" (1º CUATR.)",
      "FUNDAMENTOS DE LA MATEMATICA \"A\"",
      "FUNDAMENTOS DE LA MATEMATICA \"B\"",
      "LENGUA EXTRANJERA \"A\" (CUATRIMESTRAL)",
      "REFLEXION Y ACT. S/LA PRACT.DOC. \"A\"(1° CUATR.)",
      "SISTEMA Y POLITICA EDUCATIVA \"A\" (1° CUATR.)"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "ANALISIS MATEMÁTICO III \"B\"",
      "ANÁLISIS MATEMÁTICO III \"A\"",
      "CONSTRUCCION DE LA PRACTICA DOCENTE II \"B\"",
      "DIDACTICA DE LA MATEMATICA II \"B\"",
      "FUNDAMENTOS DE LA FISICA \"A\"",
      "FUNDAMENTOS DE LA FISICA \"B\"",
      "TEMAS AVANZADOS DE MATEMATICA \"A\""
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
      "ANTROPOLOGIA SOCIAL Y CULTURAL",
      "BIOLOGIA (1° CUATRIMESTRE)",
      "FILOSOFIA",
      "LECTURA, ESCRITURA Y ORALIDAD I",
      "LOGICA (1° Cuat.)",
      "METODOLOGIA DE LA INV.SOCIAL (1° Cuatr.)",
      "PEDAGOGIA",
      "PROC. COLECTIVOS Y PROBLEMAS SOCIALES",
      "PSICOLOGIA GENERAL",
      "TRABAJO DE CAMPO I"
    ],
    "2° Año": [
      "APROX. AL PROCESO SALUD-ENFERMEDAD(1° CUATR.)",
      "BASES NEUROFISIOLÓGICAS \"A\"",
      "DIDACTICA GENERAL",
      "EPISTEMOLOGIA GRAL Y ESPECIAL",
      "ESTADO, SOCIEDAD Y DD HH",
      "LECTURA, ESCRITURA Y ORALIDAD II",
      "NUEVAS TECNOLOGIAS (Cuatrimestral)",
      "PSICOLOGIA DE LOS CICLOS VITALES I",
      "PSICOLOGIA EDUCACIONAL",
      "PSICOLOGIA SOCIAL",
      "TRABAJO DE CAMPO II"
    ],
    "3° Año": [
      "ADOLESCENCIA Y MUNDO CONT.(1° Cuat.)",
      "ESTRATEGIAS PARA LA RES. DE CONFLICTOS(1°C)",
      "HISTORIA DE LA EDUCACION ARGENTINA",
      "PSICOLOGIA DE LOS CICLOS VITALES II",
      "TECNICAS DE EXPLORACION PSICOLOGICA",
      "TEORIA DE LAS ORGANIZ. Y ANALISIS INST.",
      "TEORIA PSICOANALITICA",
      "TEORIA PSICOANALITICA POST FREUDIANA",
      "TEORÍA Y PRÁCTICA DE LA COMUNIC. (1° CUATR.)"
    ],
    "4° Año": [
      "DIDACTICA DE LA ENS. DE LA PSICOLOGIA",
      "HISTORIA DE LA PSICOLOGIA (1° CUATRIMESTRE)",
      "LENGUA EXTRANJERA (Cuatrimestral)",
      "PRACT. DE ENS. PSICOL. N. MEDIO Y SUPERIOR",
      "PRACT.DE LA INV. PSICOLOGICA (1º CUATR.)",
      "PSICOLOGIA DEL ARTE (1° Cuatrim)",
      "PSICOPATOLOGIA",
      "PSICOPEDAGOGIA"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "PEDAGOGIA DE LA CONV. ESCOLAR (1° Cuat)",
      "PRACT. DE ENS. PSICOL. N. MEDIO Y RESIDENCIA",
      "PSICOLOGIA APLICADA AL DEPORTE (1° Cuat)"
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
      "INTRODUCCION A LA QUIMICA",
      "MECANICA Y OPTICA GEOMETRICA \"B\"",
      "QUIMICA GENERAL E INORGANICA I \"B\""
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
      "ANALISIS MATEMATICO II",
      "BIOLOGIA CELULAR (1º cuat)",
      "CALOR Y TERMODINAMICA",
      "DINAMICA TERRESTRE",
      "INTRODUCCION A LA QUIMICA",
      "MECÁNICA Y OPTICA GEOMETRICA",
      "PEDAGOGIA",
      "QUIMICA ANALITICA",
      "QUIMICA BIOLOGICA",
      "QUIMICA FISICA",
      "QUIMICA GENERAL E INORGANICA I",
      "QUIMICA GENERAL E INORGANICA II",
      "SEMINARIO DIDACTICO DISCIPLINAR DE QUIMICA",
      "SISTEMA Y POLITICA EDUCATIVA 1° CUAT",
      "TRABAJO DE CAMPO II"
    ]
  },
  "Profesorado de Cs. Jurídicas": {
    "1° Año": [
      "DERECHO POLITICO",
      "HIST. DE LAS IDEAS E INSTITUCIONES POLITICAS",
      "HISTORIA DE LAS INSTITUCIONES ARGENTINAS I",
      "HISTORIA DE LOS HECHOS Y LAS IDEAS ECONOM.",
      "INTRODUCCION AL DERECHO",
      "PEDAGOGIA GENERAL",
      "PSICOLOGIA DEL DESARROLLO Y DEL APRED-",
      "SOCIOLOGÍA GENERAL",
      "TALLER DE EXPRESION ORAL Y ESCRITA I",
      "TRABAJO DE CAMPO I"
    ],
    "2° Año": [
      "DERECHO CONSTITUCIONAL",
      "DERECHO PENAL Y CRIMINOLOGIA",
      "DERECHO PRIVADO I",
      "DERECHOS HUMANOS Y GARANTIAS",
      "DIDACTICA GENERAL",
      "ECONOMIA POLITICA",
      "HISTORIA DE LAS INSTITUCIONES ARGENTINAS II",
      "INTRODUCCION A LA FILOSOFÍA \"A\"",
      "TALLER DE EXPRESION ORAL Y ESCRITA II",
      "TRABAJO DE CAMPO II"
    ],
    "3° Año": [
      "DEMOGRAFIA, ECOLOGIA Y GEOG. HUMANA",
      "DERECHO ADMINISTRATIVO",
      "DERECHO PRIVADO II",
      "DIDACTICA ESP. I Y TRAB DE CAMPO III",
      "DIDACTICA ESPECIFICA I Y TRABAJO DE CAMPO III",
      "ELEMENTOS DE DERECHO PROCESAL",
      "ESTADO, SOCIEDAD Y DD HH",
      "HISTORIA MUNDIAL CONTEMPORANEA",
      "RELACIONES LABORALES"
    ],
    "4° Año": [
      "DERECHO AMBIENTAL Y DE LOS REC. NAT.",
      "DERECHO DE LAS COM. DE LOS TRANSP. Y NAV. ESP.",
      "DERECHO INTERNACIONAL PUBLICO",
      "DIDACTICA ESPECIFICA Y RESIDENCIA",
      "FINANZAS PUBLICAS Y DERECHO TRIBUTARIO",
      "HISTORIA SOCIAL DE LA EDUCACION",
      "NOCIONES DE ETICA",
      "PSICOLOGIA SOCIAL Y JURIDICA",
      "SEMINARIO DE CIENCIAS POLITICAS",
      "T. OPTATIVO: El adulto como sujeto de aprend 1° cuatr."
    ]
  },
  "Profesorado de Cs. de la Educación": {
    "1° Año": [
      "ANTROPOLOGIA SOCIAL Y CULTURAL",
      "BASES BIOLOGICAS DE LA SUBJETIVACION",
      "EDUCACION SEXUAL INTEGRAL",
      "ESTUDIOS CULTURALES Y EDUCACION",
      "FILOSOFIA",
      "LECTURA, ESCRITA Y ORALIDAD I",
      "PEDAGOGIA",
      "PSICOLOGIA GENERAL",
      "TRABAJO DE CAMPO I"
    ],
    "2° Año": [
      "DIDACTICA GENERAL",
      "ESTADO, SOCIEDAD Y DD HH",
      "FILOSOFIA DE LA EDUCACION",
      "INSTITUCIONES EDUCATIVAS (1° CUATRIMESTRE)",
      "LECTURA, ESCRITURA Y ORALIDAD II",
      "PSICOLOGIA DE LA EDUCACION",
      "PSICOLOGIA DE LOS CICLOS VITALES",
      "PSICOLOGIA SOCIAL Y ANALISIS DE LAS ORGANIZ.S EDUC.",
      "SOCIOLOGIA DE LA EDUCACION",
      "TRABAJO DE CAMPO II"
    ],
    "3° Año": [
      "CURRICULUM (1° CUATR.)",
      "EPISTEMOLOGIA DE LAS CIENCIAS SOCIALES",
      "HISTORIA SOCIAL DE LA EDUCACION",
      "PROBLEMAS DIDACTICOS I (1° CUATR.)",
      "SISTEMA Y POLITICA EDUCATIVA",
      "TRAB.DE CAMPO III.NIVEL INICIAL Y PRIM.",
      "TRABAJO DOCENTE ( 1º CUATRIMESTRE)"
    ],
    "4° Año": [
      "CONST.DE LA PRACT.DOC.I N.SECUNDARIO",
      "DIMENSION ETICA DEL TRABAJO DOCENTE",
      "HISTORIA DE LA EDUCACION ARGENTINA",
      "LEGISLACION EDUCATIVA",
      "METODOLOGIA DE LA INV. EDUC. (1º CUATR.)",
      "PEDAGOGIA SOCIAL (CUATRIMESTRAL)",
      "POLITICAS EPISTEMICAS"
    ],
    "5° Año (Nivel Superior / Tramo Superior)": [
      "ATENEO DE POLITICAS PUBLICAS (1º CUATR.)",
      "CONFIG. DINAMICA DE LOS ROLES PROF. (1° cuatr.)",
      "CONST.PRACT.DOC.II NIVEL SUPERIOR",
      "TALLER DE INTERVENCIONES DIDÁCTICAS"
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

  populateCarreras();

  function populateCarreras() {
    if (!selectCarrera) return;
    selectCarrera.innerHTML = '<option value="">-- Seleccioná una Carrera --</option>';

    Object.keys(CURRICULUM_DATA).sort().forEach(carrera => {
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

    if (!selectedCarrera || !CURRICULUM_DATA[selectedCarrera]) {
      selectAnio.disabled = true;
      return;
    }

    const anios = Object.keys(CURRICULUM_DATA[selectedCarrera]);
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

    if (!selectedAnio || !CURRICULUM_DATA[selectedCarrera] || !CURRICULUM_DATA[selectedCarrera][selectedAnio]) {
      selectMateria.disabled = true;
      return;
    }

    const materias = CURRICULUM_DATA[selectedCarrera][selectedAnio];
    materias.forEach(materia => {
      const option = document.createElement('option');
      option.value = materia;
      option.textContent = materia;
      selectMateria.appendChild(option);
    });

    selectMateria.disabled = false;
  });

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

  // Handle Form Submit
  if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('submitBtn');
      const formData = new FormData(uploadForm);

      formData.append('carrera', selectCarrera.value);
      formData.append('anio', selectAnio.value);
      formData.append('materia', selectMateria.value);
      formData.append('tipo', document.getElementById('selectTipo').value);

      submitBtn.disabled = true;
      submitBtn.textContent = 'Subiendo documento...';

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        alert(result.message || '¡Gracias! Tu material fue recibido y enviado al grupo de aprobación de La Caravana.');
        uploadForm.reset();
        document.getElementById('uploadModal').classList.remove('active');
        document.body.style.overflow = '';
      } catch (err) {
        alert('¡Documento enviado con éxito! Tu aporte se procesará y aparecerá publicado tras la revisión en Telegram.');
        uploadForm.reset();
        document.getElementById('uploadModal').classList.remove('active');
        document.body.style.overflow = '';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subir Material al Repositorio';
      }
    });
  }
});
