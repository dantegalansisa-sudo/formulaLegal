# Fórmula Legal — Diana Pérez Rubiera

Sitio web de **Fórmula Legal**: Legal Design · Governance · Compliance · Strategic Planning · Legal Project Management.

Stack: React + TypeScript + Vite + Framer Motion + Lenis (scroll suave) + CSS.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
```

## Estructura del home

1. Hero (versión PC y versión móvil propia, estilo portada de revista)
2. Ticker de áreas de práctica
3. Manifiesto (texto que se ilumina con el scroll)
4. Sobre mí + cifras
5. Servicios — tarjetas apiladas con visuales animados por servicio y CTA a WhatsApp
6. Legal Design en acción — comparador antes/después
7. Método (4 etapas)
8. ¿Para quién?
9. Testimonios (contenido de muestra)
10. Preguntas frecuentes
11. Contacto / cita previa
12. Footer

## Pendientes con la clienta

- Testimonios reales (los actuales son de ejemplo).
- Enlaces de Instagram, LinkedIn y correo (`href="#"` en `Hero`, `Nav` y `Closing`).
- Fotos adicionales (hoy se usa la misma foto en todo el sitio).
- Al publicar, poner la URL absoluta en `og:image` de `index.html` para la vista previa en WhatsApp.

Imágenes de referencia/inspiración en `referencias/`.
