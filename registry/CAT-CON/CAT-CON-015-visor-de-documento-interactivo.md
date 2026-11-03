# CAT-CON-015 | Visor de documento interactivo

**Visualización HTML:** `modules/CAT-CON/CAT-CON-015-visor-de-documento-interactivo.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Mostrar un documento paginado (PDF, catálogo, informe, presentación) dentro de la propia página, con sus propios controles de lectura — no como descarga, sino como un visor que el usuario recorre sin salir del sitio. No usar para una sola imagen o un embed pasivo sin páginas (ver CAT-CON-013 Galería de imágenes): este módulo existe porque mantiene **estado propio** (página actual, nivel de zoom, marcadores), es un patrón de interfaz paginada, no un contenedor de medios. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Título de la página contenedora | Opcional | Sí | H2 sobre el visor. Si se omite, el visor sube sin hueco vacío |
| Canvas del documento | Obligatorio | No (placeholder) | Área de la página activa. Orientación vertical o horizontal según variante |
| Indicador de página activa | Obligatorio | No | Texto centrado en el canvas: "Página X de N" |
| Barra de herramientas | Obligatorio | No | Agrupa los controles de lectura. Debajo del canvas o superpuesta, según variante |
| Zoom out / Zoom in | Obligatorio | No | Botones ⊖ / ⊕. Deshabilitan en los límites (50%–200%) |
| Indicador de zoom | Obligatorio | No | Porcentaje entre los dos botones de zoom, actualiza en cada click |
| Página anterior / siguiente | Obligatorio | No | Botones ‹ / ›. Deshabilitan en la primera/última página |
| Ir a página | Obligatorio | No | Input numérico + "de N". Enter o blur navega; valor inválido revierte al actual |
| Marcador (bookmark) | Opcional | No | Botón toggle (☆ / ★). Estado independiente por página durante la sesión |
| Compartir | Opcional | No | Botón de acción. En wireframe muestra confirmación momentánea ("Enlace copiado") |
| Pantalla completa | Obligatorio | No | Botón toggle. Expande el visor a viewport completo (simulado con CSS, no Fullscreen API real) |

---

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CON-015-A | Documento vertical | Por defecto. Canvas en proporción 3:4 (retrato) — documentos paginados tipo informe, catálogo, PDF a una columna |
| CAT-CON-015-B | Documento horizontal | Canvas en proporción 16:9 (panorámico) — presentaciones, diapositivas, documentos apaisados |
| CAT-CON-015-C | Barra superpuesta | La barra de herramientas no ocupa espacio propio: se superpone al borde inferior del canvas con fondo semitransparente |

---

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Documento fuente | PDF o imágenes paginadas | 1 página | Sin límite estructural (wireframe simula hasta 40) | — |
| Título de la página contenedora | Texto plano | — | 70 caracteres | El visor sube; sin hueco vacío |
| Número de páginas visible | Numérico | 1 | 3 dígitos | — |
| Marcador | Control opcional | — | — | Se oculta con `hidden`; la barra reparte el espacio entre el resto de grupos |
| Compartir | Control opcional | — | — | Se oculta con `hidden` |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Canvas | Ancho completo | Ancho completo, max-width 640px centrado | max-width 720px centrado |
| Barra de herramientas | Envuelve en 2–3 filas centradas (`flex-wrap`), sin scroll horizontal | Una sola fila, grupos repartidos con `justify-content: space-between` | Igual que tablet |
| Input "ir a página" | Mismo ancho fijo (56px) que en desktop — no se contrae por debajo del dígito máximo | Igual | Igual |
| Variante superpuesta (C) | La barra superpuesta reduce su padding vertical para no tapar más del 20% del canvas | Igual que base | Igual que base |

---

## Historial

- v1.0 · Creación. Patrón de interacción nuevo en el kit (estado propio: página, zoom, marcadores, pantalla completa) — no es una variante de un módulo de embed/imagen existente.
- Decisión de implementación: la lógica de paginación/zoom/marcador/pantalla-completa se escribió **inline en este módulo**, no en `shared/wireframe.js`. Razón: es la primera vez que aparece este patrón en el catálogo; generalizarlo ahora sin un segundo caso de uso real arriesga una abstracción prematura mal ajustada. Si aparece un segundo módulo con el mismo patrón de visor paginado con estado, revisar si conviene extraer una función compartida (`openPagedViewer()` o similar) a `wireframe.js` en ese momento.

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Zoom: pasos de 25%, rango 50%–200%. Los botones ⊖/⊕ se deshabilitan (`disabled` + `aria-disabled`) en los extremos del rango.
- Paginación: los botones ‹/› se deshabilitan en la primera y última página respectivamente. El input "ir a página" valida el rango 1–N; un valor fuera de rango revierte visualmente al número de página actual al perder el foco.
- Marcador: estado independiente por página, se mantiene al navegar entre páginas (en wireframe, en memoria durante la sesión — en producción debe persistir en backend/localStorage de usuario).
- Compartir: en wireframe no hay acción real de compartir — el botón muestra un texto de confirmación momentáneo ("Enlace copiado") durante ~2s y desaparece. En producción, normalmente abre un share sheet nativo o copia la URL con el número de página actual.
- Pantalla completa: en wireframe se simula con una clase CSS que expande el visor a `position: fixed; inset: 0`. En producción usar la Fullscreen API real (`element.requestFullscreen()`), que tiene su propio ciclo de eventos (`fullscreenchange`) y restricciones de navegador — no asumir que el CSS por sí solo basta.

**Accesibilidad:**
- El contenedor del visor lleva `role="group"` con `aria-label` describiendo el documento.
- Cada botón de icono lleva `aria-label` descriptivo (no solo el símbolo) y, cuando aplica, `aria-pressed` (marcador, pantalla completa).
- El indicador "Página X de N" usa `aria-live="polite"` para que lectores de pantalla anuncien el cambio de página sin tener que re-enfocar nada.
- Navegación por teclado en producción: añadir flechas izquierda/derecha para paginar cuando el foco está dentro del visor, y `+`/`-` para zoom — el wireframe solo responde a click sobre los botones.

**Restricciones de implementación:**
- El zoom del wireframe escala visualmente el placeholder (`transform: scale()`) dentro de un canvas con `overflow: hidden` — es una simulación. En producción, "zoom" sobre un PDF real normalmente re-renderiza la página a mayor resolución (vía `pdf.js` u otra librería), no solo transforma CSS.
- La variante superpuesta (C) necesita contraste suficiente entre el fondo semitransparente de la barra y el documento que tiene detrás — en UI real, verificar legibilidad de los iconos sobre cualquier contenido de documento, no solo sobre el placeholder gris del wireframe.

**Casos edge a contemplar:**
- Documento de una sola página: ocultar completamente el grupo de paginación (anterior/siguiente/ir a página) — no tiene sentido con 1 página. El wireframe no implementa este caso automáticamente; es responsabilidad del proyecto que lo use.
- Número de páginas de 3+ dígitos: el input "ir a página" tiene ancho fijo pensado para hasta 3 dígitos; con documentos de miles de páginas, revisar que el input no fuerce layout roto.
