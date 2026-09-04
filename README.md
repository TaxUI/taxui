# 🚀 Framework HTML - Declarative HTML & CSS Framework

Un framework moderno, declarativo y ultra rápido enfocado en escribir HTML semántico y atributos limpios para eliminar la fatiga de diseño y no perder tiempo configurando CSS.

---

## 📦 Estructura del Proyecto

```text
frameworkhtml/
├── src/
│   ├── base/
│   │   ├── variables.css   # Tokens de diseño (gaps, inputs, radios, colores)
│   │   └── reset.css       # Reset moderno y normalización
│   ├── layout/
│   │   ├── grid.css        # Sistema de Grid declarativo
│   │   └── flex.css        # Flexbox, Stacks, Split y Clusters
│   ├── components/
│   │   ├── buttons.css     # Botones multivariante, glow, loading y grupos
│   │   ├── cards.css       # Tarjetas, Glassmorphism, elevación y slots
│   │   ├── badges.css      # Badges semánticos, chips removibles y notificaciones
│   │   ├── alerts.css      # Alertas, callouts con borde lateral y banners
│   │   ├── avatars.css     # Avatares, estados de presencia y grupos apilados
│   │   ├── tables.css      # Tablas responsivas, scroll horizontal y stacked cards
│   │   ├── modals.css      # Modales nativos HTML5 <dialog>, drawers y bottom sheets
│   │   ├── accordions.css  # Acordeones nativos <details>, chevrons y single-open
│   │   ├── tooltips.css    # Tooltips puros en CSS con flechas y 4 posiciones
│   │   └── forms.css       # Formularios, switches, checkboxes, selects e input groups
│   ├── utilities/
│   │   └── utilities.css   # Truncado de texto, line-clamp, aspect-ratios y media-frame
│   └── main.css            # Archivo maestro de importación
└── examples/
    ├── flexbox.html        # Showcase de Flexbox & Stacks
    ├── grid.html           # Showcase de Grid Primitives
    ├── forms.html          # Showcase de Formularios e Inputs
    ├── buttons.html        # Showcase de Botones Multivariante
    ├── cards.html          # Showcase de Tarjetas y Superficies
    ├── badges.html         # Showcase de Badges, Chips y Notificaciones
    ├── alerts.html         # Showcase de Alertas y Banners
    ├── avatars.html        # Showcase de Avatares y Grupos de Usuarios
    ├── tables.html         # Showcase de Tablas de Datos Responsivas
    ├── modals.html         # Showcase de Modales y Drawers Nativos
    ├── accordions.html     # Showcase de Acordeones y Colapsables
    ├── tooltips.html       # Showcase de Tooltips Puros en CSS
    └── utilities.html      # Showcase de Utilidades de Truncado & Aspect Ratio
```

---

## 🛠️ 1. Utilidades de Truncado & Aspect Ratio

### Truncado de 1 Línea y Clamping Multilínea
```html
<!-- Truncado de 1 línea con elipsis -->
<p truncate>Texto excesivamente largo...</p>

<!-- Limitador a 2, 3 o 4 líneas (line-clamp) -->
<p clamp="2">Resumen corto de dos líneas...</p>
<p clamp="3">Resumen de artículo de blog limitado a 3 líneas...</p>
```

### Balance Tipográfico Moderno
```html
<!-- Evita palabras huérfanas en encabezados -->
<h1 text-balance>Título equilibrado automáticamente</h1>
```

### Relaciones de Aspecto & Media Frames
```html
<!-- Contenedor con ratio geométrico fijo -->
<div media-frame ratio="16:9">
  <img src="video-cover.jpg" alt="Video">
</div>

<div media-frame ratio="1:1">...</div>    <!-- Cuadrado -->
<div media-frame ratio="4:5">...</div>    <!-- Vertical / Retrato -->
<div media-frame ratio="21:9">...</div>   <!-- Cinema Ultra-Wide -->
```

---

## 💬 2. Tooltips Puros en CSS (Zero JS)

* **Posicionamiento:** `<button tooltip="Texto" tooltip-pos="top|bottom|left|right">`
* **Variantes de Color:** `tooltip-variant="primary|success|danger|glass"`
* **Multilínea:** `<button tooltip="..." tooltip-wrap>`

---

## 📂 3. Acordeones & Colapsables (`<details>`)

* **Acordeón Conectado:** `<div accordion><details><summary>Título</summary><div accordion-body>...</div></details></div>`
* **Cierre Automático Excluyente:** `<details name="faq-group">`
* **Modos de Diseño:** `accordion="separated"` (tarjetas) y `accordion="flush"` (minimalista).

---

## 🪟 4. Modales Nativos & Drawers (`<dialog>`)

* **Base:** `<dialog size="sm|md|lg|fullscreen">` con apertura nativa `.showModal()` y cierre `Esc`.
* **Slots:** `<header modal-header divided>`, `<div modal-body>`, `<footer modal-footer divided>`.
* **Drawers Laterales:** `<dialog drawer="right">`, `<dialog drawer="left">` y `<dialog drawer="bottom">`.
* **Estilos:** `modal="glass"` y `glow`.

---

## 📊 5. Tablas de Datos Responsivas

* **Contenedor:** `<div table-container><table striped>...</table></div>`
* **Densidades:** `table[density="compact|relaxed"]`
* **Alineación Numérica:** `th[numeric]`, `td[numeric]` (alineación decimal con `tabular-nums`)
* **Vista Móvil en Tarjetas:** `<table responsive="stack">` con `data-label="..."`

---

## 👤 6. Avatares & Grupos de Usuarios

* **Fotos e Iniciales:** `<img avatar src="user.jpg">` o `<div avatar variant="gradient">MD</div>`
* **Escala de Tamaños:** `size="xs|sm|md|lg|xl|2xl"`
* **Formas:** `shape="circle|rounded|square"`
* **Estados de Presencia:** `status="online|busy|away|offline" pulse`
* **Grupos Apilados:** `<div avatar-group><img avatar ...><div avatar variant="secondary">+5</div></div>`

---

## 🔔 7. Alertas & Mensajes de Feedback

* **Variantes:** `alert="info|success|warning|danger|neutral"`
* **Borde Lateral:** `<div alert="warning" border="left">...</div>`
* **Slots:** `alert-icon`, `alert-title`, `alert-description`, `alert-actions`, `<button alert-close>`
* **Banners & Toasts:** `<aside banner alert="info">` y `<div alert="info" pill glow>`

---

## 🏷️ 8. Badges, Chips & Notificaciones Flotantes

* **Variantes:** `badge="primary|success|warning|danger|purple"`
* **Estilos:** `style-type="solid|outline"` y modificador `pill`
* **Chips Removibles:** `<span chip="primary" pill><span>JS</span><button dismiss>×</button></span>`
* **Puntos de Estado & Contadores:** `badge-dot="success" pulse` y `<span badge-float>3</span>`

---

## 🃏 9. Tarjetas y Superficies

* **Modos:** `card="flat|elevated|glass|glow"`
* **Glassmorphism:** `<article card="glass">...</article>`
* **Interacción al Hover:** `<article card="glass" interactive>...</article>`
* **Slots:** `<header card-header divided>`, `<div card-body>`, `<footer card-footer divided>`

---

## 🔘 10. Botones Multivariante

* **Variantes:** `variant="primary|secondary|outline|ghost|success|danger|warning|link"`
* **Efectos:** `glow`, `pill`, `block`, `icon-only`
* **Estado de Carga:** `<button variant="primary" loading>Guardar</button>`
* **Segmented Controls:** `<div button-group><label><input type="radio" checked><span>Día</span></label>...</div>`

---

## 📝 11. Formularios & Inputs Nativos

* **Toggle Switches:** `<input type="checkbox" switch checked>`
* **Checkboxes & Radios:** `<input type="checkbox">` / `<input type="radio">` con checkmark SVG automático.
* **Input Groups & Addons:** `<div input-group><span addon>https://</span><input><button>Go</button></div>`
* **Inputs con Iconos:** `<div input-icon="left"><svg>...</svg><input></div>`
* **Dropzone:** `<label dropzone><input type="file" style="display:none">...</label>`

---

## ⚡ 12. Primitivas Flexbox & Stacks

* **`layout="stack"`**: Columna vertical con espaciado constante.
* **`layout="row"`**: Fila horizontal centrada.
* **`layout="split"`**: Distribución de extremos tipo *Navbar/Toolbar*.
* **`layout="cluster"`**: Agrupación fluida para tags y badges con salto automático.
* **`layout="row-responsive"`**: Fila en pantallas grandes que pasa a columna en móviles.
* **`layout="center"`**: Centrado perfecto horizontal y vertical.
* **`push="right" | "left" | "top" | "bottom"`**: Empuje con auto-márgenes inteligentes.

---

## 📐 13. Primitivas Grid

* **`layout="grid" grid="auto-fit" min-col="sm"`**: Grilla auto-responsiva sin media queries.
* **`cols="1"` a `cols="12"`**: Sistema de columnas fijas.
* **`span="1"` a `span="12"` o `span="full"`**: Expansión de elementos hijos.
* **`cols="sidebar-left"`**: Layout preset de barra lateral + contenido fluido.
