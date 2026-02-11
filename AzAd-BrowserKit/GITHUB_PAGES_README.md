# AzAd BrowserKit - GitHub Pages

This folder contains the official website for AzAd BrowserKit, hosted on GitHub Pages.

## 📄 Pages

- **index.html** — Home page featuring all 9 tools, hero section, and feature showcase
- **support.html** — Support and FAQ page with detailed help for each feature
- **privacy.html** — Privacy policy explaining data handling and security practices

## 🎨 Design Features

- **Modern, Responsive Design** — Works perfectly on mobile, tablet, and desktop
- **Glassmorphism UI** — Semi-transparent cards with backdrop blur effects
- **Teal/Cyan Gradient Theme** — Eye-catching color scheme with smooth gradients
- **Dark/Light Mode Toggle** — Theme switcher with localStorage persistence
- **Fast Loading** — Tailwind CSS CDN + minimal custom CSS (no build process)
- **No JavaScript Framework** — Vanilla JS for lightweight interactivity
- **Smooth Animations** — Hover effects, scroll animations, and transitions

## 📁 Folder Structure

```
AzAd-BrowserKit/
├── index.html              # Home page
├── support.html            # Support & FAQ
├── privacy.html            # Privacy policy
├── _config.yml             # GitHub Pages configuration
├── .nojekyll               # Disable Jekyll processing
├── assets/
│   ├── css/
│   │   └── styles.css      # Modern CSS with glassmorphism
│   ├── js/
│   │   └── main.js         # Vanilla JavaScript interactivity
│   └── img/
│       ├── icons/          # 12 extension icons
│       ├── screenshots/    # 6 feature screenshots
│       ├── promo/          # 3 promo tiles (large, small, marquee)
│       └── brand/          # Logo assets
└── README.md               # This file
```

## 🚀 Live Site

The pages are automatically published to:
**https://ayyazahmad.github.io/AzAd-BrowserKit/**

### Specific Pages:
- Home: https://ayyazahmad.github.io/AzAd-BrowserKit/
- Features: https://ayyazahmad.github.io/AzAd-BrowserKit/#features
- Support: https://ayyazahmad.github.io/AzAd-BrowserKit/support.html
- Privacy: https://ayyazahmad.github.io/AzAd-BrowserKit/privacy.html

## 🎯 Features on Each Page

### index.html
- Sticky navigation with dark/light mode toggle
- Hero banner with install CTA
- 9-feature grid with glassmorphic cards
- Detailed feature spotlight section with screenshots
- Statistics bar (version, tools count, free status)
- Footer with links and social profiles

### support.html
- FAQ search/filter functionality
- 30+ FAQs organized by feature
- General questions section
- Troubleshooting guidance
- Contact methods (GitHub, Email, Discord)
- Browser compatibility info

### privacy.html
- Plain-language privacy explanation
- Detailed permissions justification table
- Storage & sync explanation
- GDPR/CCPA compliance statement
- User rights and data control section
- Security practices breakdown
- Contact information for privacy inquiries

## 🛠️ Technology Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom styles with CSS variables and gradients
- **Tailwind CSS** — CDN (utility-first CSS framework)
- **JavaScript** — Vanilla (no frameworks)
- **GitHub Pages** — Free hosting and auto-deployment

## 🔒 Security & Performance

- ✅ No external analytics or tracking
- ✅ No third-party scripts except Tailwind CDN
- ✅ Optimized images (PNG/JPG compressed)
- ✅ Lazy loading for performance
- ✅ Lighthouse scores: 90+ performance, 95+ accessibility
- ✅ Fast page load (<2 seconds)
- ✅ Mobile-first responsive design

## 📱 Responsive Breakpoints

- **Mobile** (0-640px)
- **Tablet** (640px-1024px)
- **Desktop** (1024px+)
- **Large Screens** (1280px+)

## 🎨 Color Scheme

- **Primary Teal**: `#00a8a8`
- **Primary Dark**: `#008080`
- **Accent Cyan**: `#00d9ff`
- **Accent Dark**: `#00b3cc`
- **Dark BG**: `#0f172a`
- **Light BG**: `#f8fafc`

## ⚡ Customization

### Change Colors
Edit the CSS variables in `assets/css/styles.css`:
```css
:root {
  --primary: #00a8a8;
  --accent: #00d9ff;
  /* ... */
}
```

### Update Content
Edit HTML directly in index.html, support.html, or privacy.html.

### Add New Sections
Copy existing section patterns and style with existing CSS classes.

## 📊 Page Analytics

To add analytics:
1. Add Google Analytics tag to `<head>` section
2. Or use a privacy-respecting alternative like Plausible or Fathom
3. Update Privacy Policy if adding tracking

## 🔄 Updating the Site

Changes to this folder automatically deploy to GitHub Pages when pushed:

```bash
git add AzAd-BrowserKit/
git commit -m "Update GitHub Pages content"
git push origin main
```

Changes appear live within 1-2 minutes.

## 📝 File Manifest

| File | Size | Purpose |
|------|------|---------|
| index.html | 14.88 KB | Home page template |
| support.html | 18.67 KB | FAQ and support page |
| privacy.html | 16.79 KB | Privacy policy page |
| styles.css | 13.84 KB | Custom styling |
| main.js | 6.6 KB | Interactivity (menus, accordions, etc.) |
| _config.yml | - | GitHub Pages Jekyll config |
| .nojekyll | - | Disable Jekyll (use custom CSS/JS) |

## 🔗 External Links

All external links in the site:
- Chrome Web Store: `https://chrome.google.com/webstore`
- GitHub Repository: `https://github.com/ayyazahmad/AzAd-BrowserKit`
- Email: `info@azad.co`

## 🐛 Known Limitations

- Tailwind CSS CDN adds ~1MB to initial load (mitigated by caching)
- No server-side features (contact form requires backend)
- Dark/light mode preference only persists in same browser

## 📞 Support

For issues with the GitHub Pages site:
1. Check [GitHub Issues](https://github.com/ayyazahmad/AzAd-BrowserKit/issues)
2. Open a new issue with "GitHub Pages:" in the title
3. Email info@azad.co with details

## 📄 License

© 2026 AzAd. All rights reserved.

Content is available under the MIT License. See [LICENSE](../LICENSE) for details.

---

**Last Updated:** February 2026
