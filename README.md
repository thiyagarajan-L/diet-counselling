# Nuvita by Krish - Dietitian & Nutritionist Static Website

A high-converting, fully responsive, dark-mode-enabled static website for **Nuvita by Krish (Dietitian & Nutritionist)** based in Chennai.

## 📁 Directory Structure

```text
diet-counselling/
│
├── index.html          # Hero section, brand story, featured services, before/after preview, testimonials, CTA
├── about.html          # Professional profile, qualifications (M.Sc, B.Sc), mission, core pillars & 5-step approach
├── services.html       # Detailed breakdown of Weight Loss, Diabetes, PCOS, Sports Nutrition, Pregnancy & Packages
├── blog.html           # Nutrition articles, health tips, myth busters with filterable tags
├── contact.html        # Interactive contact form, consultation booking, Google Maps embed, direct contacts
│
├── css/
│   └── style.css       # Design tokens (warm organic palette + dark mode), glassmorphism, animations, responsive grid
│
├── js/
│   └── script.js       # Mobile menu toggle, dark/light mode persistence, tab filters, modal previews, WhatsApp helper
│
├── images/             # Brand logos, infographic flyers, generated program photos, gallery showcase
│   ├── logo-circle.jpg
│   ├── logo-tagline.jpg
│   ├── nuvita-infographic.jpg
│   ├── hero-nutrition.png
│   └── dietitian-consultation.png
│
├── assets/             # Vector icons & branding graphics
│
└── README.md           # Setup instructions, architecture overview, customization guides
```

---

## ✨ Features

- **Hero Section**: Strong brand messaging ("Eat Smart. Live Better.", "NU = New, VITA = Life"), credentials pill, and quick statistics counters.
- **Qualifications**: M.Sc Food Science and Community Nutrition & B.Sc Food Science and Nutrition.
- **Specialized Programs**:
  - Weight Loss & Fat Management
  - PCOS / PCOD Diet Care
  - Diabetes & HbA1c Management
  - Sports & Athletic Nutrition
  - Pregnancy & Postnatal Diet
  - Child Nutrition & Gut Health Reset
- **Consultation Packages**: 1 Month Kickstart, 3 Month Transformation (Most Popular), 6 Month Reset.
- **Before & After Gallery**: Interactive category filters (`All`, `Weight Loss`, `PCOS`, `Diabetes`, `Sports`).
- **Floating WhatsApp Button**: Pulse animation with quick chat link builder.
- **Google Maps Embed**: Chennai office / online serving location embed.
- **Dark Mode**: Persistent light/dark mode theme switcher saved in browser `localStorage`.
- **Responsive Layout**: Designed to look stunning on Mobile (375px+), Tablet (768px+), and Desktop (1200px+).

---

## 📞 Contact Information Mentioned

- **Email**: `nuvitabykrish@gmail.com`
- **Instagram**: `@nuvitabykrish` (`https://instagram.com/nuvitabykrish`)
- **WhatsApp**: `+91 8610530654`
- **Location**: Chennai, Tamil Nadu, India

---

## 📊 Google Analytics 4 (GA4) Integration

Google Analytics 4 (`gtag.js`) is installed and active across all HTML pages (`index.html`, `about.html`, `services.html`, `blog.html`, `contact.html`).

- **Active Measurement ID**: `G-9WJXYG3HTG`

### Custom Conversion Tracking Included:
The website automatically tracks key user conversions into Google Analytics:
- `click_whatsapp`: Fires whenever a user clicks any WhatsApp contact or consultation button (includes program name).
- `submit_consultation_form`: Fires when a user submits the consultation booking form (includes program selected).

---

## 🚀 How to Run Locally

You can launch a local web server using Python or Node.js:

### Option 1: Python HTTP Server
```bash
cd diet-counselling
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Option 2: Node npx serve
```bash
cd diet-counselling
npx serve .
```

---
*Created for Nuvita by Krish - Eat Smart. Live Better.*
