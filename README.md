# StyleHub — Plataforma Profesional de Peluquería
URL: https://mary-m-v.github.io/stylehub/

## Що виправлено у v8 (CLS radical fix)
- @font-face metric overrides: fallback шрифти мають ті ж метрики що Bebas Neue / DM Sans
- Шрифти preload + display=block (браузер чекає шрифт, не замінює після рендеру)
- hero-content contain:layout (ізолює від reflow)
- nav-right min-width (стабільна ширина)
- Форми зі стилями з v7
