# Wireframe Kit — Librería de módulos reutilizables

Este proyecto no diseña páginas de ningún cliente. Construye y mantiene un catálogo de
módulos HTML de wireframe genéricos y agnósticos, pensados para copiarse al arrancar
cada proyecto de cliente nuevo (ver `_guias/00 Cómo funciona el kit.md`).

## Estructura

- `registry/` — specs de módulos. Por categoría: un índice `.md` + una carpeta con la spec de cada módulo.
- `modules/` — HTML standalone de cada módulo, organizado por categoría (`modules/[CAT]/`).
- `shared/` — `styles.css` debe quedarse idéntico al de los proyectos de cliente: los tokens de
  tamaño son la base que comparten. `wireframe.js` **no** es idéntico: además de las funciones base
  (acordeón, tabs, carrusel, texto expandible, modal de vídeo — esas sí iguales), aquí inyecta cromo
  exclusivo del catálogo (badge con el ID del módulo, botón MAX, wiring de `.kit-states`) que nunca
  debe viajar a un proyecto de cliente. `kit-notes.js` es exclusivo del kit igual que ese cromo.
  Por eso un proyecto que importa un módulo (p. ej. con `bin/importar-kit.mjs` de `ux-starter`) no
  copia este `wireframe.js` — usa su propia copia limpia de las funciones base.
- `catalogo-visual.html` — página de referencia para revisión humana. **Nunca se carga en sesión** — no forma parte del contexto de ninguna tarea, es solo para abrir en el navegador.
- `pages/` — páginas de ejemplo que combinan varios módulos del kit (contacto, faqs, blog-artículo, 404, login). Son referencia de composición para quien arranca un proyecto nuevo, no un entregable de cliente — el kit en sí sigue sin diseñar páginas de ningún cliente.

## Sistema de tamaños — tokens obligatorios

Todo módulo nuevo usa las variables de `shared/styles.css`, nunca valores sueltos:

- **Radios:** `--radius-sm` (6px, inputs/tags/botones pequeños) · `--radius-md` (12px, cards/paneles/botones estándar) · `--radius-lg` (20px, imágenes grandes/heroes)
- **Espaciado:** `--space-1` a `--space-24`, escala de 8px — nunca `margin: 1.3rem` o similar suelto
- **Controles interactivos:** botones, inputs y selects usan `--control-height-md` (48px) o `--control-height-sm` (40px) como altura mínima — nunca padding relativo al texto sin altura mínima. Es el tamaño táctil estándar; si un wireframe no lo respeta, promete una interacción que en UI real no cabrá bien en mobile.

Si un módulo necesita un valor que no está en la escala, es señal de que hay que ampliar la escala en `shared/styles.css` (avisar, no crear un valor suelto de un solo uso).

## Regla de fondo: todo lo que entra aquí debe servir para cualquier proyecto

Antes de escribir la spec de un módulo, comprobar que pasa el test de agnosticismo:
¿podría aparecer en 5 proyectos de cliente distintos, con contenido totalmente distinto,
y seguir teniendo sentido? Si la respuesta depende del cliente ("esto es para el
catálogo de actividades de SEK"), no entra en el kit — es un módulo de proyecto, no de
librería.

**Nomenclatura — siempre agnóstica:**
- ✅ `Bloque texto + imagen` · `Grid de cards con imagen` · `Acordeón expandible`
- ❌ `Bloque familias` · `Cards de colegios` · `FAQ de admisiones`

**Nombre de fichero — siempre kebab-case, sin espacios ni tildes:** el nombre de arriba es el nombre humano (para la tabla del índice y el título del HTML); el fichero en sí (`.html` y `.md`) usa `[CAT-NNN]-[nombre-en-kebab-case].md`, por ejemplo `CAT-CON-001-bloque-texto-imagen.html`. Minúsculas, sin tildes, espacios sustituidos por guiones. Los espacios y acentos en nombres de fichero rompen `data-spec-src`, las URLs del catálogo y cualquier script — es la causa más común de enlaces rotos en este kit.

**Numeración:** secuencial dentro de la categoría (`001`, `002`...). No reutilizar números. Variantes con letra: `-A`, `-B`.

## Cómo se añade un módulo nuevo, paso a paso

1. Comprobar que no existe ya algo similar (leer el índice de la categoría en `registry/[CAT].md`)
2. Decidir categoría (existente o nueva, 3 letras mayúsculas)
3. Asignar el siguiente número disponible
4. Escribir la spec completa (`registry/[CAT]/[CAT-NNN]-[nombre-kebab-case].md`) — Anatomía, Variantes, Comportamiento responsive, Notas para UI
5. Construir el HTML standalone (`modules/[CAT]/[CAT-NNN]-[nombre-kebab-case].html`), importando `shared/styles.css` y `shared/wireframe.js`, usando los tokens de tamaño (ver arriba)
6. Añadir el panel `<details class="kit-notes" data-spec-src="../../registry/[CAT]/[CAT-NNN]-[nombre-kebab-case].md">` al final del HTML (antes de los scripts) e importar `shared/kit-notes.js` — carga la spec en directo, no duplicar su contenido a mano
7. **Verificar en navegador en los 3 breakpoints antes de darlo por terminado** (`npx serve .` desde la raíz del kit), incluyendo que el panel de notas carga bien al abrirlo — este proyecto no tiene fase de "revisión de cliente" que detecte fallos después, el kit tiene que nacer bien
8. Añadir la fila al índice de categoría (`registry/[CAT].md`) con su "cuándo usar"
9. Añadir el módulo a `catalogo-visual.html` (bloque + iframe, siguiendo el patrón de los módulos existentes)
10. Si es categoría nueva: añadir fila en `_index.md` (cuando exista)
11. Correr `node tools/verify-kit.mjs` — sin errores antes de dar el módulo por terminado

No se marca un módulo como listo si falta cualquiera de estos pasos — un módulo con spec pero sin HTML, con HTML pero sin panel de notas, o sin entrada en el catálogo visual, no está terminado.

## Guardrails — módulos ya publicados

Un módulo de este kit puede estar ya copiado dentro de proyectos de cliente activos.
Cambiar su anatomía, sus variantes o su comportamiento responsive después de publicado
no es un ajuste menor — puede romper páginas ya construidas en esos proyectos que
asumen la versión anterior.

**Antes de modificar un módulo existente** (no de crear uno nuevo): avisar de que es un
cambio potencialmente rompiente para proyectos que ya lo usan, y preguntar si se quiere
como nueva versión del mismo módulo (con entrada en `## Historial`) o como variante
nueva que convive con la anterior. No sobrescribir sin marcarlo.

**Estructural, no de contenido de módulo — innegociable sin autorización explícita:**
- La estructura de carpetas (`registry/`, `modules/`, `shared/`, `catalogo-visual.html`)
- El sistema de índice + carpeta por categoría
- La nomenclatura agnóstica y la numeración secuencial

Si se propone cambiar algo de esta lista, no se aplica directamente aunque se pida una
vez — advertir del impacto (afecta a todos los proyectos que consuman el kit) hasta un
máximo de tres veces, y proceder solo con autorización explícita y específica.

## Wireframes — reglas técnicas

Mismas que en los proyectos de cliente, porque el kit tiene que producir algo que
encaje sin fricción al copiarse:

- Importar siempre `../../shared/styles.css` y `../../shared/wireframe.js` (defer) desde `modules/[CAT]/`
- Mobile-first · 3 breakpoints: <768 · 768-1199 · ≥1200. Escala de grises, placeholders grises (nunca emojis)
- **Grid/flex con texto → `min-width: 0` en los hijos directos.** Por defecto no se encogen por
  debajo del ancho de su contenido y desbordan en 320-375px aunque la pista tenga el ancho
  correcto ("grid blowout"). Comprobarlo siempre a 320px, no solo a 375px.
- **`aspect-ratio` siempre junto a `width: 100%`** al combinarlo con `.img-placeholder` (que no fija
  ancho propio) — si no, el ancho puede derivarse del alto (p. ej. vía `min-height`) y salir mayor
  que el contenedor.
- Sin anotaciones visibles — las notas van en `window.UX_NOTES`
- No duplicar funciones JS de `wireframe.js`

## Notas — nunca en el documento

Las notas van siempre y solo en `window.UX_NOTES` del HTML. No añadir secciones de notas
ni comentarios adicionales en specs ni respuestas de chat si no se piden.
