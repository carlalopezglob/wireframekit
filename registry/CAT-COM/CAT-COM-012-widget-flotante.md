# CAT-COM-012 | Widget flotante

**Visualización HTML:** `modules/CAT-COM/CAT-COM-012-widget-flotante.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Un punto de contacto persistente (chat, ayuda, mensajería) que debe quedar visible en toda la navegación del sitio, independiente del contenido de cada página. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Botón flotante (`.com012__btn`) | Obligatorio | No | Circular, posición fija en una esquina del viewport, siempre encima del contenido |
| Icono | Obligatorio | Sí (qué icono) | Un solo icono de línea, color único — representa el canal (chat, ayuda, mensaje) |
| Badge de notificación | Opcional | Sí (número) | Punto o número superpuesto en la esquina superior derecha del botón |
| Menú de opciones (`.com012__menu`) | Opcional | Sí | Lista compacta de 2-4 canales de contacto que aparece al activar el botón |

Este módulo es solo el disparador persistente y, como mucho, el pequeño menú de opciones que aparece al pulsarlo. El contenido de lo que se abre (una ventana de chat, un formulario corto) no es parte de este módulo — usar los módulos correspondientes del kit (p. ej. formulario de contacto) para ese contenido.

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-012-A | Acción directa | El clic ejecuta una única acción de inmediato (p. ej. abre directamente un chat o un enlace) — sin menú intermedio. |
| CAT-COM-012-B | Con menú de opciones | El clic despliega un menú compacto con 2-4 canales de contacto; cada opción dispara su propia acción. |
| CAT-COM-012-C | Con badge | Punto o número de notificación superpuesto al icono, para señalar un mensaje pendiente o una novedad. |

Posición: esquina inferior derecha (por defecto) · esquina inferior izquierda (`.com012__btn--left`). Fijo (`position: fixed`), visible en todo momento al hacer scroll.

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Opciones del menú | Lista de canales | 2 | 4 | Con una sola opción, usar la variante de acción directa (sin menú) |
| Etiqueta de opción | Texto plano | — | ~24 car. | Obligatoria si hay menú — el icono solo no es suficiente para accesibilidad |
| Badge numérico | Número | 1 | 2 cifras (99+) | Se omite el badge si no hay notificación pendiente |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Botón | 52px, margen `var(--space-4)` del borde | 56px, margen `var(--space-6)` del borde | Igual que tablet |
| Menú de opciones | Ancho `calc(100vw - var(--space-8))`, máx. 280px | 240-280px fijo | Igual que tablet |

## Historial

| Versión | Fecha | Descripción |
| --- | --- | --- |
| 1.0 | 2026-11 | Versión inicial. Se evaluó CAT-MDL como categoría alternativa: se descartó porque el botón flotante en sí nunca requiere un cierre explícito — permanece siempre visible y activo durante toda la navegación, a diferencia de un modal/drawer/dropdown que aparece y debe cerrarse. El menú de opciones que despliega sí se cierra explícitamente, pero es secundario al propósito del módulo (el disparador persistente), por lo que se mantiene en CAT-COM junto a los demás componentes atómicos de un solo propósito. |

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El botón permanece fijo en su esquina durante todo el scroll de la página — nunca se oculta ni se desplaza.
- Con menú: el clic alterna abrir/cerrar; clic fuera del menú o tecla `Escape` lo cierra sin ocultar el botón.
- Sin menú (acción directa): el clic dispara la acción asociada de inmediato (abrir chat, enlace, formulario) — ese destino no se construye en este módulo.
- El badge es puramente informativo; no es interactivo por sí mismo (no tiene su propio target de clic distinto al botón).

**Restricciones de implementación:**
- `aria-label` obligatorio en el botón describiendo la acción (p. ej. "Abrir chat de ayuda"), ya que el icono solo no es accesible.
- Si hay menú, el botón lleva `aria-haspopup="true"` y `aria-expanded` sincronizado.
- El badge debe anunciarse a lectores de pantalla (p. ej. texto visualmente oculto "2 mensajes nuevos"), no solo el número visual.

**Casos edge a contemplar:**
- En páginas con otros elementos fijos en la misma esquina (p. ej. un botón "volver arriba"), definir en el proyecto real el z-index relativo y el espaciado entre ambos para que no se superpongan.
- Badge con número de 3+ cifras: truncar a "99+" en vez de desbordar el círculo.
