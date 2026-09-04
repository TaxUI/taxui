# 🚀 Framework HTML - Declarative HTML & CSS Framework

Un framework moderno, declarativo y ultra rápido enfocado en escribir HTML semántico y atributos limpios para eliminar la fatiga de diseño y no perder tiempo configurando CSS.

---

## 📦 Estructura del Proyecto

```text
frameworkhtml/
├── src/
│   ├── base/
│   │   ├── variables.css   # Tokens de diseño (gaps, inputs, radios, colores)
│   │   ├── themes.css      # Sistema de temas (dark/light, acentos y scoped surfaces)
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
│   │   ├── skeletons.css   # Placeholders de carga, shimmer GPU y formas semánticas
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
    ├── utilities.html      # Showcase de Utilidades de Truncado & Aspect Ratio
    ├── themes.html         # Showcase de Sistema de Temas & Dark/Light Mode
    └── skeletons.html      # Showcase de Skeletons & Placeholders de Carga
```

---

## 💀 1. Skeletons & Placeholders de Carga

```html
<!-- Formas Semánticas con Onda Shimmer Fluida -->
<div skeleton="circle" size="md"></div>
<div skeleton="title" w="75%"></div>
<div skeleton="text" w="100%"></div>
<div skeleton="button"></div>

<!-- Animaciones Declarativas -->
<div skeleton="text" skeleton="shimmer"></div> <!-- Onda Shimmer (Default) -->
<div skeleton="text" skeleton="pulse"></div>   <!-- Pulso de Opacidad -->
<div skeleton="text" skeleton="static"></div>  <!-- Bloque Estático -->

<!-- Helper de Párrafo Multilínea -->
<div skeleton="paragraph">
  <div></div>
  <div></div>
  <div></div>
</div>
```

---

## 🎨 2. Sistema de Temas & Modo Oscuro/Claro

### Modo Global
```html
<html theme="dark">   <!-- Modo Oscuro -->
<html theme="light">  <!-- Modo Claro -->
```

### Paletas de Colores de Acento
```html
<!-- Cambia el color primario y estados hover/focus dinámicamente -->
<html theme-accent="blue">      <!-- Azul Moderno (Default) -->
<html theme-accent="emerald">   <!-- Verde Esmeralda -->
<html theme-accent="violet">    <!-- Violeta / Púrpura -->
<html theme-accent="amber">     <!-- Ámbar / Naranja Cálido -->
<html theme-accent="rose">      <!-- Rosa / Magenta -->
<html theme-accent="cyan">      <!-- Cian Eléctrico -->
```

### Superficies Anidadas (Scoped Surfaces)
```html
<!-- Incrusta una tarjeta en modo claro dentro de un layout oscuro -->
<div card="elevated" theme="light">
  <h3>Documento Claro</h3>
  <button variant="primary">Imprimir</button>
</div>
```

---

## 🛠️ 3. Utilidades de Truncado & Aspect Ratio

* **Truncado 1 Línea:** `<p truncate>...</p>`
* **Clamping Multilínea:** `<p clamp="2">...</p>` a `<p clamp="6">...</p>`
* **Balance Tipográfico:** `<h1 text-balance>...</h1>`
* **Media Frames & Ratios:** `<div media-frame ratio="16:9|1:1|4:5|21:9"><img ...></div>`

---

## 💬 4. Tooltips Puros en CSS (Zero JS)

* **Posicionamiento:** `<button tooltip="Texto" tooltip-pos="top|bottom|left|right">`
* **Variantes de Color:** `tooltip-variant="primary|success|danger|glass"`
* **Multilínea:** `<button tooltip="..." tooltip-wrap>`

---

## 📂 5. Acordeones & Colapsables (`<details>`)

* **Acordeón Conectado:** `<div accordion><details><summary>Título</summary><div accordion-body>...</div></details></div>`
* **Cierre Automático Excluyente:** `<details name="faq-group">`
* **Modos de Diseño:** `accordion="separated"` (tarjetas) y `accordion="flush"` (minimalista).

---

## 🪟 6. Modales Nativos & Drawers (`<dialog>`)

* **Base:** `<dialog size="sm|md|lg|fullscreen">` con apertura nativa `.showModal()` y cierre `Esc`.
* **Slots:** `<header modal-header divided>`, `<div modal-body>`, `<footer modal-footer divided>`.
* **Drawers Laterales:** `<dialog drawer="right">`, `<dialog drawer="left">` y `<dialog drawer="bottom">`.
* **Estilos:** `modal="glass"` y `glow`.

---

## 📊 7. Tablas de Datos Responsivas

* **Contenedor:** `<div table-container><table striped>...</table></div>`
* **Densidades:** `table[density="compact|relaxed"]`
* **Alineación Numérica:** `th[numeric]`, `td[numeric]` (alineación decimal con `tabular-nums`)
* **Vista Móvil en Tarjetas:** `<table responsive="stack">` con `data-label="..."`

---

## 👤 8. Avatares & Grupos de Usuarios

* **Fotos e Iniciales:** `<img avatar src="user.jpg">` o `<div avatar variant="gradient">MD</div>`
* **Escala de Tamaños:** `size="xs|sm|md|lg|xl|2xl"`
* **Formas:** `shape="circle|rounded|square"`
* **Estados de Presencia:** `status="online|busy|away|offline" pulse`
* **Grupos Apilados:** `<div avatar-group><img avatar ...><div avatar variant="secondary">+5</div></div>`

---

## 🔔 9. Alertas & Mensajes de Feedback

* **Variantes:** `alert="info|success|warning|danger|neutral"`
* **Borde Lateral:** `<div alert="warning" border="left">...</div>`
* **Slots:** `alert-icon`, `alert-title`, `alert-description`, `alert-actions`, `<button alert-close>`
* **Banners & Toasts:** `<aside banner alert="info">` y `<div alert="info" pill glow>`

---

## 🏷️ 10. Badges, Chips & Notificaciones Flotantes

* **Variantes:** `badge="primary|success|warning|danger|purple"`
* **Estilos:** `style-type="solid|outline"` y modificador `pill`
* **Chips Removibles:** `<span chip="primary" pill><span>JS</span><button dismiss>×</button></span>`
* **Puntos de Estado & Contadores:** `badge-dot="success" pulse` y `<span badge-float>3</span>`

---

## 🃏 11. Tarjetas y Superficies

* **Modos:** `card="flat|elevated|glass|glow"`
* **Glassmorphism:** `<article card="glass">...</article>`
* **Interacción al Hover:** `<article card="glass" interactive>...</article>`
* **Slots:** `<header card-header divided>`, `<div card-body>`, `<footer card-footer divided>`

---

## 🔘 12. Botones Multivariante

* **Variantes:** `variant="primary|secondary|outline|ghost|success|danger|warning|link"`
* **Efectos:** `glow`, `pill`, `block`, `icon-only`
* **Estado de Carga:** `<button variant="primary" loading>Guardar</button>`
* **Segmented Controls:** `<div button-group><label><input type="radio" checked><span>Día</span></label>...</div>`

---

## 📝 13. Formularios & Inputs Nativos

* **Toggle Switches:** `<input type="checkbox" switch checked>`
* **Checkboxes & Radios:** `<input type="checkbox">` / `<input type="radio">` con checkmark SVG automático.
* **Input Groups & Addons:** `<div input-group><span addon>https://</span><input><button>Go</button></div>`
* **Inputs con Iconos:** `<div input-icon="left"><svg>...</svg><input></div>`
* **Dropzone:** `<label dropzone><input type="file" style="display:none">...</label>`

---

## ⚡ 14. Primitivas Flexbox & Stacks

* **`layout="stack"`**: Columna vertical con espaciado constante.
* **`layout="row"`**: Fila horizontal centrada.
* **`layout="split"`**: Distribución de extremos tipo *Navbar/Toolbar*.
* **`layout="cluster"`**: Agrupación fluida para tags y badges con salto automático.
* **`layout="row-responsive"`**: Fila en pantallas grandes que pasa a columna en móviles.
* **`layout="center"`**: Centrado perfecto horizontal y vertical.
* **`push="right" | "left" | "top" | "bottom"`**: Empuje con auto-márgenes inteligentes.

---

## 📐 15. Primitivas Grid

* **`layout="grid" grid="auto-fit" min-col="sm"`**: Grilla auto-responsiva sin media queries.
* **`cols="1"` a `cols="12"`**: Sistema de columnas fijas.
* **`span="1"` a `span="12"` o `span="full"`**: Expansión de elementos hijos.
* **`cols="sidebar-left"`**: Layout preset de barra lateral + contenido fluido.
