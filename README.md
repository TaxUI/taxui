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
│   │   └── forms.css       # Formularios, switches, checkboxes, selects e input groups
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
    └── tables.html         # Showcase de Tablas de Datos Responsivas
```

---

## 📊 1. Tablas de Datos Responsivas

### Contenedor de Scroll y Filas Cebra
```html
<div table-container>
  <table striped>
    <thead>
      <tr>
        <th>Usuario</th>
        <th>Rol</th>
        <th align="right">Último Acceso</th>
      </tr>
    </thead>
    <tbody>
      <tr selected>
        <td>Matías Dev</td>
        <td>Admin</td>
        <td align="right">Hace 2 min</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Densidades de Espaciado
```html
<table density="compact">...</table>  <!-- Ideal para dashboards financieros densos -->
<table density="relaxed">...</table>  <!-- Ideal para vistas modernas de SaaS -->
```

### Vista Automática de Tarjetas en Móviles (`< 640px`)
```html
<table responsive="stack">
  <thead>
    <tr>
      <th>Factura</th>
      <th>Monto</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Factura">#INV-001</td>
      <td data-label="Monto" numeric>$1,250.00</td>
      <td data-label="Estado"><span badge="success">Pagada</span></td>
    </tr>
  </tbody>
</table>
```

---

## 👤 2. Avatares & Grupos de Usuarios

* **Fotos e Iniciales:** `<img avatar src="user.jpg">` o `<div avatar variant="gradient">MD</div>`
* **Escala de Tamaños:** `size="xs|sm|md|lg|xl|2xl"`
* **Formas:** `shape="circle|rounded|square"`
* **Estados de Presencia:** `status="online|busy|away|offline" pulse`
* **Grupos Apilados:** `<div avatar-group><img avatar ...><div avatar variant="secondary">+5</div></div>`

---

## 🔔 3. Alertas & Mensajes de Feedback

* **Variantes:** `alert="info|success|warning|danger|neutral"`
* **Borde Lateral:** `<div alert="warning" border="left">...</div>`
* **Slots:** `alert-icon`, `alert-title`, `alert-description`, `alert-actions`, `<button alert-close>`
* **Banners & Toasts:** `<aside banner alert="info">` y `<div alert="info" pill glow>`

---

## 🏷️ 4. Badges, Chips & Notificaciones Flotantes

* **Variantes:** `badge="primary|success|warning|danger|purple"`
* **Estilos:** `style-type="solid|outline"` y modificador `pill`
* **Chips Removibles:** `<span chip="primary" pill><span>JS</span><button dismiss>×</button></span>`
* **Puntos de Estado & Contadores:** `badge-dot="success" pulse` y `<span badge-float>3</span>`

---

## 🃏 5. Tarjetas y Superficies

* **Modos:** `card="flat|elevated|glass|glow"`
* **Glassmorphism:** `<article card="glass">...</article>`
* **Interacción al Hover:** `<article card="glass" interactive>...</article>`
* **Slots:** `<header card-header divided>`, `<div card-body>`, `<footer card-footer divided>`

---

## 🔘 6. Botones Multivariante

* **Variantes:** `variant="primary|secondary|outline|ghost|success|danger|warning|link"`
* **Efectos:** `glow`, `pill`, `block`, `icon-only`
* **Estado de Carga:** `<button variant="primary" loading>Guardar</button>`
* **Segmented Controls:** `<div button-group><label><input type="radio" checked><span>Día</span></label>...</div>`

---

## 📝 7. Formularios & Inputs Nativos

* **Toggle Switches:** `<input type="checkbox" switch checked>`
* **Checkboxes & Radios:** `<input type="checkbox">` / `<input type="radio">` con checkmark SVG automático.
* **Input Groups & Addons:** `<div input-group><span addon>https://</span><input><button>Go</button></div>`
* **Inputs con Iconos:** `<div input-icon="left"><svg>...</svg><input></div>`
* **Dropzone:** `<label dropzone><input type="file" style="display:none">...</label>`

---

## ⚡ 8. Primitivas Flexbox & Stacks

* **`layout="stack"`**: Columna vertical con espaciado constante.
* **`layout="row"`**: Fila horizontal centrada.
* **`layout="split"`**: Distribución de extremos tipo *Navbar/Toolbar*.
* **`layout="cluster"`**: Agrupación fluida para tags y badges con salto automático.
* **`layout="row-responsive"`**: Fila en pantallas grandes que pasa a columna en móviles.
* **`layout="center"`**: Centrado perfecto horizontal y vertical.
* **`push="right" | "left" | "top" | "bottom"`**: Empuje con auto-márgenes inteligentes.

---

## 📐 9. Primitivas Grid

* **`layout="grid" grid="auto-fit" min-col="sm"`**: Grilla auto-responsiva sin media queries.
* **`cols="1"` a `cols="12"`**: Sistema de columnas fijas.
* **`span="1"` a `span="12"` o `span="full"`**: Expansión de elementos hijos.
* **`cols="sidebar-left"`**: Layout preset de barra lateral + contenido fluido.
