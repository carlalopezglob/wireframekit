# CAT-CON-013 | Galería de imágenes

**Visualización HTML:** `modules/CAT-CON/CAT-CON-013-galeria-de-imagenes.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Mostrar una colección de imágenes o vídeos (proyectos, trabajos, eventos) con posibilidad de ampliar cada elemento en un lightbox. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Encabezado de sección | Opcional | Sí | Overtitle + H2 + subtítulo |
| Ítems de la galería | Obligatorio | Sí (imagen/vídeo) | Botón clickable, abre lightbox |
| Botón "Ver más fotos" | Condicional | No | Aparece si hay más ítems que los visibles por defecto |
| Lightbox | Obligatorio (herramienta) | No | Overlay modal con la imagen/vídeo ampliado, título y descripción |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CON-013-A | Cuadrícula 3 columnas | Por defecto. 1 col mobile → 2 col tablet → 3 col desktop. |
| CAT-CON-013-B | Cuadrícula 2 columnas | 1 col mobile → 2 col desktop. Mejor para imágenes grandes. |
| CAT-CON-013-C | Masonry | CSS columns; cada ítem conserva su propio aspect ratio, efecto escalonado. |
| CAT-CON-013-D | Modo vídeo | Cada ítem muestra un placeholder de vídeo 16:9 con botón de play en lugar de imagen. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Ítems | Imagen / vídeo | 4 | 9 (en este wireframe; sin límite estructural en producción) | Con menos de 4, el "Ver más" no aporta — ocultarlo |
| Ítems visibles antes de "Ver más" | — | 4 (mobile) | 6 (tablet/desktop) | — |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Grid 3 col | 1 columna, colapsado a 4 ítems | 2 columnas | 3 columnas, 6 ítems antes de "Ver más" |
| Lightbox | Padding reducido, scroll vertical si excede alto | Igual | max-width 720px centrado |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El lightbox se cierra con el botón ✕, con `Escape` o haciendo clic fuera del contenido (`.con013__lightbox-inner`).
- `z-index: 1100` — por encima de cualquier otro panel del kit; mantener ese valor o superior en el proyecto real.
- Al abrir el lightbox, el foco pasa al botón de cerrar (accesibilidad de teclado).

**Restricciones de implementación:**
- El botón "Ver más fotos" revela todos los ítems restantes de golpe (no es paginación) y luego se oculta — en UI real puede sustituirse por scroll infinito o paginación según el volumen real de imágenes.

**Casos edge a contemplar:**
- Vídeo autoplay: en producción debe ir siempre muted y con control de pausa visible, nunca con sonido automático.
