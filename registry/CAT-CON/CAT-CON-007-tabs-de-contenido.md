# CAT-CON-007 | Tabs de contenido

**Visualización HTML:** `modules/CAT-CON/CAT-CON-007-tabs-de-contenido.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Organizar contenido relacionado en secciones discretas cuando la comparación directa entre secciones no es necesaria. Ideal para casos de uso, servicios por segmento, o contenido de producto por categoría. |

---
## Anatomía
| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Barra de tabs | Requerido | Sí (etiquetas) | Clase `.tabs` + `.tab-btn`. Scroll horizontal en mobile |
| Panel de contenido | Requerido | Sí | Uno por tab. Clase `.tab-panel` |
| Título del panel (h3) | Requerido | Sí | Max 70 caracteres |
| Párrafo del panel | Requerido | Sí | Max 200 caracteres. Color muted |
| Imagen (placeholder) | Opcional | No (placeholder) | 16:9 via `aspect-ratio`, `border-radius: --radius-lg` |

## Variantes
| Código | Nombre | Diferencia |
| --- | --- | --- |
| CON-007-A | 3 tabs | Configuración por defecto |
| CON-007-B | 4 tabs | Tab adicional, barra scrollable en mobile si necesario |

## Restricciones de contenido
| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Tabs | Botones de navegación | 2 | 4 | Toggle en kit: 3 o 4 |
| Etiqueta de tab | Texto plano | 3 car. | 30 caracteres | Requerido por tab |
| Título del panel | Texto plano | 5 car. | 70 caracteres | Requerido por panel |
| Párrafo | Texto plano | — | 200 caracteres | Requerido por panel |
| Imagen | Imagen / placeholder | — | — | Se oculta con `hidden` en todos los paneles |

## Comportamiento responsive
| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Barra de tabs | Scroll horizontal (sin scrollbar visible) | Visible completa | Visible completa |
| Panel | Stack vertical (texto + imagen) | Igual | Igual |
| Imagen | 16:9, ancho completo | Igual | Max ancho del panel |

## Historial
- v1.0 · Creación

---
## Notas para UI
> Esta sección es para el equipo de UI.

- Accesibilidad: el wrapper de tabs usa `role="tablist"`. Cada `<button>` tiene `role="tab"`, `aria-selected` (true/false) y `aria-controls`. Cada panel tiene `role="tabpanel"` y `aria-labelledby`.
- Navegación por teclado: en producción implementar flechas izquierda/derecha para moverse entre tabs (patrón WAI-ARIA Tabs). El wireframe solo maneja click.
- El scroll horizontal de la barra se logra envolviendo `.tabs` en un div con `overflow-x: auto` y `scrollbar-width: none`. No añadir `white-space: nowrap` a los botones individuales.
- La imagen usa `aspect-ratio: 16/9` en el placeholder — en producción usar `<img>` con `width: 100%` y `aspect-ratio: 16/9` o `object-fit: cover` en un contenedor con altura fija.
- Evitar más de 5 tabs — en mobile se vuelven difíciles de descubrir incluso con scroll. Para más categorías, considerar un menú desplegable o un acordeón.
- El panel activo se muestra quitando el atributo `hidden`; los inactivos lo tienen. La regla `[hidden]{display:none!important}` del sistema lo gestiona.
