<p align="center">
  <a href="https://taxui.github.io/taxui/">
    <img src="assets/logo.png" alt="TaxUI Logo" width="110" height="110" style="border-radius: 24px;">
  </a>
</p>

<h1 align="center">TaxUI</h1>

<p align="center">
  <strong>Modern, declarative HTML & CSS framework with zero JavaScript dependencies.</strong>
</p>

<p align="center">
  <a href="https://github.com/TaxUI/taxui/releases"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square" alt="Version"></a>
  <a href="https://github.com/TaxUI/taxui/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square" alt="License"></a>
  <img src="https://img.shields.io/badge/gzip-14.8_KB-purple.svg?style=flat-square" alt="Gzip Size">
  <img src="https://img.shields.io/badge/javascript-0%25-orange.svg?style=flat-square" alt="Zero JS">
</p>

---

## ⚡ Quick Start

### 1. Include via CDN
Add the single stylesheet to the `<head>` of your HTML document:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TaxUI/taxui@1.0.0/dist/taxui.min.css">
```

Or install via **NPM**:
```bash
npm install taxui
```
---

### 2. Starter Template

```html
<!DOCTYPE html>
<html lang="en" theme="dark" theme-accent="blue">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TaxUI App</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TaxUI/taxui@1.0.0/dist/taxui.min.css">
</head>
<body layout="sticky-footer">

  <header sticky="glass" style="padding: 1rem 2rem;">
    <div layout="split">
      <strong>TaxUI App</strong>
      <button variant="primary" size="sm" glow>Get Started</button>
    </div>
  </header>

  <main style="padding: 2rem;">
    <div card="glass" interactive>
      <div card-body>
        <h3>Hello, World!</h3>
        <p>Declarative, fast, and 100% pure CSS.</p>
      </div>
    </div>
  </main>
  
  <footer style="padding: 1.5rem 2rem; border-top: 1px solid var(--color-border); text-align: center;">
    <p style="color: var(--color-text-muted);">Released under the MIT License</p>
  </footer>

</body>
</html>
```

---

## 📖 Documentation & Demos

Explore full component examples, layout primitives, and interactive previews in our documentation:

👉 **[TaxUI Documentation](https://taxui.github.io/taxui/)**

---

## 📄 License

Licensed under the [MIT License](LICENSE).

