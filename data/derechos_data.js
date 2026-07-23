/**
 * AltilloJVG - Guía Oficial de Derechos Estudiantiles (ISP JVG)
 * Basado en el ROI, Resoluciones del Consejo Directivo y Preguntas Frecuentes Institucionales.
 */

const JVG_DERECHOS_ESTUDIANTILES = [
  {
    categoria: "✅ Derechos de Cursada y Recuperatorios",
    icono: "📖",
    color: "#009BE3",
    items: [
      {
        titulo: "Promoción Sin Examen Final (Directa)",
        requisito: "75% de asistencia a clase y nota mínima de 6 (seis) en cada parcial (2 a 3 parciales por cuatrimestre).",
        garantía: "Cada evaluación parcial cuenta con su respectivo recuperatorio obligatorio tomado durante el curso de forma separada."
      },
      {
        titulo: "Promoción Con Examen Final (Regular)",
        requisito: "60% de asistencia a clases y aprobación de trabajos prácticos.",
        garantía: "Si cumplís con la asistencia pero te falta calidad en los TPs, la Res. Rectorado 2/90 te garantiza el derecho a rendir una prueba especial hasta marzo para no perder la cursada."
      },
      {
        titulo: "Derecho a Recuperatorio Obligatorio",
        requisito: "Todas las instancias de evaluación parcial o TP en cualquier materia.",
        garantía: "La cátedra está obligada por reglamento a tomar al menos 1 recuperatorio por cada examen parcial. En caso de rendir recuperatorio, la nota que prevalece para el promedio es la del recuperatorio."
      },
      {
        titulo: "Duración de la Regularidad",
        requisito: "Materia regularizada aprobada.",
        garantía: "Tenés 3 años completos de validez para rendir el examen final de la materia regularizada."
      }
    ]
  },
  {
    categoria: "📢 Qué Se Puede Reclamar y Dónde Presentarlo",
    icono: "⚖️",
    color: "#C65100",
    items: [
      {
        titulo: "Revisión de Notas de Exámenes Parciales",
        instancia: "1° docente a cargo • 2° Director/a de Departamento",
        procedimiento: "Solicitar revisión en 1ª instancia al docente evaluador. Si la respuesta es insatisfactoria, elevar nota escrita al Director del Departamento."
      },
      {
        titulo: "Revisión de Exámenes Finales",
        instancia: "Director/a de Departamento vía Secretaría",
        procedimiento: "Presentar nota formal en Secretaría dirigida al Director de Departamento solicitando la revisión del acta o tribunal examinador."
      },
      {
        titulo: "Excepciones en Correlatividades y Cursadas Simultáneas",
        instancia: "1° Junta Departamental • 2° Consejo Directivo",
        procedimiento: "Si necesitás cursar o rendir materias correlativas en simultáneo por una situación justificada, presentá una nota a la Junta Departamental."
      },
      {
        titulo: "Reclamos por Ausencias o Vacantes Docentes",
        instancia: "Junta Departamental, Rectorado y Consejo Directivo",
        procedimiento: "Ante demora en concursos o falta de docente a cargo por más de 3 semanas, presentar nota a la Junta Departamental o acercarse a los Tutores Institucionales."
      }
    ]
  },
  {
    categoria: "🚫 Qué NO Se Puede Reclamar (Límites Normativos)",
    icono: "🛑",
    color: "#D9381E",
    items: [
      {
        titulo: "Rendir Materias Prácticas en Condición de Libre",
        normativa: "Res. CD 2013 / Reglamento de Trabajos Prácticos y Residencias",
        motivo: "Resulta incompatible rendir como libre los Talleres, Trabajos de Campo I y II, Seminarios y Residencias por exigencia de prácticas presenciales."
      },
      {
        titulo: "Exceso en el Límite de Equivalencias Externas",
        normativa: "Reglamento General de Equivalencias",
        motivo: "Solo se puede homologar por equivalencia externa hasta el 30% del total de materias de la carrera. Materias aprobadas hace más de 10 años no son sujetas a equivalencia."
      },
      {
        titulo: "Emisión de Título Sin Examen Psicofísico",
        normativa: "Reglamento Académico de Formación Docente",
        motivo: "El examen psicofísico es un requisito legal obligatorio e indispensable para la confección del título de docente graduado."
      }
    ]
  },
  {
    categoria: "🗳️ Derechos Políticos y Representación",
    icono: "🏛️",
    color: "#2E7D32",
    items: [
      {
        titulo: "Derecho a Elegir Autoridades e Integrar el Consejo",
        descripcion: "Todos los estudiantes regulares tienen derecho a votar y ser elegidos para el Consejo Directivo y las Juntas Departamentales.",
        justificacion: "Si no pudiste votar en la elección de Rectorado o Consejo, tenés derecho a presentar una nota justificativa ante la Junta Electoral. En caso contrario, se sanciona con la pérdida de 1 turno de examen."
      }
    ]
  }
];
