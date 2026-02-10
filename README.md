# Miles CAM - Website Frontend

World-class marketing website for Miles CAM - AI-Powered Video Monitoring.

## 🚀 Quick Start

### Local Development

1. **Simple HTTP Server** (Python):
```bash
cd frontend
python3 -m http.server 8000
```
Then open: http://localhost:8000

2. **Node.js HTTP Server**:
```bash
cd frontend
npx http-server -p 8000
```

3. **VS Code Live Server**:
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

## 📁 File Structure

```
frontend/
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styles (CSS variables, responsive design)
├── js/
│   └── main.js        # JavaScript for interactivity
└── README.md          # This file
```

## 🎨 Features

- ✅ **Fully Responsive** - Mobile, tablet, desktop
- ✅ **Modern Design** - Professional, clean, world-class
- ✅ **Smooth Animations** - Fade-in, scroll effects
- ✅ **Beta Registration Form** - Complete with validation
- ✅ **Investor Section** - Investment opportunity details
- ✅ **Current Status** - Where we are now
- ✅ **SEO Optimized** - Meta tags, semantic HTML
- ✅ **Fast Loading** - Optimized CSS, minimal JavaScript
- ✅ **Accessible** - ARIA labels, keyboard navigation

## 🌐 Deployment Options

### Option 1: Static Hosting (Recommended)

**Netlify** (Free):
1. Sign up at netlify.com
2. Drag and drop the `frontend` folder
3. Done! Your site is live

**Vercel** (Free):
1. Sign up at vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel` in the frontend directory

**GitHub Pages** (Free):
1. Create a GitHub repository
2. Push the frontend folder
3. Enable GitHub Pages in settings
4. Select `/frontend` as source

### Option 2: Traditional Web Hosting

Upload all files to your web server:
- `index.html` → root directory
- `css/` → css directory
- `js/` → js directory

### Option 3: CDN/Cloud Storage

**AWS S3 + CloudFront**:
1. Upload files to S3 bucket
2. Enable static website hosting
3. Configure CloudFront distribution

**Google Cloud Storage**:
1. Create bucket
2. Upload files
3. Enable static website hosting

## 🔧 Customization

### Update Contact Email

In `index.html`, find and replace:
- `hello@milescam.com` → Your email
- `investors@milescam.com` → Your investor email

### Connect Forms to Backend

In `js/main.js`, uncomment and configure:
```javascript
await fetch('/api/beta/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

### Add Analytics

Add Google Analytics or other tracking:
```html
<!-- In index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Update Colors

In `css/styles.css`, modify CSS variables:
```css
:root {
    --primary-color: #9ACD32;
    --accent-color: #8BC34A;
    /* etc. */
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Checklist

- ✅ Meta description
- ✅ Meta keywords
- ✅ Semantic HTML
- ✅ Alt text for images (add when you add images)
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly
- ✅ Fast loading

## 📊 Performance

- **Lighthouse Score Target**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🔒 Security

- No external dependencies (except Google Fonts)
- No tracking scripts (add your own)
- Forms can be connected to secure backend

## 📝 Next Steps

1. **Add Images**:
   - Hero background image
   - Feature icons (or keep emojis)
   - Use case images
   - Team photos (optional)

2. **Connect Backend**:
   - Set up API endpoints for forms
   - Add email service integration
   - Set up database for beta registrations

3. **Add Content**:
   - Case studies (when available)
   - Testimonials (when available)
   - Blog section (optional)
   - Demo video

4. **Domain Setup**:
   - Purchase domain (milescam.com)
   - Configure DNS
   - Set up SSL certificate

## 🐛 Troubleshooting

**Forms not submitting?**
- Check browser console for errors
- Ensure backend API is configured
- Test with network tab open

**Styles not loading?**
- Check file paths are correct
- Ensure CSS file is in `css/` directory
- Clear browser cache

**Mobile menu not working?**
- Check JavaScript is loaded
- Ensure `main.js` is in `js/` directory
- Check browser console for errors

## 📞 Support

For questions or issues:
- Email: hello@milescam.com
- Check documentation in `/alert-configuration/docs/`

---

**Built with ❤️ for Miles CAM**
