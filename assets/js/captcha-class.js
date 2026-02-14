/* ============================================
   CAPTCHA-CLASS.JS - Custom Material Design CAPTCHA
   ============================================
   
   Simple, secure CAPTCHA with no API keys required.
   Features: Math challenge, real-time validation, Material Design
   
   USAGE:
   1. Include in your HTML
   2. Instantiate: const captcha = new SimpleCaptcha();
   3. Call validate() before form submission
   
   HTML STRUCTURE REQUIRED:
   - id="captchaCheck" (checkbox)
   - id="num1" and id="num2" (display numbers)
   - id="captchaAnswer" (input field)
   - id="captchaError" (error message div)
   ============================================ */

class SimpleCaptcha {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.isValid = false;
    this.init();
  }
  
  init() {
    this.generateChallenge();
    
    const checkbox = document.getElementById('captchaCheck');
    const answerInput = document.getElementById('captchaAnswer');
    const errorDiv = document.getElementById('captchaError');
    
    if (!checkbox || !answerInput) {
      console.warn('SimpleCaptcha: Required elements not found in DOM');
      return;
    }
    
    // Show input when checkbox is checked
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        answerInput.style.display = 'inline-block';
        answerInput.focus();
      } else {
        answerInput.style.display = 'none';
        answerInput.value = '';
        errorDiv.style.display = 'none';
        this.isValid = false;
      }
    });
    
    // Validate answer in real-time
    answerInput.addEventListener('input', () => {
      const userAnswer = parseInt(answerInput.value);
      const correctAnswer = this.num1 + this.num2;
      
      if (userAnswer === correctAnswer && answerInput.value.trim() !== '') {
        this.isValid = true;
        errorDiv.style.display = 'none';
        answerInput.classList.add('valid');
      } else {
        this.isValid = false;
        answerInput.classList.remove('valid');
      }
    });
    
    // Reset on blur if empty
    answerInput.addEventListener('blur', () => {
      if (answerInput.value.trim() === '') {
        this.isValid = false;
      }
    });
  }
  
  generateChallenge() {
    this.num1 = Math.floor(Math.random() * 10) + 1;  // 1-10
    this.num2 = Math.floor(Math.random() * 10) + 1;  // 1-10
    
    const num1El = document.getElementById('num1');
    const num2El = document.getElementById('num2');
    const answerInput = document.getElementById('captchaAnswer');
    const errorDiv = document.getElementById('captchaError');
    
    if (num1El) num1El.textContent = this.num1;
    if (num2El) num2El.textContent = this.num2;
    if (answerInput) {
      answerInput.value = '';
      answerInput.classList.remove('valid');
    }
    if (errorDiv) errorDiv.style.display = 'none';
    
    this.isValid = false;
  }
  
  validate() {
    const checkbox = document.getElementById('captchaCheck');
    const answerInput = document.getElementById('captchaAnswer');
    const errorDiv = document.getElementById('captchaError');
    
    if (!checkbox || !answerInput) return false;
    
    if (!checkbox.checked) {
      errorDiv.innerHTML = 'Please verify you\'re human.';
      errorDiv.style.display = 'block';
      return false;
    }
    
    if (!this.isValid) {
      errorDiv.innerHTML = 'Incorrect answer. Please try again.';
      errorDiv.style.display = 'block';
      this.generateChallenge();
      return false;
    }
    
    return true;
  }
  
  reset() {
    const checkbox = document.getElementById('captchaCheck');
    const answerInput = document.getElementById('captchaAnswer');
    
    if (checkbox) checkbox.checked = false;
    if (answerInput) answerInput.style.display = 'none';
    
    this.generateChallenge();
  }
}
