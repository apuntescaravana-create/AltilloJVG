# AltilloJVG - Repositorio Digital del ISP "Joaquín V. González"

Plataforma colaborativa y repositorio digital de acceso libre para estudiantes y docentes del **Instituto Superior del Profesorado "Joaquín V. González"**.

---

## 📸 Diseño de la Interfaz

El frontend ha sido diseñado imitando minuciosamente las maquetas del proyecto:
- **Estética Institucional**: Paleta de colores HSL basada en azul marino (`#1E3A5F`), dorado (`#C4933F`) y fondos neutros elegantes.
- **Grilla Adaptativa de Carreras**: Tarjetas dinámicas para los 18 Profesorados y Postítulos del instituto.
- **Acceso a Normativas y Planes de Estudio**: Secciones de acceso directo destacadas.
- **Navegación Móvil Integrada**: Menú hamburguesa superior y barra de navegación fija en la parte inferior (*Bottom Navigation Bar*).
- **Formulario de Carga en Cascada**: Selección dinámica `Carrera` → `Año` → `Materia` → `Tipo de Documento`.

---

## 📁 Estructura del Proyecto

```
AltilloJVG/
├── index.html                # Página principal responsiva (Desktop & Mobile)
├── css/
│   └── styles.css            # Estilos CSS con tokens HSL, Flexbox, Grid y animaciones
├── js/
│   ├── main.js               # Interacciones de UI (modal, menú hamburguesa, acordeón)
│   └── upload_form.js        # Formulario interactivo con desplegables en cascada
├── api/
│   └── upload.js             # Serverless Function (Vercel/Netlify) puente para Telegram & Sheets
├── assets/
│   └── logo-owl.svg          # Logotipo vectorial e isologotipo de la lechuza JVG
├── .env.example              # Plantilla de variables de entorno (Sin claves expuestas)
└── README.md                 # Documentación del proyecto
```

---

## 🛡️ Seguridad y Zero-Cost Stack (Respeto de Privacidad)

Este proyecto está construido bajo una arquitectura **Zero-Cost Stack** (100% gratuita y sin servidores de pago):

1. **Frontend**: Publicado en **GitHub Pages** como un sitio web estático ultra rápido.
2. **Serverless Function**: Desplegada en **Vercel** o **Netlify** (`/api/upload.js`) para actuar de proxy seguro.
3. **Storage (Archivos < 20MB)**: Enviados a través de la API de un **Bot de Telegram** a un canal o grupo privado.
4. **Storage (Archivos > 20MB)**: Redirigidos a una carpeta de **Google Drive**.
5. **Base de Datos**: **Google Sheets** conectado a través de **Stein** (o **SheetDB**).

> ⚠️ **Importante**: Las claves secretas (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `SHEET_API_URL`) están protegidas en variables de entorno del servidor serverless. Ningún token queda expuesto en el código cliente de GitHub.

---

## 📊 Estructura de la Base de Datos (Google Sheets)

Crea una planilla en Google Sheets con las siguientes dos pestañas:

### Pestaña 1: `Aportes`
| ID | Fecha | Carrera | Año | Materia | Tipo_de_Material | Link_Telegram | Estado |
|---|---|---|---|---|---|---|---|
| AP-101 | 2026-07-22 | Historia | 1° Año | Introducción a la Historia | Resumen | https://t.me/... | Aprobado |
| AP-102 | 2026-07-22 | Lengua y Literatura | 2° Año | Gramática II | Parcial | https://t.me/... | Pendiente |

*El sistema inserta nuevos registros con `Estado = Pendiente`. Cuando el administrador cambie manualmente la celda a `Aprobado`, el archivo se mostrará automáticamente en la web.*

### Pestaña 2: `Carreras_Materias`
| Carrera | Año | Materia |
|---|---|---|
| Profesorado de Historia | 1° Año | Introducción a la Historia |
| Profesorado de Historia | 1° Año | Historia Antigua |
| Profesorado de Lengua y Literatura | 1° Año | Gramática I |

---

## 🚀 Guía de Despliegue

### 1. Alojar el Frontend en GitHub Pages
1. Subí esta carpeta a un repositorio público o privado en GitHub.
2. En GitHub, ve a **Settings** > **Pages**.
3. Seleccioná la rama `main` y la carpeta `/ (root)`.
4. Hacé clic en **Save**. ¡Tu sitio estará en vivo!

### 2. Configurar la Serverless Function en Vercel
1. Conectá el repositorio en [Vercel](https://vercel.com).
2. En las configuraciones del proyecto, ve a **Environment Variables** e ingresá:
   - `TELEGRAM_BOT_TOKEN`: Token otorgado por `@BotFather`.
   - `TELEGRAM_CHAT_ID`: ID del canal/grupo privado.
   - `SHEET_API_URL`: URL del endpoint de Stein / SheetDB.
3. Desplegá el proyecto. Vercel detectará automáticamente la carpeta `/api/upload.js`.

---

## 📅 Actualización de Aulas y Cursadas (Paso a Paso)

El Buscador de Aulas se basa en una base de datos estática local (`data/aulas_data.js`). Para actualizarla al inicio de cada cuatrimestre o año (cuando cambian los horarios y salones de cursada), se incluye un script automático que no requiere de Inteligencia Artificial ni servicios de pago externos.

### Requisitos Previos (Una sola vez en la PC del administrador)
Debés tener **Python 3** instalado en tu computadora y la librería de procesamiento de PDFs:
```bash
pip install pdfplumber
```

---

### Método A: Actualización Automática (Recomendado)
Este método se conecta al sitio del Joaquín, descarga los PDFs de horarios oficiales más recientes y genera la base de datos automáticamente.

1. Hacé doble clic en el archivo **`actualizar_aulas.bat`** ubicado en la carpeta raíz del proyecto.
2. El script de Python (`scripts/auto_update_aulas.py`) se ejecutará en una consola de comandos:
   - Se conectará a la web oficial y descargará los últimos PDFs en la carpeta `/Aulas/` (que está configurada en `.gitignore` para no subir archivos binarios pesados al repositorio).
   - Procesará los datos de todas las materias, aulas y horarios de los turnos Mañana, Tarde y Noche de 1° a 6° año (Educación Secundaria y Superior).
   - Recompilará la base de datos y actualizará los archivos `data/aulas_data.js` y `data/aulas_data.json`.
3. Subí los cambios generados en `data/aulas_data.js` a tu repositorio de GitHub para que la web en vivo se actualice.

---

### Método B: Actualización Manual (Si la web oficial cambia de diseño)
Si el sitio web del Joaquín cambia su dirección URL o formato y el script automático no encuentra los archivos en la web:

1. Ingresá manualmente al sitio del Joaquín y descargá los PDFs de horarios de aulas (TM, TT, TV).
2. Guardá los PDFs descargados dentro de la carpeta **`/Aulas/`** del repositorio.
3. Hacé doble clic en el archivo **`actualizar_aulas.bat`**. Al no detectar PDFs nuevos en la web, el script detectará y procesará automáticamente los archivos locales que guardaste en el paso anterior.
4. Subí los archivos generados en `/data/` a GitHub.

