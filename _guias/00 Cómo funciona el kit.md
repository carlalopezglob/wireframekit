# 00 — Cómo funciona el Wireframe Kit

> Esta guía es para personas. Claude no la necesita — la tiene interiorizada en `CLAUDE.md`.

---

## Qué es esto y por qué existe

Hasta ahora, cada proyecto de cliente construía sus módulos HTML desde cero, sobre la
marcha, según iban apareciendo las páginas. Eso tenía dos problemas: las primeras fases
de cada proyecto eran lentas (todo se construye por primera vez) y si varias personas
construían módulos en paralelo, no seguían una estética única.

El Wireframe Kit es la solución: una librería de módulos genéricos, ya construidos,
documentados y revisados, que se copia al arrancar cada proyecto de cliente nuevo. El
proyecto no empieza de cero — empieza con una base de módulos disponibles, y solo
construye desde cero lo que sea realmente específico de ese cliente.

Este repositorio **no es un proyecto de cliente**. No tiene fases de Research, Diseño y
Construcción como los proyectos reales — es un proyecto de infraestructura, cuyo único
output es el catálogo de módulos en sí.

---

## Qué entra en el kit y qué no

La pregunta de referencia: **¿podría este módulo aparecer en 5 proyectos de cliente
distintos, con contenido totalmente distinto, y seguir teniendo sentido?**

Si sí — un grid de cards, un acordeón, un hero con imagen — entra en el kit.

Si no — un catálogo de actividades extraescolares con la lógica de filtros específica
de SEK, un bloque pensado para un dato que solo tiene un cliente concreto — se queda
como módulo de ese proyecto, no del kit.

Esto no siempre es evidente al principio. Un módulo puede parecer específico de un
cliente y, al revisarlo, verse que en realidad es un patrón estructural común (por
ejemplo, "catálogo filtrable" es agnóstico aunque el primer caso de uso fuera las
actividades de SEK — lo que no es agnóstico son las categorías concretas de ese
catálogo). El criterio es: separar el patrón (entra en el kit) del contenido (se queda
en el proyecto).

---

## Cómo se construye un módulo del kit

1. Comprobar que no existe ya algo parecido en el índice de su categoría
2. Escribir la spec completa — misma plantilla que en los proyectos de cliente:
   Anatomía, Variantes, Comportamiento responsive, Notas para UI
3. Construir el HTML standalone
4. **Revisarlo en el navegador, en los 3 breakpoints, antes de darlo por bueno.** Un
   proyecto de cliente puede permitirse iterar un módulo sobre la marcha; el kit no —
   si algo del kit está mal, ese fallo se copia a todos los proyectos que lo usen
   después
5. Añadirlo al índice de su categoría y al catálogo visual

Ver el detalle paso a paso en `CLAUDE.md`.

---

## Cómo se visualiza el catálogo

`catalogo-visual.html`, en la raíz del kit. Se abre con `npx serve .` desde la raíz y
se navega en el navegador — no es un documento que se lea, es una página donde cada
módulo se ve en su tamaño real, agrupado por categoría, con su código al lado. La idea
es poder recorrerlo y decir "esto encaja" sin tener que abrir cada spec una por una.

Este archivo nunca se comparte con Claude en una sesión de trabajo — no hace falta, y
cargarlo gastaría contexto sin necesidad. Es una herramienta solo para revisión humana.

---

## Cómo lo usa un proyecto de cliente nuevo

Al arrancar un proyecto:

1. Copiar el contenido de `wireframe-kit/registry/` dentro de `docs/_registry/` del proyecto nuevo
2. Copiar el contenido de `wireframe-kit/modules/` dentro de `output/modules/` del proyecto nuevo
3. `wireframe-kit/shared/` ya debería coincidir con lo que trae el boilerplate del proyecto — si hay diferencias, es señal de que uno de los dos se ha desincronizado y hay que revisarlo

A partir de ahí, el proyecto tiene el catálogo del kit como punto de partida y añade
encima sus propios módulos específicos de cliente, siguiendo el mismo sistema pero
dentro de su propio `docs/_registry/`.

---

## Modificar un módulo que ya está en uso

Si un módulo del kit ya se copió a proyectos de cliente activos, cambiar su anatomía o
su comportamiento no es gratis — esos proyectos siguen asumiendo la versión anterior.
Antes de modificar un módulo existente:

- Si el cambio es pequeño y no rompe nada de lo que ya existe (añadir una nota, corregir
  un typo en la spec): se hace directamente, con entrada en el Historial
- Si el cambio afecta a la anatomía, las variantes o el responsive: se valora si debe
  ser una nueva versión del mismo módulo o una variante nueva que convive con la
  anterior, para no romper páginas ya construidas

Claude avisa de esto automáticamente antes de aplicar un cambio de este tipo — ver la
sección de Guardrails en `CLAUDE.md`.

---

## Categorías — estado actual

| Código | Tipo | Estado |
| --- | --- | --- |
| CAT-CAB | Cabecera | ✅ 3 módulos (Hero con imagen de fondo, Hero split, Header ligero) |
| CAT-CON | Contenido | Pendiente |
| CAT-CRD | Cards | Pendiente |
| CAT-NAV | Navegación | Pendiente |
| CAT-FRM | Formularios | Pendiente |
| CAT-MDL | Modal / overlay | Pendiente |

Actualizar esta tabla cada vez que se cierra una categoría.
