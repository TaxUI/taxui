/**
 * TaxUI Documentation Shared Script
 */

// Initialize saved theme & accent from localStorage
(function initTheme() {
  const savedTheme = localStorage.getItem('taxui-theme') || 'dark';
  const savedAccent = localStorage.getItem('taxui-accent') || 'blue';
  document.documentElement.setAttribute('theme', savedTheme);
  document.documentElement.setAttribute('theme-accent', savedAccent);
})();

document.addEventListener('DOMContentLoaded', () => {
  // Sync active accent button and theme icon
  const currentAccent = document.documentElement.getAttribute('theme-accent') || 'blue';
  const currentTheme = document.documentElement.getAttribute('theme') || 'dark';
  updateThemeIcon(currentTheme);

  document.querySelectorAll('.accent-btn').forEach(btn => {
    btn.classList.toggle('active', btn.classList.contains('accent-' + currentAccent));
  });

  // Auto-highlight current page in sidebar
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.docs-nav-link').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentPath || (currentPath === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Keyboard shortcut (Ctrl+K or Cmd+K) to focus search
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.getElementById('docs-search');
      if (searchInput) searchInput.focus();
    }
  });
});

// Copy Code Snippet Helper
function copyCode(btn) {
  const pre = btn.parentElement.querySelector('pre');
  if (!pre) return;
  const code = pre.innerText;
  navigator.clipboard.writeText(code).then(() => {
    const originalText = btn.innerText;
    btn.innerText = 'Copied!';
    btn.setAttribute('variant', 'primary');
    setTimeout(() => {
      btn.innerText = originalText;
      btn.setAttribute('variant', 'ghost');
    }, 1800);
  });
}

const SUN_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>';
const MOON_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
  }
}

// Dark / Light Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('theme', next);
  localStorage.setItem('taxui-theme', next);
  updateThemeIcon(next);
}

// Accent Palette Switcher
function setAccent(accent) {
  document.documentElement.setAttribute('theme-accent', accent);
  localStorage.setItem('taxui-accent', accent);
  document.querySelectorAll('.accent-btn').forEach(btn => {
    btn.classList.toggle('active', btn.classList.contains('accent-' + accent));
  });
}

// Search / Filter helper
function filterDocs(query) {
  const q = query.toLowerCase().trim();
  const links = document.querySelectorAll('.docs-nav-link');
  links.forEach(link => {
    const text = link.innerText.toLowerCase();
    link.style.display = text.includes(q) ? 'flex' : 'none';
  });
}
