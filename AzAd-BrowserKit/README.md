# AzAd BrowserKit - Documentation & GitHub Pages

This `docs` folder contains the complete GitHub Pages website for AzAd BrowserKit.

## 📁 Folder Structure

```
docs/
├── index.html              # Home page
├── support.html            # Support & FAQ
├── privacy.html            # Privacy policy
├── _config.yml             # GitHub Pages config
├── .nojekyll               # Disable Jekyll processing
├── README.md               # This file
└── assets/
    ├── css/
    │   └── styles.css      # Modern CSS (fixed light mode)
    ├── js/
    │   └── main.js         # Vanilla JavaScript
    └── img/
        ├── icons/          # 12 extension icons
        ├── screenshots/    # 6 feature screenshots
        ├── promo/          # 3 promo tiles
        └── brand/          # Brand assets
```

## 🎨 Light Theme Fixes

The CSS has been updated with proper light-mode support:

✅ **Text Visibility** — Dark text (#1e293b) on light backgrounds
✅ **Card Styling** — Light backgrounds with proper borders in light mode
✅ **Contrast** — WCAG AA compliant for accessibility
✅ **Navigation** — Adjusted colors for both dark and light themes
✅ **Footer** — Proper color transitions in light mode
✅ **Buttons** — Theme-aware button styling
✅ **Shadows** — Reduced shadows in light mode for better visibility

## 🌐 Local Testing

To test locally:

1. **Open in browser**:
   ```bash
   # Windows
   start docs/index.html
   
   # Mac
   open docs/index.html
   
   # Linux
   xdg-open docs/index.html
   ```

2. **Or use a local server**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if installed)
   npx http-server
   ```

3. **Visit**: http://localhost:8000/docs/

## 🔄 Deployment to GitHub Pages

These files are served from the GitHub Pages `docs` folder in the main repository.

### To Deploy Changes:

```bash
# 1. From project root
cd AzAd-BrowserKit

# 2. Make changes to docs/
# (Edit HTML, CSS, JS, or add assets)

# 3. Commit changes
git add docs/
git commit -m "Update GitHub Pages content"

# 4. Push to GitHub
git push origin main
```

GitHub will automatically deploy within 1-2 minutes.

## 🎯 What's on Each Page

### index.html (Home)
- Hero banner with install CTA
- 9-feature grid showcase
- Detailed feature spotlights with screenshots
- Statistics section
- Footer with links

### support.html (Support & FAQ)
- 30+ FAQs organized by feature
- Searchable FAQ system
- General questions section
- Contact methods
- Community links

### privacy.html (Privacy Policy)
- Data handling explanation
- Permissions justification
- Security practices
- GDPR/CCPA compliance
- User rights

## 🛠️ Technical Details

- **Framework**: Vanilla HTML/CSS/JS (no build required)
- **CSS**: Custom with Tailwind CDN
- **Styling**: Glassmorphism with teal/cyan gradients
- **Responsiveness**: Mobile-first, fully responsive
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Lighthouse score 90+

## 🌙 Dark/Light Mode

- Click the moon/sun icon in header to toggle
- Preference saved in browser localStorage
- Persists across sessions
- All pages fully styled for both modes

## 📱 Responsive Breakpoints

- Mobile: 0-640px
- Tablet: 640px-1024px
- Desktop: 1024px+
- Large screens: 1280px+

## 🎨 Colors

- **Primary**: #00a8a8 (Teal)
- **Accent**: #00d9ff (Cyan)
- **Dark BG**: #0f172a
- **Light BG**: #f8fafc

## 🔗 Important Links

- **GitHub Repo**: https://github.com/ayyazahmad/AzAd-BrowserKit
- **Chrome Web Store**: https://chrome.google.com/webstore
- **Email**: info@azad.co

## 🚨 Troubleshooting

### Images not loading?
- Check that `assets/img/` contains `icons/`, `screenshots/`, and `promo/` folders
- Verify relative paths in HTML (should be `assets/img/...`)

### Styles not loading?
- Ensure `assets/css/styles.css` exists and is readable
- Check browser console for 404 errors (F12)
- Clear browser cache (Ctrl+Shift+R)

### Light mode text hard to read?
- Update `styles.css` with latest version (light mode colors included)
- Check that `body.light-mode` CSS rules are present
- Test in fresh browser window

## 📋 File Sizes

| File | Size |
|------|------|
| index.html | ~15 KB |
| support.html | ~19 KB |
| privacy.html | ~17 KB |
| styles.css | ~18 KB |
| main.js | ~6.6 KB |

## ✅ Verification Checklist

- [x] All HTML files in docs/
- [x] CSS file with light mode fixes
- [x] JavaScript for interactivity
- [x] 12 extension icons
- [x] 6 feature screenshots
- [x] 6 promo tiles
- [x] _config.yml for GitHub Pages
- [x] .nojekyll to disable Jekyll
- [x] Light mode text visibility fixed
- [x] Mobile responsive
- [x] All links working

## 📞 Support

For issues with the documentation site:
1. Check GitHub Issues: https://github.com/ayyazahmad/AzAd-BrowserKit/issues
2. Email: info@azad.co

---

**Last Updated**: February 2026
**Status**: ✅ Ready for deployment
