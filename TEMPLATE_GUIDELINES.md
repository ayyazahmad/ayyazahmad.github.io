# AzAd Website - Page Template Guidelines

This document explains how to ensure all new pages have consistent headers, footers, and scroll-to-top functionality.

## Template Files

Three template files are provided to maintain consistency across all pages:

1. **HEADER_TEMPLATE.html** - Navigation header that appears at the top of every page
2. **FOOTER_TEMPLATE.html** - Footer that appears at the bottom of every page  
3. **PAGE_TEMPLATE.html** - Complete page template showing where to place your content

## Required Elements for All New Pages

Every page MUST include these elements in this order:

### 1. Head Section (Required for ALL pages)

```html
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Page Description Here">
    <title>Page Title - AzAd</title>
    <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon">
    
    <!-- All CSS Files (COPY THESE EXACTLY) -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/magnific-popup.css" rel="stylesheet">
    <link href="assets/css/swiper-bundle.min.css" rel="stylesheet">
    <link href="assets/css/animate.min.css" rel="stylesheet">
    <link href="assets/css/validnavs.css" rel="stylesheet">
    <link href="assets/css/helper.css" rel="stylesheet">
    <link href="assets/css/unit-test.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>
```

### 2. Preloader (Copy from HEADER_TEMPLATE.html)

The animated loading screen that appears when the page loads.

### 3. Header Navigation (Copy from HEADER_TEMPLATE.html)

The top navigation bar with:
- Logo (AzAd Light Theme)
- Menu links: Home, About, Services, Projects, Contact, Donate
- Search bar
- Support Us button

### 4. Page Content

Your custom content goes here. Remember to update the breadcrumb:

```html
<div class="breadcrumb-area text-center">
    <div class="container">
        <h1>Your Page Title</h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                <li class="active">Your Page Name</li>
            </ol>
        </nav>
    </div>
</div>
```

### 5. Footer (Copy from FOOTER_TEMPLATE.html)

```html
<footer class="default-padding bg-cover" style="background-image: url(assets/img/shape/1.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="footer-items text-center">
                    <a href="index.html" class="footer-logot">
                        <img src="assets/img/logo/Logo for Light Theme.png" alt="AzAd Logo" style="height: 50px; margin: 0 auto 20px;">
                    </a>
                    <ul class="foter-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="donation.html">Donate</a></li>
                    </ul>
                    <p>Copyright &copy; 2026 AzAd. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>
```

### 6. Scripts (REQUIRED - Copy ALL of these)

All JavaScript files must be included in this exact order:

```html
<!-- jQuery Frameworks -->
<script src="assets/js/jquery-3.6.0.min.js"></script>
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/jquery.appear.js"></script>
<script src="assets/js/jquery.easing.min.js"></script>
<script src="assets/js/swiper-bundle.min.js"></script>
<script src="assets/js/progress-bar.min.js"></script>
<script src="assets/js/wow.min.js"></script>
<script src="assets/js/isotope.pkgd.min.js"></script>
<script src="assets/js/imagesloaded.pkgd.min.js"></script>
<script src="assets/js/magnific-popup.min.js"></script>
<script src="assets/js/jquery.waypoints.js"></script>
<script src="assets/js/count-to.js"></script>
<script src="assets/js/YTPlayer.min.js"></script>
<script src="assets/js/validnavs.js"></script>
<script src="assets/js/gsap.js"></script>
<script src="assets/js/ScrollTrigger.min.js"></script>
<script src="assets/js/jquery.lettering.min.js"></script>
<script src="assets/js/jquery.circleType.js"></script>
<script src="assets/js/typed.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/config.js"></script>
```

### 7. Scroll-to-Top Button (REQUIRED - Always include)

```html
<!-- Scroll to Top Button -->
<div class="scroll-to-top">
    <span class="scroll-icon">
        <i class="fa fa-arrow-up"></i>
    </span>
</div>
<!-- Theme Switcher -->
<script src="assets/js/theme-switcher.js"></script>
```

## Quick Checklist for New Pages

- [ ] Copy the complete structure from PAGE_TEMPLATE.html
- [ ] Update `<title>` tag (e.g., "My Page - AzAd")
- [ ] Update meta description
- [ ] Update breadcrumb navigation (Home > Your Page Name)
- [ ] Update page content section
- [ ] Verify all CSS files are linked
- [ ] Verify all JavaScript files are included in correct order
- [ ] Verify scroll-to-top button is present
- [ ] Verify footer links point to correct pages
- [ ] Test that scroll-to-top button appears when scrolling

## Navigation Links

All pages should use these consistent links:

- **Home**: `index.html`
- **About**: `index.html#about` 
- **Services**: `index.html#services`
- **Projects**: `projects.html`
- **Contact**: `contact.html`
- **Donate/Donation**: `donation.html`

## Logo Usage

- **Header**: Use `assets/img/logo/Logo for Light Theme.png` at 45px height
- **Footer**: Use `assets/img/logo/Logo for Light Theme.png` at 50px height

## Current Pages Using This Structure

✓ index.html - Homepage
✓ projects.html - Projects listing
✓ contact.html - Contact form
✓ donation.html - Donation/Pricing page

## Need to Create a New Page?

1. Start with PAGE_TEMPLATE.html
2. Follow the checklist above
3. Update navigation if needed
4. Test all links and scroll-to-top functionality
5. Commit with descriptive message: `git commit -m "Add new-page.html with header, footer, and scroll-to-top"`

---

**Last Updated**: February 8, 2026
**Maintained by**: AzAd Development Team
