/* ========================================
   AzAd BrowserKit - Main JavaScript
   ======================================== */

// =========== DARK MODE TOGGLE ===========
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  html.setAttribute('data-theme', 'light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    html.setAttribute('data-theme', isLight ? 'light' : 'dark');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// =========== MOBILE MENU TOGGLE ===========
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// =========== STICKY HEADER ON SCROLL ===========
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// =========== SET ACTIVE NAV LINK ===========
document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');

  // Remove protocol and domain to compare paths
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop() || 'index.html';
  const linkFile = href.split('/').pop();

  if (linkFile === currentFile) {
    link.classList.add('active');
  }
});

// =========== FAQ ACCORDION ===========
const faqItems = document.querySelectorAll('.faq-item');
const faqSearch = document.getElementById('faqSearch');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  if (question) {
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.faq-question').classList.remove('active');
          otherItem.querySelector('.faq-answer').classList.remove('active');
        }
      });

      // Toggle current item
      question.classList.toggle('active');
      answer.classList.toggle('active');
    });
  }
});

// =========== FAQ SEARCH/FILTER ===========
if (faqSearch) {
  faqSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question h4');
      const answer = item.querySelector('.faq-answer p');

      const questionText = question ? question.textContent.toLowerCase() : '';
      const answerText = answer ? answer.textContent.toLowerCase() : '';

      if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// =========== COPY TO CLIPBOARD ===========
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const textToCopy = btn.getAttribute('data-copy');

    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = '✓ Copied!';
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    });
  });
});

// =========== SMOOTH SCROLL FOR ANCHOR LINKS ===========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// =========== LAZY LOAD IMAGES ===========
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// =========== CONTACT FORM SUBMISSION ===========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      // Construct mailto link
      const subject = encodeURIComponent('AzAd BrowserKit - Support Request');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
    }
  });
}

// =========== FEATURE CARD CLICK HANDLER ===========
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', function () {
    // Could open a modal or scroll to detailed section
    const featureName = this.querySelector('h3').textContent;
    console.log('Feature clicked:', featureName);
  });
});

// =========== PAGE LOAD ANIMATION ===========
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// =========== SCROLL TO TOP BUTTON ===========
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// =========== PREVENT CONSOLE ERRORS ===========
console.log('AzAd BrowserKit - GitHub Pages loaded successfully');
