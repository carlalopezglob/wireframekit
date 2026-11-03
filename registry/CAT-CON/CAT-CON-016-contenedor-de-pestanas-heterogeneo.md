# CAT-CON-016 | Contenedor de pestañas heterogéneo

**Visualización HTML:** `modules/CAT-CON/CAT-CON-016-contenedor-de-pestanas-heterogeneo.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Organizar bajo pestañas contenido de naturaleza distinta en cada una — un bloque de texto, un grid de cards, un mapa, una galería, incluso otro contenedor de pestañas — sin forzarlo a una forma fija compartida. **No es lo mismo que CAT-CON-007 "Tabs de contenido"**: ahí cada panel repite el mismo esquema (título + párrafo + imagen opcional, máx. 4-5 tabs). Aquí cada panel es una **zona de contenido libre** que puede alojar cualquier combinación de otros módulos del catálogo. Usar CAT-CON-007 cuando todas las pestañas comparten la misma forma de contenido; usar este módulo cuando cada pestaña necesita poder ser estructuralmente distinta. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Encabezado de sección | Opcional | Sí | Overtitle + H2, igual que el resto del catálogo |
| Barra de tabs | Obligatorio | Sí (etiquetas) | Clase `.tabs` + `.tab-btn`, reutiliza el switching de `wireframe.js`. Scroll horizontal en mobile |
| Etiqueta de tab | Obligatorio por tab | Sí | Texto corto, sin esquema de contenido asociado |
| Panel de contenido | Obligatorio por tab | Sí (estructuralmente libre) | Zona de contenido libre — en el wireframe, un marcador de posición neutro; en producción, cualquier módulo o combinación de módulos del catálogo |
| Tab activa por defecto | Opcional | Sí | Si no se especifica, la primera tab queda activa |
| Pestañas anidadas | Opcional | Sí | El panel de una tab puede contener otra instancia completa de este mismo componente (mínimo 1 nivel soportado) |

---

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| CAT-CON-016-A | 2–3 tabs | Configuración por defecto |
| CAT-CON-016-B | 4–5 tabs | Más pestañas — la barra se vuelve scrollable en mobile si no caben |

---

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Tabs (nivel superior) | Botones de navegación | 2 | 5 | Por debajo de 2 no tiene sentido el componente |
| Etiqueta de tab | Texto plano | 3 car. | 30 caracteres | Requerido por tab |
| Panel de contenido | Libre — cualquier módulo o combinación | 1 módulo | Sin límite estructural | El panel no puede quedar vacío: como mínimo, un placeholder o mensaje de contenido pendiente |
| Nivel de anidación | Instancias de este mismo componente | — | 1 nivel recomendado | Más de 1 nivel de pestañas-dentro-de-pestañas degrada mucho la usabilidad — evitarlo salvo caso excepcional justificado |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Barra de tabs (nivel superior) | Scroll horizontal, sin scrollbar visible | Visible completa | Visible completa |
| Barra de tabs anidada | Mismo patrón, dentro del ancho del panel padre (más estrecho) | Igual | Igual |
| Panel de contenido | Ancho completo, el contenido interno sigue sus propias reglas responsive | Igual | Igual |

---

## Historial

- v1.0 · Creación como módulo nuevo — esquema de campos distinto a CAT-CON-007 (panel de forma fija vs. panel de contenido libre), por lo que corresponde número nuevo y no una variante con letra, según la propia regla de numeración del kit.
- Decisión de implementación — **no** reutiliza la función `tabs` de `shared/wireframe.js`: al revisar su código antes de usarla, el switching delega con `scope.querySelectorAll('.tab-btn')` / `scope.querySelectorAll('.tab-panel')` sobre el `[data-tabs-scope]` más cercano, pero esa búsqueda recoge **todos** los descendientes que coincidan, incluidos los de una instancia anidada más profunda — no se detiene en el siguiente `[data-tabs-scope]`. Con anidación real esto rompe el caso de uso: al activar una pestaña de nivel superior, sus paneles anidados quedan todos ocultos (ninguno coincide con el `data-tab` del nivel superior) y la pestaña anidada activa por defecto pierde su `is-active`. Por eso este módulo usa clases propias (`.con016-tab-btn` / `.con016-tab-panel`, atributo `data-con016-tab`) con una implementación propia que sí filtra correctamente: solo actúa sobre los elementos cuyo `[data-tabs-scope]` más cercano es exactamente el mismo que el del botón pulsado, excluyendo así los de cualquier instancia anidada. No se modificó `wireframe.js` — si en el futuro se detecta que la función `tabs` compartida necesita soportar anidación real, revisarla ahí (afectaría a CAT-CON-007 y a cualquier otro módulo que la use, así que es un cambio que requiere aviso previo, no uno de este módulo).

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El switching de pestañas usa clases e implementación propias de este módulo (`.con016-tab-btn` / `.con016-tab-panel`, no `.tab-btn` / `.tab-panel` de `wireframe.js` — ver Historial). Un click activa el `data-con016-tab` del botón dentro del `[data-tabs-scope]` más cercano, filtrando explícitamente para no afectar a instancias anidadas más profundas.
- Cada instancia (incluidas las anidadas) debe envolver su barra de tabs + sus paneles en un elemento con el atributo `data-tabs-scope` — es lo que delimita cada nivel de anidación.

**Accesibilidad:**
- `role="tablist"` en `.tabs`, `role="tab"` + `aria-selected` + `aria-controls` en cada `.tab-btn`, `role="tabpanel"` + `aria-labelledby` en cada panel — igual que CAT-CON-007.
- En una instancia anidada, verificar que los `id` usados por `aria-controls`/`aria-labelledby` son únicos en toda la página (prefijar con el id de la instancia padre si hace falta).
- Navegación por teclado en producción: flechas izquierda/derecha dentro de cada nivel de tabs (patrón WAI-ARIA Tabs), sin que se "escape" al nivel padre.

**Restricciones de implementación:**
- El marcador de "zona de contenido libre" del wireframe es intencionalmente neutro (borde discontinuo + etiqueta "Contenido libre") — no sugiere ningún módulo concreto. Al construir una página real, sustituir ese marcador por el HTML real del módulo o módulos elegidos para esa pestaña.
- No anidar más de 1 nivel en la práctica: aunque el componente lo soporta técnicamente, cada nivel adicional reduce mucho la usabilidad y el espacio disponible, especialmente en mobile.

**Casos edge a contemplar:**
- Si una pestaña anidada necesita su propio encabezado (overtitle/H2), verificar que no compite visualmente con el de la pestaña padre — normalmente la pestaña anidada no necesita encabezado propio, el contexto ya lo da la pestaña padre.
- Con 5 tabs en mobile, confirmar que el scroll horizontal de la barra no oculta visualmente que hay más pestañas fuera de vista — considerar un indicio visual (gradiente de fade en el borde) si el proyecto lo requiere.
