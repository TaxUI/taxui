# 🚀 TaxUI - Grid Layout Primitives

Un sistema de grillas declarativo, moderno y ultra rápido enfocado en escribir HTML semántico y atributos limpios sin perder tiempo configurando CSS.

---

## 📦 Estructura del Proyecto

```text
taxui/
├── src/
│   ├── base/
│   │   ├── variables.css   # Tokens de diseño (gaps, breakpoints, radios, colores)
│   │   └── reset.css       # Reset moderno y estandarización de box-sizing
│   ├── layout/
│   │   └── grid.css        # Sistema completo de Grid declarativo
│   └── main.css            # Archivo maestro de importación
└── examples/
    └── index.html          # Showcase interactivo con ejemplos en vivo
```

---

## 🛠️ Guía Rápida de Uso

### 1. Grid Auto-Responsive (Sin Media Queries)
Crea grillas que se adaptan solas al ancho de pantalla según el tamaño mínimo deseado:

```html
<!-- Se ajusta de 1 a N columnas automáticamente -->
<div layout="grid" grid="auto-fit" min-col="sm" gap="md">
  <div>Tarjeta 1</div>
  <div>Tarjeta 2</div>
  <div>Tarjeta 3</div>
</div>
```

**Presets de `min-col`:**
* `min-col="2xs"`: 120px
* `min-col="xs"`: 180px
* `min-col="sm"`: 240px
* `min-col="md"`: 300px
* `min-col="lg"`: 380px
* `min-col="xl"`: 480px

---

### 2. Sistema de 12 Columnas y Spans
Define columnas fijas y expande elementos hijos fácilmente:

```html
<div layout="grid" cols="12" gap="md">
  <header span="full">Encabezado (12 col)</header>
  <main span="8">Contenido principal (8 col)</main>
  <aside span="4">Barra lateral (4 col)</aside>
</div>
```

**Modificadores de hijos:**
* `span="1"` a `span="12"` o `span="full"`
* `span-row="1"` a `span-row="6"` o `span-row="full"`
* `col-start="1"` a `col-start="12"`

---

### 3. Columnas Responsivas por Breakpoint
Controla el número de columnas según el dispositivo:

```html
<!-- 1 col en móvil, 2 en tablet, 4 en desktop -->
<div layout="grid" cols="1" cols-sm="2" cols-lg="4" gap="md">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

**Breakpoints disponibles:**
* `cols-sm="..."`: ≥ 640px
* `cols-md="..."`: ≥ 768px
* `cols-lg="..."`: ≥ 1024px
* `cols-xl="..."`: ≥ 1280px

---

### 4. Layouts Preset
Patrones de diseño listos para usar:

```html
<!-- Sidebar con ancho óptimo + contenido fluido -->
<div layout="grid" cols="sidebar-left" gap="lg">
  <nav>Menú</nav>
  <main>Panel de control</main>
</div>
```

* `cols="sidebar-left"` / `cols="sidebar-right"`
* `cols="auto-1fr"` / `cols="1fr-auto"`
* `cols="golden-left"` / `cols="golden-right"`

---

### 5. Control de Espaciado (Gaps)
Ajusta la separación entre elementos:

```html
<div layout="grid" cols="3" gap="lg" gap-y="xl">
  ...
</div>
```

Valores: `none`, `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`.
