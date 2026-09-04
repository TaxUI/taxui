# 🚀 TaxUI Framework (v1.0.0) - Declarative HTML & CSS Framework

Un framework moderno, declarativo y ultra rápido enfocado en escribir HTML semántico y atributos limpios para eliminar la fatiga de diseño y no perder tiempo configurando CSS. **Zero JavaScript, 100% puro en CSS nativo y acelerado por GPU.**

---

## ⚡ Instalación Rápida

### Vía CDN (jsDelivr / unpkg)
```html
<!-- Bundle Completo Minificado (~14 KB Gzipped) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TaxUI/taxui@1.0.0/dist/taxui.min.css">
```

### Vía NPM
```bash
npm install taxui
```
```css
/* Importar en tu CSS principal */
@import "taxui/dist/taxui.min.css";
```

### O sub-módulos independientes
```html
<!-- Solo Layouts -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TaxUI/taxui@1.0.0/dist/taxui-layout.min.css">

<!-- Solo Componentes de UI -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TaxUI/taxui@1.0.0/dist/taxui-components.min.css">
```

---

## 🛠️ Pipeline de Build & Minificación

El proyecto incluye un pipeline ultra rápido en Node.js sin dependencias externas:

```bash
# Compilar y generar todos los bundles en dist/
npm run build

# Modo desarrollo con auto-recarga en vivo
npm run watch

# Validar integridad y tamaño de bundles
npm test
```

### Métricas de Peso de los Bundles
| Bundle | Archivo | Minificado | Gzipped | Brotli |
|---|---|---|---|---|
| **TaxUI Full Bundle** | `dist/taxui.min.css` | **84.3 KB** | **14.8 KB** | **12.6 KB** |
| **Base & Themes** | `dist/taxui-base.min.css` | 6.5 KB | 1.6 KB | 1.4 KB |
| **Layout Primitives** | `dist/taxui-layout.min.css` | 16.0 KB | 2.9 KB | 2.4 KB |
| **UI Components** | `dist/taxui-components.min.css` | 56.3 KB | 9.8 KB | 8.5 KB |
| **Utilities & Scrollbars** | `dist/taxui-utilities.min.css` | 5.4 KB | 1.3 KB | 1.1 KB |

---

## 📦 Estructura del Proyecto

```text
frameworkhtml/
├── dist/                   # Bundles compilados y minificados para producción
│   ├── taxui.css           # Bundle maestro sin minificar
│   ├── taxui.min.css       # Bundle maestro minificado para CDN/NPM
│   ├── taxui-base.min.css
│   ├── taxui-layout.min.css
│   ├── taxui-components.min.css
│   └── taxui-utilities.min.css
├── src/
│   ├── base/
│   │   ├── variables.css   # Tokens de diseño (gaps, inputs, radios, colores)
│   │   ├── themes.css      # Sistema de temas (dark/light, acentos y scoped surfaces)
│   │   └── reset.css       # Reset moderno y normalización
│   ├── layout/
│   │   ├── grid.css        # Sistema de Grid declarativo
│   │   ├── flex.css        # Flexbox, Stacks, Split y Clusters
│   │   └── page.css        # Page shells, Holy Grail, Sticky Footers y barras flotantes
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
│   │   ├── utilities.css   # Truncado de texto, line-clamp, aspect-ratios y media-frame
│   │   └── scrollbars.css  # Barras de scroll personalizadas, ocultas y scroll snapping
│   └── main.css            # Archivo maestro de importación
├── scripts/
│   └── build.js            # Engine de compilación, inlining de imports y minificación
├── package.json            # Configuración NPM de TaxUI
└── examples/               # 17 páginas interactivas de demostración
```

---

## 📜 1. Barras de Scroll Personalizadas & Scroll Snapping

### Variantes de Scrollbars
```html
<div scrollbar="thin">Barra ultra delgada (4px)</div>
<div scrollbar="none">Scroll funcional pero barra 100% invisible</div>
<div scrollbar="accent">Barra con el color de acento primario + Glow</div>
<div scrollbar="track">Pista de fondo visible de alto contraste</div>
<div scrollbar="reveal">Invisible hasta que el cursor entra al elemento</div>
```

### Carruseles Horizontales con Snap
```html
<div scroll="snap-x" scrollbar="none" gap="md">
  <div card snap="start">Tarjeta 1</div>
  <div card snap="start">Tarjeta 2</div>
  <div card snap="start">Tarjeta 3</div>
</div>
```

---

## ⚓ 2. Sticky Footer Layout & App Shells

### Sticky Footer Básico
```html
<body layout="sticky-footer">
  <header>Navbar</header>
  
  <main>
    <!-- Crece automáticamente y empuja el footer a la base -->
    <p>Contenido breve o extenso.</p>
  </main>
  
  <footer>Pie de página siempre al fondo</footer>
</body>
```

### Layout Holy Grail (3 Columnas Responsivo)
```html
<div layout="holy-grail">
  <header>Topbar</header>
  <div page-body>
    <aside>Sidebar Izquierda</aside>
    <main>Contenido Principal</main>
  </div>
  <footer>Pie de página</footer>
</div>
```

### Barras Sticky & Flotantes
```html
<header sticky="glass">Barra superior con Blur</header>
<div action-bar="floating">Tienes cambios sin guardar <button>Guardar</button></div>
```

---

## 💀 3. Skeletons & Placeholders de Carga

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

## 🎨 4. Sistema de Temas & Modo Oscuro/Claro

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

## 🛠️ 5. Utilidades de Truncado & Aspect Ratio

* **Truncado 1 Línea:** `<p truncate>...</p>`
* **Clamping Multilínea:** `<p clamp="2">...</p>` a `<p clamp="6">...</p>`
* **Balance Tipográfico:** `<h1 text-balance>...</h1>`
* **Media Frames & Ratios:** `<div media-frame ratio="16:9|1:1|4:5|21:9"><img ...></div>`

---

## 💬 6. Tooltips Puros en CSS (Zero JS)

* **Posicionamiento:** `<button tooltip="Texto" tooltip-pos="top|bottom|left|right">`
* **Variantes de Color:** `tooltip-variant="primary|success|danger|glass"`
* **Multilínea:** `<button tooltip="..." tooltip-wrap>`

---

## 📂 7. Acordeones & Colapsables (`<details>`)

* **Acordeón Conectado:** `<div accordion><details><summary>Título</summary><div accordion-body>...</div></details></div>`
* **Cierre Automático Excluyente:** `<details name="faq-group">`
* **Modos de Diseño:** `accordion="separated"` (tarjetas) y `accordion="flush"` (minimalista).

---

## 🪟 8. Modales Nativos & Drawers (`<dialog>`)

* **Base:** `<dialog size="sm|md|lg|fullscreen">` con apertura nativa `.showModal()` y cierre `Esc`.
* **Slots:** `<header modal-header divided>`, `<div modal-body>`, `<footer modal-footer divided>`.
* **Drawers Laterales:** `<dialog drawer="right">`, `<dialog drawer="left">` y `<dialog drawer="bottom">`.
* **Estilos:** `modal="glass"` y `glow`.

---

## 📊 9. Tablas de Datos Responsivas

* **Contenedor:** `<div table-container><table striped>...</table></div>`
* **Densidades:** `table[density="compact|relaxed"]`
* **Alineación Numérica:** `th[numeric]`, `td[numeric]` (alineación decimal con `tabular-nums`)
* **Vista Móvil en Tarjetas:** `<table responsive="stack">` con `data-label="..."`

---

## 👤 10. Avatares & Grupos de Usuarios

* **Fotos e Iniciales:** `<img avatar src="user.jpg">` o `<div avatar variant="gradient">MD</div>`
* **Escala de Tamaños:** `size="xs|sm|md|lg|xl|2xl"`
* **Formas:** `shape="circle|rounded|square"`
* **Estados de Presencia:** `status="online|busy|away|offline" pulse`
* **Grupos Apilados:** `<div avatar-group><img avatar ...><div avatar variant="secondary">+5</div></div>`

---

## 🔔 11. Alertas & Mensajes de Feedback

* **Variantes:** `alert="info|success|warning|danger|neutral"`
* **Borde Lateral:** `<div alert="warning" border="left">...</div>`
* **Slots:** `alert-icon`, `alert-title`, `alert-description`, `alert-actions`, `<button alert-close>`
* **Banners & Toasts:** `<aside banner alert="info">` y `<div alert="info" pill glow>`

---

## 🏷️ 12. Badges, Chips & Notificaciones Flotantes

* **Variantes:** `badge="primary|success|warning|danger|purple"`
* **Estilos:** `style-type="solid|outline"` y modificador `pill`
* **Chips Removibles:** `<span chip="primary" pill><span>JS</span><button dismiss>×</button></span>`
* **Puntos de Estado & Contadores:** `badge-dot="success" pulse` y `<span badge-float>3</span>`

---

## 🃏 13. Tarjetas y Superficies

* **Modos:** `card="flat|elevated|glass|glow"`
* **Glassmorphism:** `<article card="glass">...</article>`
* **Interacción al Hover:** `<article card="glass" interactive>...</article>`
* **Slots:** `<header card-header divided>`, `<div card-body>`, `<footer card-footer divided>`

---

## 🔘 14. Botones Multivariante

* **Variantes:** `variant="primary|secondary|outline|ghost|success|danger|warning|link"`
* **Efectos:** `glow`, `pill`, `block`, `icon-only`
* **Estado de Carga:** `<button variant="primary" loading>Guardar</button>`
* **Segmented Controls:** `<div button-group><label><input type="radio" checked><span>Día</span></label>...</div>`

---

## 📝 15. Formularios & Inputs Nativos

* **Toggle Switches:** `<input type="checkbox" switch checked>`
* **Checkboxes & Radios:** `<input type="checkbox">` / `<input type="radio">` con checkmark SVG automático.
* **Input Groups & Addons:** `<div input-group><span addon>https://</span><input><button>Go</button></div>`
* **Inputs con Iconos:** `<div input-icon="left"><svg>...</svg><input></div>`
* **Dropzone:** `<label dropzone><input type="file" style="display:none">...</label>`

---

## ⚡ 16. Primitivas Flexbox & Stacks

* **`layout="stack"`**: Columna vertical con espaciado constante.
* **`layout="row"`**: Fila horizontal centrada.
* **`layout="split"`**: Distribución de extremos tipo *Navbar/Toolbar*.
* **`layout="cluster"`**: Agrupación fluida para tags y badges con salto automático.
* **`layout="row-responsive"`**: Fila en pantallas grandes que pasa a columna en móviles.
* **`layout="center"`**: Centrado perfecto horizontal y vertical.
* **`push="right" | "left" | "top" | "bottom"`**: Empuje con auto-márgenes inteligentes.

---

## 📐 17. Primitivas Grid

* **`layout="grid" grid="auto-fit" min-col="sm"`**: Grilla auto-responsiva sin media queries.
* **`cols="1"` a `cols="12"`**: Sistema de columnas fijas.
* **`span="1"` a `span="12"` o `span="full"`**: Expansión de elementos hijos.
* **`cols="sidebar-left"`**: Layout preset de barra lateral + contenido fluido.
