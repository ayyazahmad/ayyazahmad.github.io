// ============================================
// UTILITY FUNCTIONS
// Shared functions across all pages
// ============================================

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @param {string} feedbackMsg - Optional feedback message
 */
function copyToClipboard(text, feedbackMsg = 'Copied to clipboard!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(feedbackMsg, 'success');
  }).catch(err => {
    console.error('Failed to copy:', err);
    showToast('Failed to copy', 'error');
  });
}

/**
 * Show temporary toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type: 'success', 'error', 'info'
 * @param {number} duration - Duration in ms
 */
function showToast(message, type = 'info', duration = 2000) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  // Style toast
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    z-index: 9999;
    animation: slideUp 0.3s ease-out;
    background: var(--color-accent);
    color: var(--color-dark-bg);
  `;
  
  if (type === 'error') {
    toast.style.background = '#DC2626';
    toast.style.color = '#FFFFFF';
  } else if (type === 'success') {
    toast.style.background = '#10B981';
    toast.style.color = '#FFFFFF';
  }

  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

/**
 * Format currency amount
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (USD, PKR, etc)
 * @returns {string} Formatted amount
 */
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

/**
 * Debounce function
 * @param {function} fn - Function to debounce
 * @param {number} delay - Delay in ms
 */
function debounce(fn, delay = 300) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean}
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Smooth scroll to element
 * @param {HTMLElement|string} target - Target element or selector
 * @param {number} offset - Offset in px
 */
function smoothScrollTo(target, offset = 0) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({
    top,
    behavior: 'smooth'
  });
}

/**
 * Format date to readable string
 * @param {Date} date - Date to format
 * @returns {string} Formatted date
 */
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}

/**
 * Get URL parameter
 * @param {string} param - Parameter name
 * @returns {string|null} Parameter value
 */
function getUrlParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

/**
 * Load external script
 * @param {string} src - Script source
 * @returns {Promise} Script load promise
 */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/**
 * Track page view (analytics)
 * @param {string} pageName - Page name
 */
function trackPageView(pageName) {
  if (window.gtag) {
    gtag('config', 'GA_MEASUREMENT_ID', {
      'page_path': window.location.pathname,
      'page_title': pageName
    });
  }
}

/**
 * Track event (analytics)
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label
 */
function trackEvent(category, action, label) {
  if (window.gtag) {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
}

/**
 * Validate email
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Animate number counter
 * @param {HTMLElement} element - Element to update
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 1000) {
  let start = 0;
  const step = (target / duration) * 16.67;
  
  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(interval);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, 16.67);
}

// Export for use
window.copyToClipboard = copyToClipboard;
window.showToast = showToast;
window.formatCurrency = formatCurrency;
window.debounce = debounce;
window.isInViewport = isInViewport;
window.smoothScrollTo = smoothScrollTo;
window.formatDate = formatDate;
window.getUrlParam = getUrlParam;
window.loadScript = loadScript;
window.validateEmail = validateEmail;
window.animateCounter = animateCounter;
