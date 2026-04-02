# StyleHub — Plataforma Profesional de Peluquería

Sitio web completo para la plataforma StyleHub, que conecta clientes, peluqueros y marcas profesionales del sector capilar.

## Estructura del proyecto

```
stylehub/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Todos los estilos (incluye responsive)
├── js/
│   └── main.js         # Lógica del sitio (modales, carousels, animaciones)
├── video/
│   └── hero.mp4        # Vídeo de fondo del hero
├── img/                # Carpeta para imágenes (actualmente embebidas en HTML)
├── .gitignore
└── README.md
```

## Características

- **Hero** con vídeo de fondo a pantalla completa (autoplay, muted, loop)
- **3 secciones de registro** para clientes, peluqueros y marcas profesionales
- **Formulario de registro inline** en dos pasos con selector de categoría
- **Bloque de beneficios** con contador animado por categoría
- **Carousel de historias** con avance automático
- **Galería** de trabajos en grid asimétrico
- **Testimonios** con fotos reales
- **Diseño responsivo** para móvil, tablet y escritorio
- **Menú hamburger** para móvil

## Cómo usar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/stylehub.git
   ```

2. Abre `index.html` directamente en el navegador, o sirve con cualquier servidor local:
   ```bash
   # Con Python
   python3 -m http.server 8000

   # Con Node.js (npx)
   npx serve .
   ```

3. Abre `http://localhost:8000` en el navegador.

## Tecnologías

- HTML5 semántico
- CSS3 (variables, grid, flexbox, animaciones, media queries)
- JavaScript vanilla (sin frameworks)
- Fuentes: Bebas Neue + DM Sans (Google Fonts)

## Notas para producción

- Las imágenes de los bloques están actualmente embebidas en base64 en el HTML.  
  Para optimizar, extrae cada imagen a la carpeta `/img` y reemplaza el `src` con la ruta relativa.
- El vídeo `hero.mp4` (21 MB) se sirve como archivo estático.  
  Se recomienda comprimirlo con `ffmpeg` para producción:
  ```bash
  ffmpeg -i video/hero.mp4 -vcodec libx264 -crf 28 -preset slow video/hero_compressed.mp4
  ```

## Despliegue en GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio
2. Selecciona **Branch: main**, carpeta **/ (root)**
3. Guarda — el sitio estará disponible en `https://tu-usuario.github.io/stylehub/`
