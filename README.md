# 🚀 Framework HTML - Layout Primitives

Un framework de layout declarativo, moderno y ultra rápido enfocado en escribir HTML semántico y atributos limpios sin perder tiempo configurando CSS.

---

## 📦 Estructura del Proyecto

```text
frameworkhtml/
├── src/
│   ├── base/
│   │   ├── variables.css   # Tokens de diseño (gaps, breakpoints, radios, colores)
│   │   └── reset.css       # Reset moderno y estandarización de box-sizing
│   ├── layout/
│   │   ├── grid.css        # Sistema completo de Grid declarativo
│   │   └── flex.css        # Primitivas de Flexbox, Stacks, Split y Clusters
│   └── main.css            # Archivo maestro de importación
└── examples/
    └── index.html          # Showcase interactivo con ejemplos en vivo
```

---

## ⚡ 1. Primitivas Flexbox & Stacks

### Stack (Columna Vertical)
Organiza elementos verticalmente con separación uniforme:
```html
<div layout="stack" gap="md">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>
```

### Row (Fila Horizontal)
Alinea elementos horizontalmente (por defecto centrados verticalmente):
```html
<div layout="row" gap="md" align="center" justify="between">
  <div>Logo</div>
  <div>Menú</div>
</div>
```

### Split (Barra de navegación / Cabecera)
Separa los elementos hacia los extremos automáticamente (`space-between`):
```html
<div layout="split">
  <div>Logo / Título</div>
  <div layout="row" gap="sm">
    <button>Iniciar Sesión</button>
    <button>Registrarse</button>
  </div>
</div>
```

### Cluster (Tags, Chips y Badges)
Agrupa elementos horizontalmente que envuelven suavemente si se acaba el espacio:
```html
<div layout="cluster" gap="sm">
  <span>#HTML</span>
  <span>#CSS</span>
  <span>#JavaScript</span>
</div>
```

### Responsive Row-to-Stack
Fila en tablet/desktop, se convierte automáticamente en columna en móviles:
```html
<div layout="row-responsive" gap="md">
  <div flex="1">Columna A</div>
  <div flex="1">Columna B</div>
</div>
```

### Centrado Perfecto
Centra cualquier contenido en ambos ejes con una sola línea de HTML:
```html
<div layout="center" full-screen>
  <div class="card">Contenido centrado</div>
</div>
```

### Modificadores de Hijos Flex (Smart Auto-Margins & Sizing)
* `flex="1"` / `flex="auto"` / `flex="none"`
* `grow` / `no-shrink`
* `push="right"` / `push="left"` / `push="top"` / `push="bottom"` / `push="center"`

---

## 📐 2. Primitivas Grid

### Grid Auto-Responsive (Sin Media Queries)
Se adapta automáticamente de 1 a N columnas según el tamaño deseado:
```html
<div layout="grid" grid="auto-fit" min-col="sm" gap="md">
  <div>Tarjeta 1</div>
  <div>Tarjeta 2</div>
  <div>Tarjeta 3</div>
</div>
```
Presets de `min-col`: `2xs` (120px), `xs` (180px), `sm` (240px), `md` (300px), `lg` (380px), `xl` (480px).

### Sistema de 12 Columnas y Spans
```html
<div layout="grid" cols="12" gap="md">
  <header span="full">Cabecera (12 cols)</header>
  <main span="8">Contenido principal (8 cols)</main>
  <aside span="4">Sidebar (4 cols)</aside>
</div>
```

### Responsive por Breakpoint
```html
<div layout="grid" cols="1" cols-sm="2" cols-lg="4" gap="md">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

### Layouts Preset
```html
<div layout="grid" cols="sidebar-left" gap="lg">
  <nav>Menú Lateral</nav>
  <section>Panel Principal</section>
</div>
```
Valores: `sidebar-left`, `sidebar-right`, `auto-1fr`, `1fr-auto`, `golden-left`, `golden-right`.

---

## 🎨 Gaps Disponibles
Valores para `gap`, `gap-x`, `gap-y`:
`none`, `3xs` (2px), `2xs` (4px), `xs` (8px), `sm` (12px), `md` (16px), `lg` (24px), `xl` (32px), `2xl` (48px), `3xl` (64px).
