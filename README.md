# AltilloJVG - Repositorio Digital del ISP "Joaquín V. González"

Plataforma colaborativa, libre y comunitaria desarrollada por estudiantes independientes y **La Caravana** para el **Instituto Superior del Profesorado "Joaquín V. González"**. 

El proyecto centraliza apuntes clasificados, programas, exámenes, buscadores de aulas, mapas de carrera y comunicados oficiales en un ecosistema web ágil, moderno y 100% gratuito (Zero-Cost Stack).

---

## 🌟 Características Principales

### 1. 📚 Repositorio Digital de Apuntes
* **18 Profesorados y Carreras**: Cobertura integral de los planes de estudio del Joaquín (Historia, Filosofía, Letras, Inglés, Física, Matemática, Biología, etc.).
* **Filtros Dinámicos en Cascada**: Búsqueda inmediata por año de cursada, materia y tipo de material (Resúmenes, Exámenes/Parciales, Trabajos Prácticos, Libros y Guías).
* **Previsualización y Descarga**: Visualización directa de archivos PDF y documentos almacenados en la nube.
* **Formulario de Carga Comunitaria**: Formulario interactivo adaptado a celulares con scroll táctil continuo (`max-height: 88vh`), selección de cátedra y carga directa con moderación previa.

### 2. 📌 Tablón de Novedades (Cartelera Universitaria)
* **Estética de Cartelera Real**: Diseño visual cálido de tablón institucional con tipografía de cartelera (`Bebas Neue`), placa institucional en azul noche con ribetes dorados y baliza LED con animación pulsante "EN VIVO".
* **Avisos Estilo Post-It / Volante Clavado**: Comunicados categorizados con acentos cromáticos perimetrales:
  * 🔴 **Urgente**: Fechas límite y avisos críticos.
  * 🟡 **Importante / Fechas**: Mesas de examen, inscripciones y cronogramas.
  * 🟣 **Gremial / Centro**: Asambleas, reclamos y resoluciones estudiantiles.
  * 🔵 **Avisos Generales / Cursada**: Información de aulas, novedades de comisiones y cátedras.
* **Avisos Fijados**: Distintivo `📌 DESTACADO` para notas de alta prioridad ancladas al inicio.
* **Lectura Progresiva y Paginación**: Sistema de recorte inteligente de texto ("Ver más" / "Ver menos") y botón expansible para consultar el histórico completo de avisos publicados.

### 3. 🛠️ Herramientas Estudiantiles Integradas
* **Buscador de Aulas y Cursadas**: Motor de consulta indexado sobre una base de **1.658 clases y comisiones** (turnos mañana, tarde y vespertino) para encontrar salones, docentes y horarios en segundos.
* **Mapa de Carrera Personal**: Plantillas interactivas en formato Excel descargables directamente a Google Drive para planificar correlatividades, con menús desplegables integrados (`SI`/`NO`) para tildar materias aprobadas y cursadas.
* **Normativa Institucional**: Acceso directo al Reglamento Orgánico Institucional (ROI), régimen de correlatividades y resoluciones del Consejo Directivo.
* **Planes de Estudio**: Enlaces centralizados a los planes oficiales de cada profesorado.
* **Información Útil del Estudiante**: Guías sobre calendario académico, turnos de finales, derechos estudiantiles, régimen de licencias, becas (Progresar, Ciudad) y material bibliográfico.

### 4. 📱 Arquitectura y Navegación Móvil (3 Vistas Dedicadas)
La interfaz para smartphones (`<= 1024px`) está optimizada con una barra de navegación inferior (*Bottom Navigation Bar*) limpia y nativa:
1. **Pestaña Herramientas**: Despliega las herramientas en **tarjetas grandes con descripción completa** arriba, seguidas de la sección integral de *Información Útil*.
2. **Pestaña Altillo**: Cabecera institucional + grilla de las 18 carreras arriba de todo, con accesos compactos a herramientas al pie del scroll.
3. **Pestaña Novedades**: Acceso directo al Tablón de Novedades en pantalla completa, con bloquecitos de herramientas al pie.
* **Desktop**: Mantiene un layout clásico de 3 columnas simultáneas (Tablón a la izquierda, Contenido central y Barra de herramientas a la derecha).

---

## 🏗️ Arquitectura Técnica (Zero-Cost Stack)

El proyecto opera sobre una infraestructura sin costos de mantenimiento y con alta disponibilidad:

* **Frontend**: Vanilla JavaScript (ES6+), HTML5 semántico y CSS3 modular (Custom Properties, Flexbox, CSS Grid). Cero dependencias pesadas de frameworks, garantizando carga instantánea en redes móviles lentas.
* **Hosting**: **Vercel** para despliegue continuo de la rama de producción y entornos de prueba (`beta`).
* **Base de Datos & Backend**: **Supabase (PostgreSQL)**:
  * Tabla `aportes`: Almacenamiento y metadatos de apuntes enviados por la comunidad.
  * Tabla `news`: Publicaciones y comunicados del tablón en tiempo real.
  * Tabla `categories`: Taxonomía y gestión de etiquetas.
  * Políticas de Seguridad **RLS (Row Level Security)** para lectura pública y mutaciones protegidas.
* **Storage**: Supabase Storage Bucket (`apuntes`) con enlaces públicos CDN para descarga inmediata de documentos.
* **Serverless Functions**: Endpoints API en Node.js (`/api/*`) para moderación, autenticación y gestión de archivos.

---

## 📁 Estructura del Repositorio

```
AltilloJVG/
├── index.html                   # Interfaz principal (Desktop y Móvil)
├── css/
│   └── styles.css               # Sistema de diseño, tokens, grillas y media queries
├── js/
│   ├── main.js                  # Lógica de interfaz, modales y eventos generales
│   ├── news.js                  # Motor del Tablón de Novedades y lector progresivo
│   ├── upload_form.js           # Formulario dinámico de subida de apuntes
│   ├── aulas_search.js          # Buscador reactivo de aulas y horarios
│   ├── mapa_carrera.js          # Modal y generador de mapas de correlatividades
│   └── materiales_explorer.js   # Explorador de archivos clasificados por carrera
├── data/
│   ├── aulas_data.js            # Base indexada de horarios y aulas (1.658 comisiones)
│   ├── derechos_data.js         # Articulado y normativas estudiantiles
│   ├── libros_guia_data.js      # Biblioteca básica de consulta
│   ├── resources_data.js        # Vínculos y recursos institucionales
│   └── mapas/                   # Libros de cálculo Excel con validación de datos
├── api/
│   ├── news.js                  # CRUD de comunicados y noticias
│   ├── upload.js                # Procesamiento y subida segura a Storage
│   └── admin.js                 # Panel de moderación y aprobación de aportes
├── assets/
│   ├── logo-owl.svg             # Isologotipo de la lechuza sobre el libro abierto
│   └── logo-caravana.svg        # Distintivo oficial La Caravana
├── scripts/
│   ├── auto_update_aulas.py     # Extractor y procesador de PDFs de aulas oficiales
│   └── fix_excel_validation.py  # Constructor de listas desplegables para Excel
└── README.md                    # Documentación técnica y funcional
```

---

## ⚙️ Configuración del Entorno Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/apuntescaravana-create/AltilloJVG.git
cd AltilloJVG
```

### 2. Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto tomando como base `.env.example`:
```ini
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
ADMIN_PASSWORD=clave_de_administracion
```
*(El archivo `.env` se encuentra protegido en `.gitignore` para salvaguardar credenciales).*

### 3. Servir localmente
Puedes utilizar cualquier servidor estático local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve .
```
Abre tu navegador en `http://localhost:8000`.

---

## 🔄 Mantenimiento y Actualización de Datos

### Actualización de Horarios y Aulas
Al comenzar cada cuatrimestre, cuando el instituto publica los nuevos horarios y asignaciones de aulas:
1. Ejecuta el script de extracción automática:
   ```bash
   python scripts/auto_update_aulas.py
   ```
2. El script procesa los PDFs de los tres turnos (Mañana, Tarde, Vespertino), valida la coherencia de datos y recompila `data/aulas_data.js`.
3. Confirma los cambios y realiza el push al repositorio.

### Actualización de Mapas de Carrera
Los archivos `.xlsx` del mapa de carrera contienen validaciones nativas de datos (`SI,NO`). Para regenerarlos o incorporar nuevas carreras:
```bash
python scripts/fix_excel_validation.py
```

---

## 👥 Comunidad y Colaboración

Este espacio es una construcción colectiva e independiente impulsada por **La Caravana + Estudiantes Independientes** del ISP "Joaquín V. González". 

Si encontrás errores, querés aportar material de tu carrera o sugerir mejoras en la plataforma:
* Utilizá el botón **"Subí tus documentos"** en la web.
* Acercate a las mesas de La Caravana en el instituto o participá abriendo un *Pull Request* o *Issue* en el repositorio.
