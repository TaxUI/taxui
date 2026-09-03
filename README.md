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
│   │   └── forms.css       # Formularios, switches, checkboxes, selects e input groups
│   └── main.css            # Archivo maestro de importación
└── examples/
    ├── flexbox.html        # Showcase de Flexbox & Stacks
    ├── grid.html           # Showcase de Grid Primitives
    ├── forms.html          # Showcase de Formularios e Inputs
    └── buttons.html        # Showcase de Botones Multivariante
```

---

## 🔘 1. Botones Multivariante

### Variantes de Color y Propósito
```html
<button variant="primary">Primary</button>
<button variant="secondary">Secondary</button>
<button variant="outline">Outline</button>
<button variant="ghost">Ghost</button>
<button variant="success">Success</button>
<button variant="danger">Danger</button>
<button variant="warning">Warning</button>
<button variant="link">Enlace</button>
```

### Efectos Glow & Pill
```html
<!-- Resplandor neón suave -->
<button variant="primary" glow>Primary Glow</button>

<!-- Bordes circulares -->
<button variant="primary" glow pill>Pill Button</button>
```

### Escala de Tamaños
```html
<button variant="primary" size="sm">Pequeño</button>
<button variant="primary" size="md">Mediano (Default)</button>
<button variant="primary" size="lg">Grande</button>
<button variant="primary" size="xl">Extra Grande Hero</button>
```

### Estado de Carga (Loading Spinner Puro CSS)
Oculta el texto y muestra un spinner animado manteniendo el ancho del botón y bloqueando clics:
```html
<button variant="primary" loading>Guardar Cambios</button>
```

### Botones con Iconos y Cuadrados
```html
<!-- Con icono y texto -->
<button variant="primary">
  <svg>...</svg>
  <span>Crear Proyecto</span>
</button>

<!-- Botón cuadrado solo icono -->
<button variant="secondary" icon-only aria-label="Editar">
  <svg>...</svg>
</button>
```

### Grupos de Botones
```html
<div button-group>
  <button variant="secondary">Día</button>
  <button variant="primary">Semana</button>
  <button variant="secondary">Mes</button>
</div>
```

---

## 📝 2. Formularios & Inputs Nativos

* **Toggle Switches:** `<input type="checkbox" switch checked>`
* **Checkboxes & Radios:** `<input type="checkbox">` / `<input type="radio">` con checkmark SVG automático.
* **Input Groups & Addons:** `<div input-group><span addon>https://</span><input><button>Go</button></div>`
* **Inputs con Iconos:** `<div input-icon="left"><svg>...</svg><input></div>`
* **Dropzone:** `<label dropzone><input type="file" style="display:none">...</label>`

---

## ⚡ 3. Primitivas Flexbox & Stacks

* **`layout="stack"`**: Columna vertical con espaciado constante.
* **`layout="row"`**: Fila horizontal centrada.
* **`layout="split"`**: Distribución de extremos tipo *Navbar/Toolbar*.
* **`layout="cluster"`**: Agrupación fluida para tags y badges con salto automático.
* **`layout="row-responsive"`**: Fila en pantallas grandes que pasa a columna en móviles.
* **`layout="center"`**: Centrado perfecto horizontal y vertical.
* **`push="right" | "left" | "top" | "bottom"`**: Empuje con auto-márgenes inteligentes.

---

## 📐 4. Primitivas Grid

* **`layout="grid" grid="auto-fit" min-col="sm"`**: Grilla auto-responsiva sin media queries.
* **`cols="1"` a `cols="12"`**: Sistema de columnas fijas.
* **`span="1"` a `span="12"` o `span="full"`**: Expansión de elementos hijos.
* **`cols="sidebar-left"`**: Layout preset de barra lateral + contenido fluido.
