// ============================================
// THEME SWITCHER
// Handles all theme switching logic
// ============================================

class ThemeSwitcher {
  constructor() {
    this.currentTheme = this.loadTheme();
    this.currentScheme = this.loadScheme();
    this.applyTheme(this.currentTheme);
    this.applyScheme(this.currentScheme);
    // DO NOT create visible UI buttons - theme switching happens in background
    // this.createSwitcher();
    // this.attachEventListeners();
  }

  loadTheme() {
    // Check localStorage first
    const saved = localStorage.getItem(THEME_CONFIG.storageKey);
    if (saved && this.isValidTheme(saved)) {
      return saved;
    }

    // Default to tech-modern
    return THEME_CONFIG.default;
  }

  isValidTheme(themeId) {
    return THEME_CONFIG.themes.some(t => t.id === themeId);
  }

  // Scheme: 'light' or 'dark'
  loadScheme() {
    const key = 'azad-scheme';
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') return saved;
    // default to light per user preference
    return 'light';
  }

  applyScheme(scheme) {
    if (scheme === 'light') {
      document.documentElement.setAttribute('data-scheme', 'light');
    } else {
      document.documentElement.removeAttribute('data-scheme');
    }
    localStorage.setItem('azad-scheme', scheme);
    this.currentScheme = scheme;
    window.dispatchEvent(new CustomEvent('schemeChanged', { detail: { scheme } }));
  }

  applyTheme(themeId) {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem(THEME_CONFIG.storageKey, themeId);
    this.currentTheme = themeId;

    // Dispatch custom event for other scripts
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: themeId } }));
  }

  createSwitcher() {
    // Create theme switcher UI
    const switcher = document.createElement('div');
    switcher.className = 'theme-controls'; // Use the class we defined in global.css
    switcher.style.top = '100px'; // Ensure 100px offset
    switcher.innerHTML = `
      <div class="theme-switcher-vertical">
        <button class="scheme-toggle-btn" aria-label="Toggle light/dark" title="Light / Dark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        
        <div class="theme-switcher">
          <button class="theme-switch-btn" aria-label="Open theme menu" title="Change Theme">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="13.5" cy="6.5" r=".5"></circle>
              <circle cx="17.5" cy="10.5" r=".5"></circle>
              <circle cx="8.5" cy="7.5" r=".5"></circle>
              <circle cx="6.5" cy="12.5" r=".5"></circle>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.55 0 1-.45 1-1 0-.28-.22-.5-.5-.5-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h3.5c2.48 0 4.5-2.02 4.5-4.5 0-2.48-2.02-4.5-4.5-4.5h-3.5z"></path>
            </svg>
          </button>
          
          <div class="theme-menu hidden">
            ${THEME_CONFIG.themes.map(theme => `
              <button class="theme-option ${theme.id === this.currentTheme ? 'active' : ''}" 
                      data-theme="${theme.id}"
                      title="${theme.description}">
                <span class="theme-swatch" style="background: ${theme.colors.primary}"></span>
                <span class="theme-name">${theme.name}</span>
                ${theme.id === this.currentTheme ? '<span class="checkmark">✓</span>' : ''}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(switcher);
  }

  attachEventListeners() {
    const btn = document.querySelector('.theme-switch-btn');
    const schemeBtn = document.querySelector('.scheme-toggle-btn');
    const menu = document.querySelector('.theme-menu');
    const options = document.querySelectorAll('.theme-option');

    if (!btn || !menu || !options.length) {
      console.warn('Theme switcher elements not found');
      return;
    }

    // Toggle menu
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.theme-switcher')) {
        menu.classList.add('hidden');
      }
    });

    // Change theme
    options.forEach(option => {
      option.addEventListener('click', () => {
        const themeId = option.dataset.theme;
        this.applyTheme(themeId);

        // Update UI
        document.querySelectorAll('.theme-option').forEach(o => {
          o.classList.remove('active');
          const checkmark = o.querySelector('.checkmark');
          if (checkmark) checkmark.remove();
        });
        option.classList.add('active');
        option.innerHTML += '<span class="checkmark">✓</span>';

        menu.classList.add('hidden');
      });
    });

    // Keyboard navigation
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menu.classList.toggle('hidden');
      }
    });

    options.forEach(option => {
      option.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          option.click();
        }
      });
    });

    // Scheme toggle
    if (schemeBtn) {
      schemeBtn.addEventListener('click', () => {
        const next = this.currentScheme === 'light' ? 'dark' : 'light';
        this.applyScheme(next);
        // update button icon (simple rotate for feedback)
        schemeBtn.classList.add('active');
        setTimeout(() => schemeBtn.classList.remove('active'), 300);
      });
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});
