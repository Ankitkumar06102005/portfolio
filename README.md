<div align="center">

  # ⚡ Ankit Kumar — Creative Engineering & AI Portfolio

  <p align="center">
    <strong>A motion-driven, editorial-brutalist developer portfolio built with zero framework overhead.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/Ankitkumar06102005"><img src="https://img.shields.io/badge/GitHub-Ankitkumar06102005-181717?style=for-the-badge&logo=github" alt="GitHub" /></a>
    <a href="https://www.linkedin.com/in/ankit-kumar-84550725b"><img src="https://img.shields.io/badge/LinkedIn-Ankit_Kumar-0077B5?style=for-the-badge&logo=linkedin" alt="LinkedIn" /></a>
    <a href="mailto:ankitsushant9415@gmail.com"><img src="https://img.shields.io/badge/Email-Get_in_Touch-ff4fd8?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/GSAP_3-ScrollTrigger-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=flat-square" alt="Lenis" />
    <img src="https://img.shields.io/badge/Responsive-Mobile_&_Desktop-4fe8ff?style=flat-square" alt="Responsive" />
    <img src="https://img.shields.io/badge/License-MIT-d7ff4f?style=flat-square" alt="License" />
  </p>

  <br />

  <p align="center">
    <a href="#-overview">Overview</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-featured-work">Featured Work</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-file-structure">File Structure</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-customization-guide">Customization</a> •
    <a href="#-author--connect">Connect</a>
  </p>
</div>

---

## ✦ Overview

This repository houses the personal portfolio of **Ankit Kumar**, a Computer Science & Artificial Intelligence undergraduate at **PSIT Kanpur** (graduating 2028). 

Unlike standard template portfolios, this site is designed with an **editorial brutalist aesthetic**, featuring high-contrast neon accents, kinetic typography, subtle 3D interactions, smooth inertial scrolling, and hardware-accelerated pinned animations—built purely with vanilla technologies for maximum performance and lightning-fast loading speeds.

---

## ⚡ Key Features

| Feature | Description |
| :--- | :--- |
| **🛹 Horizontal Pinned Scroll** | Projects track pins dynamically and glides horizontally on desktop using **GSAP ScrollTrigger**, gracefully falling back to a clean mobile-friendly format on smaller viewports. |
| **🌊 Inertial Smooth Scrolling** | Integrated **Lenis** smooth wheel navigation synchronized with the browser’s `requestAnimationFrame` loop. |
| **🧭 Adaptive Navigation** | High-utility vertical sidebar on desktop with live section spy (`IntersectionObserver`), switching automatically to an ergonomic bottom dock on mobile. |
| **🎯 Magnetic Cursor Physics** | Custom dual-layer cursor (dot + trailing easing ring) with magnetic pull towards interactive links and buttons. |
| **🃏 3D Perspective Hero Card** | Hero badge tilts dynamically according to mouse coordinates with realistic perspective transformation. |
| **📊 Gradient Scroll Indicator** | Fixed header progress bar tracking exact page depth via a vibrant multi-stop linear gradient. |
| **⚡ Fractal Grain & Ambient Orbs** | Embedded SVG noise filter and ambient glowing blur orbs that add visual texture without taxing the GPU. |
| **♿ Accessibility First** | Fully respects `prefers-reduced-motion` settings, disabling parallax, tilts, and complex transforms for sensitive users. |

---

## 🚀 Featured Work Showcased

The portfolio spotlights selected real-world applications, AI systems, and hackathon prototypes:

```
├── 01. EventLink      [Full-Stack MERN]   → Live event management & registration with JWT auth
├── 02. LegalLens      [AI / NLP]          → Legal contract clause analyzer & summarizer
├── 03. AutoShield     [CV + IoT]          → AI vehicle theft prevention with license plate detection & GPS
└── 04. CivicAI        [Smart India Hack]  → Geotagged civic issue reporting using computer vision & NLP
```

- **EventLink**: [Live Demo](https://eventlink-9cvq.onrender.com/) — React, Node.js, Express, MongoDB, and JWT Auth.
- **LegalLens**: Clause comparison, summarization, and key insight extraction via Python, NLP, and ML models.
- **AutoShield**: Real-time license-plate recognition (ALPR), GPS telemetry, and instant alert dispatch.
- **CivicAI**: Automated road damage & civic anomaly detection with geolocation mapping.

---

## 🛠 Tech Stack

### Core Architecture
- **HTML5**: Semantic document markup, ARIA roles, and accessible navigation hooks.
- **Vanilla CSS3**: 
  - CSS Custom Properties (Design tokens for dark theme, typography, and acid accents).
  - Fluid typography via CSS `clamp()` and responsive CSS Grid / Flexbox layouts.
  - Custom SVG noise background texture and CSS keyframe animations.
- **Vanilla JavaScript (ES6+)**:
  - Native `IntersectionObserver` for active navigation highlighting.
  - Coordinate tracking for magnetic cursor & 3D tilt mechanics.
  - Responsive breakpoint handling.

### Libraries & External Assets
- **[Lenis](https://github.com/darkroomengineering/lenis)** (`v1.3.11`): Modern smooth scrolling engine.
- **[GSAP & ScrollTrigger](https://greensock.com/gsap/)** (`v3.13.0`): Pinned scroll transitions, reveal effects, and scrubbing animations.
- **Google Fonts**:
  - `Space Grotesk`: Bold geometric display headers.
  - `Manrope`: Clean, legible body copy.
  - `DM Mono`: Technical data tags, labels, and timestamps.

---

## 📁 File Structure

```text
ankit-portfolio/
├── index.html       # Semantic HTML layout, meta tags, project cards, and scripts
├── styles.css       # Design tokens, typography, dark theme, responsive rules
├── script.js        # GSAP timelines, Lenis setup, magnetic cursor, 3D card tilt
└── README.md        # Documentation and project walkthrough
```

---

## 💻 Getting Started

Because this project is built entirely on web standards, **no build step, bundler, or `npm install` is required**.

### 1. Clone the repository
```bash
git clone https://github.com/Ankitkumar06102005/ankit-portfolio.git
cd ankit-portfolio
```

### 2. Run locally

Choose any of the options below:

- **Option A — Direct Browser:**  
  Simply double-click `index.html` or open it in any modern browser.

- **Option B — VS Code Live Server:**  
  Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code, right-click `index.html`, and select **Open with Live Server**.

- **Option C — Python HTTP Server:**
  ```bash
  # Python 3
  python -m http.server 3000
  # Then open http://localhost:3000
  ```

- **Option D — Node npx serve:**
  ```bash
  npx serve .
  ```

---

## 🎨 Customization Guide

You can easily adapt this portfolio for your own profile:

### 1. Theme Colors & Tokens (`styles.css`)
Adjust the CSS variables defined in `:root` to change the entire color scheme:
```css
:root {
  --bg: #09090c;         /* Background canvas */
  --ink: #f4f1ea;        /* Primary text color */
  --muted: #a7a4a0;      /* Subtitles and metadata */
  --acid: #d7ff4f;       /* Primary accent neon */
  --pink: #ff4fd8;       /* Secondary neon highlight */
  --cyan: #4fe8ff;       /* Glow highlight */
  --orange: #ff8a3d;     /* Gradient accent */
}
```

### 2. Projects & Content (`index.html`)
- **Bio & Stats**: Update lines in `<section id="about">`.
- **Projects**: Edit card entries inside `<div class="projects-track">` to replace images, descriptions, tags, and live URLs.
- **Tech Stack**: Update the infinite ticker `<div class="marquee-inner">` and the categorized skills in `<div class="skill-grid">`.
- **Timeline & Certifications**: Modify entries in `<section id="journey">`.

### 3. Motion & Speed Tuning (`script.js`)
- **Lenis scroll duration**: Adjust `duration: 1.15` in the Lenis initialization.
- **Horizontal scroll scrub**: Fine-tune `scrub: 1.1` in the GSAP `ScrollTrigger` configuration.
- **Tilt intensity**: Modify the rotation multipliers in the `hero-visual` mousemove listener.

---

## 🌐 Deployment

### Deploy to GitHub Pages
1. Push this repository to GitHub.
2. In your repository settings, navigate to **Settings** → **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://<your-username>.github.io/<repo-name>/` in seconds.

### Deploy to Vercel or Netlify
- **Vercel**: Run `npx vercel` in the root folder, or connect your GitHub repository in the Vercel dashboard. (Framework preset: `Other`).
- **Netlify**: Drag and drop the directory into Netlify Drop, or connect via GitHub with zero build commands needed.

---

## 👤 Author & Connect

**Ankit Kumar**  
*Computer Science & Artificial Intelligence Student @ PSIT Kanpur*

- 🌐 **LinkedIn**: [linkedin.com/in/ankit-kumar-84550725b](https://www.linkedin.com/in/ankit-kumar-84550725b)
- 🐙 **GitHub**: [@Ankitkumar06102005](https://github.com/Ankitkumar06102005)
- ✉️ **Email**: [ankitsushant9415@gmail.com](mailto:ankitsushant9415@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to explore the code, draw inspiration, or adapt it for your own creative portfolio. If you use it, a star ⭐ on the repo is appreciated!
