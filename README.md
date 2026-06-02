# Impacto Sustentable — Sitio web

Landing page de consultoría ambiental. HTML + CSS + JS puro (sin dependencias ni build), responsive, optimizada para móvil y carga rápida. Lista para GitHub y Netlify.

## 📁 Estructura
```
.
├── index.html        # Página principal (todo el contenido)
├── styles.css        # Estilos y animaciones
├── script.js         # Interacciones + integración WhatsApp
├── assets/
│   ├── logo.png       # Logo (fondo transparente)
│   └── favicon.png    # Ícono de pestaña
├── netlify.toml       # Config de Netlify (caché/seguridad)
├── _redirects         # Redirecciones SPA
└── robots.txt
```

## ✏️ Cómo cambiar datos clave

**Número de WhatsApp** → abre `script.js` y edita las dos líneas de arriba:
```js
const WHATSAPP = "573158714839";     // formato internacional, sin "+" ni espacios
const PHONE_DISPLAY = "+57 315 871 4839"; // cómo se muestra en pantalla
```
Todos los botones, el flotante y el formulario usan ese número automáticamente.

**Redes sociales** → busca en `index.html`:
`instagram.com/consultoriaimpactosustentable` y `facebook.com/consultoriaimpactosustentable`.

**Textos** → están directamente en `index.html`, fáciles de editar.

## 🚀 Opción A — Netlify (arrastrar y soltar, sin GitHub)
1. Entra a https://app.netlify.com/drop
2. Arrastra **toda la carpeta** del proyecto.
3. ¡Listo! Netlify te da una URL pública en segundos.

## 🚀 Opción B — GitHub + Netlify (recomendado, con actualizaciones automáticas)
1. Crea un repositorio nuevo en GitHub (ej. `impacto-sustentable`).
2. Sube estos archivos. Por terminal:
   ```bash
   git init
   git add .
   git commit -m "Sitio Impacto Sustentable"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/impacto-sustentable.git
   git push -u origin main
   ```
   (o usa "Add file → Upload files" en la web de GitHub y arrastra todo).
3. En Netlify: **Add new site → Import an existing project → GitHub** y elige el repo.
4. Deja "Publish directory" en `.` (raíz) y pulsa **Deploy**.
5. Cada vez que hagas `push`, Netlify actualiza el sitio solo.

## 🌐 Dominio propio (impactosustentable.com)
En Netlify: **Domain settings → Add a domain** e ingresa tu dominio. Netlify te indica los registros DNS a configurar en tu proveedor.

## ✅ Incluye
- Contenido real del sitio actual + secciones nuevas: reportes obligatorios, concepto sanitario, RH-1, RUA y certificaciones ISO 14001 / 9001 / 45001, con banner "No esperes sanciones ambientales".
- Botón de WhatsApp con logo y color oficial (#25D366). El formulario envía el mensaje directo a WhatsApp.
- Imágenes y animaciones generadas en código (SVG/CSS): carga instantánea, sin fotos pesadas.
- Responsive y con soporte para `prefers-reduced-motion`.
