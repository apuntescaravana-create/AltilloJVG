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
