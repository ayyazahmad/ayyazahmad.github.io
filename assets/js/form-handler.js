/* ============================================
   FORM-HANDLER.JS - Contact Form Handler
   ============================================
   
   This form submits to Google Apps Script for email delivery.
   Includes custom Material Design CAPTCHA for spam protection.
   
   SETUP INSTRUCTIONS:
   1. Follow the guide: docs/SETUP.md
   2. Get your Apps Script deployment URL
   3. Replace GOOGLE_APPS_SCRIPT_URL below with your URL
   ============================================ */

// ⚠️ CONFIGURE YOUR GOOGLE APPS SCRIPT URL HERE
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyY6T_qD0mQ7en5aYiFGP9fp-V8vpReStwfTSKxLP9Ou3XG9X5_yYZyXhlAgkUAhJ6X/exec';

// Initialize CAPTCHA (if present on page)
const captcha = new SimpleCaptcha();

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  if (!contactForm) return;

  // Form submission handler
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate CAPTCHA FIRST
    if (!captcha.validate()) {
      return;
    }

    // Validate Apps Script URL is configured
    if (GOOGLE_APPS_SCRIPT_URL.includes('YOUR_DEPLOYMENT_ID')) {
      showFormError('Contact form not yet configured. Please contact site administrator.');
      return;
    }

    // Client-side validation
    if (!validateContactForm()) {
      return;
    }

    // Get form elements
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const loaderDiv = document.getElementById('formLoader');

    // Clear previous messages
    document.getElementById('formSuccess').style.display = 'none';
    document.getElementById('formError').style.display = 'none';

    // Show loading state
    submitBtn.style.display = 'none';
    loaderDiv.style.display = 'block';

    try {
      // Get form data as form-encoded
      const formData = new FormData(contactForm);

      // Submit to Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData
      });

      // Parse response
      const result = await response.json();

      if (result.result === 'success') {
        showFormSuccess();
        contactForm.reset();
        captcha.reset();  // Reset CAPTCHA after success
      } else {
        showFormError(result.error || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormError('Failed to send message: ' + error.message);
    } finally {
      loaderDiv.style.display = 'none';
      submitBtn.style.display = 'block';
    }
  });

  function validateContactForm() {
    const errors = {};
    
    // Get form fields - looking for all inputs/textareas for dynamic validation
    const requiredFields = contactForm.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
      const value = field.value.trim();
      const fieldName = field.getAttribute('name') || field.id;
      
      if (!value) {
        const label = contactForm.querySelector(`label[for="${field.id}"]`)?.textContent || fieldName;
        errors[fieldName] = `${label} is required`;
      } else if (field.type === 'email' && !isValidEmail(value)) {
        errors[fieldName] = 'Please enter a valid email address';
      } else if (value.length < 2) {
        errors[fieldName] = `${fieldName} must be at least 2 characters`;
      }
    });

    // Display errors
    clearFormErrors();
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach(field => {
        const input = contactForm.querySelector(`[name="${field}"]`);
        if (input) {
          input.classList.add('error');
          const errorDiv = input.parentElement.querySelector('.form-error');
          if (errorDiv) {
            errorDiv.textContent = errors[field];
            errorDiv.style.display = 'block';
          }
        }
      });
      return false;
    }

    return true;
  }

  function clearFormErrors() {
    contactForm.querySelectorAll('.form-error').forEach(error => {
      error.style.display = 'none';
    });
    contactForm.querySelectorAll('input, textarea, select').forEach(input => {
      input.classList.remove('error');
    });
  }

  function showFormSuccess() {
    const successDiv = document.getElementById('formSuccess');
    const errorDiv = document.getElementById('formError');
    errorDiv.style.display = 'none';
    successDiv.style.display = 'block';
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showFormError(message) {
    const errorDiv = document.getElementById('formError');
    const successDiv = document.getElementById('formSuccess');
    const errorMessage = document.getElementById('errorMessage');
    successDiv.style.display = 'none';
    errorMessage.textContent = message || 'Failed to send message. Please try again.';
    errorDiv.style.display = 'block';
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
