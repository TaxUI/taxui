# 🚀 Framework HTML - Declarative HTML & CSS Framework

Un framework moderno, declarativo y ultra rápido enfocado en escribir HTML semántico y atributos limpios para eliminar la fatiga de diseño y no perder tiempo configurando CSS.

---

## 📦 Estructura del Proyecto

```text
frameworkhtml/
├── src/
│   ├── base/
│   │   ├── variables.css   # Tokens de diseño (gaps, inputs, radios, colores)
│   │   └── reset.css       # Reset moderno y estandarización de box-sizing
│   ├── layout/
│   │   ├── grid.css        # Sistema completo de Grid declarativo
│   │   └── flex.css        # Primitivas de Flexbox, Stacks, Split y Clusters
│   ├── components/
│   │   └── forms.css       # Formularios, switches, checkboxes, selects e input groups
│   └── main.css            # Archivo maestro de importación
└── examples/
    ├── flexbox.html        # Showcase interactivo de Flexbox & Stacks
    ├── grid.html           # Showcase interactivo de Grid Primitives
    └── forms.html          # Showcase interactivo de Formularios e Inputs
```

---

## 📝 1. Formularios & Inputs Nativos

### Toggle Switches Animados
Transforma cualquier checkbox en un switch moderno con solo un atributo:
```html
<label layout="row" gap="sm">
  <input type="checkbox" switch checked>
  <span>Activar notificaciones</span>
</label>

<!-- Switch tamaño grande -->
<input type="checkbox" switch size="lg">
```

### Checkboxes & Radios Personalizados
Checkmarks y radio dots automáticos y accesibles sin necesidad de divs o spans adicionales:
```html
<label layout="row" gap="sm">
  <input type="checkbox" checked>
  <span>Recordar sesión</span>
</label>

<label layout="row" gap="sm">
  <input type="radio" name="plan" checked>
  <span>Plan Pro</span>
</label>
```

### Input Groups & Addons (Fusión sin bordes dobles)
```html
<div input-group>
  <span addon>https://</span>
  <input type="text" placeholder="misitio.com">
  <button type="button">Conectar</button>
</div>
```

### Inputs con Iconos Integrados
```html
<div input-icon="left">
  <svg>...</svg>
  <input type="search" placeholder="Buscar...">
</div>
```

### Subida de Archivos y Dropzone
```html
<!-- Input de archivo nativo estilizado -->
<input type="file">

<!-- Área de arrastrar y soltar -->
<label dropzone>
  <input type="file" style="display: none;">
  <span>Arrastra archivos aquí o haz clic para subir</span>
</label>
```

---

## ⚡ 2. Primitivas Flexbox & Stacks

* **`layout="stack"`**: Columna vertical con espaciado constante y limpio.
* **`layout="row"`**: Fila horizontal centrada verticalmente por defecto.
* **`layout="split"`**: Distribución de extremos tipo *Navbar/Toolbar* (`space-between` instantáneo).
* **`layout="cluster"`**: Agrupación fluida para tags, chips y badges con salto de línea.
* **`layout="row-responsive"`**: Fila en pantallas grandes que pasa a columna en móviles.
* **`layout="center"`**: Centrado perfecto horizontal y vertical.
* **`push="right" | "left" | "top" | "bottom"`**: Empuje con auto-márgenes inteligentes.
* **`flex="1"` / `grow` / `no-shrink`**: Control directo de tamaño en los hijos.

---

## 📐 3. Primitivas Grid

* **`layout="grid" grid="auto-fit" min-col="sm"`**: Grilla auto-responsiva sin media queries.
* **`cols="1"` a `cols="12"`**: Sistema de columnas fijas.
* **`span="1"` a `span="12"` o `span="full"`**: Expansión de elementos hijos.
* **`cols-sm="..."`, `cols-md="..."`, `cols-lg="..."`**: Control responsivo por breakpoint.
* **`cols="sidebar-left"` / `cols="sidebar-right"`**: Presets de layout listos para usar.
