# CAT-CON-017 | Lista de datos clave

**Visualización HTML:** `modules/CAT-CON/CAT-CON-017-lista-de-datos-clave.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Presentar un conjunto breve de pares etiqueta→valor a modo de ficha técnica o resumen de datos (especificaciones, detalle de una ficha/propiedad, condiciones, datos de contacto resumidos). **No es lo mismo que CAT-CON-005 "Stats"**: ahí cada cifra es el protagonista visual (tipografía grande, pensada para 3-4 números de impacto). Aquí el valor es texto corto libre, sin tratamiento tipográfico destacado, y la lista puede tener más ítems — es una presentación ligera tipo hoja de especificaciones, no un bloque de métricas. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Título del contenedor | Opcional | Sí | H2 o H3 sobre la lista. Si se omite, la lista sube sin hueco vacío |
| Ítem (par etiqueta/valor) | Obligatorio (mín. 3) | Sí | Marcado como `<dt>`/`<dd>` dentro de un `<dl>` — semántica de lista de definiciones |
| Etiqueta | Obligatorio por ítem | Sí | Texto corto, color muted |
| Valor | Obligatorio por ítem | Sí | Texto corto **libre** — nunca una cifra con tipografía grande (eso es CAT-CON-005) |
| Separador entre ítems | Automático | No | `border-bottom` entre ítems, sin borde en el último |

---

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| CAT-CON-017-A | Lista de 1 columna | Por defecto. Cada ítem ocupa el ancho completo |
| CAT-CON-017-B | Lista de 2 columnas | A partir de tablet, los ítems se reparten en 2 columnas — útil con listas más largas (8+ ítems) |

---

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Título | Texto plano | — | 60 caracteres | La lista sube; sin hueco vacío |
| Ítems | Pares etiqueta/valor | 3 | 12 (wireframe); sin límite estructural en producción | Por debajo de 3 pares, valorar si el contenido no cabe mejor como texto corrido |
| Etiqueta | Texto plano | 3 car. | 30 caracteres | Requerida por ítem |
| Valor | Texto plano | 1 car. | 60 caracteres | Requerido por ítem — si no hay dato, usar un valor explícito como "No disponible", nunca dejar vacío |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Ítem (1 columna) | Etiqueta arriba, valor debajo (stack) | Etiqueta y valor en la misma fila (`space-between`) | Igual que tablet |
| Lista (variante 2 columnas) | 1 columna (igual que la variante base) | 2 columnas | 2 columnas |
| Separadores | Visibles en todos los breakpoints | Igual | Igual |

---

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Estructura semántica:**
- `<dl>` con un `<div>` por ítem envolviendo su `<dt>` (etiqueta) y `<dd>` (valor) — es la agrupación que permite el modelo de contenido de `<dl>` en HTML5 y ayuda a lectores de pantalla a anunciar el par como unidad.
- No sustituir por una tabla (`<table>`) salvo que el contenido real tenga más de dos columnas de datos relacionados — para un par simple etiqueta/valor, `<dl>` es más ligero y semánticamente correcto.

**Diferencia con otros módulos (para no mezclar):**
- CAT-CON-005 Stats: cifra grande + etiqueta, pensado para 3-4 métricas de impacto.
- CAT-CON-009 Bloque de características: grid con marcador (icono/imagen) y contenido flexible por columna — pensado para destacar un conjunto de características, no para una ficha de datos compacta.
- Este módulo: lista ligera, sin iconos, sin cards, pensada para que el usuario escanee rápido una ficha de datos.

**Comportamiento interactivo:** ninguno — bloque estático.

**Casos edge a contemplar:**
- Valores de longitud muy distinta entre ítems (p. ej. "Sí" junto a "Disponible en todas las sedes salvo Madrid centro"): en la variante de 2 columnas, cada ítem es independiente — un valor largo en un ítem no desalinea el resto de la lista.
- Etiquetas muy cortas (1-2 palabras) junto a valores largos: en mobile, verificar que el salto de línea del valor no queda pegado a la etiqueta — mantener el `gap` vertical del ítem.
