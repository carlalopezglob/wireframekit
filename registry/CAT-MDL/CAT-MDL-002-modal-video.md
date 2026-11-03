# CAT-MDL-002 | Modal de vídeo

**Visualización HTML:** `modules/CAT-MDL/CAT-MDL-002-modal-video.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-MDL |
| **Cuándo usar** | Para mostrar un vídeo embebido (YouTube, Vimeo, archivo propio) en una capa ligera sobre la página actual, sin abandonar el contexto de navegación. |

---

## Anatomía

- **Miniatura trigger (`.mdl002__thumbnail`):** elemento `<button>` con fondo oscuro, relación de aspecto 16:9, icono de play centrado y label monospace. Es el punto de entrada al modal.
- **Overlay (`.mdl002__overlay`):** fondo más oscuro que el modal básico (rgba 0,0,0,0.85) para maximizar el contraste con el vídeo.
- **Panel (`.mdl002__panel`):** contenedor negro sin relleno, border-radius aplicado. Máximo 900px de ancho.
- **Botón cerrar (`.mdl002__close`):** posicionado en absolute fuera del panel (arriba a la derecha), visible sobre el overlay.
- **Área de vídeo (`.mdl002__video-area`):** placeholder oscuro 16:9 con icono de play decorativo y label. En producción sustituir por `<iframe>` o `<video>`.

## Variantes

| Variante | Descripción |
| --- | --- |
| Embed iframe | Reemplazar `.mdl002__video-area` por `<iframe>` con `src` de YouTube/Vimeo. Añadir `?autoplay=1` al URL al abrir el modal. |
| Vídeo nativo | Usar elemento `<video controls autoplay>` en lugar del placeholder. |
| Sin miniatura | Abrir el modal desde un botón de texto o CTA genérico. |

## Restricciones de contenido

- Relación de aspecto fija 16:9; no usar otros ratios sin ajustar el CSS.
- No incluir texto ni controles adicionales dentro del panel oscuro.
- La miniatura trigger debe tener `alt` o `aria-label` descriptivo con el título del vídeo.

## Comportamiento responsive

- El panel ocupa el ancho completo en móvil (menos padding del overlay).
- El botón de cerrar permanece visible en posición absoluta incluso en pantallas pequeñas.
- En móvil el botón cerrar puede moverse a dentro del panel si el espacio fuera del panel es insuficiente.

## Historial

| Versión | Fecha | Descripción |
| --- | --- | --- |
| 1.0 | 2025-01 | Versión inicial |

## Notas para UI

- En producción, pausar/detener el vídeo al cerrar el modal: con iframe de YouTube usar la API `postMessage`; con `<video>` nativo llamar `.pause()`.
- Autoplay de vídeo puede ser bloqueado por los navegadores si no es muted. Consultar política de autoplay de cada plataforma.
- Añadir `Escape` para cerrar el modal en producción.
- El overlay oscuro (0.85) hace innecesario el botón con texto; el icono ✕ redondo es suficiente.
- Si el embed es un iframe de terceros, gestionar el aspecto ratio con `padding-bottom: 56.25%; position: relative` si no se usa `aspect-ratio`.
