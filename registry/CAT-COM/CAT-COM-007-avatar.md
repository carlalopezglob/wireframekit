# CAT-COM-007 | Avatar

**Visualización HTML:** `modules/CAT-COM/CAT-COM-007-avatar.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Representar a una persona (foto, iniciales o icono anónimo) en listas, cabeceras de usuario, comentarios o equipos. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Imagen / iniciales / icono | Obligatorio (uno de los tres) | Sí (imagen) | Fallback en cascada: imagen → iniciales → icono anónimo |
| Punto de estado (presencia) | Opcional | No | Online / offline / ocupado |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-007-A | Imagen | Foto real (placeholder gris en wireframe). |
| CAT-COM-007-B | Iniciales | 2 letras, usado cuando no hay foto. |
| CAT-COM-007-C | Icono anónimo | Para usuarios sin nombre ni foto. |
| CAT-COM-007-D | Con estado de presencia | Punto de color superpuesto (online/offline/ocupado). |
| CAT-COM-007-E | Grupo apilado | Varios avatares superpuestos con `margin-left` negativo + contador "+N". |

Tamaños: `--xs` (24px) · `--sm` (32px) · `--md` (40px, default) · `--lg` (56px) · `--xl` (72px).

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Iniciales | Texto plano | 1 car. | 2 car. | — |
| Grupo apilado | Avatares visibles | — | 3-4 + contador | El resto se resume en "+N" |

## Comportamiento responsive

Tamaño fijo por variante — no cambia entre breakpoints; el contexto decide qué tamaño usar en cada caso.

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Ninguno — es un elemento informativo. Si es clicable (p. ej. abre un menú de usuario), la interacción la define el módulo que lo envuelve (ver CAT-MDL-004).

**Restricciones de implementación:**
- El fallback de imagen a iniciales debe resolverse en el backend o con `onerror` de la imagen — el wireframe no implementa la lógica de fallback real.

**Casos edge a contemplar:**
- Nombres de una sola palabra: las iniciales deben usar las dos primeras letras, no una letra + espacio en blanco.
