# Contact Form Synchronization Checklist

## 📋 Overview
This checklist ensures the **Get in Touch** contact section remains consistent across all pages where it appears.

## 🔄 Pages Using Contact Section
- ✅ **contact.html** - Full dedicated contact page
- ✅ **index.html** - Home page (Get in Touch section)  
- ❌ **projects.html** - Portfolio page (contact not used here)

---

## 📝 When to Use This Checklist

**Use this checklist when you:**
- Update the contact form structure
- Modify CAPTCHA implementation
- Change form validation rules
- Update form styling
- Modify success/error messages
- Update form handler script
- Change CAPTCHA script

**Update frequency:** After any contact form modification

---

## ✅ Form Structure Sync

### HTML Elements to Keep Consistent
- [ ] Form ID: `id="contact-form"`
- [ ] Form method: `method="POST"`
- [ ] Form class: `class="contact-form"`
- [ ] Input field names (name, email, phone, comments)
- [ ] Input field IDs (name, email, phone, comments)
- [ ] Required attributes on: name, email, comments
- [ ] CAPTCHA container structure
- [ ] Error message containers
- [ ] Success message containers
- [ ] Loading spinner markup

### Form Fields to Verify
- [ ] Name field (required, text input, `id="name"`)
- [ ] Email field (required, email input, `id="email"`)
- [ ] Phone field (optional, text input, `id="phone"`)
- [ ] Message field (required, textarea, `id="comments"`)
- [ ] CAPTCHA checkbox (`id="captchaCheck"`)
- [ ] CAPTCHA challenge display with:
  - [ ] First number span (`id="num1"`)
  - [ ] Second number span (`id="num2"`)
- [ ] CAPTCHA answer input (`id="captchaAnswer"`)
- [ ] CAPTCHA error div (`id="captchaError"`)
- [ ] Submit button text: "Get in Touch"
- [ ] Form loader div (`id="formLoader"`)
- [ ] Success message div (`id="formSuccess"`)
- [ ] Error message div (`id="formError"`)
- [ ] Error message text span (`id="errorMessage"`)

---

## 🔐 CAPTCHA Implementation Sync

### HTML Structure
- [ ] Captcha box classes: `.captcha-box`
- [ ] Checkbox wrapper: `.captcha-checkbox-wrapper`
- [ ] Checkbox custom: `.checkbox-custom`
- [ ] Label text: `Verify you're human`
- [ ] Shield icon: `<i class="fas fa-shield-alt"></i>`
- [ ] Challenge text includes: "What is [num1] + [num2] ?"
- [ ] Answer input placeholder: "?"
- [ ] Answer input type: `number` with `min="0" max="20"`
- [ ] All Material Design styling classes applied

### JavaScript Files
- [ ] `assets/js/captcha-class.js` is identical in all pages
- [ ] CAPTCHA initialization code same
- [ ] Event listeners properly bound
- [ ] Validation logic consistent
- [ ] Math operation: always addition (+)

### Styling Classes to Verify
- [ ] `.captcha-box` - Main container styling
- [ ] `.captcha-checkbox-wrapper` - Checkbox wrapper
- [ ] `.checkbox-custom` - Custom checkbox display
- [ ] `.captcha-label` - Label text styling
- [ ] `.captcha-challenge` - Challenge text container
- [ ] `.captcha-number` - Number display styling (blue background)
- [ ] `.captcha-answer` - Answer input styling
- [ ] `.captcha-answer:focus` - Focus state (blue border)
- [ ] `.captcha-answer.valid` - Valid state (green border)
- [ ] `.captcha-error` - Error message styling (red text)

### Material Design Colors (Verify Consistency)
- [ ] Checkbox border: `#bdbdbd`
- [ ] Checkbox hover: `#9c9c9c`
- [ ] Checkbox checked: `#667eea` (background and border)
- [ ] Number background: `rgba(25, 118, 210, 0.08)`
- [ ] Number color: `#1976d2`
- [ ] Answer border: `#e0e0e0`
- [ ] Answer focus border: `#667eea`
- [ ] Answer valid border: `#10b981`
- [ ] Error color: `#dc2626`

---

## 📜 Script Files Sync

### Required Scripts (Both Pages)
- [ ] `assets/js/captcha-class.js` - Same version on contact.html and index.html
- [ ] `assets/js/form-handler.js` - Same version on contact.html and index.html
- [ ] Script load order identical
- [ ] Scripts loaded BEFORE `main.js`
- [ ] No duplicate script loads

### Script Placement in HTML
- [ ] Contact page: Scripts in order:
  ```html
  <script src="assets/js/config.js"></script>
  <script src="assets/js/captcha-class.js"></script>
  <script src="assets/js/form-handler.js"></script>
  <script src="assets/js/main.js"></script>
  ```
- [ ] Home page: Scripts in same order
- [ ] Both pages have identical placement

### Initialization Code
- [ ] CAPTCHA class instantiated after DOM ready
- [ ] Form handler initialization after DOM ready
- [ ] Event listeners attached to: `#contact-form`, `#captchaCheck`, `#captchaAnswer`
- [ ] Error handling identical on both pages

---

## 🎨 Styling Sync

### Inline CSS (Within Form)
- [ ] `.captcha-box` styling block identical
- [ ] All keyframe animations (`@keyframes slideDown`) identical
- [ ] All inline styles on wrapper divs consistent
- [ ] Flexbox properties same

### CSS Classes Used (From External Stylesheet)
- [ ] `.contact-style-one-area` wrapper
- [ ] `.form-group` styling
- [ ] `.form-control` styling
- [ ] `.btn-style-regular` button styling
- [ ] `.alert.alert-success` styling
- [ ] `.alert.alert-danger` styling
- [ ] `.comments` textarea styling

### CSS File Reference
- [ ] Both pages reference: `assets/css/style.css`
- [ ] Form-specific styling in main stylesheet
- [ ] CAPTCHA styling either inline or in main stylesheet
- [ ] No competing inline styles

### Responsive Design
- [ ] Mobile breakpoints identical (Bootstrap col-lg-6, etc.)
- [ ] Padding consistency: 12px 16px for captcha-box
- [ ] Form width constraints same
- [ ] Touch-friendly sizing: 24px checkbox
- [ ] Input padding consistent: 10px 14px

---

## 🔧 Form Handler Sync

### JavaScript Variables Used
- [ ] Form element ID: `contact-form`
- [ ] CAPTCHA checkbox ID: `captchaCheck`
- [ ] CAPTCHA answer ID: `captchaAnswer`
- [ ] CAPTCHA error ID: `captchaError`
- [ ] Form loader ID: `formLoader`
- [ ] Success message ID: `formSuccess`
- [ ] Error message ID: `formError`
- [ ] Error text span ID: `errorMessage`

### Form Submission Behavior
- [ ] Form submits to same Google Apps Script endpoint
- [ ] Request method: POST
- [ ] Data includes: name, email, phone, comments
- [ ] CAPTCHA validation required before submission
- [ ] Loading spinner shows during submission
- [ ] Success message appears on success
- [ ] Error message appears on failure
- [ ] Form clears on successful submission

### Error Handling
- [ ] Name required validation
- [ ] Email required and format validation
- [ ] Comments required validation
- [ ] CAPTCHA validation before form submission
- [ ] Network error handling identical
- [ ] Timeout handling consistent
- [ ] Error messages displayed in same location

---

## 🛡️ CAPTCHA Sync

### CAPTCHA Class Initialization
- [ ] Both pages instantiate Captcha class
- [ ] Constructor parameters identical
- [ ] Configuration options same

### CAPTCHA Methods
- [ ] `generateChallenge()` generates random numbers 1-10
- [ ] `validateAnswer()` checks user input
- [ ] `reset()` clears answer and error
- [ ] `disable()` disables form submission
- [ ] `enable()` allows form submission
- [ ] Visual feedback identical

### CAPTCHA Validation Flow
- [ ] Checkbox unchecked: Answer field hidden
- [ ] Checkbox checked: Answer field shown
- [ ] Answer input shown only when checkbox checked
- [ ] Correct answer: Green border, form can submit
- [ ] Wrong answer: Red error message, form blocked
- [ ] Submit blocked until CAPTCHA validated
- [ ] No answer: Error message shown

---

## 📱 Responsive Design Verification

### Mobile (< 768px)
- [ ] Form container proper width
- [ ] Input fields fully visible
- [ ] CAPTCHA checkbox readable (24x24px)
- [ ] Answer input accessible
- [ ] Submit button tappable (44px+ height)
- [ ] Challenge text wraps properly
- [ ] No overflow or scroll required

### Tablet (768px - 1024px)
- [ ] Form layout optimal
- [ ] Spacing appropriate
- [ ] All elements visible
- [ ] Challenge text on single line if possible

### Desktop (> 1024px)
- [ ] Form centered in container
- [ ] Max-width applied if needed
- [ ] Illustration visible alongside form (contact.html)
- [ ] Proper grid alignment (col-lg-6 positioning)

---

## 🧪 Testing Checklist

After any changes, test on each page:

### Contact Form Tests
- [ ] Page loads without console errors
- [ ] Form renders with all fields
- [ ] Name field accepts input
- [ ] Email field accepts input
- [ ] Phone field accepts input (optional)
- [ ] Comments textarea accepts multi-line input
- [ ] CAPTCHA displays correctly
- [ ] Checkbox has proper 24px styling
- [ ] Numbers display in blue boxes

### CAPTCHA Tests
- [ ] Initially: Checkbox unchecked, answer hidden
- [ ] Click checkbox: Answer field shows
- [ ] Uncheck checkbox: Answer field hides
- [ ] New challenge generates on each check
- [ ] Math challenge is: number1 + number2 = ?
- [ ] Numbers are between 1-10

### Validation Tests
- [ ] Empty form: Submit button works but form rejected
- [ ] No name: Error shown under name field
- [ ] Invalid email: Error shown under email field
- [ ] No message: Error shown under comments field
- [ ] Checkbox unchecked: Form won't submit (blocked)
- [ ] Incorrect CAPTCHA answer: Error message appears
- [ ] Correct CAPTCHA answer: Green border, form submitable

### Submission Tests
- [ ] Click submit with valid form: Loading spinner appears
- [ ] Network request sent to Google Apps Script
- [ ] Success message displays (green box with checkmark)
- [ ] Form clears after success
- [ ] Navigate away works after success

### Visual Tests
- [ ] Font sizes consistent
- [ ] Colors match Material Design palette
- [ ] Spacing and padding consistent
- [ ] Border radius consistent (12px boxes, 6px inputs)
- [ ] Shadows match (elevation 1 style)
- [ ] Hover states work on checkbox
- [ ] Focus states work on answer input
- [ ] Icons display correctly (shield icon)

### Browser Compatibility
- [ ] Chrome/Edge 90+ ✅
- [ ] Firefox 88+ ✅
- [ ] Safari 14+ ✅
- [ ] Mobile Chrome ✅
- [ ] Mobile Safari ✅

---

## 📂 Files to Compare When Syncing

When updating contact form, compare these sections:

```
Pages to sync:
- contact.html (lines 158-283 approximately)
- index.html (current contact section)

Scripts to verify:
- assets/js/form-handler.js (same on both pages)
- assets/js/captcha-class.js (same on both pages)
- assets/css/style.css (form/captcha styles)
```

**Quick Diff Command:**
```bash
# Show differences in contact form section
diff <(sed -n '158,283p' contact.html) <(sed -n '1092,1220p' index.html)
```

---

## 🔗 Related Files

**Form & CAPTCHA Implementation:**
- [`contact.html`](contact.html) - Primary contact form implementation
- [`index.html`](index.html) - Home page with synced form
- [`assets/js/form-handler.js`](assets/js/form-handler.js) - Form submission handler
- [`assets/js/captcha-class.js`](assets/js/captcha-class.js) - CAPTCHA verification logic

**Documentation:**
- [`dev-toolkit-guides/form-handlers/docs/CAPTCHA-QUICK-START.md`](../dev-toolkit-guides/form-handlers/docs/CAPTCHA-QUICK-START.md)
- [`dev-toolkit-guides/form-handlers/docs/CAPTCHA-UI.md`](../dev-toolkit-guides/form-handlers/docs/CAPTCHA-UI.md)
- [`dev-toolkit-guides/form-handlers/README.md`](../dev-toolkit-guides/form-handlers/README.md)

---

## 📋 Maintenance Log

| Date | Changes Made | Updated By |
|------|--------------|-----------|
| 2026-02-15 | Initial sync checklist created, contact form added to home page | GitHub Copilot |
| | | |

---

## 💡 Quick Reference

### Form IDs Reference
```html
Form: #contact-form
Name: #name
Email: #email
Phone: #phone
Comments: #comments
CAPTCHA Check: #captchaCheck
CAPTCHA Num1: #num1
CAPTCHA Num2: #num2
CAPTCHA Answer: #captchaAnswer
CAPTCHA Error: #captchaError
Form Loader: #formLoader
Success Message: #formSuccess
Error Message: #formError
Error Text: #errorMessage
```

### Form Field Requirements
```
Name:     Required, Type: text
Email:    Required, Type: email
Phone:    Optional, Type: text
Comments: Required, Type: textarea
CAPTCHA:  Required (blocks submission if wrong)
```

### Script Execution Order
```
1. jQuery libraries loaded
2. config.js (configuration)
3. captcha-class.js (CAPTCHA class definition)
4. form-handler.js (Form handler initialization)
5. main.js (Main script execution)
6. theme-switcher.js (Theme functionality)
```

---

## ⚠️ Common Pitfalls to Avoid

1. **Don't forget required attributes** - Name, email, comments must have `required`
2. **Don't change form ID** - Form handler references `#contact-form`
3. **Don't change CAPTCHA IDs** - JavaScript references specific element IDs
4. **Don't update only one page** - Always sync both pages
5. **Don't remove CAPTCHA scripts** - Both pages need `captcha-class.js` and `form-handler.js`
6. **Don't change styling colors** - Keep Material Design palette consistent
7. **Don't forget testing** - Test on both pages before committing

---

**Last Updated:** February 15, 2026  
**Checklist Version:** 1.0  
**Status:** Active - Use for ongoing maintenance
