# 🌿 Svasthica Ayurvedic Wellness Retreat Website

**Ancient Wisdom. Modern Luxury. Holistic Wellness.**

A beautiful, responsive website for Svasthica Ayurvedic Wellness Retreat in Bhopal, Madhya Pradesh.

---

## 📁 Complete File Structure

```
svasthica-website/
│
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── images/            # Image folder (to be created)
    ├── hero-bg.jpg
    ├── gallery/
    │   ├── pathway.jpg
    │   ├── cottage-1.jpg
    │   ├── cottage-2.jpg
    │   ├── entrance.jpg
    │   ├── interior-1.jpg
    │   ├── interior-2.jpg
    │   └── yoga-hall.jpg
    └── logo.png       # Optional: replace 🌿 emoji
```

---

## 🚀 Features

### ✨ Design Features
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Modern Animations** - Smooth scroll, fade-in effects, hover animations
- **Earthy Color Palette** - Greens, browns, and cream reflecting Ayurveda
- **Professional Layout** - Clean, elegant sections with proper hierarchy
- **Interactive Gallery** - Hover effects with overlay descriptions

### 📱 Functional Features
- Sticky navigation header with scroll effects
- Mobile hamburger menu
- Smooth scrolling to sections
- Lazy loading for images
- Intersection Observer animations
- Phone/email click tracking
- Auto-rotating testimonials

### 📄 Page Sections
1. **Hero Section** - Eye-catching landing with CTA
2. **About** - Vision, Philosophy, and Setting
3. **Offerings** - 6 key services with icons
4. **Gallery** - Photo showcase with hover effects
5. **Packages** - 3-Day, 5-Day, and 7-Day programs
6. **Doctors** - Team of Ayurvedic physicians
7. **Testimonials** - Guest reviews
8. **Contact** - Complete contact information and social links
9. **Footer** - Copyright and tagline

---

## 🖼️ Adding Your Images

### Step 1: Create Image Folder
Create an `images` folder in the same directory as your HTML file.

### Step 2: Add Your Photos
Based on the images you shared, organize them as:

```
images/
├── gallery/
    ├── pathway.jpg          # Garden pathway (Image 7/10)
    ├── cottage-exterior.jpg # Cottage view (Image 8/9)
    ├── entrance-gate.jpg    # Entrance with arch (Image 10)
    ├── interior-1.jpg       # Interior seating (Images 1,4,5)
    ├── interior-2.jpg       # Yoga/meditation hall (Images 2,3)
    └── dining-area.jpg      # Interior with table (Image 6)
```

### Step 3: Update Image URLs in HTML
In `index.html`, find the Gallery section and replace placeholder URLs:

```html
<!-- Replace this: -->
<img src="https://placeholder.svg?height=400&width=600&text=Garden+Pathway" ...>

<!-- With this: -->
<img src="images/gallery/pathway.jpg" ...>
```

Update all 6 gallery images with your actual image paths.

---

## 🎨 Color Scheme

```css
--primary: #2d5016        /* Deep Forest Green */
--primary-dark: #1a2f0d   /* Darker Green */
--secondary: #8b7355      /* Earth Brown */
--accent: #d4a574         /* Golden Sand */
--accent-light: #e8c89d   /* Light Gold */
--light: #f5f1e8          /* Cream */
--white: #ffffff          /* Pure White */
--text: #333333           /* Dark Gray */
```

---

## 📝 Customization Guide

### Change Colors
Edit the `:root` variables in `styles.css`:
```css
:root {
    --primary: #YOUR_COLOR;
    --accent: #YOUR_COLOR;
    /* etc. */
}
```

### Add More Gallery Images
In `index.html`, duplicate this block:
```html
<div class="gallery-item">
    <img src="images/gallery/your-image.jpg" alt="Description">
    <div class="gallery-overlay">
        <p>Image Title</p>
    </div>
</div>
```

### Modify Contact Information
Update phone numbers, email, and social links in the Contact section.

### Add More Doctors
Duplicate the doctor card in the Doctors section:
```html
<div class="doctor-card">
    <div class="doctor-icon">👨‍⚕️</div>
    <h3>Dr. Name</h3>
    <p>Qualifications</p>
</div>
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `svasthica-website`
3. Upload all files
4. Go to Settings → Pages
5. Select main branch → Save
6. Your site will be live at `username.github.io/svasthica-website`

### Option 2: Netlify (Free)
1. Create account at netlify.com
2. Drag and drop your project folder
3. Get instant live URL

### Option 3: Traditional Hosting
Upload all files to your web hosting via FTP.

---

## 📱 Social Media Integration

### Current Links
- Instagram: `@svasthica_ayurvedic_wellness`
- Facebook: Svasthica Ayurvedic Wellness

### To Update
In `index.html`, find the social links section and update URLs.

---

## ✅ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔧 Technical Details

### Built With
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript** - No frameworks needed
- **Intersection Observer API** - Scroll animations
- **CSS Custom Properties** - Easy theming

### Performance Features
- Lazy loading for images
- Optimized animations
- Minimal JavaScript
- Mobile-first approach

---

## 📞 Support

For questions or modifications, contact the development team.

### Making Changes
1. Edit the HTML for content
2. Edit CSS for styling
3. Edit JS for functionality
4. Test on mobile devices

---

## 📜 License

© 2024 Svasthica Ayurvedic Wellness Retreat. All rights reserved.

---

## 🎯 Next Steps

### Immediate Tasks:
1. ✅ Copy HTML, CSS, and JS into separate files
2. ⬜ Create `images` folder and add your photos
3. ⬜ Update image URLs in HTML
4. ⬜ Test on different devices
5. ⬜ Deploy to hosting service

### Future Enhancements:
- Add booking form
- Integrate Google Maps
- Add blog section
- Create testimonial submission form
- Add WhatsApp chat widget
- Implement multi-language support (Hindi/English)

---

**Built with 💚 for Svasthica Ayurvedic Wellness Retreat**

*Ancient Wisdom. Modern Luxury. Holistic Wellness.*
