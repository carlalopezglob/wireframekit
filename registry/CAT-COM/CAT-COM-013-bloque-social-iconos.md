# CAT-COM-013 | Bloque social (iconos)

**Visualización HTML:** `modules/CAT-COM/CAT-COM-013-bloque-social-iconos.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Una pequeña fila de iconos sociales, ya sea para enlazar a las cuentas propias de la marca (seguir) o para que la persona que visita comparta la página actual (compartir). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Fila de iconos (`.com013__list`) | Obligatorio | No | Contenedor flex, un ítem por red/canal |
| Ítem icono + link (`.com013__item`) | Obligatorio (mín. 2) | Sí (destino, orden, qué redes) | Círculo con un icono de un solo color; todo el círculo es el área clicable |

## Variantes

Mismo esquema de campos (icono + link) para dos intenciones distintas — no son dos módulos separados, es el mismo patrón con dos usos:

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-013-A | Seguir | Cada icono enlaza a una cuenta de red social fija de la marca (Facebook, Instagram, LinkedIn, etc.). El destino no cambia entre páginas. |
| CAT-COM-013-B | Compartir | Cada icono comparte la URL de la página **actual** — el destino es dinámico, no una cuenta fija. Visualmente es el mismo patrón icono + link. |

Tamaños: `.com013__item--sm` (32px) · normal (40px, default) · `.com013__item--lg` (48px).

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Ítems en la fila | Icono + link | 2 | 6 | Con más de 6 redes, priorizar las más relevantes — no comprimir la fila |
| Icono | Glifo de un solo color | — | — | Obligatorio; nunca texto plano como sustituto |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Fila | `flex-wrap: wrap`, mismo tamaño de icono que desktop (es un control táctil, no se reduce) | Igual | Igual |

## Historial

| Versión | Fecha | Descripción |
| --- | --- | --- |
| 1.0 | 2026-11 | Versión inicial |

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado — misma anatomía, comportamiento de implementación distinto:**
- **Seguir:** cada ítem es un `<a href="...">` con destino fijo a la cuenta de la red social correspondiente, `target="_blank" rel="noopener"`. El href no cambia según la página.
- **Compartir:** cada ítem dispara una acción de share-intent, no una navegación directa a una URL fija:
  - Vía `window.open()` a la URL de compartir de cada red (p. ej. `https://twitter.com/intent/tweet?url=...`), con la URL de la página actual (`location.href`) como parámetro.
  - O, si está disponible, la Web Share API nativa (`navigator.share({ url: location.href, title: document.title })`) en un único botón "Compartir" que delega en el selector nativo del sistema en vez de mostrar una fila de redes.
  - Esta distinción (href fijo vs. acción de share-intent) es exactamente el tipo de comportamiento que no se ve en el wireframe pero sí cambia la implementación — mismo módulo de diseño, variante de comportamiento distinta.

**Restricciones de implementación:**
- Cada icono lleva `aria-label` con el nombre de la red o la acción (p. ej. "Síguenos en Instagram" / "Compartir en Twitter"), nunca solo el icono sin alternativa textual.
- En "compartir", evitar enlaces reales a redes concretas si el proyecto prefiere una única Web Share API — el wireframe muestra la variante de fila de redes, documentar en el proyecto real cuál de las dos implementaciones se usa.

**Casos edge a contemplar:**
- Página sin URL canónica clara (p. ej. detrás de parámetros de sesión): usar la URL canónica de la página para compartir, no la URL con parámetros de tracking.
