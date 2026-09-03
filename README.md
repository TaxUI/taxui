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
│   │   └── forms.css       # Formularios, switches, checkboxes, selects e input groups
│   └── main.css            # Archivo maestro de importación
└── examples/
    ├── flexbox.html        # Showcase de Flexbox & Stacks
    ├── grid.html           # Showcase de Grid Primitives
    ├── forms.html          # Showcase de Formularios e Inputs
    ├── buttons.html        # Showcase de Botones Multivariante
    └── cards.html          # Showcase de Tarjetas y Superficies
```

---

## 🃏 1. Tarjetas y Superficies

### Modos Visuales
```html
<!-- Flat limpia (por defecto) -->
<article card="flat">...</article>

<!-- Elevada con sombra multinivel -->
<article card="elevated">...</article>

<!-- Glassmorphism translúcido con backdrop-blur -->
<article card="glass">...</article>

<!-- Borde iluminado de acento -->
<article card="glow">...</article>
```

### Interacción al Hover
Añade `interactive` para elevar la tarjeta suavemente al pasar el ratón:
```html
<article card="glass" interactive>...</article>
```

### Slots Estructurados (Header, Body, Footer)
```html
<article card="elevated">
  <!-- Cabecera con divisor opcional -->
  <header card-header divided>
    <h3 card-title>Título de la Tarjeta</h3>
    <p card-subtitle>Subtítulo o metadato</p>
  </header>

  <!-- Contenido principal -->
  <div card-body>
    <p>Contenido principal del componente...</p>
  </div>

  <!-- Pie con botones de acción -->
  <footer card-footer divided>
    <button variant="secondary" size="sm">Cancelar</button>
    <button variant="primary" size="sm">Guardar</button>
  </footer>
</article>
```

### Imágenes y Medios
```html
<article card="elevated">
  <img card-media src="portada.jpg" alt="Portada">
  <div card-body>...</div>
</article>
```

---

## 🔘 2. Botones Multivariante

* **Variantes:** `variant="primary|secondary|outline|ghost|success|danger|warning|link"`
* **Efectos:** `glow` (resplandor de acento), `pill` (bordes redondeados), `block` (100% de ancho).
* **Estado de Carga:** `<button variant="primary" loading>Guardar</button>` (spinner puro CSS).
* **Segmented Controls:** `<div button-group><label><input type="radio" checked><span>Día</span></label>...</div>`

---

## 📝 3. Formularios & Inputs Nativos

* **Toggle Switches:** `<input type="checkbox" switch checked>`
* **Checkboxes & Radios:** `<input type="checkbox">` / `<input type="radio">` con checkmark SVG automático.
* **Input Groups & Addons:** `<div input-group><span addon>https://</span><input><button>Go</button></div>`
* **Inputs con Iconos:** `<div input-icon="left"><svg>...</svg><input></div>`
* **Dropzone:** `<label dropzone><input type="file" style="display:none">...</label>`

---

## ⚡ 4. Primitivas Flexbox & Stacks

* **`layout="stack"`**: Columna vertical con espaciado constante.
* **`layout="row"`**: Fila horizontal centrada.
* **`layout="split"`**: Distribución de extremos tipo *Navbar/Toolbar*.
* **`layout="cluster"`**: Agrupación fluida para tags y badges con salto automático.
* **`layout="row-responsive"`**: Fila en pantallas grandes que pasa a columna en móviles.
* **`layout="center"`**: Centrado perfecto horizontal y vertical.
* **`push="right" | "left" | "top" | "bottom"`**: Empuje con auto-márgenes inteligentes.

---

## 📐 5. Primitivas Grid

* **`layout="grid" grid="auto-fit" min-col="sm"`**: Grilla auto-responsiva sin media queries.
* **`cols="1"` a `cols="12"`**: Sistema de columnas fijas.
* **`span="1"` a `span="12"` o `span="full"`**: Expansión de elementos hijos.
* **`cols="sidebar-left"`**: Layout preset de barra lateral + contenido fluido.
