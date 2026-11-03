# CAT-COM-001 | Botón

**Visualización HTML:** `modules/CAT-COM/CAT-COM-001-boton.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Componente atómico de acción. Base para cualquier CTA, acción de formulario o botón de interfaz en el resto de módulos del kit. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Texto del botón | Obligatorio | Sí | Máx. 20-40 car. según talla |
| Icono (opcional) | Opcional | No | Izquierda, derecha, o icon-only |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-001-A | Primario (`.btn`) | Fondo de acento, texto blanco. Una sola acción primaria por pantalla. |
| CAT-COM-001-B | Outline (`.btn--outline`) | Borde y texto de acento. Acción secundaria junto a un primario. |
| CAT-COM-001-C | Ghost (`.btn--ghost`) | Sin borde ni fondo visible. Acción terciaria. |
| CAT-COM-001-D | Enlace (`.btn--link`) | Solo texto subrayado, para acciones en flujo de texto. |
| CAT-COM-001-E | Destructivo (`.btn--danger`) | Rojo. Solo para acciones irreversibles, siempre con confirmación previa. |

Tallas: `.btn--sm` (40px) · `.btn` (48px, default) · `.btn--lg` (56px).
Estados: default, hover (opacity 0.85), disabled (`aria-disabled`, opacity 0.4), loading (`.btn--loading`).

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Texto | Texto plano | — | sm: 20 / md: 30 / lg: 40 car. | Obligatorio |

## Comportamiento responsive

No tiene breakpoints propios — su tamaño es fijo por talla; el contexto (ancho completo, en fila, etc.) lo define el módulo que lo usa.

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Estado `loading`: oculta el texto y muestra un spinner, manteniendo el mismo ancho para evitar layout shift. Añadir `aria-busy="true"`.

**Restricciones de implementación:**
- Nunca dos primarios juntos. Nunca un outline sin un primario cercano. Nunca un `--danger` sin confirmación previa.
- Botones de solo icono siempre llevan `aria-label`.

**Casos edge a contemplar:**
- Texto de botón que se trunca en talla `sm`: revisar el límite de 20 caracteres antes de enviarlo a producción.
