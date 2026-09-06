/**
 * TaxUI Framework Build & Minification Pipeline
 * Zero-dependency, ultra-fast Node.js bundler and minifier.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PKG = require(path.join(ROOT_DIR, 'package.json'));

const BANNER = `/*! TaxUI Framework v${PKG.version} | MIT License | https://github.com/TaxUI/taxui */\n`;

/**
 * Minifies raw CSS string
 */
function minifyCSS(css) {
  let minified = css;

  // 1. Preserve important comments (/*! ... */) and remove standard comments
  const preservedComments = [];
  minified = minified.replace(/\/\*!([\s\S]*?)\*\//g, (match) => {
    preservedComments.push(match);
    return `___PRESERVED_COMMENT_${preservedComments.length - 1}___`;
  });
  minified = minified.replace(/\/\*[\s\S]*?\*\//g, '');

  // 2. Normalize whitespace
  minified = minified.replace(/\s+/g, ' ');

  // 3. Remove space around operators and syntax delimiters
  minified = minified.replace(/\s*([{};:,>+~])\s*/g, '$1');

  // 4. Fix spaces needed inside calc() for addition and subtraction without breaking CSS custom properties (--var-name)
  let calcProcessed = '';
  let i = 0;
  while (i < minified.length) {
    if (minified.slice(i, i + 5) === 'calc(') {
      let depth = 1;
      let start = i + 5;
      let j = start;
      while (j < minified.length && depth > 0) {
        if (minified[j] === '(') depth++;
        else if (minified[j] === ')') depth--;
        j++;
      }
      const expr = minified.slice(start, j - 1);
      const vars = [];
      let clean = expr.replace(/(?:var|env)\([^()]+\)/g, (v) => {
        vars.push(v);
        return `___TOKEN_${vars.length - 1}___`;
      });
      clean = clean.replace(/\s*([+])\s*/g, ' + ');
      clean = clean.replace(/(?<=[0-9a-zA-Z%_\)])\s*-\s*(?=[0-9a-zA-Z%_\(])/g, ' - ');
      clean = clean.replace(/\s*([*\/])\s*/g, ' $1 ');
      clean = clean.replace(/\s+/g, ' ').trim();
      vars.forEach((v, idx) => {
        clean = clean.replace(`___TOKEN_${idx}___`, v);
      });
      calcProcessed += 'calc(' + clean + ')';
      i = j;
    } else {
      calcProcessed += minified[i];
      i++;
    }
  }
  minified = calcProcessed;

  // 5. Remove trailing semicolons before closing brace
  minified = minified.replace(/;}/g, '}');

  // 6. Optimize zero units (0px, 0rem, 0em, 0% -> 0)
  minified = minified.replace(/(?<=[:\s])0(?:px|rem|em|%|pt)/g, '0');

  // 7. Restore preserved comments
  preservedComments.forEach((comment, index) => {
    minified = minified.replace(`___PRESERVED_COMMENT_${index}___`, comment + '\n');
  });

  return minified.trim();
}

/**
 * Recursively resolves and inlines @import statements
 */
function bundleCSS(entryFilePath, visited = new Set()) {
  const absolutePath = path.resolve(entryFilePath);
  if (visited.has(absolutePath)) {
    return '';
  }
  visited.add(absolutePath);

  const fileDir = path.dirname(absolutePath);
  const content = fs.readFileSync(absolutePath, 'utf8');

  return content.replace(/@import\s+['"]([^'"]+)['"];?/g, (match, relativeImport) => {
    const importPath = path.resolve(fileDir, relativeImport);
    if (!fs.existsSync(importPath)) {
      console.warn(`[WARN] Import file not found: ${importPath}`);
      return `/* Missing import: ${relativeImport} */`;
    }
    return bundleCSS(importPath, visited);
  });
}

/**
 * Format byte sizes into readable string
 */
function formatBytes(bytes) {
  return (bytes / 1024).toFixed(2) + ' KB';
}

/**
 * Measure compression stats
 */
function getStats(buffer) {
  const rawSize = buffer.length;
  const gzipSize = zlib.gzipSync(buffer).length;
  const brotliSize = zlib.brotliCompressSync ? zlib.brotliCompressSync(buffer).length : null;

  return { rawSize, gzipSize, brotliSize };
}

/**
 * Build a target bundle
 */
function buildTarget(name, entryFile, outputFileName) {
  const bundledCSS = bundleCSS(entryFile);
  const unminified = BANNER + bundledCSS.trim();
  const minified = BANNER + minifyCSS(bundledCSS);

  const outCss = path.join(DIST_DIR, `${outputFileName}.css`);
  const outMinCss = path.join(DIST_DIR, `${outputFileName}.min.css`);

  fs.writeFileSync(outCss, unminified, 'utf8');
  fs.writeFileSync(outMinCss, minified, 'utf8');

  const minBuffer = Buffer.from(minified, 'utf8');
  const rawBuffer = Buffer.from(unminified, 'utf8');

  const rawStats = getStats(rawBuffer);
  const minStats = getStats(minBuffer);
  const reduction = (((rawStats.rawSize - minStats.rawSize) / rawStats.rawSize) * 100).toFixed(1);

  return {
    name,
    file: `${outputFileName}.min.css`,
    raw: formatBytes(rawStats.rawSize),
    min: formatBytes(minStats.rawSize),
    gzip: formatBytes(minStats.gzipSize),
    brotli: minStats.brotliSize ? formatBytes(minStats.brotliSize) : 'N/A',
    reduction: `${reduction}%`
  };
}

/**
 * Main Build Runner
 */
function build() {
  const startTime = Date.now();
  console.log('\n\x1b[36m%s\x1b[0m', `🚀 Building TaxUI Framework v${PKG.version}...`);

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const results = [];

  // 1. Full Master Bundle
  results.push(buildTarget('TaxUI Full Bundle', path.join(SRC_DIR, 'main.css'), 'taxui'));

  // Helper temporary entry points for standalone sub-modules
  const createSubModuleEntry = (imports) => {
    const tmpPath = path.join(DIST_DIR, '_tmp_entry.css');
    fs.writeFileSync(tmpPath, imports.map(i => `@import "${path.resolve(SRC_DIR, i).replace(/\\/g, '/')}";`).join('\n'), 'utf8');
    return tmpPath;
  };

  // 2. Modular Sub-Bundles
  const baseEntry = createSubModuleEntry(['base/variables.css', 'base/themes.css', 'base/reset.css']);
  results.push(buildTarget('Base & Themes', baseEntry, 'taxui-base'));

  const layoutEntry = createSubModuleEntry(['layout/grid.css', 'layout/flex.css', 'layout/page.css']);
  results.push(buildTarget('Layout Primitives', layoutEntry, 'taxui-layout'));

  const compEntry = createSubModuleEntry([
    'components/navbars.css',
    'components/tabs.css',
    'components/breadcrumbs.css',
    'components/pagination.css',
    'components/forms.css', 'components/buttons.css', 'components/cards.css',
    'components/badges.css', 'components/alerts.css', 'components/avatars.css',
    'components/tables.css', 'components/modals.css', 'components/accordions.css',
    'components/tooltips.css', 'components/skeletons.css'
  ]);
  results.push(buildTarget('UI Components', compEntry, 'taxui-components'));

  const utilEntry = createSubModuleEntry(['utilities/utilities.css', 'utilities/scrollbars.css']);
  results.push(buildTarget('Utilities & Scrollbars', utilEntry, 'taxui-utilities'));

  // Cleanup temp entry
  const tmpPath = path.join(DIST_DIR, '_tmp_entry.css');
  if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);

  // Print results table
  console.log('\n\x1b[32m%s\x1b[0m', '✅ Build completed successfully!\n');
  console.table(results);

  const duration = Date.now() - startTime;
  console.log(`⏱️  Total build time: \x1b[33m${duration}ms\x1b[0m\n`);

  return results;
}

/**
 * Test Validator
 */
function test() {
  console.log('\x1b[36m%s\x1b[0m', '🧪 Validating build integrity...');
  const results = build();

  const requiredOutputs = [
    'taxui.css', 'taxui.min.css',
    'taxui-base.css', 'taxui-base.min.css',
    'taxui-layout.css', 'taxui-layout.min.css',
    'taxui-components.css', 'taxui-components.min.css',
    'taxui-utilities.css', 'taxui-utilities.min.css'
  ];

  for (const file of requiredOutputs) {
    const filePath = path.join(DIST_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.error(`\x1b[31m[FAIL] Missing expected output: ${file}\x1b[0m`);
      process.exit(1);
    }
    const stat = fs.statSync(filePath);
    if (stat.size === 0) {
      console.error(`\x1b[31m[FAIL] Empty output file: ${file}\x1b[0m`);
      process.exit(1);
    }
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('___PRESERVED_COMMENT_') || content.includes('/* Missing import')) {
      console.error(`\x1b[31m[FAIL] Unresolved tokens in output: ${file}\x1b[0m`);
      process.exit(1);
    }
  }

  console.log('\x1b[32m%s\x1b[0m', `🎉 All ${requiredOutputs.length} distribution bundles verified successfully!`);
}

// Check CLI arguments
const isWatch = process.argv.includes('--watch');
const isTest = process.argv.includes('--test');

if (isTest) {
  test();
} else if (isWatch) {
  build();
  console.log('\x1b[35m%s\x1b[0m', '👀 Watching src/ for changes... Press Ctrl+C to stop.');
  fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.css')) {
      console.log(`\n🔄 File changed: ${filename}`);
      build();
    }
  });
} else {
  build();
}
