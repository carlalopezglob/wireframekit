# CAT-FRM-003 | Buscador con filtros
**Visualización HTML:** `modules/CAT-FRM/CAT-FRM-003-buscador-con-filtros.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-FRM |
| **Cuándo usar** | Páginas de búsqueda de contenidos, catálogos, blogs o bases de conocimiento donde el usuario necesita buscar y filtrar resultados por categoría u otros criterios. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Cabecera (overtitle + h2 + desc.) | Opcional | Sí | Omitir en páginas de resultados sin contexto adicional |
| Barra de búsqueda (input + botón) | Obligatorio | No | `type="search"`; botón puede ser icono o texto |
| Chips de filtro por categoría | Opcional | Sí | 3–7 chips; "Todos" siempre primero |
| Botón "Filtros avanzados" | Opcional | No | Solo si hay filtros secundarios |
| Fila de filtros avanzados (selects) | Condicional | Sí | Oculta por defecto; se despliega al pulsar el toggle |
| Contador de resultados | Opcional | No | Actualizado dinámicamente |
| Área de resultados | Obligatorio | No | Placeholder en wireframe; implementar con el módulo de lista correspondiente |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| FRM-003-A | Buscador simple | Solo barra de búsqueda, sin chips ni avanzados |
| FRM-003-B | Con chips | Barra + chips de categoría |
| FRM-003-C | Completo | Barra + chips + filtros avanzados |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Etiqueta de chip | Texto plano | 2 caracteres | 20 caracteres | Truncar con ellipsis |
| Número de chips | Entero | 2 | 7 | Con >7 valorar menú desplegable |
| Opciones de select avanzado | Lista | 2 opciones | 10 opciones | — |
| Texto contador | Texto plano | — | 60 caracteres | Ocultar si no hay búsqueda activa |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Barra de búsqueda | Full-width, botón a la derecha | Full-width | Full-width con max-width de contenedor |
| Chips | `flex-wrap: wrap` | Una o dos líneas | Una línea |
| Filtros avanzados | 1 col | 2 col | 2 col |

## Historial
- v1.0 · Creación

---

## Notas para UI
> Esta sección es para el equipo de UI.

- El chip "Todos" debe deseleccionar los demás chips al activarse — lógica de radio dentro del grupo.
- El input de búsqueda debe disparar la búsqueda tanto al pulsar Enter como al hacer clic en "Buscar".
- El área de resultados es un placeholder — se sustituye por el módulo de listado (LST-*) en el proyecto real.
- El contador "X resultados" debe actualizarse con `aria-live="polite"` para lectores de pantalla.
- Considerar añadir un estado vacío ("Sin resultados para…") como variante adicional en el módulo de listado.
