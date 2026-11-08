# JapMala (जपमाला) - Public Showcase Website

> **हर नाम में भक्ति।**  
> *Every Chant, A Step Closer to Peace.*  
> **Designed & Developed by Sundramdotdev**

A public showcase website for the Indian devotional mobile application **JapMala (जपमाला)**. Built purely with lightweight, accessible, and fast standard web technologies: HTML5, CSS3, and Vanilla JavaScript.

---

## 1. Project Overview

JapMala is an Android devotional companion crafted to bring the sacred, traditional practice of *Naam Jap* (divine chanting) into a peaceful, private, distraction-free digital experience.

This public website serves to:
- Introduce JapMala's devotional experience and features.
- Showcase authentic 108-bead Rudraksha and Tulsi digital malas.
- Provide direct Android APK downloads and verified APKPure links.
- Host the complete, transparent, and local-first Privacy Policy.
- Provide devotional background, deity mantras, and developer credit.

---

## 2. Technologies Used

- **HTML5:** Semantic, accessible (WCAG 2.1 AA compliant), SEO optimized with OpenGraph & Twitter Card metadata.
- **CSS3:** Custom design system incorporating authentic Indian devotional aesthetics: Saffron (`#D97724`), Antique Gold (`#C49A48`), Ivory (`#FFF8EB`), Warm Beige (`#EBDCC5`), Deep Brown (`#70421F`), and Dark Earth (`#211A16`). Mobile-first responsive grid and flexbox, GPU-accelerated micro-interactions, and `prefers-reduced-motion` compliance.
- **Vanilla JavaScript (ES6+):** Zero third-party runtime frameworks or libraries. Features centralized config wiring, mobile hamburger drawer, scroll reveal animations via `IntersectionObserver`, dynamic copyright year, and an interactive devotional smartphone chanting simulator.

---

## 3. Directory Structure

```text
JapMala/
│
├── index.html               # Main landing page & app showcase
├── privacy-policy.html      # Transparent local-first privacy policy
├── about.html               # Story of JapMala, sacred malas & philosophy
│
├── assets/
│   ├── JapMalalogo.png      # Official application logo
│   ├── favicon.png          # Browser favicon
│   ├── screenshots/         # Application screenshot assets
│   │   ├── home-screen.png
│   │   ├── japa-screen.png
│   │   ├── mantra-screen.png
│   │   ├── analytics-screen.png
│   │   └── settings-screen.png
│   ├── images/              # Decorative visual assets
│   └── icons/               # Inline & standalone SVG icons
│
├── css/
│   ├── style.css            # Primary design system & responsive styling
│   └── privacy.css          # Documentation & article typography
│
├── js/
│   ├── config.js            # Centralized links, build & developer config
│   └── main.js              # Vanilla JavaScript interactions
│
├── robots.txt               # Search engine crawler directives
├── sitemap.xml              # Search engine XML sitemap
└── README.md                # Project documentation
```

---

## 4. How to Run Locally

Because JapMala is a pure static website, you do not need Node.js, npm, or any build pipeline.

### Option A: Using Python (Recommended)

From the project root directory, run:

```bash
# Python 3
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your web browser.

### Option B: Using VS Code Live Server
1. Open the folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

### Option C: Direct Browser Opening
Simply double-click `index.html` to open it in any modern browser (Chrome, Safari, Firefox, Edge).

---

## 5. Configuration Guide (`js/config.js`)

All dynamic download links, build metadata, developer profile links, and contact addresses are centrally managed in `js/config.js`.

```javascript
const JAPMALA_CONFIG = {
  appName: "JapMala",
  hindiName: "जपमाला",
  tagline: "हर नाम में भक्ति।",
  englishTagline: "Every Chant, A Step Closer to Peace.",

  android: {
    // 1. Direct APK download URL (e.g. from GitHub Releases or S3 bucket)
    // Leave as "" to automatically show a graceful "Coming Soon" notification
    apkUrl: "https://github.com/Sundramdotdev/JapMala/releases/download/v1.0.0/JapMala-v1.0.0.apk",

    // 2. Verified APKPure application listing URL
    // Leave as "" until verified listing is live on APKPure
    apkPureUrl: "",

    // 3. Build Metadata
    version: "v1.0.0",
    fileSize: "18.4 MB",
    minAndroid: "Android 8.0 (Oreo) and above",
    packageId: "dev.sundram.japmala"
  },

  developer: {
    name: "Sundramdotdev",
    creditText: "Designed & Developed by Sundramdotdev",
    // 4. LinkedIn profile URL
    linkedinUrl: "https://www.linkedin.com/in/sundramdotdev",
    githubUrl: "https://github.com/Sundramdotdev"
  },

  contact: {
    // 5. Official support email
    email: "support@sundram.dev"
  },

  site: {
    canonicalUrl: "https://sundramdotdev.github.io/JapMala",
    repoUrl: "https://github.com/Sundramdotdev/JapMala"
  }
};
```

### Safe Fallback Mechanism
- If `apkUrl` or `apkPureUrl` is empty (`""`), download buttons remain safe and non-functional, triggering a gentle devotional status toast informing the user that the release is arriving soon.
- If `linkedinUrl` is empty, clicking the developer connection triggers an informative notification.
- No fake or unverified links are ever surfaced to users.

---

## 6. Updating Screenshots

When ready to supply final screenshots of the application:
1. Capture screenshots at standard 9:19.5 aspect ratio (e.g., `1080x2340` or `720x1560`).
2. Save them into `assets/screenshots/` using the exact filenames:
   - `assets/screenshots/home-screen.png`
   - `assets/screenshots/japa-screen.png`
   - `assets/screenshots/mantra-screen.png`
   - `assets/screenshots/analytics-screen.png`
   - `assets/screenshots/settings-screen.png`
3. If an image is not present, the website automatically displays rich, high-fidelity CSS/SVG phone mockups instead of broken image placeholders.

---

## 7. Updating the Privacy Policy

The privacy policy lives in `privacy-policy.html` and styles in `css/privacy.css`.
- It reflects JapMala's **100% local-first storage architecture** (zero data leaves the device).
- When modifying policy terms, update the **"Last Updated"** date badge in the header.
- The contact email updates automatically when modified in `js/config.js`.

---

## 8. Deployment Guide

### Deploying to GitHub Pages (Recommended)
1. Push this repository to GitHub under your account (e.g., `https://github.com/Sundramdotdev/JapMala`).
2. Go to **Settings > Pages** in your GitHub repository.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.
5. Your showcase website will be live at `https://<username>.github.io/<repo>/` within 1-2 minutes!

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **Add new site > Import an existing project** (connect your GitHub repo) OR drag and drop the project folder directly into the Netlify dashboard.
3. Build command: *(leave blank)*.
4. Publish directory: `.` *(root)*.
5. Click **Deploy**.

### Deploying to Vercel
1. Install Vercel CLI (`npm i -g vercel`) or use the [Vercel Web Dashboard](https://vercel.com).
2. Import the repository.
3. Framework Preset: **Other**.
4. Root Directory: `./`.
5. Click **Deploy**.

---

## 9. Brand Identity & Credits

- **Application Name:** JapMala (जपमाला)
- **Tagline (Hindi):** हर नाम में भक्ति।
- **Tagline (English):** Every Chant, A Step Closer to Peace.
- **Creator & Developer:** Sundramdotdev
- **Official Developer Credit:** Designed & Developed by Sundramdotdev
- **Color Identity:**
  - Saffron: `#D97724`
  - Antique Gold: `#C49A48`
  - Ivory: `#FFF8EB`
  - Warm Beige: `#EBDCC5`
  - Deep Brown: `#70421F`
  - Dark Charcoal Earth: `#211A16`
