const AULAS_DATABASE = [
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "HISTORIA DE LAS INSTITUCIONES ARGENTINAS I",
    "horario": "10,50 a 12,50",
    "docente": "VENTIERI, Nicolás",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "INTRODUCCION AL DERECHO",
    "horario": "8,00 a 10,50",
    "docente": "BARQUIN, Analia",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "HISTORIA DE LAS INSTITUCIONES ARGENTINAS II",
    "horario": "8,00 a 10,00",
    "docente": "ARBELO, Hernando",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "INTRODUCCION A LA FILOSOFÍA \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "KAHRS, María Laura",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "DERECHO PRIVADO II",
    "horario": "8,00 a 10,00",
    "docente": "GAUHAROU, Andrea",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "ESTADO, SOCIEDAD Y DD HH",
    "horario": "10,10 a 12,10",
    "docente": "MARTINEZ, María Celia",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "DERECHO INTERNACIONAL PUBLICO",
    "horario": "8,00 a 10,00",
    "docente": "MARTINEZ, María Celia",
    "aula": "Lab. Química B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "HISTORIA SOCIAL DE LA EDUCACION",
    "horario": "10,10 a 12,10",
    "docente": "CHIARADIA, Esteban",
    "aula": "Cubículo 7°",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "2° Año",
    "materia": "FILOSOFIA ARGENTINA Y LATINOAMERICANA",
    "horario": "10,10 a 12,50",
    "docente": "VELARDE, Marcelo",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA FILOSOFIA MEDIEVAL",
    "horario": "8,00 a 10,00",
    "docente": "FORCINITI, Martín",
    "aula": "Lab. Biologia A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "METAFISICA",
    "horario": "10,00 a 12,10",
    "docente": "THISTED, Marcos",
    "aula": "Lab. Biologia A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "4° Año",
    "materia": "FILOSOFIA DEL LENGUAJE",
    "horario": "8,00 a 10,00",
    "docente": "GARAY, Victor",
    "aula": "Lab. Biologia B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "4° Año",
    "materia": "SEMINARIO DE FILOSOFIA ANTIGUA Y MEDIEVAL",
    "horario": "10,10 a 12,10",
    "docente": "FORCINITI, Martín",
    "aula": "Lab. Química B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "FILOSOFIA DE LA RELIGION",
    "horario": "8,00 a 10,00",
    "docente": "DURAN, Maximiliano",
    "aula": "1101",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "SEMINARIO DE FILOSOFIA MODERNA Y CONTEMPORANEA",
    "horario": "10,10 a 12,10",
    "docente": "DURAN, Maximiliano",
    "aula": "1101",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "PEDAGOGIA",
    "horario": "9,20 a 11,30",
    "docente": "VOZZI, Genoveva",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "8,00 a 9,20",
    "docente": "RIVAS, Pedro / VOZZI, Genoveva",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "ESTADO, SOCIEDAD Y DD HH",
    "horario": "10,10 a 12,10",
    "docente": "MAYO, Ariel",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "PSICOLOGIA SOCIAL",
    "horario": "8,00 a 10,00",
    "docente": "ZITO LEMA, Vanesa",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "TEORIA Y DINAMICA DE LOS GRUPOS DE APREND (2ºCUAT)",
    "horario": "8,40 a 11,30",
    "docente": "NUÑEZ, Mariana",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "11,30 a 13,30",
    "docente": "MERCADO, María Belén",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "4° Año",
    "materia": "PSICOPATOLOGIA",
    "horario": "8,00 a 10,00",
    "docente": "BENEGAS LOYO, Diego",
    "aula": "1100",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "PEDAGOGIA",
    "horario": "8,00 a 11,30",
    "docente": "SAGARZAZU VEGA, Adriana",
    "aula": "1102",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "12,10 a 13,30",
    "docente": "BERGEL, Daniela / VOZZI, Genoveva",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "FILOSOFIA DE LA EDUCACION",
    "horario": "10,10 a 12,10",
    "docente": "CALDERON, Rafael",
    "aula": "Lab. Biología B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "PSICOLOGIA DE LA EDUCACION",
    "horario": "8,00 a 10,00",
    "docente": "a concurso",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "3° Año",
    "materia": "HISTORIA SOCIAL DE LA EDUCACION",
    "horario": "8,00 a 10,00",
    "docente": "MARTINEZ DEL SEL, Valeria",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "3° Año",
    "materia": "LENGUA EXTRANJERA (2ºCUATR.)",
    "horario": "10,10 a 12,10",
    "docente": "RODRIGUEZ VAN DAM, Valeria",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "4° Año",
    "materia": "ESTADISTICA SOCIOEDUCATIVA (2ºCUAT)",
    "horario": "10,00 a 12,50",
    "docente": "a concurso",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "5° Año",
    "materia": "PRACTICA DE LA INVESTIGACION EDUCATIVA (2ºcuat)",
    "horario": "10,10 a 12,10",
    "docente": "RIVAS, Pedro",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "ANALISIS MATEMATICO I",
    "horario": "10,50 a 12,50",
    "docente": "WINOGRAD, Juan",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "FISICA I",
    "horario": "8,00 a 10,50",
    "docente": "FERNANDEZ, Fernando",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL",
    "horario": "8,00 a 10,00",
    "docente": "GAVILAN CASTILLO, Diana",
    "aula": "Lab. Física A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "FISICA II",
    "horario": "10,10 a 12,50",
    "docente": "GARCIA MIRAMON, Gastón",
    "aula": "Lab. Física A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "DERECHOS HUMANOS, SOCIEDAD Y ESTADO",
    "horario": "8,00 a 10,00",
    "docente": "ECHEZURI, Adriana",
    "aula": "Lab. Física B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "4° Año",
    "materia": "FISICA IV",
    "horario": "10,10 a 12,50",
    "docente": "GIANTURCO, Andrea",
    "aula": "Lab. Física D",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "5° Año",
    "materia": "MATEMTICA SUPERIOR B (2ºCUATRIMESTRE)",
    "horario": "10,50 a 12,50",
    "docente": "FERNANDEZ, Virginia",
    "aula": "Lab. Física B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "5° Año",
    "materia": "FISICA TEORICA I B (2ºCUATRIMESTRE)",
    "horario": "8,00 a 10,00",
    "docente": "GIANTURCO, Andrea",
    "aula": "Lab. Física D",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "HISTORIA ARGENTINA Y AMERICANA I \"E\"",
    "horario": "8,00 a 11,30",
    "docente": "SANCHEZ, Laura",
    "aula": "Auditorio B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA HIST. ANTIGUA \"A\"",
    "horario": "9,20 a 12,10",
    "docente": "a concurso",
    "aula": "Auditoria A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "PREHISTORIA Y ARQUEOLOGIA \"F\"",
    "horario": "9,20 a 12,50",
    "docente": "DANIELE, Alejandro",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE ROMA \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "ESTELLER, Lorena",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "LOZANO, Ana / FIORDALISI, Flavia",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"E\"",
    "horario": "10,10 a 12,10",
    "docente": "GOLDFARB, Lila / BANDINI, Alicia",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "HISTORIA ARGENTINA Y AMERICANA III \"A\"",
    "horario": "8,00 a 12,10",
    "docente": "VOLKIND, Pablo",
    "aula": "503",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "INTRODUCCION A LA GEOGRAFIA \"F\"",
    "horario": "8,00 a 10,00",
    "docente": "DEL FABBRO, Franco",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "PSICOLOGIA EDUCACIONAL \"G\" (2ºCUAT)",
    "horario": "10,10 a 12,50",
    "docente": "KAWAGUCHI, M. Fernanda",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "4° Año",
    "materia": "SEMINARIO DE METOD. INVEST / RESIDENCIA \"A\"",
    "horario": "8,00 a 12,10",
    "docente": "BAVASSO, Ceferino",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "5° Año",
    "materia": "LENGUA EXTRANJERA A (CUATRIMESTRAL)",
    "horario": "10,50 a 12,50",
    "docente": "REY, María Alejandra",
    "aula": "301",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "5° Año",
    "materia": "SISTEMA Y POLITICA \"A\" (CUATRIMESTRAL)",
    "horario": "8,40 a 10,50",
    "docente": "GRANDOLI, María Eugenia",
    "aula": "301",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "ALGEBRA I \"B\"",
    "horario": "10,50 a 12,10",
    "docente": "PARONI, Andrea",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "HERRAMIENTAS INFORMATICAS \"B\"",
    "horario": "9,20 a 10,50",
    "docente": "BOMBELLI, Enrique",
    "aula": "Lab. Informática B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "EDUCACION SEXUAL INTEGRAL (Cuat) \"B\"",
    "horario": "12,10 a 13,30",
    "docente": "VERONELLI, Agustina",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD II \"B\"",
    "horario": "8,00 a 9,20",
    "docente": "CARBONARO, Esteban",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "SISTEMAS INFORMATICOS \"B\"",
    "horario": "9,20 a 12,10",
    "docente": "GUECIA, Claudio",
    "aula": "Lab. Informática A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "DERECHO HUMANOS, SOCIEDAD Y ESTADO \"B\"",
    "horario": "10,10 a 12,10",
    "docente": "GONZALEZ, Gustavo",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "RECURSOS INFORM. APLIC.A OTRAS DISCIP.\"B\"",
    "horario": "8,00 a 9,20",
    "docente": "GUECIA, Claudio",
    "aula": "Lab. Informática B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "TECNICAS DIGITALES \"B\"",
    "horario": "12,10 a 13,30",
    "docente": "SANTUCHO, José",
    "aula": "Lab. Informática A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "5° Año",
    "materia": "DISEÑO DE SISTEMAS (SEMINARIO) \"B\"",
    "horario": "9,20 a 12,10",
    "docente": "SANTUCHO, José",
    "aula": "Lab. Informática A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PRÁCTICA EN LABORATORIO I \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "PEREZ PONSA, Victoria",
    "aula": "Lab. Idiomas A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PSICOLOGIA EDUCACIONAL \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "RIVAROLA BRITEZ, Ma del Rocío",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"A\"",
    "horario": "9,20 a 10,50",
    "docente": "GUILLEN, María Ayelén /",
    "aula": "603",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GRAMATICA INGLESA I \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "CORONEL, Angel",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PRACTICA EN LABORATORIO I \"B\"",
    "horario": "10,10 a 12,10",
    "docente": "IRAZABAL, Ana (LICENCIA)",
    "aula": "Lab. Idiomas B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GEOG. Y CULT. DE LAS ISLAS BRITANICAS \"C\" (2° Cuat.)",
    "horario": "10,50 a 12,50",
    "docente": "MENAN, Carina",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PEDAGOGÍA \"C\"",
    "horario": "8,00 a 10,00",
    "docente": "MACIEL, María Magdalena",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD \"H\"",
    "horario": "10,50 a 12,10",
    "docente": "MIRAMONTES, Ana",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"H\"",
    "horario": "8,00 a 10,50",
    "docente": "TRAVERSO, Cecilia",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GRAMATICA INGLESA I \"I\"",
    "horario": "11,30 a 12,50",
    "docente": "NULHEM, Romina",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"I\"",
    "horario": "10,10 a 11,30",
    "docente": "a concurso",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PRÁCTICA EN LABORATORIO I \"I\"",
    "horario": "8,00 a 10,00",
    "docente": "PEREZ PONSA, Victoria",
    "aula": "Lab. Idiomas A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "ANALISIS DEL DISCURSO \"A\"",
    "horario": "11,30 a 13,30",
    "docente": "ROSSELL, Jorge David",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL \"A\"",
    "horario": "9,20 a 11,30",
    "docente": "VAZQUEZ, Juan José",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "GONZALEZ, Pamela",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "HISTORIA DE LA CIVILIZACION INGLESA I \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "RODRIGUEZ, Gabriel",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "CIPPONERI, Gabriela",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "HISTORIA DE LA CIVILIZACION INGLESA I \"C\"",
    "horario": "8,00 a 10,00",
    "docente": "RODRIGUEZ, Gabriel",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"C\"",
    "horario": "10,10 a 12,50",
    "docente": "KARAMANIAN, Noralí",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"F\"",
    "horario": "8,00 a 10,00",
    "docente": "NULHEM, Romina",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"H\"",
    "horario": "8,00 a 9,20",
    "docente": "a concurso",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "CONST.DE LA PRACT.DOC. NIV. INIC Y PRI II Y RESIDENCIA \"A\"",
    "horario": "11,30 a 12,50",
    "docente": "SPOLITA, Sabrina",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "CONST.DE LA PRACT.DOC. NIV. MEDIO I \"A\"",
    "horario": "8,00 a 11,30",
    "docente": "QUINTERNO, Mariano",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA CIVILIZACION INGLESA II \"C\"",
    "horario": "10,50 a 12,50",
    "docente": "GATTI, María Eugenia",
    "aula": "603",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "LITERATURA INGLESA II \"C\"",
    "horario": "8,00 a 10,50",
    "docente": "JACOVKIS, Lina",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LENGUA INGLESA IV \"A\"",
    "horario": "11,30 a 13,30",
    "docente": "GIANERA, Luis",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "SHINZATO, Federico",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LENGUA INGLESA IV \"B\"",
    "horario": "9,20 a 13,30",
    "docente": "CARBALLEDO, Daniel",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "FONOLOGIA EN LAB. Y SU DIDACT. II \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "IRAZABAL, Ana (LICENCIA)",
    "aula": "Lab. Idiomas B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "5° Año",
    "materia": "METOD. DE LA INVEST. EN LENGUAS EXTR. \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "MORENO, Analía",
    "aula": "Edulab",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "ALFABETIZACION \"A\" (Cuatrimestral)",
    "docente": "10,10 a 12,10",
    "aula": "OJEA, Gladys / a concurso",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "EL PROF.DE INGLES Y EL MAESTRO DE GRADO \"A\"",
    "docente": "8,00 a 10,00",
    "aula": "LARA, Camila / a concurso",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ALGEBRA I \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "TAJEYAN, Silvia",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "RAMAS, María Fernanda",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA MATEMATICA SUPERIOR \"B\"",
    "horario": "10,50 a 12,10",
    "docente": "MONTENEGRO, Victor",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"B\"",
    "horario": "8,40 a 10,50",
    "docente": "RAMAS, María Fernanda",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"B\" (CUATRIMESTRAL)",
    "horario": "12,10 a 13,30",
    "docente": "GOLDFARB, Lila /",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ANALISIS MATEMÁTICO I \"C\"",
    "horario": "9,20 a 11,30",
    "docente": "CAYON, Rodrigo",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA MATEMATICA SUPERIOR \"C\"",
    "horario": "8,00 a 9,20",
    "docente": "COSTA, Carlos",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"C\" (CUATRIMESTRAL)",
    "horario": "11,30 a 12,50",
    "docente": "VAZQUEZ, Juan José /",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "FISICA \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "FIGUEROA, Juan Domingo",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "GEOMETRIA II \"A\"",
    "horario": "10,10 a 12,50",
    "docente": "COSTA, Carlos",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "GEOMETRIA II \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "SANTACATTERINA, Martín",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "BISSO, Elena /",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "DDHH, SOCIEDAD Y ESTADO \"A\"",
    "horario": "9,20 a 11,30",
    "docente": "DE LA VIA, Marcela",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "PROBABILIDADES Y ESTADISTICA \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "PIÑEIRO, Gustavo",
    "aula": "603",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "DIDACTICA DE LA MATEMATICA \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "FIORE, Santiago",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "TRABAJO DE CAMPO III \"B\"",
    "horario": "10,50 a 12,10",
    "docente": "FIORE, Santiago",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "TICS EN EL AULA DE MATEMATICA \"A\"",
    "horario": "11,30 a 13,30",
    "docente": "APARISI, Liber",
    "aula": "Lab. Informática B",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "ECUACIONES DIFERENCIALES \"B\" (2° Cuatrim)",
    "horario": "8,00 a 10,50",
    "docente": "MONTENEGRO, Victor",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "5° Año",
    "materia": "FUNDAMENTOS DE LA FISICA \"A\"",
    "horario": "10,50 a 12,10",
    "docente": "FERNANDEZ, Fernando",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "5° Año",
    "materia": "TEMAS AVANZADOS DE MATEMATICA \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "ACUÑA, Dario",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "5° Año",
    "materia": "FUNDAMENTOS DE LA FISICA \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "FERNANDEZ, Virginia",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "MATEMATICA",
    "horario": "PRERREQUISITO DE INFORMATICA (CUATR.)",
    "docente": "11,30 a 13,30",
    "aula": "BOMBELLI, Enrique",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "1° Año",
    "materia": "QUIMICA GENERAL E INORGANICA I \"B\"",
    "horario": "8,40 a 12,50",
    "docente": "MARINO, Dolores",
    "aula": "Lab. Química A",
    "turno": "Mañana",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIODIVERSIDAD DE LAS PLANTAS \"A\"",
    "horario": "BRIGNONE NICOLAS",
    "docente": "",
    "aula": "LAB B BIO",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA DE LAS PLANTAS II \"A\"",
    "horario": "A CONCURSO",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA DE LOS ANIMALES I \"A\"",
    "horario": "A CONCURSO",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "MACIEL, MARIA MAGDALENA 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. A BIOL.",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "CAYON, RODRIGO 12,50 a 15,30",
    "docente": "",
    "aula": "300",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "PSICOLOGIA DEL DESARROLLO Y DEL APRENDIZAJE (2 cuat)",
    "horario": "BRIEUX OLIVERA, CAROLINA 15,30 a 18,10",
    "docente": "",
    "aula": "300",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "CS DE LA TIERRA",
    "horario": "BAO JOSE 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. A FISICA",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "QUIMICA",
    "horario": "MARINO DOLORES 13:30 a17:30",
    "docente": "",
    "aula": "LAB. A QUIM",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "DINAMICA TERRESTRE",
    "horario": "PAEZ REHERMANN 15,30 A 17,30",
    "docente": "",
    "aula": "LAB A FISICA",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "GENETICA AMBIENTE Y SOCIEDAD",
    "horario": "GHIO SERGIO 14,10 A 16,50",
    "docente": "",
    "aula": "301",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "CONSTRUCCION DE LA PRACTICA DOCENTE",
    "horario": "AZOFRA, GISELA 12,50 a 14,50",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "ENSEÑANZA DE LA CIENCIA POLITICA II",
    "horario": "AZOFRA, GISELA 15,30 a 17,30",
    "docente": "",
    "aula": "704",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "GOBIERNO Y ADMINISTRACIÓN NACIONAL PROVINCIAL Y MUNICIPAL",
    "horario": "BARRIONUEVO, LUIS 16,10 a18,50",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "HISTORIA DEL PENSAMIENTO POLITICO",
    "horario": "TABAKIAN DIEGO 15,30 A 16,50",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "HISTORIA POLIT. Y SOCIAL LAT. Y ARG. CONTEMP.",
    "horario": "MOLINARO, LEANDRO 15,30 a 18,10",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "INTROD. CS. SOCIALES: POLITICA Y JURIDICA",
    "horario": "LOMBA, NOELIA 13,30 a 15,30",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD I",
    "horario": "BASUALDO, JOSE LUIS 16,50 a 18,10",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "RESIDENCIA PEDAGOGICA",
    "horario": "AZOFRA, GISELA 17,30 a 18,50",
    "docente": "",
    "aula": "CUB",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "TEORIA Y PRACTICA POLITICA I",
    "horario": "MELFI LUCAS 13,30 A 15,30",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "TEORIA Y PRACTICA POLITICA II",
    "horario": "RODRIGUEZ, MARIA TERESA 14,50 a 16,10",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "DIDACTICA GENERAL",
    "horario": "VAZQUEZ, JUAN JOSE 13,30 a 15,30",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "FILOSOFIA",
    "horario": "KAHRS, LAURA 15,30 a 17,30",
    "docente": "",
    "aula": "806",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "HISTORIA DEL PENSAMIENTO ECONOMICO",
    "horario": "WAINER, VALERIA 13,30 A 15,30",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "INTRODUCCION A LA ECONOMIA",
    "horario": "MARTIN VICEDO, MARCO 16,50 A 18,10",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "MACROECONOMIA",
    "horario": "WAINER, VALERIA 15,30 a 16,50",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "TALLER DE APLICATIVOS INFORMATICOS",
    "horario": "PATANE, JIMENA 16,50 a 18,10",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "TALLER DE INFORMATICA (cuat.)",
    "horario": "BOMBELLI, ENRIQUE 13,30 a 15,30",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "ECONOMÍA",
    "anio": "General",
    "materia": "MICROECONOMÍA",
    "horario": "RODRIGUEZ, MATIAS 15,30 A 18,10",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "ALBORNOZ, MARTIN 13,30 a 14,50",
    "docente": "",
    "aula": "701",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "EDUCACIÓN SEXUAL INTEGRAL (CUAT)",
    "horario": "GUBERMAN, DANIELA 16,50 a 18,10",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "ENS. DE LA GEOG. I Y CONST. PRACTICA DOCENTE",
    "horario": "PITETTI, LAURA 12,50 a 15,30",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "ENSEÑANZA GEOGRAFIA II Y RESIDENCIA",
    "horario": "SARACENO, SANDRA 13,30 a 15,30",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "HISTORIA MUNDIAL",
    "horario": "SANTOS, DIEGO 15,30 a 17,30",
    "docente": "",
    "aula": "501",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "INFORMACION GEOGRAFICA I",
    "horario": "BOLLA, MARIA LEONOR 13,30 a 15,30",
    "docente": "",
    "aula": "501",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "TERRITORIOS II: EUROPA",
    "horario": "BOLLA, MARIA LEONOR 15,30 a 17,30",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "POSICIONAMIENTO ESPACIAL Y GEOMATICO",
    "horario": "MATA, VERONICA 15:30 a 18:10",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "TERRITORIOS I: AMERICA LATINA Y ANGLO.",
    "horario": "PAEZ REHERMANN, VALERIA 12:50 a 15:30",
    "docente": "",
    "aula": "604",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA ARGENTINA CONTEMPORANEA",
    "horario": "A CONCURSO",
    "docente": "",
    "aula": "400",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA ARGENTINA Y AMERICANA III",
    "horario": "ROBLES, NIDIA 15,30 a 17,30",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA CONTEMPORANEA",
    "horario": "RODRIGUEZ O., MARIANO 15,30 a 17,30",
    "docente": "",
    "aula": "400",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DE AFRICA",
    "horario": "PERAZZO, SILVIA 13,30 a 15,30",
    "docente": "",
    "aula": "200",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DEL ARTE",
    "horario": "DEL NEGRO, MARIELA 12,50 a 15,30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "PEDAGOGIA",
    "horario": "LAFIOSCA, MARIA LUZ 16,10 a 18,10",
    "docente": "",
    "aula": "200",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "SEMINARIO OPTATIVO II. \"HISTORIA DE AMERICA\"",
    "horario": "CASARETTO SAMANTA 15,30 a 17,30",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "GOLDFARB, LILA 13,30 a 15,30",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "DDHH SOCIEDAD Y ESTADO",
    "horario": "DE LA VIA, MARCELA 12,50 a 14,50",
    "docente": "",
    "aula": "1000",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "DISEÑO II",
    "horario": "FERNANDEZ BLANCO, CECILIA 14,50 a 17,30",
    "docente": "",
    "aula": "LAB. A INF.",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "EDUCACION SEXUAL INTEGRAL (cuat)",
    "horario": "VERONELLI, AGUSTINA 13,30 a 14,50",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "PROGRAMACIÓN I",
    "horario": "SIGAMPA, ALEJANDRO 13,30 a 16,10",
    "docente": "",
    "aula": "LAB. B INF.",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "PROYECTOS EDUCATIVOS",
    "horario": "BRAVO, DANIEL 15,30 a 18,10",
    "docente": "",
    "aula": "1001",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "REDES Y COMUNICACIÓN DE DATOS",
    "horario": "RUIZ, MATIAS 14,50 a 17,30",
    "docente": "",
    "aula": "1000",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "MODELIZACION MATEMATICA Y SIMULACION",
    "horario": "PARONI, ANDREA 12:50 a 14:50",
    "docente": "",
    "aula": "1002",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "GEOGRAFIA DE EEUU \"F\" (2 cuat)",
    "horario": "A CONCURSO",
    "docente": "",
    "aula": "603",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "INTRODUCCION A LA LINGÜÍSTICA \"B\"",
    "horario": "NULHEM, ROMINA 15,30 a 17,30",
    "docente": "",
    "aula": "604",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA NIVEL II - FRANCES (2° CUAT)",
    "horario": "LUZAR, NOELIA 14,50 A 16,50",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA INGLESA I \"G\"",
    "horario": "MUSE ROMINA 14,50 A 17,30",
    "docente": "",
    "aula": "601",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA INGLESA II \"E\"",
    "horario": "MONTSERRAT, MARIANO 13,30 a 16,50",
    "docente": "",
    "aula": "602",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LITERATURA INGLESA II \"B\"",
    "horario": "MENAN, CARINA 12,50 a 15,30",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "PRACTICA EN LABORATORIO DE IDIOMAS I \"G\"",
    "horario": "LORENZO, JULIO 12,50 a 14,50",
    "docente": "",
    "aula": "LAB. A IDIOM.",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "REDACCION DEL DISCURSO ACADEMICO",
    "horario": "CIPONERI, GABRIELA 12,50 a 14,10",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "SISTEMA Y POLITICA EDUCATIVA (CUAT)",
    "horario": "A CONCURSO",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO II \"E\"",
    "horario": "RODRIGUEZ, MARIA 16,50 a 18,10",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I \"F\"",
    "horario": "RODRIGUEZ, MARIA 14,50 a 16,10",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO II \"I\"",
    "horario": "RODRIGUEZ, MARIA 13,30 a 14,50",
    "docente": "",
    "aula": "603",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "CONST.PRACTICA DOCENTE NIVEL SUPERIOR",
    "horario": "SCHEINER, IRENE 14,10 a 15,30",
    "docente": "",
    "aula": "804",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "HISTORIA DE LA LENGUA ITALIANA",
    "horario": "VOMMARO , GISELA 15, 30 a 18,10",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "HISTORIA ROMANA Y MEDIEVAL",
    "horario": "NATOLO, ANTONIO GABRIEL 13:30 a 15:30",
    "docente": "",
    "aula": "802",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "DERECHOS HUMANOS SOC Y ESTADO",
    "horario": "NATOLO, ANTONIO GABRIEL 15:30 a 17:30",
    "docente": "",
    "aula": "802",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LA ENS. DEL ITAL. A PARTIR DEL ARTE ITALIANO",
    "horario": "MICHEA, AMALIA 14,10 a 15,30",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LA ENS. DEL ITALIANO Y LA DIVINA COMEDIA II",
    "horario": "FERNANDEZ SPEIER, CLAUDIA 16,50 a 18,10",
    "docente": "",
    "aula": "803",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LA ENSEÑANZA DEL ITALIANO A PARTIR DE LAS CULTURAS REGIONALES",
    "horario": "SCHEINER, IRENE 15,30 a 16,50",
    "docente": "",
    "aula": "804",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LENGUA ITALIANA II",
    "horario": "FERNANDEZ SPEIER, CLAUDIA 13,30 a 14,50",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "NUEVAS TECNOLOGIAS (cuat.)",
    "horario": "OLIVERA, CYNTHIA 16,50 a 18,50",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "DIDACTICA GENERAL \"A\"",
    "horario": "PERUGINI, YOLANDA 12,50 a 14,50",
    "docente": "",
    "aula": "102",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "GRAMATICA HISTORICA",
    "horario": "BREIJO, MARIANA 12,50 a 14,50",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LATIN II",
    "horario": "PALACIOS, JIMENA 15,30 a 17,30",
    "docente": "",
    "aula": "701",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LATIN III",
    "horario": "NASTA, MARCELA 15,30 a 17,30",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LENGUA Y LIT. LATINAS Y SU ENS. NIV, M. Y SUP.",
    "horario": "BREIJO, MARIANA 14,50 a 17,30",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LITERATURA ESPAÑOLA DEL SIGLO DE ORO",
    "horario": "OTERO MAC DOUGALL, AGUSTINA 12,50 a 15,30",
    "docente": "",
    "aula": "704",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LITERATURA, CINE Y OTROS LENGUAJES",
    "horario": "CARTOCCIO, EDUARDO 14,50 a 17,30",
    "docente": "",
    "aula": "700",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SEM. REP. Y PROY. DISCURSOS DE LA ANTIG.",
    "horario": "RIVAS, EZEQUIEL 12,50 a 14,50",
    "docente": "",
    "aula": "1101",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "TALLER DE LECT. ESCRITURA Y ORALIDAD \"A\"",
    "horario": "FRUGONI, SERGIO 13,30 a 15,30",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "TALLER DE LECT. ESCRITURA Y ORALIDAD I \"B\": GENEROS ACADEMICOS",
    "horario": "SAMPEDRO CARLOS 15,30 a 17,30",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "TALLER DE LITERATURA ARG. Y LATINOAM. \"A\"",
    "horario": "MINGUZZI, ARMANDO 15,30 a 18,10",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "METODOLOGIA ESPECIAL Y RESIDENCIA",
    "horario": "13,30 A 14,50",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "ANALISIS MATEMATICO II",
    "horario": "DIAZ, ELSA 13,30 a 17,30",
    "docente": "",
    "aula": "803",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "CALOR Y TERMODINAMICA",
    "horario": "GARCIA, ROBERTO 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. B FISICA",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA ANALITICA",
    "horario": "VANARELLI, MAURO 15,30 a 17,30",
    "docente": "",
    "aula": "LAB. B FISICA",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "SEMINARIO DIDACTICO DISCIPLINAR DE QUIMICA",
    "horario": "IRRERA, MARIA ETEL 15,30 a 18,10",
    "docente": "",
    "aula": "LAB. D FISICA",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "SEM EN INV EN DIDACT DE LA QUIMICA (2°CUAT)",
    "horario": "IRRERA, MARIA ETEL 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. D FISICA",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "INTRODUCCION A LA QUIMICA",
    "horario": "DOCE LAURA 13,30 A 18,50",
    "docente": "",
    "aula": "LAB. A QUIM",
    "turno": "Tarde",
    "dia": "Lunes"
  },
  {
    "carrera": "BARANZELLI, DANTE",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "FILOSOFÍA",
    "docente": "2*B",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BAVASSO, CEFERINO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "HISTORIA MUNDIAL",
    "docente": "1°B",
    "aula": "602",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BELLUCCI, MARIA CECILIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "TC I (cuatrimestral)",
    "docente": "1*",
    "aula": "CUB 9",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BISSO, ELENA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "SUJETO DEL APRENDIZAJE",
    "docente": "1°E",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BOLLA, LEONOR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA DE LA REPÚBLICA ARGENTINA III",
    "docente": "4°B",
    "aula": "602",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BRAILOVSKY, NADIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°B",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BRAILOVSKY, NADIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "SUJETOS DE NIVEL",
    "docente": "1°C",
    "aula": "501",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BRAVO DANIEL",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "NUEVAS TECNOLOGÍAS",
    "docente": "4*A",
    "aula": "A INFO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BRIGNONE, NICOLAS",
    "anio": "General",
    "materia": "BIOLOGÌA",
    "horario": "BIODIVERSIDAD de las PLANTAS",
    "docente": "3ºB",
    "aula": "B BIO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "BUBELLO PABLO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE LA EDAD MODERNA Y TP",
    "docente": "3*C",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "CABRERA SEBASTIAN",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "FONÉTICA Y FONOLOGÍA III",
    "docente": "3*",
    "aula": "801",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "CARMOSINO, JULIETA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "CONSTRUCCIÓN DE LA PRÁCTICA DOCENTE PARA EL NIVEL MEDIO",
    "docente": "3°D",
    "aula": "1102",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "CASARETO, SAMANTA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SEMINARIO OPTATIVO II: HISTORIA AMERICANA",
    "docente": "B",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "CASARETO, SAMANTA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SEMINARIO OPTATIVO II: HISTORIA AMERICANA",
    "docente": "D",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "CHAVEZ, CHRISTIAN",
    "anio": "General",
    "materia": "MATEMATICA",
    "horario": "DIRECCION",
    "docente": "----",
    "aula": "---",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "CHIARADIA ESTEBAN",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "Historia de la EDUC. ARG",
    "docente": "3ºB",
    "aula": "ANEXO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "CIMOLI, RICARDO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ASIA",
    "docente": "C",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "CRUZ, FACUNDO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "PRINCIPIOS DE LA ADM.",
    "docente": "2*A",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DAMATTO, SOL",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "EDUCACIÓN SEXUAL INTEGRAL",
    "docente": "5°C",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DAMATTO, SOL",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "EDUCACIÓN SEXUAL INTEGRAL",
    "docente": "5°B",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DE ESCALADA PLA, ALEJANDRA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "SIC",
    "docente": "1*A",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DE LA VEGA, GUSTAVO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DEL PENSAMIENTO POLÍTICO",
    "docente": "C",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DEL FABBRO, FRANCO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°B",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DI VICENZO, DIEGO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "SEM.CANON",
    "docente": "5°B",
    "aula": "ANEXO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DOLCE, MARÍA",
    "anio": "General",
    "materia": "BIOLOGÌA",
    "horario": "PSICOLOGIA EDUCACIONAL – 1ª CUAT -",
    "docente": "1ºC",
    "aula": "----------",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DOLCE, MARÍA",
    "anio": "General",
    "materia": "BIOLOGÌA",
    "horario": "PSICOLOGIA DEL DESARR – 2ª CUAT -",
    "docente": "1ºC",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "DUTTO, GABRIEL",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALCE",
    "docente": "1ºE",
    "aula": "ANEXO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ELIAS, YAHEL",
    "anio": "General",
    "materia": "FRANCES",
    "horario": "LENGUA FRANCESA I",
    "docente": "1°",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ESTELLER, LORENA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ROMA",
    "docente": "2*C",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "FERNANDEZ, ALEJANDRA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "INFORMACION GEOGRÁFICA II",
    "docente": "3°B",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "FERNANDEZ, GRISELDA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "FILOSOFÍA",
    "docente": "5*",
    "aula": "CUB. 7",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "FERREYRA FERNÁNDEZ, DANIEL",
    "anio": "General",
    "materia": "INGLES",
    "horario": "LENGUA INGLESA IV",
    "docente": "4°D",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "FRANCHI, FULVIO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "SEM. LIT RUSA y de otro patrimonio. Culturales no Occiden.",
    "docente": "5ºB",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GANDINI, MARIA JOSE",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Trabajo De Campo I",
    "docente": "1ªE",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GANDINI, MARIA JOSE",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Trabajo De Campo II",
    "docente": "2°F",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GANDINI, MARIA. JOSÉ",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "CONSTR. DE LA PRÁCTICA DOCENTE EN LOS NIVELES INICIAL Y PRIMA II",
    "docente": "3°D",
    "aula": "1101",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GARCIA MARIA VICTORIA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALLER de LEO 1 : GÉNEROS ACADÉMICOS",
    "docente": "1ºC",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GARCIA, ADRIANA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "TC I (cuatrimestral)",
    "docente": "1*",
    "aula": "CUB 9",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GARONI, MARIANO",
    "anio": "General",
    "materia": "MATAMATICA",
    "horario": "ANALISIS MATEMATICO I",
    "docente": "1° D",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GAVILAN CASTILLO, DIANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "DIDACTICA GENERAL",
    "docente": "D",
    "aula": "LAB A FIS",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GHIO , SERGIO",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "GENETICA, AMBIENTE, Y SOCIEDAD - 1er. Cuat.",
    "docente": "5°B",
    "aula": "----",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GONZALEZ, NANCY",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "CONTABILIDAD GESTION Y COSTOS",
    "docente": "3*A",
    "aula": "804",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GUALPA, VALERIA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "PEDAGOGÍA",
    "docente": "1*B",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "GUERRIERI, DIEGO",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "MORFOFISIOLOGIA COMPARADA DE LOS ANIMALES Y EL AMBIENTE .2° CUAT . -",
    "docente": "5°B",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "HARARI, FABIÁN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA I Y TP",
    "docente": "1*B",
    "aula": "AUD A",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "HARARI, FABIÁN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA I Y TP",
    "docente": "1*D",
    "aula": "AUD A",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "IRIARTE, ERNESTO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1*D",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "IRIARTE, ERNESTO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2*D",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "JAITTE, PABLO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DEL PENSAMIENTO SOCIAL Y ECONOMICO",
    "docente": "B",
    "aula": "902",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "JURADO, MELINA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LATIN I - 2° CUAT -",
    "docente": "1ºC",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "JURADO, MELINA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LATIN II",
    "docente": "2ºC",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "KAHRS, LAURA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "FILOSOFÍA",
    "docente": "3°C",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "LAFORGUE, FLORENCIA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "EDUCACIÓN SEXUAL INTEGRAL",
    "docente": "3°D",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "LINARES, MAXIMILIANO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LITERATURA ARGENTINA",
    "docente": "4ºB",
    "aula": "ANEXO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "LORENZO, JULIO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Fonética Y Fonología I",
    "docente": "1°D",
    "aula": "B IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MACIEL, MARIA MAGDALENA",
    "anio": "General",
    "materia": "BIOLOGÌA",
    "horario": "Historia de la EDUC. ARG",
    "docente": "4ºB",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MANGIANTIN, MARTIN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA CONTEMPORÁNEA",
    "docente": "4*B",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MANRIQUE, DARIO",
    "anio": "General",
    "materia": "GEOGRAFIA",
    "horario": "CIENCIAS DE LA TIERRA II",
    "docente": "2°B",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MARINO, DOLORES",
    "anio": "General",
    "materia": "BIOLOGÌA",
    "horario": "QUÍMICA",
    "docente": "1ºB",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MARTINEZ, ALEJANDRA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "TRABAJO DE CAMPO III: CONSTRUCCIÓN DEL TRABAJO MATEMÁTICO EN EL AULA",
    "docente": "3°C",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MASON, CAMILO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DEL PENSAMIENTO SOCIAL Y ECONÓMICO",
    "docente": "C",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MATA, VERONICA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "INFORMACION GEOGRÁFICA II",
    "docente": "3°C",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MATA, VERONICA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TELEDETECCIÓN GEOGRÁFICA",
    "docente": "4°C",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MAYORGA, MIRTA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "PEDAGOGÍA GENERAL",
    "docente": "1°D",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MIGNAQUI, LUCIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "DIDÁCTICA DE LA FONÉTICA",
    "docente": "4*",
    "aula": "801",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MINGHETTI, Nadia",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "CONSTRUCCIÓN DE LA PRÁCTICA DOCENTE II / RESIDENCIA EN MEDIA Y SUPERIOR",
    "docente": "4°C",
    "aula": "400",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MINGUZZI, ARMANDO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALCE",
    "docente": "1ºD",
    "aula": "ANEXO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MONTEMURRO, MARIA LAURA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DEL ARTE",
    "docente": "5*B",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "MONTSERRAT, MARIANO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LENGUA INGLESA II",
    "docente": "2°D",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "NASTA, MARCELA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LATIN II",
    "docente": "2ºB",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ORIOLO, EZEQUIEL",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "COORDINACIÓN",
    "docente": "-",
    "aula": "---",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ORIOLO, EZEQUIEL",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "GEOMETRÍA II",
    "docente": "2°C",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ORLANTE, EMILIANO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LIT. en LENGUA INGLESA Y ALEMANA",
    "docente": "3ºB",
    "aula": "400",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ORLANTE, EMILIANO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALLER LECTURA DE TXT LIT. – 2* Cuatr. -",
    "docente": "1°F",
    "aula": "B Química",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "OTERO, DANIEL",
    "anio": "General",
    "materia": "GEOGRAFIA",
    "horario": "TERRITORIOS IV: AFRICA Y OCEANIA",
    "docente": "5°C",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PAEZ REHERMANN , VALERIA",
    "anio": "General",
    "materia": "BIOLOGÌA",
    "horario": "DINÁMICA TERRESTRE",
    "docente": "4ºB",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PAZ, ADRIANA",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "QUIMICA",
    "docente": "1ºC",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PENELLA, MARÍA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "SUJETOS DE NIVEL",
    "docente": "1°B",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PICCOLO, MELINA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "CONSTRUCCIÓN DE LA PRÁCTICA DOCENTE EN LOS NIVELES INICIAL Y PRIMARIO I",
    "docente": "2°D",
    "aula": "1101",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PIGOLI, EDGARDO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LITER. CINE y otros LENG.",
    "docente": "5ºB",
    "aula": "A FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PINGARO, GONZALO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ALGEBRA III",
    "docente": "3°C",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PITETTI, LAURA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA ECONÓMICA MUNDIAL",
    "docente": "2°C",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PITETTI, LAURA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA URBANA RURAL",
    "docente": "4°B",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PONCE, ARIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PREHISTORIA Y ARQUEOLOGÍA ARGENTINA Y AMERICANA Y TP",
    "docente": "1*B",
    "aula": "ANEXO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "PONCE, ARIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PREHISTORIA Y ARQUEOLOGÍA ARGENTINA Y AMERICANA Y TP",
    "docente": "1*C",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "QUIROZ, ALAN",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "TRABAJO DE CAMPO I: CONSTRUCCIÓN DE LA IDENTIDAD DOCENTE (1° y 2° Cuatr)",
    "docente": "1°F",
    "aula": "700",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "RECKZIEGEL, SANDRA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "NUEVAS TECNOLOGÍAS (1C y 2C)",
    "docente": "2",
    "aula": "B INFO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "RIVAS PEDRO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1ªE",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "RIVAS PEDRO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2*F",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ROBLES, NILDA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "DDHH SOCIEDAD ESTADO",
    "docente": "2*",
    "aula": "902",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "RODRIGUEZ, MATIAS",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "PRINCIPIOS DE LA ADM.",
    "docente": "2*B",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ROMERO, GUSTAVO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "REFLEXIÓN Y ACTUALIZACIÓN SOBRE LA PRÁCT. DOC",
    "docente": "4°C",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ROMERO, GUSTAVO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "CONSTRUCCIÓN DE LA PRÁCTICA DOCENTE",
    "docente": "4°C",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ROMERO, GUSTAVO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "DIDÁCTICA DE LA MATEMÁTICA II",
    "docente": "4°C",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ROSSETTI, MARIANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PEDAGOGÍA Y TP",
    "docente": "1*C",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SALOMON, GUADALUPE",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALLER DE TEXTOS LITERARIOS (1º cuat)",
    "docente": "1*D",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SALOMÓN, GUADALUPE",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "Teoría literaria (2do. cuat.)",
    "docente": "1ºD",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SAN MIGUEL, ROMINA",
    "anio": "General",
    "materia": "MATEMATICA",
    "horario": "GEOMETRIA I",
    "docente": "1°D",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SANTOS, DIEGO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ROMA",
    "docente": "2*B",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SARACENO, SANDRA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "ENS. DE LA GEOGRAFÍA II Y RESIDENCIA",
    "docente": "5°B",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SARACENO, SANDRA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "CONSTRUCCIÓN DE LA PRÁCTICA DOCENTE Y ENSEÑANZA",
    "docente": "3°B",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SARLINGA, MARIELA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "ESI",
    "docente": "5*B",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SARLINGA, MARIELA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "COORDINACIÓN",
    "docente": "-------",
    "aula": "--------",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SERRANO, GISELA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "CONSTRUCCIÓN DE LA PRÁCTICA DOCENTE II",
    "docente": "5°C",
    "aula": "705",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SERRANO, GISELA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "DIDÁCTICA DE LA MATEMÁTICA II",
    "docente": "5°C",
    "aula": "705",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "SOFIA, ANA LAURA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA I Y TP",
    "docente": "1*G",
    "aula": "201",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "VAZQUEZ, JUAN JOSE",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "DIDÁCTICA GENERAL",
    "docente": "2°D",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "VEGA, SUSANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2*D",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "VEGA, SUSANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1*D",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "VIGNOLO, SILVINA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "HISTORIA II",
    "docente": "3*",
    "aula": "CUB. 6",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "VIGNOLO, SILVINA",
    "anio": "General",
    "materia": "FRANCES",
    "horario": "DIRECCION",
    "docente": "",
    "aula": "--------",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "VIÑAS, WALTER",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1*G",
    "aula": "--------",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ZABALA, FRANCISCO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "FONETICA Y FONOLOGIA I",
    "docente": "1°E",
    "aula": "A IDIOMAS",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ZABALA, FRANCISCO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "PRÁCTICA EN LABORATORIO",
    "docente": "1°E",
    "aula": "A IDIOMAS",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "ZORZOLI, DANIELA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "TALLER DISEÑO Y GESTIÓN DE LAS ORG. (2* Cuatr.)",
    "docente": "4*A",
    "aula": "A INFO",
    "turno": "Vespertino/Noche",
    "dia": "Lunes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "DERECHO POLITICO",
    "horario": "8,00 a 10,50",
    "docente": "GONZALEZ, Gustavo",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "HIST. DE LAS IDEAS E INSTITUCIONES POLITICAS",
    "horario": "10,50 a 12,50",
    "docente": "ARBELO, Hernando",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "DERECHO PRIVADO I",
    "horario": "8,00 a 10,00",
    "docente": "LOMBA, Noelia",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "DERECHO PENAL Y CRIMINOLOGIA",
    "horario": "10,10 a 12,10",
    "docente": "GAUHAROU, Andrea",
    "aula": "Edulab",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "ELEMENTOS DE DERECHO PROCESAL",
    "horario": "8,00 a 10,50",
    "docente": "LOPEZ, Mara",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "DERECHO ADMINISTRATIVO",
    "horario": "10,50 a 13,30",
    "docente": "BARRIONUEVO, LUIS",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "DERECHO DE LAS COM. DE LOS TRANSP. Y NAV. ESP.",
    "horario": "8,00 a 10,00",
    "docente": "BALADRON, Mariela",
    "aula": "Edulab",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "SEMINARIO DE CIENCIAS POLITICAS",
    "horario": "10,10 a 12,10",
    "docente": "MARTINEZ, María Celia",
    "aula": "1102",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I",
    "horario": "8,40 a 10,00",
    "docente": "BROWN, Ana Laura",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "LENGUA EXTRANJERA (2ºCUAT)",
    "horario": "12,10 a 14,10",
    "docente": "RODRIGEZ VAN DAM, Valeria",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "PEDAGOGIA",
    "horario": "10,10 a 12,10",
    "docente": "GALARZA, Daniel",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "2° Año",
    "materia": "METODOLOGIA DE LA INVESTIGACION",
    "horario": "10,10 a 12,50",
    "docente": "MORENO, Analía",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "SISTEMA Y POLITICA EDUCATIVA (1° CUATR.)",
    "horario": "8,00 a 10,00",
    "docente": "a concurso",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "ETICA",
    "horario": "10,10 a 12,10",
    "docente": "DA CUNHA, Mónica",
    "aula": "Lab. B Biología",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "4° Año",
    "materia": "FILOSOFIA POLITICA",
    "horario": "8,00 a 10,00",
    "docente": "MORI, Carlos",
    "aula": "1101",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "4° Año",
    "materia": "HISTORIA DE LA FILOSOFIA MODERNA",
    "horario": "10,10 a 12,50",
    "docente": "PAOLUCCI, Mariela",
    "aula": "1101",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "ANTROPOLOGIA CULTURAL (OPTATIVA I)",
    "horario": "8,00 a 10,00",
    "docente": "RUIZ MORAS, Pablo",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "FILOSOFIA DE GENERO (OPTATIVA II)",
    "horario": "8,00 a 10,00",
    "docente": "DA CUNHA, Mónica",
    "aula": "Lab. B Biología",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "ANTROPOLOGIA SOCIAL Y CULTURAL",
    "horario": "8,00 a 10,00",
    "docente": "ABONS, Florencia",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "ESTADISTICA (2ºCUAT)",
    "horario": "10,10 a 12,50",
    "docente": "MAYO, Ariel",
    "aula": "Cubiculo 7º",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "EDUCACION SEXUAL INTEGRAL (2ºCUAT)",
    "horario": "10,50 a 12,10",
    "docente": "RIVAS, Pedro",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "NUEVAS TECNOLOGIAS (Cuatrimestral)",
    "horario": "7,20 a 10,00",
    "docente": "KIRSANOV, Alicia Eugenia",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "SEMINARIO DEL ROL DOCENTE (2ºCUAT)",
    "horario": "8,00 a 10,00",
    "docente": "BERGEL, Daniela",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "PSICOLOGIA DE LOS CICLOS VITALES I",
    "horario": "10,10 a 12,50",
    "docente": "LAPLACETTE, Juan",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "TEORIA PSICOANALITICA POST FREUDIANA",
    "horario": "8,00 a 10,00",
    "docente": "LAPLACETTE, Juan",
    "aula": "1102",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "NEUROPSICOLOGIA DEL APRENDIZAJE (2ºcuat)",
    "horario": "10,10 a 12,10",
    "docente": "GAVILAN CASTILLO, Diana",
    "aula": "Cubiculo 7º",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "4° Año",
    "materia": "PSICOPEDAGOGIA",
    "horario": "8,00 a 10,50",
    "docente": "GAVILAN CASTILLO, Diana",
    "aula": "1100",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "ANTROPOLOGIA SOCIAL Y CULTURAL",
    "horario": "10,10 a 12,10",
    "docente": "ABONS, Florencia",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "EDUCACION SEXUAL INTEGRAL",
    "horario": "12,10 a 13,30",
    "docente": "CUELLO, Silvina (Suple Abons, Florencia)",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "NUEVAS TECNOLOGIAS (2° CUATRIMESTRE)",
    "horario": "08,00 a 10,00",
    "docente": "PAOLUCCI, MARIELA",
    "aula": "301",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "PSICOLOGIA SOCIAL Y ANALISIS DE LAS ORGANIZ.S EDUC.",
    "horario": "10,10 a 12,10",
    "docente": "TENAGLIA, Guadalupe",
    "aula": "Lab. B Química",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "3° Año",
    "materia": "TRAB.DE CAMPO III.NIVEL INICIAL Y PRIM.",
    "horario": "8,00 a 10,00",
    "docente": "BELUCCI, Cecilia",
    "aula": "Lab. A Biología",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "3° Año",
    "materia": "CURRICULUM (1° CUATR.)",
    "horario": "10,10 a 12,50",
    "docente": "a concurso",
    "aula": "Lab. A Biología",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "4° Año",
    "materia": "LEGISLACION EDUCATIVA",
    "horario": "10,10 a 12,10",
    "docente": "DELAMER, Laura",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "ALGEBRA I",
    "horario": "8,00 a 9,20",
    "docente": "MONTENEGRO, Victor",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "PEDAGOGIA",
    "horario": "9,20 a 11,30",
    "docente": "DAFUNCHIO, Sofía",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"A\"",
    "horario": "11,30 a 12,50",
    "docente": "GOLDFARB, Lila / FIGUEROA, Juan Pablo",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "PSICOLOGIA EDUCACIONAL",
    "horario": "8,00 a 9,20",
    "docente": "GOLDFARB, Lila",
    "aula": "Lab. A Física",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "SUJETOS DEL NIVEL",
    "horario": "9,20 a 10,50",
    "docente": "GOLDFARB, Lila",
    "aula": "Lab. A Física",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "QUIMICA",
    "horario": "10,50 a 12,50",
    "docente": "A CONCURSO",
    "aula": "Lab. A Física",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "DIDACTICA DE LA FISICA I",
    "horario": "8,00 a 9,20",
    "docente": "INDELICATO, Evangelina",
    "aula": "Lab. B Física",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "EDUCACIÓN SEXUAL INTEGRAL",
    "horario": "9,20 a 10,50",
    "docente": "SARLINGA, Mariela",
    "aula": "Lab. B Física",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "ASTRONOMIA (CUAT)",
    "horario": "10,50 a 13,30",
    "docente": "INGRASSIA, Pablo",
    "aula": "1100",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "MATEMATICA SUPERIOR B (2° Cuatrimestre)",
    "horario": "10,50 a 12,50",
    "docente": "FERNANDEZ, Virginia",
    "aula": "Lab. B Física",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "4° Año",
    "materia": "EPISTEMOLOGIA E HISTORIA DE LA FISICA",
    "horario": "8,00 a 10,50",
    "docente": "FIGUEROA, Juan Pablo",
    "aula": "Lab. D Física",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "4° Año",
    "materia": "DIDÁCTICA ESPECÍFICA II P/NIVEL SECUNDARIO",
    "horario": "10,50 a 12,50",
    "docente": "CARRO, Daniela",
    "aula": "Lab. D Física",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "ECHEZURI, Adriana / GAVILAN CASTILLO, Diana",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "PREHISTORIA Y ARQUEOLOGÍA \"A\"",
    "horario": "9,20 a 12,50",
    "docente": "DANIELE, ALEJANDRO",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "PREHISTORIA Y ARQUEOLOGÍA \"E\"",
    "horario": "8,00 a 9,20",
    "docente": "DANIELE, ALEJANDRO",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA HISTORIA \"E\"",
    "horario": "9,20 a 12,10",
    "docente": "VACAFLOR, Noelia",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I \"F\"",
    "horario": "8,00 a 9,20",
    "docente": "BASILE, Cristina",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"F\"",
    "horario": "9,20 a 11,30",
    "docente": "RIVADENEIRA, Carolina",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA ARGENTINA Y AMERICANA II \"A\"",
    "horario": "9,20 a 12,50",
    "docente": "FARIAS FRANCO, Jerònimo",
    "aula": "AUDITORIO B",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD II \"E\"",
    "horario": "8,00 a 9,20",
    "docente": "BASUALDO, José Luis",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE ESPAÑA \"E\"",
    "horario": "9,20 a 12,10",
    "docente": "RODRIGUEZ OTERO, Mariano",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA EDAD MODERNA \"A\"",
    "horario": "8,00 a 12,10",
    "docente": "RIZZUTO, Claudio",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "4° Año",
    "materia": "FILOSOFIA \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "THISTED, Marcos",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "5° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "MARTIN, Amanda",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"B\"",
    "horario": "8,00 a 9,20",
    "docente": "OJEDA, Fernando / GARCIA, Daniela",
    "aula": "Lab. A Informática",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "PROGRAMACION I \"B\"",
    "horario": "9,20 a 12,10",
    "docente": "BRAVO, Daniel",
    "aula": "Lab. A Informática",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "TECNOLOGIA DE LA INFORMACION Y LA COMUN.",
    "horario": "8,00 a 10,50",
    "docente": "GOLATO, Rosana",
    "aula": "Lab. B Informática",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "CALCULO PARA INFORMATICA \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "CATANI, María Ayelén",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "PROGRAMACION III",
    "horario": "9,20 a 10,50",
    "docente": "GOROSITO, Carlos",
    "aula": "Lab. B Informática",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "FILOSOFIA \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "VELARDE, Marcelo",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "NUEVOS ESCENARIOS CULTURA TECNOL Y SUB \"B\"",
    "horario": "10,10 a 11,30",
    "docente": "RUIZ MORAS, Pablo",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "INFORMÁTICA",
    "anio": "5° Año",
    "materia": "MODELIZACIÓN MATEMÁTICA Y SIMULACIÓN",
    "horario": "8,00 a 10,00",
    "docente": "FIORE, Santiago",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "5° Año",
    "materia": "INTELIGENCIA ARTIFICIAL",
    "horario": "10,50 a 12,50",
    "docente": "GOROSITO, Carlos",
    "aula": "Lab. B Informática",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "SUJETOS DEL NIVEL \"A\"",
    "horario": "7,20 a 9,20",
    "docente": "RIVAROLA BRITEZ, Ma.del Rocío",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"A\"",
    "horario": "9,20 a 12,50",
    "docente": "RODRIGUEZ, Sergio",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "SUJETOS DEL NIVEL \"B\"",
    "horario": "8,00 a 10 ,00",
    "docente": "MRAHAD, María Cecilia",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GEOGRAFIA Y CULTURA DE LOS ESTADOS UNIDOS\"B\"",
    "horario": "8,00 a 10,00",
    "docente": "BAUTISTA, Hugo",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "FONETICA Y FONOLOGÍA I \"B\"",
    "horario": "10,10 a 12,50",
    "docente": "MICHIENZI, Marco",
    "aula": "Lab. B Idiomas",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GRAMATICA INGLESA I \"C\"",
    "horario": "8,00 a 11,30",
    "docente": "GOETTE, Guillermina",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD \"C\"",
    "horario": "11,30 a 12,50",
    "docente": "FRESCURA TOLOZA, Claudio (licencia)",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "FONETICA Y FONOLOGÍA I \"H\"",
    "horario": "8,00 a 10,50",
    "docente": "a concurso //Carteau",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "SUJETOS DEL NIVEL \"H\"",
    "horario": "10,50 a 12,50",
    "docente": "KAWAGUCHI, Fernanda",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"I\"",
    "horario": "7,20 a 9,20",
    "docente": "SPINA, Mariana",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"I\"",
    "horario": "9,20 a 10,50",
    "docente": "a concurso",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD \"I\"",
    "horario": "10,50 a 12,10",
    "docente": "PERI, Silvina",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "FONETICA Y FONOLOGIA II \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "ZABALA, Francisco",
    "aula": "Lab. A Idiomas",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"A\"",
    "horario": "11,30 a 12,50",
    "docente": "RODRIGUEZ, Ma. de los Angeles /",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "RIVAS, Pedro",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LITERATURA INGLESA I \"B\"",
    "horario": "10,10 a 12,10",
    "docente": "RODRIGUEZ VAN DAM, Valeria",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "PRACTICA EN LABORATORIO DE IDIOMAS II \"C\"",
    "horario": "8,00 a 10,00",
    "docente": "MICHIENZI, Marco",
    "aula": "Lab. B Idiomas",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"C\"",
    "horario": "10,10 a 11,30",
    "docente": "RODRIGUEZ, Ma. de los Angeles /",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"F\"",
    "horario": "8,00 a 10,50",
    "docente": "NULHEM, Romina",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "HIST. DE LA CIVILIZACION INGLESA II \"A\"",
    "horario": "8,40 a 10,50",
    "docente": "GATTI, Ma. Eugenia",
    "aula": "603",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "FONOLOGIA EN LABORATORIO Y SU DIDAC. I \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "ZABALA, Francisco",
    "aula": "Lab. A Idiomas",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "INTRODUCCION A LA LINGÜÍSTICA \"C\"",
    "horario": "8,00 a 10,00",
    "docente": "ARIAS, Juan José",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "LENGUA INGLESA III \"C\"",
    "horario": "9,20 a 13,30",
    "docente": "MONTSERRAT, Mariano",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LITERATURA CONTEMPORANEA \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "FERREYRA FERNANDEZ, Daniel",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LITERATURA CONTEMPORANEA \"B\"",
    "horario": "10,10 a 12,10",
    "docente": "GALIMANY, Pilar",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "TECNICAS TEATRALES EN EL AULA \"A\"",
    "docente": "7,20 a 9,20",
    "aula": "a concurso",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "HIST. CONTEMP. PUEBLOS ANGLOPARLANTES \"A\"",
    "docente": "10,50 a 12,50",
    "aula": "a concurso",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ALGEBRA I \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "TAJEYAN, Silvia",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I \"A\"",
    "horario": "9,20 a 10,50",
    "docente": "MAGNANEGO, Florencia",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "INTR. A LA MATEMATICA SUPERIOR \"A\"",
    "horario": "10,50 a 12,10",
    "docente": "MONTENEGRO, Victor",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ELEMENTOS BASICOS DE MATEMATICA \"A\" (Cuatr.)",
    "horario": "12,10 a 13,30",
    "docente": "PARONI, Andrea",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ALGEBRA I \"B\"",
    "horario": "8,00 a 9,20",
    "docente": "CARNELLI, Gustavo",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "INTR. A LA MATEMATICA SUPERIOR \"B\"",
    "horario": "9,20 a 10,50",
    "docente": "MONTENEGRO, Victor",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I \"B\"",
    "horario": "10,50 a 12,10",
    "docente": "BASUALDO, José Luis",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ELEMENTOS BASICOS DE MATEMATICA \"B\" (Cuatr.)",
    "horario": "12,10 a 13,30",
    "docente": "MONTENEGRO, Victor",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ANALISIS MATEMATICO I \"C\"",
    "horario": "8,00 a 10,00",
    "docente": "CAYON, Rodrigo",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ALGEBRA I \"C\"",
    "horario": "10,10 a 12,10",
    "docente": "TAJEYAN, Silvia",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "YACOBUCCI, Matías / SANCHEZ, Luciana",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "FISICA \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "FIGUEROA, Juan Domingo",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "FISICA \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "FIGUEROA, Juan Domingo",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "ALGEBRA II \"B\"",
    "horario": "10,10 a 13,30",
    "docente": "CHAVEZ, Christian",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD II \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "GELMAN CONSTANTIN, Francisco",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA \"A\"",
    "horario": "9,20 a 11,30",
    "docente": "DI MODUGNO, Lucía",
    "aula": "503",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA MATEMATICA \"B\"",
    "horario": "8,00 a 9,20",
    "docente": "MICELLI, MONICA",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "PROBABILIDAD Y ESTADISTICA \"B\"",
    "horario": "9,20 a 12,50",
    "docente": "GALLO, María Eugenia",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "SISTEMA Y POLITICA EDUCATIVA \"B\" (2° CUATR.)",
    "horario": "10,10 a 12,10",
    "docente": "ROSSETTI, Mariana",
    "aula": "301",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "ASTRONOMIA SUPERIOR (2° Cuatrimestre)",
    "horario": "8,00 a 11,30",
    "docente": "DIAZ, Alejandro",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "EDUCACION SEXUAL INTEGRAL (2º Cuatrimestre)",
    "horario": "8,00 a 9,20",
    "docente": "BRUNO, Ma. Florencia",
    "aula": "503",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA QUIMICA",
    "horario": "10,10 a 12,50",
    "docente": "ZABALEGUI, Vanesa (suple PAZ, Adriana)",
    "aula": "Lab. A Química",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "1° Año",
    "materia": "MECANICA Y OPTICA GEOMETRICA \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "FRAGA, Ondina",
    "aula": "Lab. A Química",
    "turno": "Mañana",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA DE LOS ANIMALES III 1° CUAT",
    "horario": "CORBELLI, JULIAN 15,30 A 18,10",
    "docente": "",
    "aula": "LAB. B BIOL.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA DE LOS MICROORGANISMOS",
    "horario": "REJAN, AMIRA 12,50 a 15,30",
    "docente": "",
    "aula": "LAB. B BIOL.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA HUMANA I",
    "horario": "PASCARELLA, M. FLORENCIA 14,10 a 17,30",
    "docente": "",
    "aula": "LAB. A BIOL.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA MOLECULAR Y CELULAR",
    "horario": "DIFRANZA, LEONARDO 14,10 a 17,30",
    "docente": "",
    "aula": "301",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "DIDACT. DE EDUCACION EN EL AMBIENTE",
    "horario": "A CONCURSO 13,30 a 14,50",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "EVOLUCION E HISTORIA DE VIDA",
    "horario": "A CONCURSO 14,50 a 17,30",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "FISICA \"D\"",
    "horario": "FIGUEROA, JUAN DOMINGO 14,50 a 17,30",
    "docente": "",
    "aula": "LAB. B FISICA",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "INTRODUCCION A LOS SIST. VIVIENTES \"A\"",
    "horario": "A CONCURSO 16,50 a 18,10",
    "docente": "",
    "aula": "300",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "PSICOLOGIA DEL DESARROLLO Y APREND. (1 cuat)",
    "horario": "FERRARI, ANDREA 13,30 a 16,10",
    "docente": "",
    "aula": "300",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "RIVAS, PEDRO 12:50 a 14:10",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "GUALTIERI, CAMILA 12:50 a 14:10",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "ANALISIS DE LAS POLÍTICAS PÚBLICAS",
    "horario": "MARTINEZ, MARIA CELIA 13,30 a 15,30",
    "docente": "",
    "aula": "700",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "EDUCACIÓN SEXUAL INTEGRAL (1° CUAT)",
    "horario": "GONZALEZ MARTIN, MIRANDA 13,30 A 14,50",
    "docente": "",
    "aula": "704",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "ENSEÑANZA DE LA CIENCIA POLITICA I",
    "horario": "AZOFRA, GISELA 14,50 a 16,50",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "FUNDAMENTOS DE LA CIENCIA POLITICA",
    "horario": "DEMIRDJIAN, LILIANA 13,30 a 15,30",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "MARTIN, AMANDA 12,50 a 14,50",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "HISTORIA DE LOS MOVIMIENTOS SOCIALES",
    "horario": "TORME, MAURICIO 16,10 a 18,10",
    "docente": "",
    "aula": "704",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD II",
    "horario": "BASUALDO, JOSE LUIS 14,50 a 16,10",
    "docente": "",
    "aula": "704",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "MOVIMIENTOS POL. Y SOCIALES CONTEMP.",
    "horario": "JORDAN, MA. ANGELICA 16,50 a 18,50",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "PEDAGOGIA",
    "horario": "FIORDALISI, FLAVIA 15,30 a 17,30",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "RELACIONES INTERNACIONALES",
    "horario": "MARTINEZ, MARIA CELIA 16,10 a 18,10",
    "docente": "",
    "aula": "700",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "DIDACTICA ESP. Y CONST. PRACTICA DOCENTE I",
    "horario": "SAMARDJI, JORGE 14,50 a 16,50",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "ECONOMETRIA",
    "horario": "WAINER, VALERIA 13,30 a 16,50",
    "docente": "",
    "aula": "501",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "ESTADISTICA",
    "horario": "RUGGERI, VICTOR 14,50 a 17,30",
    "docente": "",
    "aula": "1002",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "FINANZAS PUBLICAS",
    "horario": "SAMARDJI, JORGE 16,50 a 18,10",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "INTRODUCCION A LA EONOMIA",
    "horario": "MARTIN VICEDO, MARCO 15,30 a 17,30",
    "docente": "",
    "aula": "100",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD II",
    "horario": "BASUALDO, JOSE LUIS 13,30 a 14,50",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "METODOLOGIA DE LA INVESTIGACION",
    "horario": "PETIT, LUCIANO 16,10 a 18,10",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "PEDAGOGIA",
    "horario": "RAMAS, MARIA FERNANDA 13,30 a 15,30",
    "docente": "",
    "aula": "100",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "ANTROPOLOGIA (cuat.)",
    "horario": "MAKLER, CARLOS 14,50 a 17,30",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "DD HH SOCIEDAD Y ESTADO",
    "horario": "STOPPANI, NATALIA LIC 70 13,30 a 15,30",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "ECOLOGIA Y BIOGEOGRAFIA",
    "horario": "DI BELLA, OSCAR 15,30 a 17,30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "ECONOMIA Y TERRITORIOS",
    "horario": "TOBIO, OMAR 15,30 a 17,30",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "FILOSOFIA",
    "horario": "VELARDE, MARCELO 15,30 a 17,30",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "PEDAGOGIA",
    "horario": "MACIEL, MARIA MAGDALENA 13,30 a 15,30",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "TERRITORIOS I: AMERICA LATINA Y ANGLOSAJ.",
    "horario": "PAEZ REHERMANN, VALERIA 14:50 a 15:30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "GEOGRAFÍA",
    "anio": "General",
    "materia": "TELEDETECCIÓN GEOGRÁFICA",
    "horario": "FERNÁNDEZ MARÍA ALEJANDRA 13,30 A 15,30",
    "docente": "",
    "aula": "EDULAB",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "GEOGRAFIA ECONOMICA MUNDIAL",
    "horario": "PITETTI, LAURA 17:30 a 18:10",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "DIDACTICA GENERAL",
    "horario": "RIVAS, PEDRO 16,10 a 18,10",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA ARGENTINA Y AMERICANA II",
    "horario": "BRANSBOIN, HERNAN 12,50 A 16,10",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DE ASIA",
    "horario": "LOPEZ, GABRIEL 16,10 a 18,10",
    "docente": "",
    "aula": "102",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DE LA EDAD MEDIA Y TP",
    "horario": "AVILA, CLAUDIO 13,30 A 16,10",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "SEMINARIO DE MET. DE LA INVESTIGACION",
    "horario": "LASSO, RUBEN 13,30 a 17,30",
    "docente": "",
    "aula": "400",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "SEMINARIO OPT. I: \"HIST. MUJERES Y GENERO\"",
    "horario": "VACAFLOR, NOELIA 13,30 a 15,30",
    "docente": "",
    "aula": "102",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "INTRODUCCION A LA HISTORIA ANTIGUA H",
    "horario": "CIFUENTES, MARTIN 12:50 a 15:30",
    "docente": "",
    "aula": "AUDITORIO 4º",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "INTRODUCCION A LA HISTORIA Y TP",
    "horario": "VACAFLOR, NOELIA 15:30 a 18:10",
    "docente": "",
    "aula": "AUDITORIO 4º",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "ALGEBRA",
    "horario": "GIRARD, SANTIAGO 16,50 a 18,10",
    "docente": "",
    "aula": "1001",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "DISEÑO DE SISTEMAS",
    "horario": "GOROSITO, CARLOS 13,30 a 16,10",
    "docente": "",
    "aula": "1001",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "DISEÑO I",
    "horario": "FERNANDEZ BLANCO, CECILIA 14,10 a 16,50",
    "docente": "",
    "aula": "LAB. A INF.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "INGLES I",
    "horario": "REY, MARIA ALEJANDRA 13,30 a 15,30",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "INGLES II",
    "horario": "REY, MARIA ALEJANDRA 15,30 a 17,30",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "NUEVOS ESCENARIOS, CULTURAS TECNOLOG.",
    "horario": "RUIZ MORAS, PABLO 12,50 a 14,10",
    "docente": "",
    "aula": "301",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "PROGRAMACIÓN III",
    "horario": "GOROSITO, CARLOS 16,10 A 17,30",
    "docente": "",
    "aula": "LAB B",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "SISTEMAS INFORMATICOS",
    "horario": "FERNANDEZ, WALTER 14,10 a 16,50",
    "docente": "",
    "aula": "LAB. B INFORM",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "DIDACTICA GENERAL \"E\"",
    "horario": "VAZQUEZ, JUAN JOSE 15,30 a 17,30",
    "docente": "",
    "aula": "602",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "EL USO DE LA VOZ EN EL AULA",
    "horario": "PEREYRA, ILEANA 14,50 a 16,10",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "FONETICA Y FONOLOGIA I \"G\"",
    "horario": "LORENZO, JULIO 14,10 a 16,50",
    "docente": "",
    "aula": "603",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "HISTORIA DE LA CIVILIZACION INGLESA II",
    "horario": "A CONCURSO 13,30 a 15,30",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD I \"G\"",
    "horario": "SAMPEDRO, CARLOS 16,50 a 18,10",
    "docente": "",
    "aula": "EDULAB",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA INGLESA III",
    "horario": "CARBALLEDO, DANIEL 15,30 a 17,30",
    "docente": "",
    "aula": "604",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LITERATURA NORTEAMERICANA \"C\"",
    "horario": "LINERO, LAURA 16,10 a 18,10",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "PSICOLOGIA EDUCACIONAL \"G\"",
    "horario": "KAWAGUCHI, MA. FERNANDA 12,50 A 14,10",
    "docente": "",
    "aula": "603",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "INGLÉS",
    "anio": "General",
    "materia": "LENGUA INGLESA I \"F\"",
    "horario": "BAUTISTA, HUGO 12,50 A 15,30",
    "docente": "",
    "aula": "601",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "FONETICA Y FONOLOGIA I \"F\"",
    "horario": "PEREZ PONSA, VICTORIA 15:30 a 18:10",
    "docente": "",
    "aula": "601",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "FONETICA Y FONOLOGIA I",
    "horario": "PANDOLFI, GABRIELA 13,30 a 16,10",
    "docente": "",
    "aula": "804",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "FONETICA Y FONOLOGIA II",
    "horario": "PROFITI, NATALIA 13,30 a 16,10",
    "docente": "",
    "aula": "LAB B IDIOMA",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LA ENS. DEL ITALIANO A PARTIR DEL CINE",
    "horario": "AGNESE, VIOLETA 17,30 a 18,50",
    "docente": "",
    "aula": "802",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LATIN I",
    "horario": "RUSSO, VERONICA 16,10 a 18,10",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA FRANCES I (1 cuat)",
    "horario": "TEJERA, LAURA 15,30 a 17,30",
    "docente": "",
    "aula": "1000",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LENGUA ITALIANA III",
    "horario": "AGNESE, VIOLETA 12,50 a 16,50",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LENGUA ITALIANA IV (1º CUATR.)",
    "horario": "ROSSI, YAMILA 13, 30 A 15, 30",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LITERATURA ITAL. DEL ROMANT. Y S. XX",
    "horario": "ROSSI, YAMILA 15, 30 A 18,10",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "EDUCACION SEXUAL INTEGRAL (Cuat)",
    "horario": "FERNANDEZ, CLAUDIA A. 16,50 a 18,10",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "ESTUDIO DE LA DIVERSIDAD LINGÜÍSTICA",
    "horario": "SCAVINO, LUCAS 12,50 a 14,50",
    "docente": "",
    "aula": "701",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "GRIEGO II",
    "horario": "COSCOLLA, MARIA JOSE 13,30 a 14,50",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "HISTORIA DEL ARTE",
    "horario": "DEL NEGRO, MARIELA 14,50 a 16,50",
    "docente": "",
    "aula": "200",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "INT. ESTUD. DEL LENGUAJE Y ELEM. SEMIOL. \"A\"",
    "horario": "DIFALCIS, MICAELA 13,30 a 16,10",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD II",
    "horario": "A CONCURSO 12,50 a 14,50",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LITERATURA ARGENTINA A",
    "horario": "DESTEFANIS, MARIA LAURA 16,10 A 18,50",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SEMINARIO DE LITERATURA RUSA",
    "horario": "FRANCHI, FULVIO 14,50 a 17,30",
    "docente": "",
    "aula": "701",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SEMINARIO LENGUAJE, SOCIEDAD Y EDUCAC.",
    "horario": "SCAVINO, LUCAS 16,10 a 18,10",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "TALLER DE GRAMATICA Y LINGÜÍSTICA \"A\" (2 cuat)",
    "horario": "BETTENDORF PAULINA 14,50 A 16,10",
    "docente": "",
    "aula": "806",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "TALLER DE LITER. Y TEORIA LITERARIA \"A\" (2 cuat.)",
    "horario": "BETTENDORF PAULINA 13,30 A 14,50",
    "docente": "",
    "aula": "806",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "BIOLOGIA CELULAR (1º cuat)",
    "horario": "A CONCURSO 14,10 a 16,10",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "MECÁNICA Y OPTICA GEOMETRICA",
    "horario": "GARCIA MIRAMON, GASTON 15,30 A 17,30",
    "docente": "",
    "aula": "LAB. A QUIM.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "PEDAGOGIA",
    "horario": "VAZQUEZ, JUAN JOSE 13,30 A 15,30",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA ANALITICA",
    "horario": "VANARELLI, MAURO 17,30 a 19,30",
    "docente": "",
    "aula": "LAB. B QUIM.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA BIOLOGICA",
    "horario": "GAGNO, VERONICA 14,50 a 17,30",
    "docente": "",
    "aula": "LAB. B QUIM.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA FISICA",
    "horario": "GARCIA, ROBERTO 13,30 a 14,50",
    "docente": "",
    "aula": "LAB. B QUIM.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA GENERAL E INORGANICA I",
    "horario": "MARINO, DOLORES 17,30 a 19,30",
    "docente": "",
    "aula": "LAB. A QUIM.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA GENERAL E INORGANICA II",
    "horario": "ZABALEGUI, VANESA 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. A QUIM.",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "DINAMICA TERRESTRE",
    "horario": "TADDIO, JUAN PABLO 16:10 a 17:30",
    "docente": "",
    "aula": "1101",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "MARINO, DOLORES 15,30 a 17,30",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "TALLER DE ACT. DISCIP. Y SU DIDACTICA – 1ª CUAT -",
    "docente": "5ªB",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "TC I: CONSTRUCCIÓN DE LA IDENTIDAD DOCENTE (1° y 2° Cuatr)",
    "docente": "1°E",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "TALLER DE LENGUA EXTRANJERA (1 Y 2 Cuatr.)",
    "docente": "5*A",
    "aula": "—--",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "DDHH",
    "docente": "",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "TRABAJO DE CAMPO I: CONSTRUCCIÓN DE LA IDENTIDAD DOCENTE (1° y 2° Cuatr)",
    "docente": "1°E",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "FONOLOGÍA EN LABORATORIO Y SU DIDÁCTICA I",
    "docente": "3°D",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ANÁLISIS MATEMÁTICO I",
    "docente": "1°D",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "FISICA",
    "docente": "2°C",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "TALLER DE ACT.EN DIDACT. ESPECIFICAS – 2ª CUAT -",
    "docente": "5ªB",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "GEOMETRÍA I",
    "docente": "1°F",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PSIC EDUC",
    "docente": "3°E",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "DINÁMICA DE LOS PROCESOS CLIMÁTICOS",
    "docente": "1°C",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LENGUA EXTRANJERA INGLES nivel 1 –1° CUAT -",
    "docente": "2°B",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LENGUA EXTRANJERA INGLES nivel 2 – 2° CUAT -",
    "docente": "2°B",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "GRAMATICA HISTORICA",
    "docente": "4ºB",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "A CONCURSON",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "GEO. Y CULT DE LAS ISLAS BRITÁNICAS",
    "docente": "1°D",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "ACUÑA, DARIO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "INTRODUCCIÓN A LA MATEMATICA SUPERIOR",
    "docente": "1°E",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "ALBORNOZ MARTÍN",
    "anio": "General",
    "materia": "ADMINISTRACION",
    "horario": "DIRECCION",
    "docente": "----",
    "aula": "----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "ANSALDO, MATIAS",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Psicología Educacional",
    "docente": "1°E",
    "aula": "602",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "AUDISIO, CYNTHIA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "LEO I",
    "docente": "1*A",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "AZZARINI, DANIEL",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TERRITORIOS II: EUROPA",
    "docente": "3°C",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BANDINI, ALICIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTR A LA HISTORIA",
    "docente": "1°C",
    "aula": "AUD. B",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BAO, JOSE",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "INTRODUCCIÓN A LA GEOGRAFÍA",
    "docente": "1°C",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BARANZELLI, DANTE",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "FILOSOFÍA",
    "docente": "1°C",
    "aula": "201",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BARANZELLI, DANTE",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "FILOSOFÍA",
    "docente": "1°D",
    "aula": "201",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BARREIRO, NATALIA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "INTROD a los SIST. VIVIENT.",
    "docente": "1°B",
    "aula": "CUB. 3",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BASUALDO, GONZALO",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LEO I",
    "docente": "1*",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BAVASSO, CEFERINO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "HISTORIA MUNDIAL",
    "docente": "1°C",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BOSOER LUCIANA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "SEMINARIO DE INVESTIGACIÓN GEOGRÁFICA",
    "docente": "5°B",
    "aula": "CUB. 9",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BRANSBOIN, HERNAN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "AMERICANA CONT",
    "docente": "4°B",
    "aula": "1101",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "BUSTOS, HORACIO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "ECOLOGÍA Y BIOGEOGRAFÍA",
    "docente": "2°B",
    "aula": "501",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "CABRERA, SEBASTIAN",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "GRAMÁTICA DEL TEXTO",
    "docente": "4*",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "CARBALLEDO, DANIEL",
    "anio": "General",
    "materia": "INGLES",
    "horario": "TUTORIAS",
    "docente": "1º",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "CHIARADÍA, ESTEBAN",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "HISTORIA SOCIAL DE LA EDUCACIÓN ARGENTINA",
    "docente": "3°C",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "COCE, MARIA VICTORIA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LENG. Y LITER LATINAS y su ENSEÑ. EN EL NIVEL MEDIO Y SUP",
    "docente": "4°B",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "CONVERTI, VERONICA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "CONSTRUCCION DE LA PRACTICA DOCENTE (2do. Cuatr.)",
    "docente": "3*",
    "aula": "CUB 6",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "CORBELLI, JULIAN",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "BIO. DE LOS ANIMALES III -2° CUAT.-",
    "docente": "4ºB",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "CORIA, ROMINA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "TALLER OPTATIVO: VALUACIÓN CONTABLE (2do Cuatr.)",
    "docente": "5*A",
    "aula": "B INFO",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "COSCO, KARINA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "ENSEÑANZA DE LA HISTORIA /CONSTRUCCIÓN DE LA PRÁCTICA DOC I",
    "docente": "3°C",
    "aula": "LAB A INF",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "COSCOLLA, MARÍA JOSÉ",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "GRIEGO I",
    "docente": "3°B",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DANIELE ALEJANDRO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PREHISTORIA",
    "docente": "1°G",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DEL CAMPO, NATALIA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "DD.HH SOCIEDAD Y ESTADO",
    "docente": "2°B",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DEMIRDJIAN, LILIANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "DDHH",
    "docente": "5°C",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DI BELLA, OSCAR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA DE LA ARGENTINA I (PROCESOS AMBIENTALES)",
    "docente": "3°C",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DI VINCENZO, DIEGO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "LEO I",
    "docente": "1°G",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DI VINCENZO, DIEGO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "LEO I",
    "docente": "1*B",
    "aula": "805",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DIFRANZA, LEONARDO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "BIO. MOLECULAR Y CELUL.",
    "docente": "2°B",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DOLCE, MARÍA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "PSICOLOGÍA EDUCAC. – 1º CUAT -",
    "docente": "1°C",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DOLCE, MARÍA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "PSICOLOGÍA del desarr. – 2º CUAT -",
    "docente": "1°C",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DRUNDAY, JONATHAN",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "ECOLOGÍA Y ETIOLOGÍA",
    "docente": "4°B",
    "aula": "B BIO",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DURANTE, FLAVIO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "ANÁLISIS MATEMÁTICO",
    "docente": "1*B",
    "aula": "805",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DUTTO, GABRIEL",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALLER GRAM. Y LING. (2° CUAT)",
    "docente": "1ºC",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "DUTTO, GABRIEL",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALLER LIT. Y TEORIA LIT. (2° CUAT)",
    "docente": "1ºC",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "ELIAS, YAEL",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "Seminario: INTR. A LA INVESTIGACIÓN EN CS. DEL LENGUAJE",
    "docente": "5*",
    "aula": "FISICA D",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "ESPIÑEIRA, BRENDA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "DDHH, SOCIEDAD Y ESTADO",
    "docente": "3°B",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "FERNANDEZ ALEJANDRA",
    "anio": "General",
    "materia": "GEOGRAFIA",
    "horario": "TELEDETECCION GEOGRAFICA",
    "docente": "4°B",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "FERNANDEZ, CLAUDIA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "SEMINARIO ESI -1° y 2° CUAT -",
    "docente": "3°B",
    "aula": "A INFO",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "FERNANDEZ, VIRGINIA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ANÁLISIS MATEMÁTICO III",
    "docente": "5°C",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "FIGUEREDO NUÑEZ, HUGO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "FILOSOFÍA",
    "docente": "4°C",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "GARCIA, ADRIANA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "RESIDENCIA PARA EL NIVEL INICIAL Y PRIMARIO (1 y 2 Cuatr.)",
    "docente": "4*",
    "aula": "D FÍSICA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "GARONI, MARIANO",
    "anio": "General",
    "materia": "MATEMATICA",
    "horario": "ANALISIS MATEMATICO I",
    "docente": "1° D",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "GONZALEZ MARTIN, MIRANDA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "ESI (1 Y 2 Cuatr.)",
    "docente": "3*",
    "aula": "1101",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "GUERRIERI, DIEGO",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "BIOLOGIA HUMANA II (1°CUAT)",
    "docente": "4ºB",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "HARARI, FABIÁN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "ARG Y AMER I",
    "docente": "1°B",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "KALADJIAN, GRETA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "DDHH, SOCIEDAD Y ESTADO",
    "docente": "3*A",
    "aula": "B QUIMICA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "KALAIDJIAN, GRETA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Historia de la Educación Argentina",
    "docente": "4°D",
    "aula": "B BIO",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "LAFFORGUE, FLORENCIA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "EDUCACIÓN SEXUAL INTEGRAL (1° y 2° Cuatr)",
    "docente": "4°C",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "LAVALLETTO, MERCEDES",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "DIDÁCTICA GENERAL",
    "docente": "2*A",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "LAVALLETTO, MERCEDES",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "DIDÁCTICA GENERAL",
    "docente": "2°B",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "LOPEZ, GABRIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA CONTEMPORÁNEA",
    "docente": "4°B",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "LORENZO, JULIO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Práctico en Laboratorio I",
    "docente": "1°D",
    "aula": "A IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "LORENZO, JULIO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Práctica en Lab. De. Idiomas II",
    "docente": "2°G",
    "aula": "A IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "LOZANO, ANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "GRECIA",
    "docente": "2°D",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MACIEL MAGDALENA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "PEDAGOGÍA",
    "docente": "1*",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MACIEL, MAGDALENA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "PEDAGOGÍA",
    "docente": "1°E",
    "aula": "602",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MAKLER, CARLOS",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "ANTROPOLOGÍA",
    "docente": "5°C",
    "aula": "501",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MALFA ADRIANA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "DERECHO CIVIL Y SOCIETARIO",
    "docente": "2*A",
    "aula": "CUB 7",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MANENTE, MAYRA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "FISICA",
    "docente": "1°B",
    "aula": "A QUÍMICA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MARTINEZ, ALEJANDRA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ELEMENTOS BÁSICOS DE LA MATEMÁTICA",
    "docente": "1°D",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MOREL, RODRIGO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "POSICIONAMIENTO ESPACIAL Y GEOMATICA",
    "docente": "2°B",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MORENO, ANALIA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "FILOSOFÍA",
    "docente": "2°C",
    "aula": "700",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MORENO, ANALÍA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Filosofía",
    "docente": "3°D",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "MRAHAD, MARIA CECILIA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Sujetos del Nivel",
    "docente": "1°E",
    "aula": "602",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "NIKLISON LUCIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "LECTURA, ESCRITURA Y ORALIDAD II",
    "docente": "3°B",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PAEZ REHERMANN, VALERIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TERRITORIOS I: AMÉRICA LATINA Y ANGLOSAJONA",
    "docente": "2°C",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PAEZ REHERMANN, VALERIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "SEMINARIO DE ENS DE LA GEO MEDIADA POR TICS",
    "docente": "4°B",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PASCARELLA, FLORENCIA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "BIOLOGÍA HUMANA I",
    "docente": "3°B",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PATARO MARIA ALEJANDRA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "SUJETOS DE LA ENSEÑANZA (2 cuatr.)",
    "docente": "1*A",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PELLER, DIEGO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LEO II",
    "docente": "2°B",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PETIT LUCIANO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "METOD. DE LA INVESTIGACIÓN",
    "docente": "4*A",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PITETTI, LAURA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "ENSEÑANZA DE LA GEOGRAFÍA II Y RESIDENCIA",
    "docente": "5°C",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PONCE ARIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PREHISTORIA",
    "docente": "1°D",
    "aula": "705",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PONCE, ROMINA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "DERECHO CIVIL Y SOCIETARIO",
    "docente": "2*B",
    "aula": "801",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "POSE, RUBEN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "LEO I",
    "docente": "1°D",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "POSE, RUBEN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "LEO II",
    "docente": "2°D",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "POSE, RUBEN",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LEO",
    "docente": "1°D",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "PUENTE, CAROLINA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "INTROD. A LOS ESTUD. DEL LENG. Y ELEM DE SEMIOL (1° CUAT)",
    "docente": "1ºC",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "RAMAS, MARIA FERNANDA",
    "anio": "General",
    "materia": "TUTORIA",
    "horario": "TUTORIA",
    "docente": "-",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "REGUEIRO, Marcelo.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Gramática Inglesa II",
    "docente": "2°D",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "ROCCHIA, DANIEL",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "PSICOLOGIA EDUCACIONAL",
    "docente": "1°F",
    "aula": "700",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "RODRIGUEZ OTERO, MARIANO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "ESPAÑA",
    "docente": "2°B",
    "aula": "AUD A",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "RODRIGUEZ, GABRIEL",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Historia de la Civil. Inglesa I",
    "docente": "2°D",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "RODRIGUEZ, MATIAS",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "PRINCIPIOS DE LA ADM",
    "docente": "2*B",
    "aula": "801",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "ROMAY, SILVINA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "Historia de la Educación Argentina",
    "docente": "4°D",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "RUAISE, VALERIA",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "EXPERIMENTACION EN BIO. Y SU DID. – 2ª CUAT -",
    "docente": "3°B",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "RUGGERI, VICTOR",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ECUACIONES DIFERENCIALES (1° y 2°)",
    "docente": "4°C",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "SALTO, ALBA",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "PORTUGUES - 2°CUAT -",
    "docente": "2°",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "SAMARDJI, JORGE",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "RÉGIMEN TRIBUTARIO Y LABORAL",
    "docente": "3*A",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "SAMPEDRO, CARLOS",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "LEO II",
    "docente": "2°B",
    "aula": "A FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "SCALISE, SEBASTIAN",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ALGEBRA I",
    "docente": "1°D",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "SCAVINO, LUCAS",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "ESTUD DE LA DIVERS. LING.y su ENSEÑ. EN EL NIVEL MEDIO Y SUP",
    "docente": "5°B",
    "aula": "804",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "SCAVINO, LUCAS",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "SEM LENG, SOC. y EDUC ( de invest: educ. )",
    "docente": "5°B",
    "aula": "804",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "SOFIA, ANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA III Y TP",
    "docente": "3°B",
    "aula": "902",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "TADDIO, JUAN PABLO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "DINÁMICA DE LOS PROCESOS CLIMÁTICOS",
    "docente": "1°B",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "TEJERA, LAURA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LENGUA FRANCESA II",
    "docente": "2*",
    "aula": "B IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "TOBÍO, OMAR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "EPISTEMOLOGÍA E HISTORIA DE LA GEOGRAFÍA",
    "docente": "4°C",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "TOBÍO, OMAR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "PROBLEMÁTICAS SOCIOAMBIENTALES",
    "docente": "4°C",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "TRILHE, ESTEFANIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TEORÍA E HISTORIA DE LA HISTORIOGRAFÍA",
    "docente": "5°C",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VACAFLOR, NOELIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SEMINARIO HISTORIA DE LAS MUJERES Y DE GÉNERO",
    "docente": "B",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VAZQUEZ , CAROLINA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "FISICA",
    "docente": "1°C",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VAZQUEZ, ANA EUGENIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "Seminario: LITERATURA FRANCESA CONTEMPORÁNEA",
    "docente": "5*",
    "aula": "CUB. 6",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VAZQUEZ, JUAN JOSE",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "DIDÁCTICA",
    "docente": "2°B",
    "aula": "1102",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VAZQUEZ, JUAN JOSE",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "DIDÁCTICA",
    "docente": "2°C",
    "aula": "1102",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VENTURA, MARIANA",
    "anio": "General",
    "materia": "LENGUA y LITER",
    "horario": "INTROD.A LA LENGUA Y LA LITER. - 1° CUAT-",
    "docente": "1°D",
    "aula": "----",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VENTURA, MARIANA",
    "anio": "General",
    "materia": "LENGUA y LITER",
    "horario": "LATIN I - 2° CUAT-",
    "docente": "1°D",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VENTURA, MARIANA",
    "anio": "General",
    "materia": "LENGUA y LITER",
    "horario": "LATIN III",
    "docente": "3°B",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VIGNOLO, SILVINA.",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "INTR. A LOS ESTUDIOS SOCIOCULTURALES",
    "docente": "1*",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "VOLKIND, PABLO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "ARG CONT",
    "docente": "4°C",
    "aula": "400",
    "turno": "Vespertino/Noche",
    "dia": "Martes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "SOCIOLOGÍA GENERAL",
    "horario": "8,00 a 10,00",
    "docente": "BARRIONUEVO, Luis",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "TALLER DE EXPRESION ORAL Y ESCRITA I",
    "horario": "11,30 a 12,50",
    "docente": "GENTA, FLORENCIA",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "10,10 a 11,30",
    "docente": "MENDEZ REBOLLEDO, María / MALFA, Adriana",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "DERECHOS HUMANOS Y GARANTIAS",
    "horario": "8,00 a 10,00",
    "docente": "DE LA VIA, Marcela",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "TALLER DE EXPRESION ORAL Y ESCRITA II",
    "horario": "10,10 a 11,30",
    "docente": "GENTA, FLORENCIA",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "11,30 a 13,30",
    "docente": "MENDEZ REBOLLEDO, María / MALFA, Adriana",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "DEMOGRAFIA, ECOLOGIA Y GEOG. HUMANA",
    "horario": "10,10 a 12,50",
    "docente": "ALVAREZ, Patricio (Suple BOSOER, Luciana)",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "DIDACTICA ESP. I Y TRAB DE CAMPO III",
    "horario": "8,00 a 10,00",
    "docente": "AZOFRA, Gisela",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "DIDACTICA ESPECIFICA Y RESIDENCIA",
    "horario": "12,10 a 13,30",
    "docente": "AZOFRA, Gisela",
    "aula": "Lab Química B",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "PSICOLOGIA SOCIAL Y JURIDICA",
    "horario": "8,00 a 10,00",
    "docente": "a concurso",
    "aula": "cubículo 7°",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "SEMINARIO OPTATIVO: ESI (2ºcuat)",
    "horario": "10,10 a 12,10",
    "docente": "AMORIN, María Eva",
    "aula": "cubículo 6°",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "LOGICA I Y TEORIA DE LA ARGUMENTACION",
    "horario": "10,10 a 12,50",
    "docente": "VALIÑO, Valeria",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "2° Año",
    "materia": "HISTORIA DE LA FILOSOFIA ANTIGUA",
    "horario": "10,10 a 12,50",
    "docente": "FORCINITI, Martín",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "2° Año",
    "materia": "HISTORIA DEL ARTE",
    "horario": "8,00 a 10,00",
    "docente": "LO RUSSO, Alejo",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "TALLER DIDACT.DE LA FILO Y PROD.MAT.ED",
    "horario": "12,10 a 14,10",
    "docente": "VICARI, Pablo",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "TALLER FILOSOFIA Y EDUCACION",
    "horario": "8,00 a 10,00",
    "docente": "DA CUNHA, Mónica",
    "aula": "Lab. Biología \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "TRABAJO DE CAMPO III",
    "horario": "10,10 a 12,50",
    "docente": "DURAN, Maximiliano",
    "aula": "Lab. Biología \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "4° Año",
    "materia": "SEMINARIO DE ANTROPOLOGÍA FILOSÓFICA \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "MORENO, Analía",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "RESIDENCIA",
    "horario": "8,40 a 10,00",
    "docente": "VICARI, Pablo",
    "aula": "Lab. Química A",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "SOCIEDAD, ESTADO Y DD HH",
    "horario": "10,10 a 12,10",
    "docente": "MAYO, Ariel",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I",
    "horario": "8,40 a 10,00",
    "docente": "POSE, Rubén",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "PSICOLOGIA GENERAL",
    "horario": "10,10 a 13,30",
    "docente": "CEJAS, Lisandro",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "PSICOLOGIA EDUCACIONAL",
    "horario": "10,10 a 12,10",
    "docente": "PANIZZO, Alejandra",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "8,00 a 10,00",
    "docente": "IRIARTE, Ernesto / HEREDIA, Guillermo",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "SISTEMA Y POLITICA EDUCATIVA (2ºCUAT)",
    "horario": "8,00 a 10,00",
    "docente": "TOKMAN, Ariel",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "PSICOLOGIA DE LOS CICLOS VITALES II",
    "horario": "10,10 a 12,50",
    "docente": "D'AVIRRO, María Julieta",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "4° Año",
    "materia": "PRACT. DE ENS. PSICOL. N. MEDIO Y SUPERIOR",
    "horario": "8,00 a 10,00",
    "docente": "DAMIANI, Raúl",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "5° Año",
    "materia": "PRACT. DE ENS. PSICOL. N. MEDIO Y RESIDENCIA",
    "horario": "10,10 a 12,10",
    "docente": "DAMIANI, Raúl",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD II",
    "horario": "12,10 a 13,30",
    "docente": "COLOMBO, Laura",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "PSICOLOGIA DE LOS CICLOS VITALES",
    "horario": "9,20 a 12,10",
    "docente": "LAPLACETTE, Juan",
    "aula": "Lab B Química",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "3° Año",
    "materia": "EPISTEMOLOGIA DE LAS CIENCIAS SOCIALES",
    "horario": "10,10 a 12,50",
    "docente": "GOMEZ, Diana",
    "aula": "Cubiculo 7º",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "4° Año",
    "materia": "CONST.DE LA PRACT.DOC.I N.SECUNDARIO",
    "horario": "8,00 a 10,00",
    "docente": "LAVALLETTO, Mercedes",
    "aula": "Edulab",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "4° Año",
    "materia": "POLITICAS EPISTEMICAS",
    "horario": "10,10 a 12,50",
    "docente": "DA CUNHA, Mónica",
    "aula": "Edulab",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "FISICA I",
    "horario": "10,10 a 12,50",
    "docente": "FERNANDEZ, Fernando",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "SEMINARIO EXPERIMENTAL I",
    "horario": "8,00 a 10,00",
    "docente": "MARMORA, Jessica",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "FISICA II",
    "horario": "8,00 a 10,50",
    "docente": "GARCIA MIRAMON, Gastón",
    "aula": "Lab. Física \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "FIGUEROA, Juan P. / GAVILAN CASTILLO, Diana",
    "aula": "Lab. Física \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "FISICA III \"B\" (2° Cuatrimestre)",
    "horario": "10,10 a 12,50",
    "docente": "MARMORA, Jessica",
    "aula": "Lab. Física \"B\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "ASTROFISICA (2º Cuatrimestre)",
    "horario": "7,20 a 10,00",
    "docente": "FIGUEROA, Juan P.",
    "aula": "Lab. Física \"B\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "4° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "8,00 a 10,00",
    "docente": "MACIEL, María",
    "aula": "301",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "FÍSICA",
    "anio": "4° Año",
    "materia": "RESIDENCIA PEDAGÓGICA PARA NIVEL MEDIO",
    "horario": "10,10 a 11,30",
    "docente": "CARRO, Daniela",
    "aula": "Lab. Física \"D\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "FÍSICA",
    "anio": "4° Año",
    "materia": "SISTEMA Y POLITICA EDUCATIVA (2ºCuatrimestre)",
    "horario": "11,30 a 13,30",
    "docente": "MACIEL, María",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "5° Año",
    "materia": "FISICA TEORICA II",
    "horario": "10,10 a 12,10",
    "docente": "DIBARBORA, CARLOS",
    "aula": "Lab. Física \"C\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "5° Año",
    "materia": "MECANICA CUANTICA",
    "horario": "8,00 a 10,00",
    "docente": "FRANCHI, Guillermo",
    "aula": "Lab. Física \"C\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "PEDAGOGIA GENERAL \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "ROSSETTI, Mariana",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "INTROD. A LA HISTORIA ANTIGUA \"E\"",
    "horario": "10,10 a 12,50",
    "docente": "a concurso",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "PREHISTORIA Y ARQUEOLOGÍA \"E\"",
    "horario": "8,00 a 10,00",
    "docente": "DANIELE, Alejandro",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA HISTORIA \"F\"",
    "horario": "8,00 a 10,50",
    "docente": "VACAFLOR, Noelia",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE ESPAÑA \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "CORREA BARBOZA, Marcela",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE GRECIA \"A\"",
    "horario": "11,30 a 12,50",
    "docente": "a concurso",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE GRECIA \"E\"",
    "horario": "8,00 a 11,30",
    "docente": "CIFUENTES, Martín",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE ESPAÑA \"G\"",
    "horario": "10,50 a 13,30",
    "docente": "RODRIGUEZ OTERO, Mariano",
    "aula": "503",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "INTRODUCCION A LA GEOGRAFIA \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "MC CASKILL, Jorge",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "4° Año",
    "materia": "HISTORIA CONTEMPORANEA \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "RODRIGUEZ OTERO, Mariano",
    "aula": "503",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "5° Año",
    "materia": "EDUCACION SEXUAL INTEGRAL \"A\" (cuatrim.)",
    "horario": "11,30 a 12,50",
    "docente": "VACAFLOR, Noelia",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "5° Año",
    "materia": "HISTORIA DEL ARTE \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "GUGLIOTELLA, Gabriela",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "4° Año",
    "materia": "PRACT. DOC. II Y RESIDENCIA MEDIA Y SUP.",
    "horario": "10,50 a 12,50",
    "docente": "COSCO, Karina",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE AFRICA \"A\"",
    "docente": "8,00 a 10,00",
    "aula": "PERAZZO, Silvia",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ASIA \"G\"",
    "docente": "8,00 a 10,00",
    "aula": "CIMOLI, Ricardo",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE AFRICA \"G\"",
    "docente": "10,10 a 12,10",
    "aula": "PERAZZO, Silvia",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "DISEÑO I \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "FERNANDEZ BLANCO, Cecilia",
    "aula": "Lab. Informática \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "INFORMATICA \"B\"",
    "horario": "10,50 a 12,10",
    "docente": "BOMBELLI, Enrique",
    "aula": "Lab. Informática \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I \"B\"",
    "horario": "12,10 a 13,30",
    "docente": "POSE, Rubén",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "INFORMATICA EDUCATIVA I \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "DEFELIPPE, Gabriela",
    "aula": "Lab. Informática \"B\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "INGLES I \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "RAVELO, Carolina",
    "aula": "Cubiculo 9º",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "10,10 a 12,10",
    "docente": "DELAMER, Laura",
    "aula": "Lab. Química \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "INGLES II \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "RAVELO, Carolina",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "5° Año",
    "materia": "LENGUA EXTRANJERA PORTUGUES (Cuatrim)",
    "horario": "10,50 a 12,50",
    "docente": "DAYAN, Andrea",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "FONETICA Y FONOLOGIA I \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "LORENZO, Julio",
    "aula": "Lab. Idiomas \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GEOG. Y CULT DE LOS ESTADOS UNIDOS \"A\" (2ºCUAT)",
    "horario": "10,50 a 12,50",
    "docente": "VARGAS REHNFELDT, Viviana",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GRAMATICA INGLESA I \"B\"",
    "horario": "10,50 a 12,10",
    "docente": "CORONEL, Angel",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "NEGRO, Patricia",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"B\"",
    "horario": "12,10 a 13,30",
    "docente": "RODRIGUEZ, María de los Angeles",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"C\"",
    "horario": "8,00 a 12,10",
    "docente": "DERMAN, Natalia",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GRAMATICA INGLESA I \"H\"",
    "horario": "8,00 a 11,30",
    "docente": "ARIAS, Juan José",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PRACTICA EN LABORATORIO DE IDIOMAS I \"H\"",
    "horario": "11,30 a 13,30",
    "docente": "LORENZO, Julio",
    "aula": "Lab. Idiomas \"A\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"I\"",
    "horario": "8,00 a 12,10",
    "docente": "a concurso",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"I\"",
    "horario": "12,10 a 13,30",
    "docente": "RIVAS, Pedro",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LITERATURA INGLESA I \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "PENA KOESSLER, Cecilia",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "GRAMATICA INGLESA II \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "VIDETTA, Marcelo",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"A\"",
    "horario": "12,10 a 13,30",
    "docente": "GONZALEZ, Pamela",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "CIPPONERI, Gabriela",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"B\"",
    "horario": "10,10 a 11,30",
    "docente": "RIVAS, Pedro",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "CONST.PRACT.DOC.N INIC. Y PRIM I \"C\"",
    "horario": "10,10 a 13,30",
    "docente": "CATALDI PICCOLO, Melina",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LITERATURA INGLESA I \"C\"",
    "horario": "8,00 a 10,00",
    "docente": "RODRIGUEZ VAN DAM, Valeria",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "ADQUISICIÓN DE LA LENGUA MATERNA \"C\" (2ºcuat)",
    "horario": "8,00 a 10,00",
    "docente": "GUILLEN, María Ayelén",
    "aula": "Lab. Idiomas \"B\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "LITERATURA INGLESA II \"A\"",
    "horario": "10,10 a 12,50",
    "docente": "PERDUCA, Florencia",
    "aula": "603",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "CONST. PRACT.DOC. N INIC Y PRIM II Y RES",
    "horario": "8,00 a 9,20",
    "docente": "HERFERT, Anabella",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "FILOSOFIA \"C\"",
    "horario": "10,10 a 12,10",
    "docente": "a concurso",
    "aula": "1101",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LENGUA INGLESA IV \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "GIANERA, Luis",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "SISTEMA Y POLITICA EDUCATIVA \"A\" (cuatr.)",
    "horario": "8,40 a 10,50",
    "docente": "a concurso",
    "aula": "1100",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "DD HH, SOCIEDAD Y ESTADO \"B\"",
    "horario": "11,30 a 13,30",
    "docente": "DEMIRDJIAN, Liliana",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "CONST. PRACT. DOC. N. MEDIO II Y RES. \"B\"",
    "horario": "11,30 a 12,50",
    "docente": "a concurso",
    "aula": "",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "DD HH, SOCIEDAD Y ESTADO \"E\"",
    "horario": "8,00 a 10,00",
    "docente": "ARBELO, Hernando",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "CONST. PRACT. DOC. N. SUP. II Y RES. \"A\"",
    "docente": "8,40 a 10,00",
    "aula": "a concurso",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "ESCRITURA ACADEMICA \"A\"",
    "docente": "10,10 a 11,30",
    "aula": "COLOMBO, Laura",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "NUEVAS TECNOLOGÍAS (1° Y 2° CUATR.)",
    "docente": "9,20 a 12,10",
    "aula": "OJEDA, Fernando",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "SABERES LUDICOS \"A\"",
    "docente": "10,10 a 12,10",
    "aula": "GONZALEZ GAINZA, Ramiro",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "INTR. A LA MATEMATICA SUPERIOR \"A\"",
    "horario": "8,40 a 10,00",
    "docente": "MONTENEGRO, Victor",
    "aula": "603",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "GEOMETRIA I \"A\"",
    "horario": "10,10 a 12,50",
    "docente": "SAN MIGUEL, Romina",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "GEOMETRIA I \"B\"",
    "horario": "8,00 a 12,50",
    "docente": "QUIROGA, Arminda",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ALGEBRA I \"C\"",
    "horario": "8,00 a 10,00",
    "docente": "TAJEYAN, Silvia",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "PSICOLOGIA EDUCACIONAL \"C\" (2do Cuat)",
    "horario": "10,10 a 12,50",
    "docente": "a concurso",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "ALGEBRA II \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "MANCINI, Marina",
    "aula": "AUDITORIO \"B\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "FILOSOFIA \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "RIOS FLORES, Pablo",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "GEOMETRIA II \"A\"",
    "horario": "9,20 a 10,50",
    "docente": "COSTA, CARLOS",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "ANALISIS MATEMATICO II \"B\"",
    "horario": "10,10 a 11,30",
    "docente": "a concurso",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "FILOSOFIA \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "TABAKIAN, Diego",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "GEOMETRIA II \"B\"",
    "horario": "11,30 a 12,50",
    "docente": "SANTACATERINA, Martín",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "TRAB. DE CAMPO III. CONST. TRAB. MAT. \"A\"",
    "horario": "10,50 a 12,10",
    "docente": "FORMENTO, Romina",
    "aula": "Lab. Biología \"B\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "DIDACTICA DE LA MATEMATICA \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "FORMENTO, Romina",
    "aula": "Lab. Biología \"B\"",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "ALGEBRA III \"B\"",
    "horario": "9,20 a 12,50",
    "docente": "FRANCO ARRUA, Carlos",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA MATEMATICA \"B\"",
    "horario": "8,00 a 9,20",
    "docente": "MICELLI, Mónica",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "FUNDAMENTOS DE LA MATEMATICA \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "CATANI, Ayelén",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "5° Año",
    "materia": "FUNDAMENTOS DE LA FISICA \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "FERNANDEZ, Fernando",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "5° Año",
    "materia": "ANALISIS MATEMÁTICO III \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "a concurso",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "TALLER DE EDUCACION NO FORMAL",
    "horario": "A CONCURSO 13,30 a 15,30",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA DE LAS PLANTAS I \"A\"",
    "horario": "BRIGNONE, NICOLAS 13,30 a 16,10",
    "docente": "",
    "aula": "LAB. A BIOL.",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "CONSTRUCCION PRACTICA DOCENTE I PARA EL NIVEL MEDIO “A”",
    "horario": "ROSALEZ - SANDONATO 14,50 a 17,30",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "DERECHOS HUMANOS, SOCIEDAD Y ESTADO “A”",
    "horario": "DEMIRDJIAN, LILIANA 16,10 a 18,10",
    "docente": "",
    "aula": "300",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "EDUCACION PARA LA SALUD",
    "horario": "CARNEVALE, ROMINA 14,50 a 17,30",
    "docente": "",
    "aula": "LAB. B QUIM.",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "FILOSOFIA “A”",
    "horario": "VICARI, PABLO 15,30 a 17,30",
    "docente": "",
    "aula": "301",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "FISICA \"A\"",
    "horario": "FIGUEROA, JUAN 13,30 a 16,10",
    "docente": "",
    "aula": "LAB. A FISICA",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "GENETICA CLASICA MOLECULAR Y POBLACIONAL",
    "horario": "MASE, Luis 12,50 a 15,30",
    "docente": "",
    "aula": "301",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "INTROD. A LOS SISTEMAS VIVIENTES \"D\"",
    "horario": "A CONCURSO 16,10 a 18,10",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "EPISTEMOLOGIA Y METODOLOGIA DE LA INVESTIGACION",
    "horario": "RODRIGUEZ, ALEJANDRO 12,50 a 15,30",
    "docente": "",
    "aula": "700",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "HISTORIA DEL PENSAMIENTO POLITICO",
    "horario": "TABAKIAN, DIEGO 14,50 a 16,10",
    "docente": "",
    "aula": "CUB 7",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "SEMINARIO DE CIENCIA POLITICA",
    "horario": "RODRIGUEZ, ALEJANDRO 16,50 a 18,50",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "TEORIA Y PRACTICA POLITICA II",
    "horario": "RODRIGUEZ, M. TERESA 15,30 a 18,10",
    "docente": "",
    "aula": "700",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "HISTORIA MUNDIAL CONTEMPORANEA",
    "horario": "MARTINEZ, ILANA 16,10 a 18,10",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "PSICOLOGIA POLITICA Y SOCIAL",
    "horario": "MRAHAD, MA CECILIA 14,10 A 16,10",
    "docente": "",
    "aula": "CUB. 9",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "MENDEZ R. - MALFA 13,30 a 14,50",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "MENDEZ R. - MALFA 14,50 a 16,50",
    "docente": "",
    "aula": "704",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "DERECHO CIVIL Y SOCIETARIO",
    "horario": "PONCE, ROMINA 16,10 a 18,10",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "DERECHOS HUMANOS, SOCIEDAD Y ESTADO “A”",
    "horario": "DEMIRDJIAN, LILIANA 13,30 a 15,30",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "DIDACTICA DE LA EDUCACION A DISTANCIA (2 cuatr.)",
    "horario": "PETIT, LUCIANO 15,30 a 17,30",
    "docente": "",
    "aula": "501",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "FINANZAS PUBLICAS",
    "horario": "SAMARDJI, JORGE 15,30 a 17,30",
    "docente": "",
    "aula": "LIC",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA INGLES (CUAT)",
    "horario": "RAVELO, CAROLINA 13,30 a 15,30",
    "docente": "",
    "aula": "EDULAB",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "PRINCIPIOS DE ADMINISTRACION",
    "horario": "CRUZ, FACUNDO 14,10 a 16,10",
    "docente": "",
    "aula": "601",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "SUJETO DE LA ENSEÑANZA (2 cuat.)",
    "horario": "PENNELLA, MARIA 13,30 a 16,10",
    "docente": "",
    "aula": "102",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "SISTEMAS DE INFORMACION CONTABLE",
    "horario": "OROFINO, REGINA 16,10 a 18,10",
    "docente": "",
    "aula": "102",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "DINAMICA DE LOS PROCESOS CLIMATICOS",
    "horario": "TADDIO, JUAN 14,50 a 16,50",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "GEOGRAFIA DE LA ARGENTINA II \"A\"",
    "horario": "CUBILLA, SERGIO DANIEL 12,50 a 16,10",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "GEOGRAFIA POLITICA “A”",
    "horario": "TOBIO, OMAR 15,30 a 17,30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "GEOGRAFIA SOCIAL \"A\"",
    "horario": "TOBIO, OMAR 13,30 a 15,30",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "GEOGRAFIA URBANA Y RURAL",
    "horario": "BOSOER, LUCIANA 15,30 a 17,30",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD I \"A\"",
    "horario": "SABARIS, ANDREA 13,30 a 14,50",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "NUEVAS TECNOLOGIAS (CUAT)",
    "horario": "FERNANDEZ BLANCO, CECILIA 16,10 A 18,10",
    "docente": "",
    "aula": "LAB. A INF.",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "SEMINARIO DE INVESTIGACION GEOGRAFICA",
    "horario": "MC CASKILL, ALEJANDRO 13,30 a 16,10",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "GOLDFARB - CUBILLA 16,50 a 18,10",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "DERECHOS HUMANOS SOC Y ESTADO",
    "horario": "PECZNIK, CAROLINA 13,30 a 15,30",
    "docente": "",
    "aula": "701",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "ENSEÑANZA DE LA HISTORIA Y CONSTRUCCION PRACTICA DOCENTE I",
    "horario": "COSCO, KARINA 12,50 a 15,30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "FILOSOFIA",
    "horario": "DA CUNHA, MONICA 15,30 a 17,30",
    "docente": "",
    "aula": "AUD. 4° PISO",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA ARGENTINA CONTEMPORANEA",
    "horario": "A CONCURSO 13,30 a 15,30",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DE ROMA “F”",
    "horario": "ESTELLER, LORENA 13,30 a 16,50",
    "docente": "",
    "aula": "200",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "PREHISTORIA Y ARQUEOLOGIA H",
    "horario": "DANIELE, ALEJANDRO 14,10 a 17,30",
    "docente": "",
    "aula": "400",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "SISTEMA Y POLITICA EDUCATIVA (Cuat)",
    "horario": "LAFIOSCA, MARIA LUZ 16,10 a 18,10",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "PSICOLOGIA EDUCACIONAL (2DO CUAT)",
    "horario": "BISSO, HELENA 15,30 A 18,10",
    "docente": "",
    "aula": "604",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "DIDACTICA GENERAL",
    "horario": "QUIROZ, ALAN 16,10 a 18,10",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "HERRAMIENTAS INFORMATICAS",
    "horario": "A CONCURSO 16,50 a 18,10",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "SHINZATO, FEDERICO 16,10 a 18,10",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "INFORMATICA “A”",
    "horario": "A CONCURSO 15,30 a 16,50",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "INTELIGENCIA ARTIFICIAL",
    "horario": "GOROSITO, CARLOS 15,30 a 17,30",
    "docente": "",
    "aula": "LAB. B INF.",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD II",
    "horario": "GENTA, FLORENCIA 13,30 a 14,50",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA PORTUGUES (cuat.)",
    "horario": "VAZQUEZ POHJU, ANDREA 13,30 a 15,30",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "PEDAGOGIA",
    "horario": "GAVILAN CASTILLO, DIANA 13,30 A 15,30",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "PROGRAMACIÓN III",
    "horario": "GOROSITO, CARLOS 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. B INF.",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "TECNICAS DIGITALES",
    "horario": "RUIZ, MATIAS 14,50 a 16,10",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "EL PROFESOR DE INGLES Y EL MAESTRO DE GRADO",
    "horario": "HERFERT - MEDINA 16,10 A 18,10",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "GEOGRAFIA DE EEUU \"G\" (2 cuat)",
    "horario": "VARGAS R., VIVIANA 16,10 a 18,10",
    "docente": "",
    "aula": "602",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "GRAMATICA INGLESA I \"F\"",
    "horario": "RAVELO, CAROLINA 16,10 a 18,10",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "GRAMATICA INGLESA I “G”",
    "horario": "RODRIGUEZ, SERGIO 12,50 a 16,10",
    "docente": "",
    "aula": "806",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "GRAMATICA INGLESA II \"E\"",
    "horario": "NULHEM, ROMINA 15,30 a 17,30",
    "docente": "",
    "aula": "603",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "HISTORIA DE LA CIVILIZACION INGLESA I \"E\"",
    "horario": "RODRIGUEZ, GABRIEL 13,30 a 15,30",
    "docente": "",
    "aula": "603",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "HISTORIA NORTEAMERICANA",
    "horario": "VARGAS R., VIVIANA 13,30 a 16,10",
    "docente": "",
    "aula": "602",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA ITALIANO II (2 CUAT)",
    "horario": "AGNESE, VIOLETA 13,30 a 15,30",
    "docente": "",
    "aula": "LAB IDIOMA",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA INGLESA IV “C”",
    "horario": "BANFI, CRISTINA 13,30 a 17,30",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "PSICOLOGIA EDUCACIONAL \"F\"",
    "horario": "LAPLACETTE, AUGUSTO 14,50 a 16,10",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "SUJETOS DEL NIVEL \"F\"",
    "horario": "LAPLACETTE, AUGUSTO 12,50 a 14,50",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "CONSTRUCCION PRACTICA DOCENTE EN EL NIVEL SUPERIOR Y RESIDENCIA",
    "horario": "SCHEINER, IRENE 15,30 a 16,50",
    "docente": "",
    "aula": "804",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "GRAMATICA ITALIANA I",
    "horario": "VOMMARO, GISELA 12,50 a 15,30",
    "docente": "",
    "aula": "804",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LA ENSEÑANZA DEL ITALIANO A PARTIR DE LA MUSICA ITALIANA",
    "horario": "FERRANTE, GUIDO 14,10 a 15.30",
    "docente": "",
    "aula": "803",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I",
    "horario": "POSE, RUBEN 15,30 a 16,50",
    "docente": "",
    "aula": "803",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LENGUA ITALIANA II",
    "horario": "FERNANDEZ S., CLAUDIA 13,30 a 15,30",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LINGÜÍSTICA",
    "horario": "GARCIA,L AMPARO 16,50 a 18,50",
    "docente": "",
    "aula": "601",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LIT. DEL HUMANISMO Y DEL RENACIMIENTO",
    "horario": "CAMPANA, GRISELDA 15,30 a 18,10",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "SORIA - BRUNO 16,50 a 18,10",
    "docente": "",
    "aula": "701",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LATIN I (2 cuat)",
    "horario": "NASTA, MARCELA 14,50 a 17,30",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "FILOSOFIA \"B\"",
    "horario": "DA CUNHA, MONICA 13,30 a 15,30",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "FILOSOFIA “A”",
    "horario": "CARBONI, MARIA LAURA 12,50 a 14,50",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "GRIEGO I",
    "horario": "GASSO, MARIA JOSE 15,30 a 18,10",
    "docente": "",
    "aula": "1102",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA INGLES NIVEL II (2 cuat.)",
    "horario": "RODRIGUEZ, SERGIO 16,10 a 18,10",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LITERATURA EN LENGUA INGLESA Y ALEMANA \"A\"",
    "horario": "ORLANTE, EMILIANO 12,50 a 15,30",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "METODOLOGIA ESPECIAL Y PRACTICAS DE LA ENSEÑANZA",
    "horario": "SEOANE, SILVIA 12,50 a 14,50",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SEMINARIO ANALISIS DEL DISCURSO",
    "horario": "KLEINMAN, ILEANA 14,50 a 17,30",
    "docente": "",
    "aula": "1101",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SEMINARIO CANON LITERARIO",
    "horario": "DE VINCENZO, DIEGO 15,30 a 17,30",
    "docente": "",
    "aula": "1001",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LA LECTURA Y ESCRIT. EN EDUC, FORMAL Y TC I Y II",
    "horario": "SABARIS - ROLLI 14,50 a 16,10",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LITERATURA LATINOAMERICANA",
    "horario": "DI BENEDETTO, MATIAS 14:50 a 17:30",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "BIOTECNOLOGÍA (2DO CUAT)",
    "horario": "BARREIRO, NATALIA 15:30 a 17:30",
    "docente": "",
    "aula": "LAB \"D\" FIS",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "ANALISIS MATEMATICO I",
    "horario": "RUGGERI, VICTOR 15,30 a 16,50",
    "docente": "",
    "aula": "1002",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "CONSTRUCCION DE LA PRACTICA DOCENTE I",
    "horario": "FLEITAS, MA MILAGROS 15,30 a 18,10",
    "docente": "",
    "aula": "LAB. A QUIM.",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "DERECHOS HUMANOS, SOCIEDAD Y ESTADO",
    "horario": "KALAIDJIAN, GRETA 17,30 a 19,30",
    "docente": "",
    "aula": "LAB. A QUIM.",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "DIDACTICA ESPECIFICA II Y RESIDENCIA",
    "horario": "MARINO, DOLORES 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. A QUIM.",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "ELECTROMAGNETISMO Y FENOMENOS ONDULATORIOS",
    "horario": "FRANCHI, GUILLERMO 13,30 a 17,30",
    "docente": "",
    "aula": "LAB. B FISICA",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "INTRODUCCION A LA QUIMICA INDUSTRIAL (2 cuat.)",
    "horario": "CICCOLO, OSVALDO 14,50 a 16,50",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD II",
    "horario": "CARBONARO, ESTEBAN 13,30 a 14,50",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "MATEMATICA APLICADA",
    "horario": "RUGGERI, VICTOR 13,30 a 15,30",
    "docente": "",
    "aula": "1002",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "METODOLOGIA DE LA INVESTIGACION",
    "horario": "PETIT, LUCIANO 17,30 a 18,50",
    "docente": "",
    "aula": "LAB. B FISICA",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "PSICOLOGIA EDUCACIONAL (2 cuat)",
    "horario": "PANIZZO, ALEJANDRA 12,50 a 15,30",
    "docente": "",
    "aula": "1001",
    "turno": "Tarde",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "ENSEÑANZA DE LAS LENGUAS EXTRANJERA EN EDUCACIÓN ESPECIAL",
    "docente": "B",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "TC II",
    "docente": "2*B",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "SIST. y POLIT. EDUCAT. - .1° CUAT -",
    "docente": "3°B",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "HISTORIA, FILOS.y SOCIOL.. de la BIOLOGÍA",
    "docente": "4°B",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "3°B",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "EDUCACIÓN NO FORMAL",
    "docente": "4°B",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "INGLES",
    "horario": "SABERES LÚDICOS, MOTORES Y CORPORALES",
    "docente": "B",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "TÉCNICAS TEATRALES EN EL AULA",
    "docente": "B",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "DINÁMICA DE LOS PROCESOS CLIMÁTICOS",
    "docente": "1°C",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "APLICATIVOS INFORMÁTICOS",
    "docente": "4*A",
    "aula": "----",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "FONÉTICA Y TEORÍAS FON II",
    "docente": "2°D",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "INTRODUCCION A LA MATEMATICA SUPERIOR",
    "docente": "1°F",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "GENÉTICA CLÁSICA, MOLECULAR y POBLACIONAL",
    "docente": "3°B",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ACUÑA DARIO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ÁLGEBRA I",
    "docente": "1°F",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ACUÑA, DARIO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ELEMENTOS BÁSICOS DE MATEMÁTICA (1° y 2° Cuatr)",
    "docente": "1°F",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "AGUILAR, SANDRA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "PEDAGOGÍA",
    "docente": "1*A",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ALBORNOZ, MARTÍN",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "INTR. A LA ECONOMÍA",
    "docente": "1*A",
    "aula": "801",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ALBORNOZ, MARTÍN",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "TC II",
    "docente": "2*B",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ALVAREZ, PATRICIO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "CONSTRUCCIÓN DE LA PRÁCTICA DOCENTE Y ENSEÑANZA",
    "docente": "3°C",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "AMARILLO, FABIANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DEL ARTE",
    "docente": "5*C",
    "aula": "A INF CUB. 7",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ARRIBALZAGA, MARIA BELEN",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "DERECHOS HUMANOS, SOCIEDAD Y ESTADO",
    "docente": "3°C",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BANNI, CLAUDIA",
    "anio": "General",
    "materia": "GENEROS",
    "horario": "SEMINARIO DE GENEROS",
    "docente": "-",
    "aula": "400",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BARRANGOU, MARTIN",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LENGUA FRANCESA IV",
    "docente": "3°",
    "aula": "B IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BARRANGOU, MARTIN",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LENGUA FRANCESA IV",
    "docente": "4*",
    "aula": "B IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BARREIRO, NATALIA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "INTROD. A LOS SIST. VIVIENTES",
    "docente": "1°B",
    "aula": "LAB B BIO",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BASUALDO, GONZALO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "LECTURA, ESCRITURA Y ORALIDAD II",
    "docente": "3°C",
    "aula": "705",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BELLO, NATALIA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "INTROD. A LOS SIST. VIVIENTES",
    "docente": "1°C",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BELUCCI, CECILIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "TC II",
    "docente": "2*",
    "aula": "Cub 3°",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BISSO, ELENA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PSICOLOGIA EDUCACIONAL",
    "docente": "3°H",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BOMBELLI, ENRIQUE CARLOS",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "NUEVAS TECNOLOGÍAS . . - 2° CUAT -",
    "docente": "3°B",
    "aula": "B Química",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BOMBELLI, ENRIQUE CARLOS",
    "anio": "General",
    "materia": "ADMINISTRACION",
    "horario": "NUEVAS TECNOLOGÍAS (1 y 2 cuatr.)",
    "docente": "5*A",
    "aula": "B INFO",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BOSOER, LUCIANA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1°C",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BOTTI SIBILA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE GRECIA",
    "docente": "2*B",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BRAVO, DANIEL",
    "anio": "General",
    "materia": "MATEMATICA",
    "horario": "NUEVAS TECNOLOGÍAS",
    "docente": "2°C",
    "aula": "B INFO",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "BRIGNONE, NICOLÁS",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "BIO de las PLANTAS",
    "docente": "2°B",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CABRERA, SEBASTIAN",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "GRAMÁTICA II",
    "docente": "2*",
    "aula": "CUB 9",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CAO, STELLA MARIS",
    "anio": "General",
    "materia": "LENGUA y LITER",
    "horario": "SUJETOS DE NIVEL –1° CUAT -",
    "docente": "1°D",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CAO, STELLA MARIS",
    "anio": "General",
    "materia": "LENGUA y LITER",
    "horario": "PSICOLOGIA EDUCACIONAL – - 2° CUAT -",
    "docente": "1°D",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CARBAJALES, MARCELA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1°B",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CARBAJALES, MARCELA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "DIRECCIÓN",
    "docente": "---",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CARNEVALE, ROMINA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "EDUCACIÓN PARA LA SALUD",
    "docente": "5° B",
    "aula": "A QUIMICA",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CATALIN, GERMÁN",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA POLÍTICA",
    "docente": "2°C",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CHISLEANSCHI, BEATRIZ",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1°B",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "COCHERO, GREGORIA",
    "anio": "General",
    "materia": "MUJER Y GENERO",
    "horario": "SEMINARIO INCLUSIVO Y ACCESIBLE – VIOLENCIA DE GENERO",
    "docente": "-----",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CONVERTI VERONICA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "TC II",
    "docente": "2*",
    "aula": "CUB 3°",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CORONEL, ANGEL JAVIER",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "GRAMÁTICA INGLESA I",
    "docente": "1°D",
    "aula": "1102",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CUBILLA SERGIO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA ECONÓMICA MUNDIAL",
    "docente": "2°B",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CUBILLA SERGIO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "INTRODUCCIÓN A LA GEOGRAFÍA",
    "docente": "1°B",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CUELLO, SILVINA",
    "anio": "General",
    "materia": "LENGUA y LITER.",
    "horario": "PSICOLOG. EDUCACIONAL - 1° CUAT -",
    "docente": "1°C",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CUELLO, SILVINA",
    "anio": "General",
    "materia": "LENGUA y LITER.",
    "horario": "SUJETOS DE NIVEL- 2° CUAT-",
    "docente": "1°C",
    "aula": "AUD A",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "CUELLO, SILVINA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SUJETOS DEL NIVEL",
    "docente": "3*B",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DE ESCALADA PLA, ALEJANDRA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "SIC",
    "docente": "1*A",
    "aula": "705",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DEL FABBRO, FRANCO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA DE LA REPÚBLICA ARGENTINA III",
    "docente": "4°C",
    "aula": "501",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DEMIRDJIAN, LILIANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DEL PENSAMIENTO POLÍTICO",
    "docente": "B",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DEMIRDJIAN, LILIANA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "DD.HH, SOC. y ESTADO",
    "docente": "5°B",
    "aula": "BIBLIO",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DI BENEDETO, MATIAS",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LIT. LATINOAMERICA",
    "docente": "4*B",
    "aula": "1101",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DI FRANZA, LEONARDO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "DIRECCIÓN",
    "docente": "-",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DI MODUGNO, LUCIA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "HISTORIA DE LA EDUC. ARG.",
    "docente": "3*A",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DI SIBIO, MARCELO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "DIDÁCTICA GENERAL",
    "docente": "2*B",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DISTEFANO, FABIAN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA HISTORIA",
    "docente": "1*D",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "DOME, CAROLINA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SUJETOS DEL NIVEL",
    "docente": "3*C",
    "aula": "CUB 6",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ELIAS, YAHEL",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "TALLER DE ORALIDAD",
    "docente": "1*",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ELIAS, YAHEL",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LENGUA FRANCESA I",
    "docente": "1*",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "FERNANDEZ BRAVO, ALVARO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TEORIA LITER – 1º CUAT -",
    "docente": "1º E",
    "aula": "----",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "FERNANEZ MOORE, PALOMA",
    "anio": "General",
    "materia": "MUJER Y GENERO",
    "horario": "SEMINARIO INCLUSIVO Y ACCESIBLE – VIOLENCIA DE GENERO",
    "docente": "----",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "FIORDALISI, FLAVIA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°D",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "FORAY, FACUNDO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA DE LA ARGENTINA II (PROCESOS SOCIALES Y ECONÓMICOS)",
    "docente": "3°B",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "GIACHETTI, NATALIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LITERATURA FRANCESA II",
    "docente": "4*",
    "aula": "CUB 9°",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "GOIBURU, IRENE",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "HISTORIA ECON. GRAL. Y ARG.",
    "docente": "1*B",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "GOLDFARB, LILA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1C",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "GONZÁLEZ, GUSTAVO.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "DDHH, SOCIEDAD Y ESTADO",
    "docente": "4°D",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "GONZALEZ, MARTA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "EDUCACIÓN NO FORMAL",
    "docente": "4°B",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "GONZALEZ, NANCY",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "CONTABILIDAD DE GESTION Y COSTOS",
    "docente": "3*A",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "IRIARTE, ERNESTO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "3°B",
    "aula": "B BIO",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "JARUF, PABLO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "DIRECCIÓN",
    "docente": "-----",
    "aula": "-------",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "JUAREZ, SABRINA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "INFORMACIÓN GEOGRÁFICA I",
    "docente": "1°B",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "LAFIOSCA, MARIA LUZ",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "SISTEMA Y POLÍTICA EDUCAT (2° CUAT )",
    "docente": "5ºB",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "LAFIOSCA, MARIA LUZ",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PEDAGOGÍA",
    "docente": "1*G",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "LASSO, RUBÉN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA HISTORIA ANTIGUA",
    "docente": "1*B",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "LEON BANI, MARIELA",
    "anio": "General",
    "materia": "MUJER Y GENERO",
    "horario": "SEMINARIO INCLUSIVO Y ACCESIBLE – VIOLENCIA DE GENERO",
    "docente": "-----",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "LOPEZ CANO, PAULA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "HISTORIA NORTEAMERICANA",
    "docente": "3°D",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "LOPEZ CHIODINI, ALEJANDRO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA HISTORIA ANTIGUA",
    "docente": "1°C",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "LUVERA,SILVANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SEMINARIO DE METODOLOGÍA DE LA INVESTIGACIÓN",
    "docente": "4*B",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "MAYO, ARIEL",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "ESTADÍSTICA",
    "docente": "2*A",
    "aula": "801",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "MC CASKILL ALEJANDRO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA GEOGRAFÍA",
    "docente": "3*C",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "MC CASKILL, ALEJANDRO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "SEMINARIO DE INVESTIGACIÓN GEOGRÁFICA",
    "docente": "5°C",
    "aula": "501",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "MC CASKILL, ALEJANDRO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "COORDINACIÓN",
    "docente": "-",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "MENAN, CARINA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "GEO Y CULT DE LAS ISLAS BRITÁNICAS",
    "docente": "1°E",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "MEREL, IGNACIO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "ENSEÑANZA DE LA HISTORIA – CONSTR. DE LA PRACT. DOCENTE I",
    "docente": "3*B",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "MORELLI, NICOLAS",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ANÁLISIS MATEMÁTICO II",
    "docente": "2°C",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "MORELLI, NICOLAS",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "PROBABILIDADES Y ESTADÍSTICA",
    "docente": "3°C",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "NASTA, MARCELA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LATIN II",
    "docente": "2°B",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "NULHEM, ROMINA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "GRAMÁTICA INGLESA I",
    "docente": "1°E",
    "aula": "A IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "OTAL LANDI, JULIAN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TEORÍA E HISTORIA DE LA HISTORIOGRAFÍA",
    "docente": "5°B",
    "aula": "AUD B",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "OTERO MAC DOUGALL, AGUSTINA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LIT ESP SIGLO ORO",
    "docente": "3B",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "OZORES PACI, AGUSTÍN",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "TUTORIA (de física)",
    "docente": "-----",
    "aula": "-------",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "OZORES PACI, AGUSTÍN",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "FÍSICA BIOLÓGICA",
    "docente": "2°B",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "PALACIOS, JIMENA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "SEM. REPRES. Y PROYECC de los DISCURSOS de la ANTIG…..",
    "docente": "5°B",
    "aula": "804",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "PAMPILLO, SOLEDAD",
    "anio": "General",
    "materia": "INGLES",
    "horario": "ADQUISICION DE LA LM Y LE",
    "docente": "3°D",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "PAZ, NAHUEL",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "PROBLEMAS DE LIT. CONTEMPORANEA EN LENGUA ESPAÑOLA",
    "docente": "5*A",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "PEZNIK, CAROLINA ANDREA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "ESI - 2 do. Cuatrimestre-",
    "docente": "5°1",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "PIÑEIRO, GUSTAVO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "TEMAS AVANZADOS DE MATEMÁTICA",
    "docente": "5°C",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "PLENCOVICH, VANESA",
    "anio": "General",
    "materia": "INGLES",
    "horario": "SABERES LÚDICOS, MOTORES Y CORPORALES",
    "docente": "B",
    "aula": "AUD A",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "PONCE ARIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PREHISTORIA Y ARQUEOLOGÍA ARGENTINA Y AMERICANA",
    "docente": "1*B",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "PONCE ARIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PREHISTORIA Y ARQUEOLOGÍA ARGENTINA Y AMERICANA",
    "docente": "1*C",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "POSE RUBEN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "LECTURA ESCRITURA Y ORALIDAD II",
    "docente": "2*C",
    "aula": "902",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "QUIROZ, ALAN",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "TRABAJO DE CAMPO I (cuatr.)",
    "docente": "1°D",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "RAMAS, MA. FERNANDA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "PEDAGOGÍA",
    "docente": "1°C",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "RAMAS, MARIA FERNANDA",
    "anio": "General",
    "materia": "TUTORIA",
    "horario": "TUTORIA",
    "docente": "-",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "REY, MARIA ALEJANDRA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LENGUA EXTRANJERA II",
    "docente": "4*",
    "aula": "D FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "REY, MARIA ALEJANDRA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "LENGUA EXTRANJERA INGLÉS",
    "docente": "5°B",
    "aula": "D FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "RIVAROLA, AGOSTINA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "SIC",
    "docente": "1*B",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ROCCHIA, DANIEL",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "SUJETO DEL APRENDIZAJE",
    "docente": "1°D",
    "aula": "804",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "RODRIGUEZ OTERO, MARIANO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA CONTEMPORÁNEA",
    "docente": "4*C",
    "aula": "805",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "RODRIGUEZ, GABRIEL",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "LENGUA EXTRANJERA (1° y 2° Cuatr)",
    "docente": "4°C",
    "aula": "700",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "RODRIGUEZ, MARIA DE LOS ANGELES",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°D",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ROJAS SILVINA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE GRECIA",
    "docente": "2*C",
    "aula": "902",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "ROSSETTI, MARIANA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "SISTEMA Y POLÍTICA EDUCATIVA (cuat)",
    "docente": "4°D",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "SAMPEDRO, CARLOS",
    "anio": "General",
    "materia": "LENGUA y LITER",
    "horario": "TALLER DE LEO I : GÉNEROS ACADÉMICOS",
    "docente": "1°D",
    "aula": "A FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "SAN MIGUEL ROMINA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "GEOMETRÍA I",
    "docente": "1°D",
    "aula": "B Info",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "SCALISE, SEBASTIAN",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ÁLGEBRA I",
    "docente": "1°E",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "SEOANE, SILVIA",
    "anio": "General",
    "materia": "LENGUA y LITER",
    "horario": "METOD. ESPEC. y PRAC. de la ENSEÑANZA",
    "docente": "4°B",
    "aula": "602",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "SEOANE, SILVIA",
    "anio": "General",
    "materia": "LENGUA y LITER",
    "horario": "METODOL. ESPECIAL y RESIDENCIA",
    "docente": "5°B",
    "aula": "602",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "SOFIA ANA LAURA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA II",
    "docente": "2*D",
    "aula": "201",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "TABAKIAN, DIEGO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "FILOSOFÍA",
    "docente": "3°B",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "TADDIO, JUAN PABLO",
    "anio": "General",
    "materia": "GEOGRAFIA",
    "horario": "CIENCIAS DE LA TIERRA II",
    "docente": "2°C",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "TOBIO, OMAR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA SOCIAL",
    "docente": "4°C",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "TOBIO,OMAR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA POLÍTICA",
    "docente": "2°B",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "TREBISACCE ROMINA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "GRAMÁTICA I",
    "docente": "2°B",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "VACAFLOR, NOELIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA HISTORIA",
    "docente": "1°G",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "VACAFLOR, NOELIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SEMINARIO HISTORIA DE LAS MUJERES Y DE GÉNERO",
    "docente": "D",
    "aula": "Biblio",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "VAZQUEZ POJHU",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "PORTUGUÉS",
    "docente": "A",
    "aula": "CUB 7°",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "VIDETTA, MARCELO.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "INTRO. A LA LINGÜÍSTICA",
    "docente": "4°D",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "VIGNOLO, SILVINA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "ESTUDIOS LINGÜÍSTICOS COMPARADOS",
    "docente": "5*",
    "aula": "1101",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "VIGNOLO, SILVINA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "HISTORIA DE LA LENGUA FRANCESA",
    "docente": "5*",
    "aula": "CUB. 3 700",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "VILLENA, LILIANA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "GEOMETRÍA I",
    "docente": "1°E",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Miércoles"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "HISTORIA DE LOS HECHOS Y LAS IDEAS ECONOM.",
    "horario": "8,00 a 10,00",
    "docente": "a concurso",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "PSICOLOGIA DEL DESARROLLO Y DEL APRED-",
    "horario": "10,10 a 12,50",
    "docente": "MRAHAD, María Cecilia",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "DERECHO PRIVADO I",
    "horario": "8,00 a 10,00",
    "docente": "LOMBA, Noelia",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "ECONOMIA POLITICA",
    "horario": "10,10 a 12,50",
    "docente": "ALBORNOZ, Martín",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "DERECHO PRIVADO II",
    "horario": "10,10 a 12,10",
    "docente": "GAUHAROU, Andrea",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "RELACIONES LABORALES",
    "horario": "8,00 a 10,00",
    "docente": "a concurso",
    "aula": "",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "DERECHO AMBIENTAL Y DE LOS REC. NAT.",
    "horario": "10,10 a 12,50",
    "docente": "DE LA VIA, Marcela",
    "aula": "Edulab",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "FINANZAS PUBLICAS Y DERECHO TRIBUTARIO",
    "horario": "8,00 a 10,00",
    "docente": "BARRIONUEVO, Luis",
    "aula": "Lab Biología \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "PSICOLOGIA DEL DESARROLLO (2° Cuat.)",
    "horario": "8,00 a 10,50",
    "docente": "DAMIANI, Raul",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "10,50 a 12,10",
    "docente": "CARBONI, Laura / RIVAS, Pedro",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "EDUCACION SEXUAL INTEGRAL (2º Cuat)",
    "horario": "12,10 a 13,30",
    "docente": "GONZALEZ MARTIN, Miranda",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL",
    "horario": "10,10 a 12,10",
    "docente": "a concurso",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "2° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "8,00 a 10,00",
    "docente": "MERCADO, Maria Belen",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA CIENCIA \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "CALDERON, Rafael",
    "aula": "Lab. Biología \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "FILOSOFIA DE LA LOGICA (2° Cuat.)",
    "horario": "8,00 a 10,50",
    "docente": "KAKAZU, Gabriel",
    "aula": "Lab. Biología \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "4° Año",
    "materia": "ESTETICA",
    "horario": "8,00 a 10,00",
    "docente": "LORENZO, Luis",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "FILOSOFIA DE LA HISTORIA",
    "horario": "10,10 a 12,10",
    "docente": "LORENZO, Luis",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "FILOSOFIA",
    "horario": "10,50 a 12,50",
    "docente": "ARRIAGADA, Rodrigo",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "TEORIA DE LA ARGUMENTACION (2° Cuat.)",
    "horario": "8,00 a 10,50",
    "docente": "KAHRS, María Laura",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "ESCUELA Y COMUNNIDAD (2ºCUAT)",
    "horario": "10,10 a 12,10",
    "docente": "DIANA MENENDEZ, Carolina",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL",
    "horario": "8,00 a 10,00",
    "docente": "PEREIRO MIÑAN, Karina (Licencia)",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "TECNICAS DE EXPLORACION PSICOLOGICA",
    "horario": "10,50 a 12,50",
    "docente": "NUÑEZ, Mariana",
    "aula": "Lab. Química \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "TEORIA PSICOANALITICA",
    "horario": "8,40 a 10,50",
    "docente": "FERRARI, Andrea",
    "aula": "1102",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "4° Año",
    "materia": "LENGUA EXTRANJERA (Cuatrimestral)",
    "horario": "10,10 a 12,10",
    "docente": "GUILLEN, María Ayelén",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "5° Año",
    "materia": "ORIENTACION VOCACIONAL Y OCUPACIONAL (2ºCUAT)",
    "horario": "8,40 a 10,50",
    "docente": "NUÑEZ, Mariana",
    "aula": "Lab. Química \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "5° Año",
    "materia": "EPISTEMOLOGIA Y PSICOLOGIA GENETICA (2° Cuat)",
    "horario": "10,50 a 12,50",
    "docente": "PATARO, Alejandra",
    "aula": "1102",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "BASES BIOLOGICAS DE LA SUBJETIVACION",
    "horario": "8,00 a 10,00",
    "docente": "a concurso",
    "aula": "EDULAB",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "PSICOLOGIA GENERAL",
    "horario": "10,10 a 12,10",
    "docente": "PANIZZO, Alejandra",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL",
    "horario": "10,10 a 12,10",
    "docente": "RONCONI, Vanina",
    "aula": "Lab. Biología \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "SOCIOLOGIA DE LA EDUCACION",
    "horario": "8,00 a 10,00",
    "docente": "MAYO, Ariel",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "4° Año",
    "materia": "DIMENSION ETICA DEL TRABAJO DOCENTE",
    "horario": "8,00 a 10,00",
    "docente": "MORENO, Analia",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "4° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "10,10 a 12,10",
    "docente": "MARTINEZ DEL SEL, Valeria",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "5° Año",
    "materia": "EXPERIENCIAS EDUCATIVAS EN CONTEXTO (2º CUATR.)",
    "horario": "10,10 a 12,10",
    "docente": "DELAMER, Laura",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "ALGEBRA I",
    "horario": "11,30 a 12,50",
    "docente": "MONTENEGRO, Victor",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "GEOMETRIA",
    "horario": "8,00 a 11,30",
    "docente": "YACOBUCCI, Matías",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "ALGEBRA II",
    "horario": "10,10 a 11,30",
    "docente": "MONTENEGRO, Victor",
    "aula": "Lab. Física \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "ANALISIS MATEMATICO II",
    "horario": "8,00 a 10,00",
    "docente": "MONTENEGRO, Victor",
    "aula": "Lab. Física \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "SEMINARIO EXPERIMENTAL II",
    "horario": "11,30 a 13,30",
    "docente": "INDELICATO, Evangelina",
    "aula": "Lab. Física \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "DIDACTICA DE LA FISICA I",
    "horario": "9,20 a 10,50",
    "docente": "INDELICATO, Evangelina",
    "aula": "Lab. Física \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "FILOSOFIA",
    "horario": "10,50 a 12,50",
    "docente": "AHUMADA, Matías",
    "aula": "Lab. Física \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "TRABAJO DE CAMPO III",
    "horario": "8,00 a 9,20",
    "docente": "INDELICATO, Evangelina",
    "aula": "Lab. Física \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "4° Año",
    "materia": "FISICA IV",
    "horario": "8,00 a 10,50",
    "docente": "GIANTURCO, Andrea",
    "aula": "Lab. Física \"D\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "4° Año",
    "materia": "FISICA TEORICA I \"B\" (2° CUATR.)",
    "horario": "10,50 a 12,50",
    "docente": "GIANTURCO, Andrea",
    "aula": "Lab. Física \"D\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "4° Año",
    "materia": "LENGUA EXTRANJERA (CUATRIMESTRAL)",
    "horario": "12,50 a 14,50",
    "docente": "RAVELO, Livia Carolina",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "5° Año",
    "materia": "DIDACTICA DE LA FÍSICA PARA EL NIVEL SUP",
    "horario": "8,00 a 9,20",
    "docente": "FIGUEROA, Juan Pablo",
    "aula": "Lab. Química \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "5° Año",
    "materia": "RESIDENCIA PEDAGOGICA EN EL NIVEL SUP.",
    "horario": "9,20 a 10,50",
    "docente": "FIGUEROA, Juan Pablo",
    "aula": "Lab. Química \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA HISTORIA \"A\"",
    "horario": "9,20 a 12,10",
    "docente": "LUVERA, Silvana",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "PEDAGOGIA GENERAL \"E\"",
    "horario": "9,20 a 11,30",
    "docente": "LAFIOSCA, María Luz",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"E\"",
    "horario": "8,00 a 9,20",
    "docente": "BANDINI, Alicia / GAVILAN CASTILLO, Diana",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "INTROD. A LA HIST. ANTIGUA \"F\"",
    "horario": "8,00 a 10,50",
    "docente": "CIFUENTES, Martín",
    "aula": "Auditorio \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL \"E\"",
    "horario": "11,30 a 13,30",
    "docente": "GAVILAN CASTILLO, Diana",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HIST. ARGENTINA Y AMERICANA II \"E\"",
    "horario": "8,00 a 11,30",
    "docente": "KOHEN, Daniel",
    "aula": "1100",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE GRECIA \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "CIFUENTES, Martín LIC. (SUPL",
    "aula": "503",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD II \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "a concurso",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "CONST.PRACT.DOC. / ENSEÑANZA DE LA HIST. \"A\"",
    "horario": "10,10 a 12,50",
    "docente": "VOLPINI, Valeria",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "SUJETO DE NIVEL \"A\" (2° Cuatrimestre)",
    "horario": "7,20 a 10,00",
    "docente": "PENNELLA, Maria Angela",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "SUJETO DE NIVEL \"F\" (2° Cuatrimestre)",
    "horario": "10,50 a 13,30",
    "docente": "PETIT, Lucrecia",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "4° Año",
    "materia": "HISTORIA AMERICANA CONTEMPORANEA \"A\"",
    "horario": "9,20 a 12,50",
    "docente": "BRANSBOIN, Hernán",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "4° Año",
    "materia": "HISTORIA CONTEMPORANEA \"A\"",
    "horario": "8,00 a 9,20",
    "docente": "RODRIGUEZ OTERO, Mariano",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ASIA \"A\"",
    "docente": "10,50 a 12,50",
    "aula": "JARUF, Pablo",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE LAS MUJERES Y DE GENERO (OPT. I)",
    "docente": "8,00 a 10,00",
    "aula": "SARLINGA, Laura",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DEL PENSAMIENTO POLITICO \"A\"",
    "docente": "8,00 a 10,00",
    "aula": "RODRIGUEZ, Juliana",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "DISEÑO II (TALLER) \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "FERNANDEZ BLANCO, Cecilia",
    "aula": "Lab. Informática \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "OJEDA, Fernando / MENDEZ REBOLLEDO, Emilia",
    "aula": "Lab. Informática \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "DISCURSOS DIGITALES \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "RECKZIEGEL, Sandra",
    "aula": "Lab. Informática \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "REDES Y COMUNICACIÓN DE DATOS \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "GUECIA, Claudio",
    "aula": "Lab. Informática \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "CONST. DE LA PRACT. DOCENTE I \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "LOPEZ, Paula",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "INFORMATICA EDUCATIVA II \"B\"",
    "horario": "10,10 a 12,50",
    "docente": "LOPEZ, Paula",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "FONETICA Y FONOLOGIA I \"C\"",
    "horario": "8,00 a 10,50",
    "docente": "DELGADO, Paula",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "FONETICA Y FONOLOGIA I \"I\"",
    "horario": "10,10 a 12,50",
    "docente": "a concurso",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GEOG. Y CULTURA DE LOS EE.UU. \"H\"(2ºC)",
    "horario": "10,10 a 12,10",
    "docente": "VARGAS REHNFELDT, Viviana",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GEOG. Y CULTURA DE LAS ISLAS BRIT. \"I\" (2º C)",
    "horario": "8,00 a 10,00",
    "docente": "VARGAS REHNFELDT, Viviana",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GRAMATICA INGLESA I \"A\"",
    "horario": "8,00 a 11,30",
    "docente": "VIDETTA, Marcelo",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD \"A\"",
    "horario": "11,30 a 12,50",
    "docente": "BASUALDO, José Luis",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"B\"",
    "horario": "8,00 a 12,10",
    "docente": "NEGRO, Patricia",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"C\"",
    "horario": "10,50 a 13,30",
    "docente": "DERMAN, Natalia",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"H\"",
    "horario": "8,00 a 10,00",
    "docente": "RONCONI, Vanina",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"H\"",
    "horario": "12,10 a 13,30",
    "docente": "a concurso",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "GONZALEZ, Pamela",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "PRACTICA EN LABORATORIO II \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "MICHIENZI, MARCO",
    "aula": "Lab. Idiomas \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "FONETICA Y FONOLOGIA II \"B\"",
    "horario": "10,10 a 12,50",
    "docente": "IRAZABAL, Ana",
    "aula": "Lab. Idiomas \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "PRACTICA EN LABORATORIO II \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "MICHIENZI, MARCO",
    "aula": "Lab. Idiomas \"A\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL \"C\"",
    "horario": "8,00 a 10,00",
    "docente": "RIVAS, Pedro",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "GRAMATICA INGLESA II \"C\"",
    "horario": "10,10 a 12,10",
    "docente": "RODRIGUEZ, Sergio",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "EDUCACION SEXUAL INTEGRAL \"A\"",
    "horario": "12,10 a 13,30",
    "docente": "RIVAS, Pedro",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "FONOLOGIA EN LAB. Y SU DIDATICA I \"C\"",
    "horario": "11,30 a 13,30",
    "docente": "DELGADO, Paula",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "INTRODUCCION A LA LINGÜÍSTICA \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "RODRIGUEZ, Sergio",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "LENGUA INGLESA III \"A\"",
    "horario": "8,00 a 12,10",
    "docente": "LONGOBARDI, Alberto",
    "aula": "603",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "HISTORIA NORTEAMERICANA \"C\"",
    "horario": "8,00 a 10,50",
    "docente": "a concurso",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "TREJO, María Belén",
    "aula": "1101",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "FONOLOGIA EN LAB. Y DIDACTICA II \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "IRAZABAL, Ana",
    "aula": "Lab. Idiomas \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LITERATURA NORTEAMERICANA \"B\"",
    "horario": "10,10 a 12,10",
    "docente": "QUINTERNO, Mariano",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "5° Año",
    "materia": "LENGUA EXTRANJERA: FRANCES NIVEL I",
    "horario": "10,10 a 12,10",
    "docente": "LUZAR, Noelia",
    "aula": "1101",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ANALISIS MATEMATICO I \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "RUGGERI, Victor",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "SUJETO DEL APRENDIZAJE \"A\" (2° Cuat.)",
    "horario": "8,00 a 10,50",
    "docente": "a concurso",
    "aula": "",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ANALISIS MATEMATICO I \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "CATANI, M. Ayelen",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "SUJETO DEL APRENDIZAJE \"B\" (2° Cuat.)",
    "horario": "10,10 a 12,50",
    "docente": "a concurso",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "INTRODUCCIÓN A LA MATEMATICA SUPERIOR \"C\"",
    "horario": "8,00 a 9,20",
    "docente": "COSTA, Carlos",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I \"C\"",
    "horario": "9,20 a 10,50",
    "docente": "a concurso",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"C\"",
    "horario": "10,50 a 12,50",
    "docente": "RAMAS, Fernanda",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "ANALISIS MATEMATICO II \"A\"",
    "horario": "10,10 a 12,50",
    "docente": "CATANI, M. Ayelen",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "PRIETO, Alfredo",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "ANALISIS MATEMATICO II \"B\"",
    "horario": "10,10 a 12,50",
    "docente": "a concurso",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "FISICA \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "FIGUEROA, Juan Domingo",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "ALGEBRA III \"A\"",
    "horario": "8,00 a 11,30",
    "docente": "PIÑEIRO, Gustavo",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "CUBILLA, Sergio",
    "aula": "Auditorio \"B\"",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "TICS EN EL AULA DE MATEMATICA \"B\"",
    "horario": "8,00 a 10,10",
    "docente": "RICCI, Valeria",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "LENGUA EXTRANJERA \"A\" (CUATRIMESTRAL)",
    "horario": "8,00 a 10,00",
    "docente": "BANFI, Cristina",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "CONSTRUCCION DE LA PRACT. DOCENTE \"B\"",
    "horario": "12,10 a 12,50",
    "docente": "SERRANO, Gisela",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "DIDACTICA DE LA MATEMATICA II \"B\"",
    "horario": "10,10 a 12,10",
    "docente": "SERRANO, Gisela",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "REFLEXION Y ACT. S/LA PRACT.DOC. \"A\"(2° CUATR.)",
    "horario": "8,40 a 10,00",
    "docente": "SERRANO, Gisela",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "5° Año",
    "materia": "DIDACTICA DE LA MATEMATICA II \"B\"",
    "horario": "10,10 a 12,10",
    "docente": "VELTRI, Ana",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "5° Año",
    "materia": "CONSTRUCCION DE LA PRACTICA DOCENTE I y II \"B\"",
    "horario": "12,10 a 12,50",
    "docente": "VELTRI, Ana",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA DE LOS ANIMALES II",
    "horario": "REJAN AMIRA 14,10 a 17,30",
    "docente": "",
    "aula": "LAB. B BIOL.",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "CONST DE LA PRACT DOCENTE II Y RESIDENCIA",
    "horario": "MELCHIORRE MARIA LAURA 13,30 A 16,10",
    "docente": "",
    "aula": "301",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "ECOLOGIA Y ETOLOGIA",
    "horario": "DRUNDAY JONATHAN 15,30 a 18,10",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "HISTORIA, FILOS. Y SOCIOLOGIA DE BIOLOGIA",
    "horario": "A CONCURSO 13,30 a 15,30",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD \"A\"",
    "horario": "POSE, RUBEN 13,30 a 14,50",
    "docente": "",
    "aula": "602",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD \"D\"",
    "horario": "A CONCURSO 13,30 a 14,50",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "QUIMICA BIOLOGICA",
    "horario": "A CONCURSO 13,30 A 16,10",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "BIOLOGÍA",
    "anio": "General",
    "materia": "MATEMATICA A",
    "horario": "APARISI NIELSEN, LIBER 14:50 a 17:30",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "DERECHO CONSTITUCIONAL",
    "horario": "GONZALEZ, GUSTAVO 15,30 A 18,10",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "DERECHO DE LAS RELACIONES INTERNACIONALES",
    "horario": "DE LA VIA, MARCELA 15,30 a 17,30",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "HISTORIA HECHOS E IDEAS ECONOMICAS",
    "horario": "WAINER, VALERIA 13,30 a 15,30",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "SUJETO DEL NIVEL (2 cuat)",
    "horario": "A CONCURSO 15,30 a 18,10",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "SISTEMA Y POLITICA EDUCATIVA (2 CUAT)",
    "horario": "DE LA VIA, MARCELA 13,30 a 15,30",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "SEMINARIO OPTATIVO 2 CUAT",
    "horario": "PONCE ROMINA 13,30 A 15,30",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "ANALISIS MATEMATICO",
    "horario": "CHAVEZ, CHRISTIAN 14,50 a 17,30",
    "docente": "",
    "aula": "200",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "APLICATIVOS INFORMATICOS",
    "horario": "PATANE, JIMENA 14,10 a15,30",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "CONSTRUCCION PRACTICA DOCENTE II",
    "horario": "SAMARDJI, JORGE 16,10 a 18,10",
    "docente": "",
    "aula": "501",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "CRECIMIENTO Y DESARROLLO ECONOMICO",
    "horario": "WAINER, VALERIA 15,30 a 18,10",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "GEOGRAFIA ECONÓMICA",
    "horario": "BOSOER, LUCIANA 13,30 a 15,30",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "CHIARADIA, ESTEBAN 16,10 a 18,10",
    "docente": "",
    "aula": "604",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD I",
    "horario": "AUDISIO, CYNTHIA 13,30 A 14,50",
    "docente": "",
    "aula": "102",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "MICROECONOMIA",
    "horario": "RODRIGUEZ, MATIAS 14,10 A 15,30",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "DINAMICA DE LOS PROCESOS CLIMATICOS",
    "horario": "TADDIO, JUAN 12,50 a 14,50",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "EPISTEMOLOGIA E HISTORIA DE LA GEOGRAFIA",
    "horario": "BOSOER, LUCIANA 15,30 a 18,10",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "GEOGRAFIA ECONOMICA MUNDIAL",
    "horario": "PITETTI, LAURA INES 12,50 a 15,30",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "CUBILLA, SERGIO 13,30 a 15,30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "INFORMACION GEOGRAFICA II",
    "horario": "MATA, VERONICA 15,30 a 17,30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "SEMINARIO DIDÁCTICO DISIPLINAR DE GEOGRAFÍA",
    "horario": "MC CASKILL, ALEJANDRO 16,10 a 18,10",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "CIENCIAS DE LA TIERRA I",
    "horario": "REY, KARINA 14:50 a 16:50",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "SEM DE ENS DE LA GEOG MEDIADA POR TICS",
    "horario": "DUQUELSKY MAXIMILIANO 13,30 A 15,30",
    "docente": "",
    "aula": "700",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "CIENCIAS DE LA TIERRA II",
    "horario": "TADDIO, JUAN 15:30 a 18:10",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "EDUCACION SEXUAL INTEGRAL (cuat)",
    "horario": "VERONELLI, AGUSTINA 13,30 a 14,50",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA AMERICANA CONTEMPORANEA",
    "horario": "BRANSBOIN, HERNAN 14,10 a 17,30",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA ARGENTINA Y AMERICANA III",
    "horario": "ROBLES, NIDIA 13,30 a 15,30",
    "docente": "",
    "aula": "AUD. 4° PISO",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DE LA EDAD MODERNA",
    "horario": "LOSADA, CAROLINA 15,30 a 17,30",
    "docente": "",
    "aula": "AUD. 4° PISO",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA INGLES (CUAT)",
    "horario": "BANFI CRISTINA 15,30 A 17,30",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "BANDINI - GOLDFARB 16,10 a 17,30",
    "docente": "",
    "aula": "400",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "CONSTRUCCION DE LA PRACTICA DOCENTE I",
    "horario": "LOPEZ, PAULA 12,50 a 14,50",
    "docente": "",
    "aula": "1000",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "CONSTRUCCION DE LA PRACTICA DOCENTE II",
    "horario": "DEFELIPPE, GABRIELA 13,30 A 15,30",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "DISCURSOS DIGITALES",
    "horario": "RECKZIEGEL, SANDRA 12,50 a 14,50",
    "docente": "",
    "aula": "LAB. B INF.",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "INFORMATICA EDUCATIVA II",
    "horario": "COMAS, ADRIANA 14,50 a 17,30",
    "docente": "",
    "aula": "LAB. B INF.",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD \"A\"",
    "horario": "POSE, RUBEN 16,10 a 17,30",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "LOGICA INFORMATICA",
    "horario": "TAJEYAN, SILVIA 14,50 a 17,30",
    "docente": "",
    "aula": "1000",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "TECNICAS DE LA INFORMACION Y LA COMUNIC.",
    "horario": "MEOQUI, JUAN PABLO 14,50 a 17,30",
    "docente": "",
    "aula": "LAB. A INF",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "GOLDFARB - OJEDA 14,50 a 16,10",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "SISTEMA Y POLITICA EDUCATIVA 2 CUAT",
    "horario": "GRANDOLI MARIA 16,10 A 18,10",
    "docente": "",
    "aula": "1101",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "DDHH SOCIEDAD Y ESTADO",
    "horario": "MASON, CAMILO 16,10 a 18,10",
    "docente": "",
    "aula": "602",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA INGLESA II \"E\"",
    "horario": "MONTSERRAT, MARIANO 16:50 a 18:10",
    "docente": "",
    "aula": "603",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "PEDAGOGIA \"G\"",
    "horario": "MACIEL, MARIA MAGDALENA 13,30 a 15, 30",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "INGLÉS",
    "anio": "General",
    "materia": "FILOSOFIA",
    "horario": "HERNANDEZ, FERNANDO 13,30 A 15:30",
    "docente": "",
    "aula": "604",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "INGLÉS",
    "anio": "General",
    "materia": "SUJETO DE NIVEL \"G\"",
    "horario": "LAPLACETTE, JUAN AUGUSTO 15,30 a 17,30",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA INGLESA I",
    "horario": "BAUTISTA HUGO 13,30 A 17,30",
    "docente": "",
    "aula": "601",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA ITALIANO NIVEL II 2 CUAT",
    "horario": "AGNESE VIOLETA 14,50 A 16,50",
    "docente": "",
    "aula": "704",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "CONST. PRACTICA DOCENTE NIVEL INICIAL Y PRIMARIO",
    "horario": "BRUNO, CELINA 15,30 a 18,50",
    "docente": "",
    "aula": "802",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "CONST. PRACTICA DOCENTE NIVEL MEDIO",
    "horario": "BRUNO, CELINA 13,30 a 15,30",
    "docente": "",
    "aula": "802",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "DIDACTICA GENERAL",
    "horario": "LETROYE, ANALIA 15,30 A 17,30",
    "docente": "",
    "aula": "LIC",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "HIST. DE LA CIV. ITALIANA DESDE EL RESORG…",
    "horario": "NATOLO, ANTONIO 15,30 a 17,30",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LENGUA ITALIANA I",
    "horario": "BERARDOZZI JULIA 14,50 A 16,50",
    "docente": "102",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "PEDAGOGIA",
    "horario": "GIULIANO, FACUNDO 12,50 a 14,50",
    "docente": "LIC",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "TALLER DE DIDACTICA DE LA FONETICA 2 CUAT",
    "horario": "PANDOLFI GABRIELA 12,50 A 14,50",
    "docente": "",
    "aula": "501",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "TALLER DE CONSOLIDACIÓN DE LA LENGUA ITALIANA",
    "horario": "AGNESE, VIOLETA 16,50 a 19,30",
    "docente": "804",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "GRIEGO II",
    "horario": "COSCOLLA, MARIA JOSE 13,30 a 14,50",
    "docente": "1001",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LATIN I \"A\" (2 CUATRI)",
    "horario": "NASTA, Marcela 13,30 a 14,50",
    "docente": "902",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LATIN I \"B\" (2 cuat)",
    "horario": "PALACIOS, Jimena 13,30 a 16,10",
    "docente": "806",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LATIN III",
    "horario": "NASTA, Marcela 14,50 a 16,50",
    "docente": "1001",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LINGÜÍSTICA",
    "horario": "TROMBETTA, AUGUSTO 14,50 a 16,50",
    "docente": "1002",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LITERATURA FRANCESA E ITALIANA",
    "horario": "GRASSO, LUDMILA 14,50 a 17,30",
    "docente": "701",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LA LECTURA Y ESCRIT. EN EDUC. FORMAL Y TC I Y II",
    "horario": "SABARIS - ROLLI 13,30 a 14,50",
    "docente": "701",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SUJETO DEL NIVEL (2 CUAT)",
    "horario": "CAO, STELLA 14:50 a 17:30",
    "docente": "902",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SISTEMA Y POLITICA EDUCATIVA 2 CUAT",
    "horario": "A CONCURSO",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "ANALISIS MATEMATICO I",
    "horario": "RUGGIERI, VICTOR 14,50 a 17,30",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "EPISTEMOLOGIA E HISTORIA DE LA QUIMICA",
    "horario": "KAHRS, MARIA LAURA 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. A FISICA",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "FILOSOFIA",
    "horario": "KAHRS, MARIA LAURA 17,30 a 19,30",
    "docente": "",
    "aula": "LAB. A FISICA",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD I",
    "horario": "CARBONARO, ESTEBAN 13,30 a 14,50",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA FISICA",
    "horario": "GARCIA, ROBERTO 15,30 a 18,10",
    "docente": "",
    "aula": "LAB. B FISICA",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUÍMICA GENERAL E INORGÁNICA I",
    "horario": "MARINO, DOLORES 17,30 a 19,30",
    "docente": "",
    "aula": "LAB. B QUIM.",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA ORGANICA I",
    "horario": "GAGNO, VERONICA 15,30 a 19,30",
    "docente": "",
    "aula": "LAB. A QUIM.",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA ORGANICA II",
    "horario": "WATANABE, BERNARDO 13,30 a 17,30",
    "docente": "",
    "aula": "LAB. B QUIM.",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA CUAT",
    "horario": "CARREÑO, LEANDRO 17:30 a 19:30",
    "docente": "",
    "aula": "TV",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "CONSTRUCCION PRACT DOCENTE II",
    "horario": "DOCE LAURA 13,30 A 15,30",
    "docente": "",
    "aula": "LAB B FISICA",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "SEMINARIO OPTATIVO 2 CUAT",
    "horario": "INGRASSIA PABLO 20,10 A 22,10",
    "docente": "",
    "aula": "TV",
    "turno": "Tarde",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "HISTORIA DEL ARTE",
    "docente": "5*",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "PRAC. LAB. DIOMAS II",
    "docente": "2°D",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TERRITORIOS IV: ÁFRICA Y OCEANÍA",
    "docente": "5°C",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LITERATURAS EN LENGUA INGLESA",
    "docente": "B",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "FISICA",
    "docente": "2°C",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "QUÍMICA BIOLOGÍA",
    "docente": "2°B",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "ANTROPOLOGÍA",
    "docente": "5°B",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "GEOMETRIA I",
    "docente": "1°F",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "PSICOLOGIA EDUCACIONAL (1 cuatr)",
    "docente": "1*B",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "SUJETOS DE LA ENSEÑANZA (2 cuatr)",
    "docente": "1*B",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PEDAGOGÍA Y TP",
    "docente": "1°D",
    "aula": "",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "A CONCURSO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "HISTORIA DE LA EDUCACIÓN ARGENTINA",
    "docente": "3°B",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "AGUIRRE, CINTIA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "INTR. A LA ECONOMÍA",
    "docente": "1*B",
    "aula": "CUB. 3",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "ALEGRÍA, LUCAS",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "MATEMÁTICA",
    "docente": "1°C",
    "aula": "---------",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "APARISI, ANDRES",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "MATEMÁTICA",
    "docente": "1°C",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "AUDISIO, CYNTHIA",
    "anio": "General",
    "materia": "LENGUA Y LITER",
    "horario": "GRAMÁTICA III",
    "docente": "4°B",
    "aula": "902",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BANDINI, ALICIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°C",
    "aula": "1101",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BANDINI, ALICIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA HISTORIA Y TP",
    "docente": "1°B",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BAO, JOSE",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA GEOGRAFÍA",
    "docente": "3°E",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BAO, JOSÉ",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TERRITORIOS III: ASIA",
    "docente": "4°B",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BARRANGOU, MARTIN",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LENGUA FRANCESA IV",
    "docente": "4*",
    "aula": "AUD A",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BASUALDO, GONZALO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "INTRODUCCION EST. DEL LENG. - 2° CUAT -",
    "docente": "1°D",
    "aula": "LAB B INFORM",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BAUTISTA HUGO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LENGUA I",
    "docente": "1°E",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BOSOER, LUCIANA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "EPISTEMOLOGIA E HISTORIA DE LA GEOGRAFIA",
    "docente": "4°B",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BOSOER, LUCIANA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFIA URBANA Y RURAL",
    "docente": "4°C",
    "aula": "506",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "BRAUN, PAULA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "PEDAGOGÍA",
    "docente": "1°E",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CABRERA, SEBASTIAN",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LINGÜÍSTICA GENERAL Y ANÁLISIS DEL DISCURSO",
    "docente": "3*",
    "aula": "CUB 6",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CARBALLEDO, DANIEL",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LENGUA INGLESA III",
    "docente": "3°D",
    "aula": "B IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CARBONARO, ESTEBAN",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "LEO",
    "docente": "1ºB",
    "aula": "A BIO",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CASTRO PALMA, MARIA FERNANDA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "Trabajo de campo II",
    "docente": "2°A",
    "aula": "D FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CASTRO PALMA, MARIA FERNANDA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "TC I",
    "docente": "1°A",
    "aula": "D FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CHAVEZ, CHRISTIAN",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ÁLGEBRA II",
    "docente": "2°C",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CIMOLI, RICARDO PEDRO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ASIA Y TP",
    "docente": "E",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CIPOLLA, DAMIÁN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE LA EDAD MEDIA Y TP",
    "docente": "3°C",
    "aula": "804",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CIPPONERI, GABRIELA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LENGUA INGLESA I",
    "docente": "1°D",
    "aula": "602",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CORBELLI, JULIAN",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "EVOLUCION E HIST. DE LA VIDA",
    "docente": "5ª B",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CORREA BARBOZA, MARCELA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE LA EDAD MEDIA Y TP",
    "docente": "3°B",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "COSCOLLA, MARÍA JOSÉ",
    "anio": "General",
    "materia": "LENGUA Y LITER",
    "horario": "GRIEGO I",
    "docente": "3°B",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "COSCOLLA, MARÍA JOSÉ",
    "anio": "General",
    "materia": "LENGUA Y LITER",
    "horario": "GRIEGO II",
    "docente": "4°B",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CRISTINA, MARIANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°B",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "CRUZ, FACUNDO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "PRINC DE LA ADM.",
    "docente": "2*A",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "D VINCENZO, JORGE",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA AMERICANA CONTEMPORÁNEA Y TP",
    "docente": "4°C",
    "aula": "AUD B",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "DE LORENZI, SUSANA",
    "anio": "General",
    "materia": "ADMINISTRACION",
    "horario": "DIDACTICA DE LA EDUCACION A DISTANCIA -2 cuatrimestre -",
    "docente": "4°A",
    "aula": "CUB 9",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "DUTTO, GABRIEL",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "Taller de gramática y lingüística (1° cuatrimestre)",
    "docente": "1°D",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "DUTTO, GABRIEL",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "Taller de literatura y teoría literaria (1r. cuatrimestre)",
    "docente": "1°D",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "ECHEZURI, ADRIANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°B",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "FERNANDEZ, CLAUDIA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LA LECTURA y la ESCRITURA en la EDUC FORMAL y no FORMAL",
    "docente": "2° B",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "FERNANDEZ, VIRGINIA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "FUNDAMENTOS DE LA FÍSICA",
    "docente": "5°C",
    "aula": "700",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "FIORDALISI, FLAVIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°C",
    "aula": "—--",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "FORAY, FACUNDO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA DE LA ARGENTINA II (PROCESOS SOCIALES Y ECONÓMICOS)",
    "docente": "3°C",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "FREIXA, OMER",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ÁFRICA Y TP",
    "docente": "C",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "GARCÍA, LORENA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ESPAÑA Y TP",
    "docente": "2°D",
    "aula": "1102",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "GIANA, MARIA CECILIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "PEDAGOGÍA",
    "docente": "1°C",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "GIANA, MARIA CECILIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "PEDAGOGÍA Y TP",
    "docente": "1°B",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "GOLDFARB, LILA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°C",
    "aula": "501",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "GOLDFARB, LILA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1°C",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "GRANARA, GONZALO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ESPAÑA Y TP",
    "docente": "2°C",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "GRASSO, LUDMILA",
    "anio": "General",
    "materia": "LENGUA Y LITER.",
    "horario": "LITER. FRANCESA E ITALIANA",
    "docente": "2°B",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "GUALTIERI, CAMILA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "2°B",
    "aula": "A QUIMICA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "KANDEL, VANESA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "LECTURA, ESCRITURA Y ORALIDAD I",
    "docente": "1°E",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "KLEINMAN, ILEANA",
    "anio": "General",
    "materia": "LENGUA Y LITER",
    "horario": "SEM. de ANÁLISIS del DISCURSO",
    "docente": "5°B",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LAFIOSCA, MARIA LUZ",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SISTEMA Y POLÍTICA EDUCATIVA Y TP",
    "docente": "5°B",
    "aula": "A INFO",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LAFIOSCA, MARIA LUZ",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SISTEMA Y POLÍTICA EDUCATIVA Y TP",
    "docente": "5°C",
    "aula": "A INFO",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LASALA QUINTANA, FERNANDO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LITERATURA CONTEMPORÁNEA EN LENGUA INGLESA",
    "docente": "4°D",
    "aula": "805",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LAVALLETO, MERCEDES",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "DIDÁCTICA GENERAL",
    "docente": "3°B",
    "aula": "A QUIMICA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LEDESMA, VIVIANA",
    "anio": "General",
    "materia": "LENGUA Y LITER.",
    "horario": "LA LECTURA y la ESCRITURA en la EDUC FORMAL y no FORMAL",
    "docente": "2° B",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LINERO LAURA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LITERATURA NORTEAMER…",
    "docente": "4°D",
    "aula": "805",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LOPEZ, GABRIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA CONTEMPORÁNEA Y TP",
    "docente": "4°B",
    "aula": "201",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LOPEZ, GABRIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ASIA Y TP",
    "docente": "B",
    "aula": "201",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LUZAR, NOELIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "DIDÁCTICA DEL FLE PARA EL NIVEL SUP.",
    "docente": "5*",
    "aula": "Cub 6 y 1101",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "LUZAR, NOELIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "CONSTRUCCION DE LA PRACT DOCENTE EN EL NIVEL SUPERIOR",
    "docente": "5*",
    "aula": "Cub 6 y 1101",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MACIAS FACUNDO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ESPAÑA",
    "docente": "2*H",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MACIEL, MARIA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "PEDAGOGÍA",
    "docente": "1°F",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MACIEL, MARIA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "SISTEMA Y POLÍTICA EDUCATIVA (1° y 2° Cuatr)",
    "docente": "4°C",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MANRIQUE, DARÍO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "CIENCIAS DE LA TIERRA I",
    "docente": "1°B",
    "aula": "501",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MARINO, DOLORES",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "QUÍMICA",
    "docente": "1°B",
    "aula": "B QUIMICA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MARTINEZ, ALEJANDRA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "DIDÁCTICA DE LA MATEMÁTICA",
    "docente": "3°C",
    "aula": "705",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MATA, VERONICA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "INFORMACIÓN GEOGRÁFICA I",
    "docente": "1°C",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MAYO, ARIEL",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "ESTADÍSTICA",
    "docente": "2*B",
    "aula": "CUB 7",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MC CASKILL, ALEJANDRO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TRABAJO DE CAMPO II",
    "docente": "2°C",
    "aula": "501",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MELCHIORRE, LAURA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "CONSTRUCC. de La PRACT. DOCENTE para el nivel medio",
    "docente": "4°B",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MELCHIORRE, LAURA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "CONSTRUCC. de La PRACT.DOCENTE II y RESID. Para niveles medio y sup:",
    "docente": "5°B",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MINGHETTI, NADIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "CONSTRUCCIÓN DE LA PRÁCTICA DOCENTE II",
    "docente": "4°B",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MIÑONES, LAURA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "GRAMÁTICA I",
    "docente": "1*",
    "aula": "A FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MIRAMONTES, ANA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "LECTURA, ESCRITURA Y ORALIDAD I",
    "docente": "1°D",
    "aula": "700",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MIRAMONTES, ANA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "LECTURA, ESCRITURA Y ORALIDAD I",
    "docente": "1°F",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MIRAMONTES, ANA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LECTURA, ESCRITURA Y ORALIDAD",
    "docente": "1°E",
    "aula": "703",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MONTENEGRO, MARTIN",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALCE (taller de lit arg y latinoam. Conect con España)",
    "docente": "1°C",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MONTSERRAT, MARIANO",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LENGUA INGLESA II",
    "docente": "2°D",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "MOREL, RODRIGO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "POSICIONAMIENTO ESPACIAL Y GEOMÁTICA",
    "docente": "2°C",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "NADDEO MARIA ELENA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA I Y TP",
    "docente": "1°C",
    "aula": "-------",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "NASTA MARCELA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "DIRECCIÓN",
    "docente": "----",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "NIKLISON, LUCIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "LECTURA,ESCRITURA Y ORALIDAD II",
    "docente": "3°C",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "OLIVERA, CYNTHIA",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "NUEVAS TECNOLOGIAS – 1º y 2º cuat. -",
    "docente": "2°B",
    "aula": "B INFO",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "OTAL LANDI, ARIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ESPAÑA Y TP",
    "docente": "2°H",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PAEZ REHERMANN, VALERIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "SEMINARIO DE ENSEÑANZA DE LA GEO MEDIADA POR TICS (2do. cuatr)",
    "docente": "4°C",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PARONI, ANDREA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "INTRODUCCIÓN A LA MATEMÁTICA SUPERIOR",
    "docente": "1°D",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PAZ, ADRIANA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "QUÍMICA",
    "docente": "1°C",
    "aula": "B BIO",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PELLER, DIEGO",
    "anio": "General",
    "materia": "LENGUA Y LITER.",
    "horario": "Taller de Lect. De textos Liter. – 1º CUAT -",
    "docente": "1ºC",
    "aula": "----",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PELLER, DIEGO",
    "anio": "General",
    "materia": "LENGUA Y LITER.",
    "horario": "TEORIA LITERARIA – 2º CUAT -",
    "docente": "1ºC",
    "aula": "1100",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PERAZZO, SILVIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ÁFRICA Y TP",
    "docente": "B",
    "aula": "400",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PERAZZO, SILVIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ÁFRICA Y TP",
    "docente": "E",
    "aula": "400",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PIÑEIRO, GUSTAVO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "HISTORIA DE LA MATEMÁTICA",
    "docente": "3°C",
    "aula": "705",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "PIÑEIRO, GUSTAVO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "FUNDAMENTOS DE LA MATEMÁTICA",
    "docente": "4°C",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "REJÁN, AMIRA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "BIO de los MICROORG, las ALGAS y los HONGOS",
    "docente": "4°B",
    "aula": "B BIO",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "REY, KARINA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TERRITORIOS I: AMÉRICA LATINA Y ANGLOSAJONA",
    "docente": "2°B",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "REY, MARIA ALEJANDRA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "LENGUA EXTRANJERA",
    "docente": "5°B",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "RIVAROLA, AGOSTINA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "SIC",
    "docente": "1*B",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "RUGGERI, VICTOR",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "ANÁLISIS MATEMÁTICO",
    "docente": "1*A",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "RUGGERI, VICTOR",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "TUTORÍA MAT",
    "docente": "------",
    "aula": "LAB A QUIM",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "SALOMÓN , GUADALUPE",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TALLER DE LECT DE TEX LIT – 1° CUAT.-",
    "docente": "1°D",
    "aula": "-------",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "SALOMÓN , GUADALUPE",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "TEORIA LITERARIA – 2° CUAT.-",
    "docente": "1°D",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "SAMARDJI, JORGE",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "RÉGIMEN TRIBUTARIO Y LABORAL",
    "docente": "3*A",
    "aula": "801",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "SAMARDJI, JORGE",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "CONSTR. DE LA PRACT. DOCENTE II",
    "docente": "5*A",
    "aula": "CUB 9",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "SARLINGA, MARIELA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "ESI",
    "docente": "5°C",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "SCALISE, SEBASTIAN",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ÁLGEBRA I",
    "docente": "1°E",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "SILVA, MARIA FLORENCIA",
    "anio": "General",
    "materia": "LENGUA Y LITER",
    "horario": "GRAMÁTICA II",
    "docente": "3°B",
    "aula": "902",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "TABAKIAN, DIEGO",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "FILOSOFÍA",
    "docente": "3°B",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "TOBIO, OMAR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "ECONOMÍA Y TERRITORIOS",
    "docente": "1°B",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "TOBIO, OMAR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "SEMINARIO DIDÁCTICO DISCIPLINAR",
    "docente": "5°B",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "TOMASSINI, LINA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "FONETICA Y FONOLOGIA I",
    "docente": "1*",
    "aula": "A IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "TOMASSINI, LINA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "FONÉTICA Y FONOLOGÍA II",
    "docente": "2*",
    "aula": "A IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "TROMBETTA, AUGUSTO",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LINGÜÍSTICA",
    "docente": "5°B",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "VAZQUEZ, ANA EUGENIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "INTR. A LA LITERATURA",
    "docente": "2*",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "VAZQUEZ, ANA EUGENIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "LITERATURA FRANCESA I",
    "docente": "3*",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "VEGA, SUSANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1°C",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "VIGNOLO, SILVINA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "HISTORIA I",
    "docente": "2*",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "VIÑAS, WALTER",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "DIDÁCTICA GENERAL",
    "docente": "2°B",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "YACOBUCCI, MATIAS",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "MATEMATICA FINANCIERA",
    "docente": "3*A",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "YUJNOVSKY, INES",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA I Y TP",
    "docente": "1°C",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "ZORZOLI, DANIELA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "TALLER DISEÑO Y GESTION ORGANIZACIONES (2* Cuatr)",
    "docente": "4*A",
    "aula": "801",
    "turno": "Vespertino/Noche",
    "dia": "Jueves"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "1° Año",
    "materia": "PEDAGOGIA GENERAL",
    "horario": "10,10 a 12,10",
    "docente": "MACIEL, María",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "DERECHO CONSTITUCIONAL",
    "horario": "8,00 a 10,50",
    "docente": "DE LA VIA, Marcela",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL",
    "horario": "10,50 a 12,50",
    "docente": "MENDEZ REBOLLEDO, Emilia",
    "aula": "501",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "DIDACTICA ESPECIFICA I Y TRABAJO DE CAMPO III",
    "horario": "8,00 a 10,00",
    "docente": "AZOFRA, Gisela",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "3° Año",
    "materia": "HISTORIA MUNDIAL CONTEMPORANEA",
    "horario": "10,10 a 12,10",
    "docente": "RODRIGUEZ OTERO, Mariano",
    "aula": "801",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "DIDACTICA ESPECIFICA Y RESIDENCIA",
    "horario": "10,10 a 12,10",
    "docente": "AZOFRA, Gisela",
    "aula": "EDULAB",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. Jurídicas",
    "anio": "4° Año",
    "materia": "NOCIONES DE ETICA",
    "horario": "8,40 a 10,00",
    "docente": "CARBONI, Laura",
    "aula": "300",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "SOCIOLOGIA",
    "horario": "8,00 a 10,00",
    "docente": "ALU, Mariano",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA FILOSOFIA",
    "horario": "10,10 a 13,30",
    "docente": "VICARI, Pablo",
    "aula": "804",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "8,00 a 10,00",
    "docente": "VICARI, Pablo / MORENO, Analia",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "2° Año",
    "materia": "LECTURA, ESCRITA Y ORALIDAD II",
    "horario": "10,10 a 11,30",
    "docente": "BROWN, Ana Laura",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "3° Año",
    "materia": "TEORIA DEL CONOCIMIENTO",
    "horario": "10,10 a 12,10",
    "docente": "SABINO, Juan (Suple PAOLUCCI, Mariela)",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "FILOSOFIA CONTEMPORANEA",
    "horario": "08,00 a 10,50",
    "docente": "FIGUEREDO NUÑEZ, Hugo",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Filosofía",
    "anio": "5° Año",
    "materia": "FILOSOFIA DE LA CIENCIA",
    "horario": "10,50 a 12,50",
    "docente": "VALIÑO, Valeria",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "NEUROBIOLOGIA Y ADAPTACION (2ºCUAT)",
    "horario": "8,00 a 10,00",
    "docente": "MOYANO, Gonzalo",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "1° Año",
    "materia": "PROC. COLECTIVOS Y PROBLEMAS SOCIALES",
    "horario": "10,10 a 12,10",
    "docente": "MAYO, Ariel",
    "aula": "601",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "BASES NEUROFISIOLÓGICAS \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "GAVILAN CASTILLO, Diana N.",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "EPISTEMOLOGIA GRAL Y ESPECIAL",
    "horario": "10,10 a 12,10",
    "docente": "CARBONI, Laura",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "2° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD II",
    "horario": "12,10 a 13,30",
    "docente": "POSE, Rubén",
    "aula": "705",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "3° Año",
    "materia": "TEORIA DE LAS ORGANIZ. Y ANALISIS INST.",
    "horario": "8,00 a 10,00",
    "docente": "PRIETO, Alfredo",
    "aula": "1102",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "4° Año",
    "materia": "DIDACTICA DE LA ENS. DE LA PSICOLOGIA",
    "horario": "8,40 a 10,50",
    "docente": "a concurso",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Psicología",
    "anio": "4° Año",
    "materia": "ESCUELA Y VIOLENCIA (OPTATIVA III) (2ºCUAT)",
    "horario": "10,50 a 13,30",
    "docente": "ADINOLFI GRECO, Sofía",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "FILOSOFIA",
    "horario": "8,00 a 10,00",
    "docente": "SABINO, Juan (Suple PAOLUCCI, Mariela)",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "ESTUDIOS CULTURALES Y EDUCACION",
    "horario": "10,10 a 12,10",
    "docente": "ALU, Mariano",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITA Y ORALIDAD I",
    "horario": "12,10 a 13,30",
    "docente": "BROWN, Ana Laura",
    "aula": "700",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "8,00 a 10,00",
    "docente": "BERGEL, Daniela / RIVAS, Pedro",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "2° Año",
    "materia": "ESTADO, SOCIEDAD Y DD HH",
    "horario": "10,10 a 12,10",
    "docente": "ECHEZURI, Adriana",
    "aula": "Lab. Biología \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "3° Año",
    "materia": "EDUCACION NO FORMAL E INFORMAL (2ºCUAT)",
    "horario": "10,10 a 12,10",
    "docente": "RIVAROLA, Rocío",
    "aula": "301",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "3° Año",
    "materia": "PROBLEMAS DIDACTICOS II (2ºCUAT)",
    "horario": "10,10 a 12,50",
    "docente": "DI MATTEO, María Florencia",
    "aula": "Lab. Biología \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "3° Año",
    "materia": "SISTEMA Y POLITICA EDUCATIVA",
    "horario": "8,00 a 10,00",
    "docente": "ROSSETTI, Mariana",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "4° Año",
    "materia": "AUTORIDAD PEDAGOGICA (2ºCUAT)",
    "horario": "08,00 a 10,00",
    "docente": "EICHENBRONNER, David",
    "aula": "Cubiculo 9º",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "4° Año",
    "materia": "PEDAGOGIA SOCIAL (CUATRIMESTRAL)",
    "horario": "10.10 a 12.10",
    "docente": "BERGEL, DANIELA",
    "aula": "Cubículo 9°",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "5° Año",
    "materia": "CONST.PRACT.DOC.II NIVEL SUPERIOR",
    "horario": "10,10 a 12,10",
    "docente": "LAVALLETTO, Mercedes",
    "aula": "Cubículo 6°",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Cs. de la Educación",
    "anio": "5° Año",
    "materia": "TALLER DE INTERVENCIONES DIDÁCTICAS",
    "horario": "8,00 a 10,00",
    "docente": "DI MATTEO, María Florencia",
    "aula": "Lab. Biología \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "ANALISIS MATEMATICO I",
    "horario": "8,00 a 9,20",
    "docente": "WINOGRAD, Juan",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I",
    "horario": "9,20 a 10,50",
    "docente": "MIRAMONTES, Ana",
    "aula": "201",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "1° Año",
    "materia": "NUEVAS TECNOLOGIAS (Cuatrimestral)",
    "horario": "10,50 a 12,50",
    "docente": "RIOS, Valeria",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "QUIMICA",
    "horario": "8,00 a 10,00",
    "docente": "a concurso",
    "aula": "Lab. Física \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "ALGEBRA II",
    "horario": "10,10 a 11,30",
    "docente": "MONTENEGRO, Victor",
    "aula": "Lab. Física \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "2° Año",
    "materia": "ANALISIS MATEMATICO II",
    "horario": "11,30 a 12,50",
    "docente": "MONTENEGRO, Victor",
    "aula": "Lab. Física \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "FISICA III \"B\" (2° Cuatrimestre)",
    "horario": "9,20 a 12,10",
    "docente": "MARMORA, Jessica",
    "aula": "Lab. Física \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "3° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD II",
    "horario": "8,00 a 9,20",
    "docente": "MIRAMONTES, Ana",
    "aula": "Lab. Física \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Física",
    "anio": "4° Año",
    "materia": "FISICA EXPERIMENTAL",
    "horario": "8,00 a 12,10",
    "docente": "FERNANDEZ, Virginia",
    "aula": "Lab. Física \"D\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "HIST. ARGENTINA Y AMERICANA I \"A\"",
    "horario": "8,00 a 11,30",
    "docente": "SOFIA, Ana Laura",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I \"A\"",
    "horario": "11,30 a 12,50",
    "docente": "a concurso",
    "aula": "200",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I \"E\"",
    "horario": "8,40 a 10,00",
    "docente": "a concurso",
    "aula": "301",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "HIST. ARGENTINA Y AMERICANA I \"F\"",
    "horario": "8,00 a 11,30",
    "docente": "ZIRINO, Cintia",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"F\"",
    "horario": "11,30 a 12,50",
    "docente": "DANIELE, Alejandro / RIVAS, Pedro",
    "aula": "102",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "RONCONI, Vanina",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE ROMA \"A\"",
    "horario": "11,30 a 12,50",
    "docente": "ESTELLER, Lorena",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "2° Año",
    "materia": "HISTORIA DE ROMA \"E\"",
    "horario": "8,00 a 11,30",
    "docente": "ALFARO, Juan Pablo",
    "aula": "Auditorio \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA EDAD MEDIA \"A\"",
    "horario": "10,10 a 12,50",
    "docente": "CIPOLLA, Damián",
    "aula": "504",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "4° Año",
    "materia": "HISTORIA ARGENTINA CONTEMPORANEA \"A\"",
    "horario": "8,00 a 12,10",
    "docente": "MANDUCA, Ramiro",
    "aula": "400",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "5° Año",
    "materia": "DD.HH., SOCIEDAD Y ESTADO \"A\"",
    "horario": "11,30 a 13,30",
    "docente": "GOIBURU, Irene",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "5° Año",
    "materia": "TEORIA E HISTORIA DE LA HISTORIOG. \"A\"",
    "horario": "8,40 a 11,30",
    "docente": "OTERO, Sebastián",
    "aula": "505",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA AMERICANA (SEMINARIO OPTATIVO II)",
    "docente": "10,10 a 12, 10",
    "aula": "SANCHEZ, Laura",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DEL PENSAMIENTO SOC. Y ECON. \"A\"",
    "docente": "9,20 a 11,30",
    "aula": "GOIBURU, Irene",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "PSICOLOGIA EDUCACIONAL \"B\"",
    "horario": "8,00 a 9,20",
    "docente": "PATARO, Alejandra (Suple DIAZ, Lucas)",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "SUJETOS DE NIVEL \"B\"",
    "horario": "9,20 a 10,50",
    "docente": "PATARO, Alejandra (Suple DIAZ, Lucas)",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "GALARZA, Daniel",
    "aula": "900",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "PROGRAMACION II \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "BRAVO, Daniel",
    "aula": "Lab. Informática \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "PRIETO, Alfredo",
    "aula": "1102",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "LOGICA INFORMATICA \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "TAJEYAN, Silvia",
    "aula": "1000",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "3° Año",
    "materia": "PROGRAMACION III \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "GOROSITO, Carlos",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "RECURSOS INFORMATICOS \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "GUECIA, Claudio",
    "aula": "Lab. Informática \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "4° Año",
    "materia": "PROYECTOS EDUCATIVOS \"B\"",
    "horario": "10,10 a 12,50",
    "docente": "LOPEZ, Paula",
    "aula": "Lab. Informática \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "5° Año",
    "materia": "CONST.PRACT.DOC.II Y RESID. N. SUPERIOR \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "LOPEZ, Paula",
    "aula": "803",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"A\"",
    "horario": "7,20 a 9,20",
    "docente": "QUIROZ, Alan",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"A\"",
    "horario": "9,20 a 12,50",
    "docente": "RODRIGUEZ, Sergio",
    "aula": "704",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PSICOLOGIA EDUCACIONAL \"B\"",
    "horario": "8,00 a 9,20",
    "docente": "RIVAROLA BRITEZ, Rocío",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PEDAGOGIA \"B\"",
    "horario": "9,20 a 11,30",
    "docente": "RIVADENEIRA, Carolina",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD I \"B\"",
    "horario": "11,30 a 12,50",
    "docente": "GENTA, Florencia",
    "aula": "600",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PRACTICA EN LABORATORIO I \"C\"",
    "horario": "10,50 a 12,50",
    "docente": "MICHIENZI, Marco",
    "aula": "Lab. Idiomas \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PSICOLOGIA EDUCACIONAL \"C\"",
    "horario": "7,20 a 8,40",
    "docente": "PENNELLA, Maria Angela",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "SUJETOS DE NIVEL \"C\"",
    "horario": "8,40 a 10,50",
    "docente": "PENNELLA, Maria Angela",
    "aula": "605",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"C\"",
    "horario": "12,10 a 13,30",
    "docente": "BERGEL, Daniela",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "LENGUA INGLESA I \"H\"",
    "horario": "8,00 a 12,10",
    "docente": "TRAVERSO, Cecilia",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PSICOLOGIA EDUCACIONAL \"H\"",
    "horario": "12,10 a 13,30",
    "docente": "MRAHAD, María Cecilia",
    "aula": "502",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "GRAMATICA INGLESA I \"I\"",
    "horario": "8,00 a 10,00",
    "docente": "NULHEM, Romina",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "PSICOLOGIA EDUCACIONAL \"I\"",
    "horario": "12,10 a 13,30",
    "docente": "KAWAGUCHI, Fernanda",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "1° Año",
    "materia": "SUJETOS DEL NIVEL \"I\"",
    "horario": "10,10 a 12,10",
    "docente": "KAWAGUCHI, Fernanda",
    "aula": "602",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "CONST.PRACT.DOC. NIV.INIC.Y PRIM I \"A\"",
    "horario": "8,00 a 11,30",
    "docente": "CARMOSINO, Julieta",
    "aula": "503",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "HISTORIA DE LA CIVILIZACIÓN INGLESA I \"A\"",
    "horario": "11,30 a 13,30",
    "docente": "RODRIGUEZ, Gabriel",
    "aula": "702",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "ANALISIS DEL DISCURSO \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "ROSSELL, Jorge",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "GRAMATICA INGLESA II \"B\"",
    "horario": "10,10 a 12,10",
    "docente": "DURAN, José",
    "aula": "805",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "FONETICA Y FONOLOGIA II \"C\"",
    "horario": "8,00 a 10,50",
    "docente": "MICHIENZI, Marco",
    "aula": "Lab. Idiomas \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "2° Año",
    "materia": "LENGUA INGLESA II \"C\"",
    "horario": "10,50 a 12,50",
    "docente": "KARAMANIAN, Noralí",
    "aula": "703",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "FILOSOFIA \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "DA CUNHA, Mónica",
    "aula": "Lab. Química \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "HISTORIA NORTEAMERICANA \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "GATTI, Eugenia",
    "aula": "506",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "3° Año",
    "materia": "CONSTR. PRACTICA DOCENTE EN NIVEL MEDIO I \"C\"",
    "horario": "8,00 a 11,30",
    "docente": "a concurso",
    "aula": "",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "DD HH, SOCIEDAD Y ESTADO \"A\"",
    "horario": "9,20 a 11,30",
    "docente": "DEMIRDJIAN, Liliana",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LITERATURA INGLESA III \"A\"",
    "horario": "10,10 a 12,10",
    "docente": "RODRIGUEZ VAN DAM, Valeria",
    "aula": "1100",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LITERATURA NORTEAMERICANA \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "LINERO, Laura",
    "aula": "802",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "LITERATURA INGLESA III \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "RODRIGUEZ VAN DAM, Valeria",
    "aula": "1100",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "4° Año",
    "materia": "SISTEMA Y POLITICA EDUCATIVA \"B\" (CUATR.)",
    "horario": "10,50 a 12,50",
    "docente": "ROSSETTI, Mariana",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "",
    "anio": "General",
    "materia": "INGLES",
    "horario": "EL TEXTO LITERARIO EN EL AULA \"A\"",
    "docente": "8,00 a 10,50",
    "aula": "a concurso",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ANALISIS MATEMATICO I \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "RUGGERI, Victor",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "GEOMETRIA I \"A\"",
    "horario": "10,10 a 11,30",
    "docente": "SAN MIGUEL, Romina (lic.)",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "TRABAJO DE CAMPO I \"A\"",
    "horario": "11,30 as 12,50",
    "docente": "FIORDALISI, Flavia / YACOBUCCI, Matías",
    "aula": "1002",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ANALISIS MATEMATICO I \"B\"",
    "horario": "8,00 a 10,00",
    "docente": "CATANI, Maria Ayelen",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ALGEBRA I \"B\"",
    "horario": "10,10 a 12,50",
    "docente": "a concurso",
    "aula": "902",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "ELEMENTOS BASICOS DE MATEMATICA \"C\"",
    "horario": "12,10 a 13,30",
    "docente": "a concurso",
    "aula": "701",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "1° Año",
    "materia": "GEOMETRIA I \"C\"",
    "horario": "8,00 a 12,10",
    "docente": "CHAVEZ, Christian",
    "aula": "603",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "ALGEBRA II \"A\"",
    "horario": "8,00 a 10,00",
    "docente": "MANCINI, Marina",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "ANALISIS MATEMATICO II \"A\"",
    "horario": "10,10 a 11,30",
    "docente": "CATANI, Maria Ayelen",
    "aula": "1001",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "NUEVAS TECNOLOGIAS \"A\"",
    "horario": "11,30 a 13,30",
    "docente": "BRAVO, Daniel",
    "aula": "Lab. Informática \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "DIDACTICA GENERAL \"B\"",
    "horario": "10,50 a 12,50",
    "docente": "GAVILAN CASTILLO, Diana N.",
    "aula": "901",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "2° Año",
    "materia": "NUEVAS TECNOLOGÍAS \"B\"",
    "horario": "8,40 a 10,50",
    "docente": "VENTURA, Natalia",
    "aula": "Lab. Informática \"B\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "HISTORIA DE LA MATEMATICA \"A\"",
    "horario": "8,00 a 10,50",
    "docente": "MICELLI, Mónica",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "PROBABILIDADES Y ESTADISTICA \"A\"",
    "horario": "10,50 a 12,50",
    "docente": "PIÑEIRO, Gustavo",
    "aula": "806",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "DD HH, SOCIEDAD Y ESTADO \"B\"",
    "horario": "11,30 a 13,30",
    "docente": "DEMIRDJIAN, Liliana",
    "aula": "800",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "3° Año",
    "materia": "LECTURA, ESCRITURA Y ORALIDAD II \"B\"",
    "horario": "10,10 a 11,30",
    "docente": "a concurso",
    "aula": "604",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "4° Año",
    "materia": "FUNDAMENTOS DE LA MATEMATICA \"B\"",
    "horario": "8,00 a 10,50",
    "docente": "PIÑEIRO, Gustavo",
    "aula": "101",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Matemática",
    "anio": "5° Año",
    "materia": "ANÁLISIS MATEMÁTICO III \"A\"",
    "horario": "8,00 a 11,30",
    "docente": "CHORNY, Fernando",
    "aula": "Cubicúlo 7º",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "1° Año",
    "materia": "MECANICA Y OPTICA GEOMETRICA \"B\"",
    "horario": "08,00 a 10,00",
    "docente": "FRAGA, Ondina",
    "aula": "Lab. Química \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "1° Año",
    "materia": "INTRODUCCION A LA QUIMICA",
    "horario": "10,10 a 12,50",
    "docente": "PAZ, Adriana",
    "aula": "Lab. Química \"A\"",
    "turno": "Mañana",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "EL LENGUAJE DE LA BIOLOGIA Y SU DIDACTICA",
    "horario": "ROSALEZ, PAOLA 14,10 a 15,30",
    "docente": "",
    "aula": "301",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "FISICA BIOLOGICA",
    "horario": "MANENTE, MAYRA 13,30 a 15,30",
    "docente": "",
    "aula": "LIC",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "INTRODUCCION A LOS SISTEMAS VIVIENTES \"A\"",
    "horario": "BARREIRO NATALIA 15,30 A 18,10",
    "docente": "",
    "aula": "LAB. B BIOL.",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "INTRODUCCION A LOS SISTEMAS VIVIENTES \"D\"",
    "horario": "A CONCURSO 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. B BIOL.",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "METODOLOGIA DE LA INVESTIGACION",
    "horario": "PETIT, LUCIANO 15,30 a 17,30",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "PEDAGOGIA",
    "horario": "GAVILAN CASTILLO, DIANA 15,30 a 17,30",
    "docente": "",
    "aula": "1002",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "LOPETEGUI - MENDEZ R. 15,30 a 17,30",
    "docente": "",
    "aula": "300",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "DIDACTICA GENERAL",
    "horario": "PRIETO, ALFREDO 13:30 a 15:30",
    "docente": "",
    "aula": "300",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Biología",
    "anio": "General",
    "materia": "BIOLOGIA HUMANA II (2 CUAT)",
    "horario": "GUERRIERI DIEGO 15,30 A 18,10",
    "docente": "",
    "aula": "301",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "ANTROPOLOGIA CULTURAL",
    "horario": "DANIELE, ALEJANDRO 15,30 a 17,30",
    "docente": "",
    "aula": "501",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "DDHH SOCIEDAD Y ESTADO",
    "horario": "DEMIRDJIAN, LILIANA 13,30 a 15,30",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "DIDACTICA GENERAL",
    "horario": "VALLADARES, MARICEL 13,30 a 15,30",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "ECOLOGIA Y AMBIENTE",
    "horario": "REY, KARINA 15,30 a 17,30",
    "docente": "",
    "aula": "704",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "FILOSOFIA",
    "horario": "TABAKIAN, DIEGO 15,30 a 17,30",
    "docente": "",
    "aula": "703",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "MEDIOS DE COMUNIC. Y OPINION PUBLICA",
    "horario": "DEMIRDJIAN, LILIANA 15,30 A 17,30",
    "docente": "",
    "aula": "801",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Ciencia Política",
    "anio": "General",
    "materia": "SOCIOLOGIA",
    "horario": "TORME, MAURICIO 13,30 a 15,30",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "HISTORIA ECONOMICA GENERAL Y ARG.",
    "horario": "GOIBURU, IRENE 13,30 a 16,10",
    "docente": "",
    "aula": "102",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "MACROECONOMIA",
    "horario": "WAINER, VALERIA 15,30 a 18,10",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "PRINCIPIOS DE ADMINISTRACION",
    "horario": "CRUZ, FACUNDO 14,10 a 16,10",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "TALLER OPT. POLITICA ECONOMICA (2 cuat)",
    "horario": "WAINER, VALERIA 13,30 a 15,30",
    "docente": "",
    "aula": "101",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "SISTEMAS DE INFORMACION CONTABLE",
    "horario": "OROFINO, REGINA 16,10 a 18,10",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "TALLER DE NUEVAS TECNOLOGIAS",
    "horario": "BERARDI, SANTIAGO 13,30 a 15,30",
    "docente": "",
    "aula": "LAB. B INF.",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Economía",
    "anio": "General",
    "materia": "METODOLOGIA DE LA INVESTIGACION",
    "horario": "PETIT LUCIANO 15,30 A 17,30",
    "docente": "",
    "aula": "201",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "GEOGRAFIA DE LA REPUBLICA ARGENTINA I",
    "horario": "CARBAJALES, MARCELA 12,50 a 15,30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "INTRODUCCION A LA GEOGRAFIA",
    "horario": "BAO, JOSE 13,30 a 15,30",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD II",
    "horario": "VAZQUEZ, ROMINA LAURA 15,30 a 16,50",
    "docente": "",
    "aula": "LIC",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "LENGUA EXTRANJERA PORTUGUES (cuatr.)",
    "horario": "MELIAN, MYRIAM 15.30 a 17,30",
    "docente": "",
    "aula": "506",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "PROBLEMATICAS SOCIOAMBIENTALES",
    "horario": "REY, KARINA 13,30 a 15,30",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "PSICOLOGIA DEL SUJETO DEL NIVEL (2 cuat)",
    "horario": "GONZALEZ, FERNANDA 15,30 a 18,10",
    "docente": "",
    "aula": "504",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "MC CASKILL - JANJETIC 14,50 a 16,50",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "HISTORIA AMERICANA Y ARGENTINA",
    "horario": "KOHEN, DANIEL 16:50 a 18:10",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "TERRITORIOS IV",
    "horario": "DEL FABBRO, FRANCO 13:30 a 15:30",
    "docente": "",
    "aula": "501",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Geografía",
    "anio": "General",
    "materia": "TERRITORIOS III ASIA",
    "horario": "OTERO, DANIEL 15:30 a 17:30",
    "docente": "",
    "aula": "502",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA CONTEMPORANEA",
    "horario": "RODRIGUEZ OTERO, MARIANO 13,30 a 15,30",
    "docente": "",
    "aula": "AUD. B",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DE GRECIA",
    "horario": "ESTELLER, LORENA 13,30 a 16,50",
    "docente": "",
    "aula": "200",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DE LA EDAD MODERNA",
    "horario": "LOSADA, CAROLINA 15,30 a 17,30",
    "docente": "",
    "aula": "702",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA DEL PENSAMIENTO POLITICO",
    "horario": "A CONCURSO 16,10 a 18,10",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "HISTORIA PENSAMIENTO SOCIAL Y ECONOM.",
    "horario": "SOFIA, ANA 16,10 a 18,10",
    "docente": "",
    "aula": "800",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "INTRODUCCION A LA GEOGRAFIA",
    "horario": "CUBILLA, SERGIO DANIEL 13,30 a 15,30",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "LECTURA ESCRITURA Y ORALIDAD I",
    "horario": "VAZQUEZ, ROMINA LAURA 16,50 a 18,10",
    "docente": "",
    "aula": "LIC",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Historia",
    "anio": "General",
    "materia": "PRACTICA DOCENTE II Y RESIDENCIA",
    "horario": "COSCO, KARINA 16,10 a 18,10",
    "docente": "",
    "aula": "102",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "CALCULO PARA INFORMATICA",
    "horario": "CATANI, MARIA AYELEN 16,10 a 18,10",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "FILOSOFIA",
    "horario": "KAHRS, LAURA 16,10 a 18,10",
    "docente": "",
    "aula": "LAB. B INF.",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "INFORMATICA EDUCATIVA I",
    "horario": "LOPEZ, PAULA 13,30 a 16,10",
    "docente": "",
    "aula": "900",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "PROGRAMACION II",
    "horario": "BRAVO, DANIEL 13,30 a 16,10",
    "docente": "",
    "aula": "CONSULTAR",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "RECURSOS INFORM. APLIC. A OTRAS DISCIPL.",
    "horario": "GUECIA, CLAUDIO 13,30 a 16,50",
    "docente": "",
    "aula": "LAB. A INF.",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Informática",
    "anio": "General",
    "materia": "SUJETOS DE NIVEL",
    "horario": "PANIZZO, ALEJANDRA 14,50 a 16,10",
    "docente": "",
    "aula": "901",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "ANALISIS DEL DISCURSO",
    "horario": "MORTORO, FERNANDO 16,10 a 18,10",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "CONSTRUCCION PRACTICA DOCENTE I \"B\"",
    "horario": "A CONCURSO 12,50 a 16,10",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "CONST PRACT DOC EN EL N. MEDIO II Y RESIDENCIA",
    "horario": "A CONCURSO 12,50 a 14,10",
    "docente": "",
    "aula": "",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "DINAMICA DE GRUPOS",
    "horario": "ZITO LEMA, VANESA 13,30 a 15,30",
    "docente": "",
    "aula": "701",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "GRAMATICA INGLESA I \"F\"",
    "horario": "RAVELO CAROLINA 16,50 a 18,10",
    "docente": "",
    "aula": "505",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LENGUA INGLESA I \"G\"",
    "horario": "MUSE ROMINA 13,30 a 17,30",
    "docente": "",
    "aula": "604",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LITERATURA INGLESA CONTEMPORANEA",
    "horario": "PERDUCA, FLORENCIA 16,10 a 18,10",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LITERATURA INGLESA I \"E\"",
    "horario": "RODRIGUEZ VAN DAM, VALERIA 12,50 a 14,50",
    "docente": "",
    "aula": "603",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "LITERATURA INGLESA III",
    "horario": "MENAN, CARINA 14,10 a 16,10",
    "docente": "",
    "aula": "600",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "PRACTICA EN LABORATORIO I \"F\"",
    "horario": "MICHIENZI, MARCO 12,50 a 14,50",
    "docente": "",
    "aula": "LAB. A IDIOM.",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Inglés",
    "anio": "General",
    "materia": "HISTORIA DE LA CIVILIZACION INGLESA II",
    "horario": "GATTI MARIA EUGENIA 16,10 A 18,10",
    "docente": "",
    "aula": "605",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "FILOSOFIA",
    "horario": "DA CUNHA, MONICA 13,30 a 15,30",
    "docente": "",
    "aula": "700",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "GRAMATICA ITALIANA II",
    "horario": "BERARDOZZI, JULIA 13,30 a 16,10",
    "docente": "",
    "aula": "LAB B IDIOMA",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "CHIARADIA, ESTEBAN 16,10 a 18,10",
    "docente": "",
    "aula": "1100",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LIT. ITALIANA DEL BARROCO Y DEL ILUMINISMO",
    "horario": "CAMPANA, GRISELDA 15,30 a 18,10",
    "docente": "",
    "aula": "802",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "LITERATURA ITALIANA MEDIEVAL",
    "horario": "FERNANDEZ SPEIER, CLAUDIA 12,50 a 15,30",
    "docente": "",
    "aula": "806",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "PSICOLOGIA EDUCACIONAL",
    "horario": "GOLDFARB, LILA 15,30 a 16,50",
    "docente": "",
    "aula": "806",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "RESID. EN CONTEXTOS DE INJERENCIA PROF.",
    "horario": "SAN JUAN, GASTON 13,30 a 16,10",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "SUJETOS DEL NIVEL",
    "horario": "GOLDFARB, LILA 16,50 a 18,10",
    "docente": "",
    "aula": "806",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Italiano",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO II",
    "horario": "SAN JUAN - BELLICCI 16,10 a 18,10",
    "docente": "",
    "aula": "805",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "GRAMATICA I \"A\"",
    "horario": "SILVA, MARIA FLORENCIA 12,50 a 15,30",
    "docente": "",
    "aula": "LIC",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "GRAMATICA I \"C\"",
    "horario": "BLAUSTEIN K., ANA LEA 13,30 a 16,10",
    "docente": "",
    "aula": "601",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "GRAMATICA II",
    "horario": "TROMBETTA, AUGUSTO 14,50 a 17,30",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "GRAMATICA III",
    "horario": "CAPRIA FERREIRO, LUCAS 15,30 a 18,10",
    "docente": "",
    "aula": "1001",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "FREIDENRAIJ, CLAUDIA 12,50 a 14,50",
    "docente": "",
    "aula": "902",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LATIN I B (2 CUAT)",
    "horario": "PALACIOS, JIMENA 14,50 a 16,10",
    "docente": "",
    "aula": "804",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "LATIN II",
    "horario": "PALACIOS, JIMENA 16,10 a 18,10",
    "docente": "",
    "aula": "601",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "PEDAGOGIA \"A\"",
    "horario": "MACIEL, MARIA MAGDALENA 12,50 a 14,50",
    "docente": "",
    "aula": "803",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "PEDAGOGIA \"B\"",
    "horario": "GALARZA, DANIEL 12,50 a 14,50",
    "docente": "",
    "aula": "1102",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "PROBLEMAS LIT. CONT. EN LENGUA ESPAÑOLA",
    "horario": "FERNANDEZ BRAVO, ALVARO 14,50 a 17,30",
    "docente": "",
    "aula": "1102",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SEMINARIO DE ESTUDIOS HISPANICOS",
    "horario": "GRASSO, LUDMILA 12,50 a 15,30",
    "docente": "",
    "aula": "1002",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "SEMINARIO DE RETORICA Y POETICA",
    "horario": "BREIJO, MARIANA 14,50 a17.30",
    "docente": "",
    "aula": "1000",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Lengua y Literatura",
    "anio": "General",
    "materia": "PSICOLOGIA EDUCACIONAL \"B\" (2 cuat)",
    "horario": "FERRARI, ANDREA 16,10 a 17,30",
    "docente": "",
    "aula": "804",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "CALOR Y TERMODINAMICA",
    "horario": "GARCIA, ROBERTO 14,50 A 16,50",
    "docente": "",
    "aula": "LAB. A FISICA",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "DIDACTICA GENERAL",
    "horario": "MENDEZ R., MARIA EMILIA 13:30 A 15:30",
    "docente": "",
    "aula": "705",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "HISTORIA DE LA EDUCACION ARGENTINA",
    "horario": "CUBILLA, SERGIO DANIEL 15,30 a 17,30",
    "docente": "",
    "aula": "701",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "OPTICA Y GEOMETRIA MECANICA",
    "horario": "GARCIA MIRAMON, GASTON 15,30 A 17,30",
    "docente": "",
    "aula": "LAB. B QUIM.",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "QUIMICA GENERAL E INORGANICA II",
    "horario": "ZABALEGUI, VANESA 15,30 a 17,30",
    "docente": "",
    "aula": "LAB. B QUIM.",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "Profesorado de Química",
    "anio": "General",
    "materia": "TRABAJO DE CAMPO I",
    "horario": "FIORDALISI - MARINO 13,30 a 14,50",
    "docente": "",
    "aula": "503",
    "turno": "Tarde",
    "dia": "Viernes"
  },
  {
    "carrera": "CARNELLI, GUSTAVO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "COORDINACION",
    "docente": "-",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "CHIARADIA ESTEBAN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE LA EDUCACIONA RGENTINA",
    "docente": "5*B",
    "aula": "700",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "CHIARADIA, ESTEBAN",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "HISTORIA DE LA EDUCACIÓN ARGENTINA",
    "docente": "3°C",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "CIPPONERI, GABRIELA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "REDACCIÓN DEL DISCURSO ACADÉMICO",
    "docente": "C",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "CIPPONERI, GABRIELA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LENGUA INGLESA I",
    "docente": "1°D",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "CORBELLI, JULIAN",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "BIOLOGIA DE LOS ANIM. III (2°CUAT)",
    "docente": "4ºB",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "COSCOLLA, MA.JOSÉ",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "SEM. DE RETÓRICA Y POÉTICA",
    "docente": "5°B",
    "aula": "604",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "COSTA, MARTA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LITERATURA INGLESA I",
    "docente": "2°D",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "CUBILLA, SERGIO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "GEOGRAFIA ECONOMICA",
    "docente": "2*A",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "CUBILLA, SERGIO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "GEOGRAFIA ECONOMICA",
    "docente": "2*B",
    "aula": "802",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "DEL CAMPO, NATALIA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "METODOLOGÍA DE LA INVESTIGACIÓN EN LENGUAS EXTRANJERAS",
    "docente": "5°D",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "DEL NEGRO, M",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "HISTORIA DEL ARTE",
    "docente": "2°B",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "DOLCE, MARIA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "SUJETOS DE NIVEL",
    "docente": "1°D",
    "aula": "B IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "DOLCE, MARIA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "PSICOLOGÍA EDUCACIONAL",
    "docente": "1°D",
    "aula": "B IDIOMA",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "DUTTO, GABRIEL",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "LEO 1 Y TP",
    "docente": "1°B",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "ESCOBAR ACHAVAL, MARIA PAULA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "HISTORIA DE LA CIVILIZACIÓN INGLESA II",
    "docente": "3°D",
    "aula": "A QUIMICA",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "ESTELLER, LORENA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA DE ROMA Y TP",
    "docente": "2°D",
    "aula": "101",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "FIORDALISI, FLAVIA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "FILOSOFÍA Y TP",
    "docente": "4°B",
    "aula": "-------",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "FIORETTI, MARTIN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA II Y TP",
    "docente": "2°B",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "FREIDENRAIJ, CLAUDIA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "DDHH, SOCIEDAD Y ESTADO",
    "docente": "3°C",
    "aula": "505",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GALARZA, DANIEL",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "PEDAGOGÍA",
    "docente": "1°D",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GALARZA, DANIEL",
    "anio": "General",
    "materia": "GEOGRAFIA",
    "horario": "SIST. Y POL. EDUC. (1 Cuatr.)",
    "docente": "5*B",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GAMBARDELLA, VIVIANA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "DIDÁCTICA PARA EL NIVEL MEDIO I",
    "docente": "3*",
    "aula": "D FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GAMBARDELLA, VIVIANA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "CONSTR, DE LA PRÁCTICA DOCENTE",
    "docente": "3*",
    "aula": "D FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GARIBOTTI, MARIA HELENA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "HISTORIA ECONÓMICA GENERAL Y ARGENTINA",
    "docente": "1*A",
    "aula": "800",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GELMAN CONSTANTIN, FRANCISCO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "LEO II",
    "docente": "2°A",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GELMAN CONSTANTINE, FRANCISCO",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "LEO II",
    "docente": "2*B",
    "aula": "CUB 7",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GIMENEZ, MATIAS",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "ADM. DE RECURSOS HUMANOS",
    "docente": "4*A",
    "aula": "804",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GOLDFARB, LILA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1°B",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GOLDFARB, LILA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "PSICOLOGIA EDUCACIONAL (2 Cuatr.)",
    "docente": "1*",
    "aula": "B FISICA",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "GUERRIERI, DIEGO",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "BIOLOGIA HUMANA II (1°CUAT)",
    "docente": "4ºB",
    "aula": "-------",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "HERFERT, ANABELLA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "EL PROFESOR DE INGLÉS Y EL MAESTRO DE GRADO/SALA",
    "docente": "C",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "HIRSCH, DANA",
    "anio": "General",
    "materia": "GEOGRAFIA",
    "horario": "SISTEMA Y POLITICA EDUCATIVA (2do cuatr.)",
    "docente": "5°C",
    "aula": "-------",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "INGRASSIA, PABLO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ASTRONOMÍA SUPERIOR",
    "docente": "5°C",
    "aula": "1102",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "IRIARTE ERNESTO",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "HISTORIA DE LA EDUCACIÓN ARGENTINA",
    "docente": "5*",
    "aula": "EDULAB",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "IRIARTE, ERNESTO",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "TRABAJO DE CAMPO I: CONSTRUCCIÓN DE LA IDENTIDAD DOCENTE",
    "docente": "1°D",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "JANJETIC, MARIA BELEN",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "PEDAGOGÍA",
    "docente": "1°B",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "JARUF, PABLO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA HISTORIA ANTIGUA Y TP",
    "docente": "1°D",
    "aula": "AUD B",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "JURADO, MELINA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "INTROD A LA LENG Y LA LITER – 1ª CUAT -",
    "docente": "1°C",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "JURADO, MELINA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LATIN I – 2ª CUAT -",
    "docente": "1°C",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "JURADO, MELINA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LATIN II",
    "docente": "2°C",
    "aula": "603",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "KOHANOFF, CAMILA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "DIDÁCTICA GENERAL",
    "docente": "2*",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "LASSO, RUBEN",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA HISTORIA ANTIGUA Y TP",
    "docente": "1°G",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "LUVERÁ, SILVANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "SEMINARIO DE METODOLOGÍA DE INVESTIGACIÓN HISTÓRICA Y TP",
    "docente": "4°C",
    "aula": "400",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "LUZAR, NOELIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "DIDÁCTICA DEL FLE PARA EL NIVEL MEDIO II Y RESIDENCIA",
    "docente": "4*",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "LUZAR, NOELIA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "CONSTR. DE PRACT. DOC. EN EL NIVEL II Y RES.",
    "docente": "4*",
    "aula": "900",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "MANRIQUE, DARIO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "CIENCIAS DE LA TIERRA I",
    "docente": "1°C",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "MC CASKILL, ALEJANDRO",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "SEMINARIO DIDÁCTICO DISCIPLINAR",
    "docente": "5°C",
    "aula": "503",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "MC CASKILL, ALEJANDRO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "INTRODUCCIÓN A LA GEOGRAFÍA Y TP",
    "docente": "3°B",
    "aula": "605",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "MENAN, CARINA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LITERATURA INGLESA I",
    "docente": "2°D",
    "aula": "1000",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "MENAN, CARINA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LITERATURA INGLESA II",
    "docente": "3°D",
    "aula": "1001",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "MORELLI, NICOLAS",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "ANÁLISIS MATEMÁTICO II",
    "docente": "2°C",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "MORELLI, NICOLAS",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "PROBABILIDADES Y ESTADISTICA",
    "docente": "3°C",
    "aula": "700",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "NADDEO, MARÍA ELENA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA II Y TP",
    "docente": "2°C",
    "aula": "------",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "NARDULLI, JUAN PABLO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA II Y TP",
    "docente": "2°C",
    "aula": "805",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "PENA KOESSLER, CECILIA",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "EL TEXTO LITERARIO EN EL AULA",
    "docente": "3°D",
    "aula": "-----",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "PONCE, ROMINA",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "DERECHO COMERCIAL Y ECONÓMICO",
    "docente": "3*A",
    "aula": "803",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "QUIROZ, ALAN",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "TRABAJO DE CAMPO II: CONSTRUCCIÓN DEL ROL DOCENTE",
    "docente": "2°C",
    "aula": "704",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "RAMAS, MA. FERNANDA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "PEDAGOGIA",
    "docente": "1º D",
    "aula": "201",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "RAMAS, MARIA FERNANDA",
    "anio": "General",
    "materia": "TUTORIA",
    "horario": "TUTORIA",
    "docente": "-",
    "aula": "-",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "REJAN , AMIRA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "BIO. de los ANIMALES II",
    "docente": "3°B",
    "aula": "LAB A BIOLOG",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "REY, KARINA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "TERRITORIOS IV: ÁFRICA Y OCEANÍA",
    "docente": "5°B",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "REY, KARINA",
    "anio": "General",
    "materia": "GEOGRAFIA",
    "horario": "PROBLEMATICAS SOCIOAMBIENTALES",
    "docente": "4°B",
    "aula": "600",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "RICCI, VALERIA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "TICS EN EL AULA DE MATEMÁTICA",
    "docente": "3°C",
    "aula": "A INFORMÁTICA",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "RODRIGUEZ VAN DAM, VALERIA.",
    "anio": "General",
    "materia": "INGLÉS",
    "horario": "LITERATURA INGLESA III",
    "docente": "4°D",
    "aula": "1002",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "RODRIGUEZ, MATIAS",
    "anio": "General",
    "materia": "ADMINISTRACIÓN",
    "horario": "COMERCIALIZACIÓN Y MARKETING",
    "docente": "4*A",
    "aula": "804",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "ROSALEZ , PAOLA",
    "anio": "General",
    "materia": "BIOLOGÍA",
    "horario": "EL LENG. en la BIO.y su DIDÁCTICA",
    "docente": "4°B",
    "aula": "301",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "SARLINGA, MARIELA",
    "anio": "General",
    "materia": "BIOLOGIA",
    "horario": "ESI – 2ª CUAT -",
    "docente": "2°B",
    "aula": "300",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "SCALISE, SEBASTIAN",
    "anio": "General",
    "materia": "MATEMATICA",
    "horario": "ALGEBRA I",
    "docente": "1°D",
    "aula": "701",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "SIMSOLO, LEILA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "LECTURA, ESCRITURA Y ORALIDAD I",
    "docente": "1°C",
    "aula": "504",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "SIMSOLO, LEILA",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "LECTURA, ESCRITURA Y ORALIDAD",
    "docente": "1°B",
    "aula": "502",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "TOBIO, OMAR",
    "anio": "General",
    "materia": "GEOGRAFÍA",
    "horario": "GEOGRAFÍA SOCIAL",
    "docente": "4°B",
    "aula": "601",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "TOMASSINI, LILA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "FONETICA Y FONOLOGIA I",
    "docente": "1*",
    "aula": "A IDIOMAS",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "TOMASSINI, LILA",
    "anio": "General",
    "materia": "FRANCÉS",
    "horario": "FONÉTICA Y FONOLOGÍA II",
    "docente": "2*",
    "aula": "A IDIOMAS",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VAZQUEZ ROMINA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "LEO I",
    "docente": "1*C",
    "aula": "901",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VEGA, SUSANA",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "TRABAJO DE CAMPO I",
    "docente": "1°B",
    "aula": "102",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VENTURA, MARIANA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "INTRO A LA LENG Y LA LITER – 1ª CUAT -",
    "docente": "1°D",
    "aula": "----",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VENTURA, MARIANA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LATIN I – 2ª CUAT -",
    "docente": "1°D",
    "aula": "201",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VENTURA, MARIANA",
    "anio": "General",
    "materia": "LENGUA",
    "horario": "LATIN III",
    "docente": "3°B",
    "aula": "200",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VICARI, PABLO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "FILOSOFÍA Y TP",
    "docente": "4°B",
    "aula": "806",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VIGNOLO, SILVINA",
    "anio": "General",
    "materia": "FRANCES",
    "horario": "COORDINACION",
    "docente": "------",
    "aula": "-------",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VILLENA, LILIANA",
    "anio": "General",
    "materia": "MATEMÁTICA",
    "horario": "GEOMETRÍA I",
    "docente": "1°E",
    "aula": "702",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "VOLKIND, PABLO",
    "anio": "General",
    "materia": "HISTORIA",
    "horario": "HISTORIA ARGENTINA Y AMERICANA III Y TP",
    "docente": "3°C",
    "aula": "902",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  },
  {
    "carrera": "ZIMENSPITZ, JULIAN",
    "anio": "General",
    "materia": "CORO",
    "horario": "CORO",
    "docente": "-----",
    "aula": "AUD A",
    "turno": "Vespertino/Noche",
    "dia": "Viernes"
  }
];
