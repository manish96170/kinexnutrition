# Project Plan: Pure HTML/CSS Product Showcase Website

## 1. Project Objective & Vision

Build a blazing-fast, visually captivating, highly legitimate product showcase website for a sports nutrition / fitness supplement brand. The website is purely informational (displaying product images, specifications, nutrition facts, and brand credibility).

### Key Constraints & Requirements:
- **No E-Commerce overhead:** No cart, checkout, payments, contact form, or direct WhatsApp call triggers in this phase.
- **Pure HTML & CSS:** Zero JavaScript framework dependencies; lightweight, responsive, and instant loading.
- **Deep Linking:** Clicking any product card/image on the homepage or catalog page lands on a dedicated, detailed product page.
- **GitHub Pages Ready:** Clean relative links, zero build step needed.
- **Git Deferred:** Git will be initialized once the local build is verified and approved.

---

## 2. Information Architecture & Directory Layout

```
/Users/Manish.Sharma/Documents/raka/
│
├── index.html                   # Homepage (Hero banner, trust badges, categories, featured products, brand story)
├── products.html                # Full Catalog (Filterable view of all 9 products with category pills)
├── about.html                   # Brand Story, Chicago USA HQ, philosophy & manufacturing standards
├── quality.html                 # Purity, Creapure® partnership, Lab Testing & Authenticity assurance page
│
├── products/                    # Dedicated product detail pages
│   ├── elite-whey-caramel-crown.html      # Product 1: Kinex Elite Whey (Caramel Crown)
│   ├── elite-whey-cookie-crumble.html     # Product 2: Kinex Elite Whey (Cookie Crumble Pop)
│   ├── nitro-whey-chocolate-lava.html     # Product 3: Kinex Nitro Whey + Creapure® (Chocolate Lava Cake)
│   ├── nitro-whey-vanilla-custard.html    # Product 4: Kinex Nitro Whey + Creapure® (Vanilla Custard)
│   ├── iso-elite-american-nuts.html       # Product 5: Kinex Iso Elite 100% Isolate (American Nuts Cream)
│   ├── iso-elite-caramel-latte.html       # Product 6: Kinex Iso Elite 100% Isolate (Caramel Latte)
│   ├── ultra-gain-cookie-crumble.html     # Product 7: Kinex Ultra Gain Mass Gainer + Creapure® (Cookie Crumble)
│   ├── testvita-vitality.html             # Product 8: Kinex Testvita Advanced Vitality & ZMA (60 Tablets)
│   └── tudca-nac-liver-support.html       # Product 9: Kinex TUDCA + NAC with Milk Thistle (60 Tablets)
│
├── assets/
│   ├── css/
│   │   ├── variables.css        # Color palette, spacing, typography tokens
│   │   ├── base.css             # Resets, typography, layout container styles
│   │   ├── components.css       # Cards, badges, buttons, tables, accordions
│   │   └── pages.css            # Page-specific styling (hero, product details grid)
│   ├── js/
│   │   └── main.js              # Ultra-light vanilla script (mobile menu toggle, image switcher, tab switcher)
│   └── images/
│       ├── logo/                # Brand logo & favicon
│       ├── hero/                # High-res banner backgrounds & athlete visuals
│       ├── products/            # 21 optimized WebP and PNG retina-ready product renders
│       └── icons/               # SVG icons for trust badges, nutrition, shaker instructions
│
├── docs/
│   ├── DESIGN_AND_BUSINESS_ANALYSIS.md # Competitive deconstruction & design specs
│   ├── EXTRACTED_PRODUCT_DATA.md       # Raw OCR extraction from packaging
│   └── PRODUCT_CATALOG_PLAN.md         # Comprehensive specifications of all 9 products
├── PLAN.md                      # This architecture & roadmap file
├── TODO.md                      # Granular task tracker & progress checklist
└── HANDOFF.md                   # Operational handoff guide for subsequent phases
```

---

## 3. Page Breakdown & Detailed Content Structure

### Page 1: Homepage (`index.html`)
1. **Top Notice Ribbon:** Authenticity & lab-tested quality notice.
2. **Main Header / Nav:** Brand Logo, Nav Links (`Home`, `Products`, `Quality & Labs`, `About Us`).
3. **Hero Section:**
   - Bold Headline: *"Pure Performance. Zero Compromise."*
   - Sub-headline focusing on raw material purity and high biological value.
   - Primary CTA: *"Explore Products"* (links to `products.html`).
   - Secondary CTA: *"Our Purity Standard"* (links to `quality.html`).
4. **Trust Credentials Bar:** 4 core credibility pillars:
   - 100% Authentic Guarantee
   - Certified GMP & ISO Facilities
   - NABL Lab Tested Purity
   - Zero Fillers or Banned Substances
5. **Featured Product Showcase (Grid):**
   - Highlighting flagship items with live links to `/products/*.html`.
6. **Goal-Oriented Section:**
   - Build Muscle, Lean Definition, Power & Endurance, Daily Health.
7. **Purity / Manufacturing Spotlight:**
   - Visual breakdown: Cold micro-filtration, fast absorption, verified protein content.
8. **Brand Philosophy Callout:**
   - Short statement on why genuine nutrition matters.
9. **Footer:** Quick links, certifications summary, copyright, and disclaimer.

### Page 2: Product Catalog Page (`products.html`)
1. **Catalog Hero / Header:** Title & summary of the product range.
2. **Category Filter Tabs:**
   - All Products | Whey Proteins | Mass Gainers | Pre-Workout & Amino | Wellness
3. **Catalog Grid:**
   - Every product card featuring:
     - Clear high-res image
     - Category badge
     - Product title & volume/serving info
     - High-impact macro highlights (`25g Protein`, `5.5g BCAA`, `0g Sugar`)
     - Button/Link: *"View Product Details →"*

### Page 3: Dedicated Product Pages (`products/[product-slug].html`)
1. **Breadcrumb Trail:** `Home / Products / [Category] / [Product Name]`
2. **Two-Column Product Showcase:**
   - **Left Gallery:** Large primary product pack shot + thumbnail selector.
   - **Right Info Header:**
     - Category tag & quality guarantee badge
     - Product Name & descriptive tagline
     - Core Metrics Pills (e.g., `27g Protein/Serving` | `6.2g BCAAs` | `4.3g Glutamine` | `Zero Sugar`)
     - Available Formats & Flavors (informational badges: 1 kg / 2 kg, Chocolate / Mocha / Unflavoured)
     - Key Product Highlights (fast digesting, instantized for clump-free mixing)
3. **Deep Product Information Sections (Tabbed or Stacked):**
   - **Section A: Overview & Scientific Benefits:** How it works in the body and ideal workout timing.
   - **Section B: Supplement Facts & Amino Acid Spectrum:**
     - Serving size, Servings per container
     - Full macro breakdown (Energy, Protein, Total Fat, Saturated Fat, Total Carbohydrates)
     - Full Amino Acid profile breakdown (Essential Amino Acids / BCAAs / Conditional)
   - **Section C: Ingredients & Quality Verification:** Sourced ingredients, digestive enzymes, allergen warnings.
   - **Section D: How to Use (Visual 3-Step Guide):**
     - Step 1: Add 200–250ml water/milk
     - Step 2: Add 1 scoop (32g)
     - Step 3: Shake for 25–30 seconds
     - Best time: Within 30 minutes post-workout
4. **Authenticity Guarantee Block:**
   - Explaining batch quality checks and seals.
5. **Related Supplements Grid:** 3 complementary products to continue exploration.

### Page 4: Quality & Standards Page (`quality.html`)
- In-depth look into sourcing, lab testing reports, certification credentials, and safety standards.

### Page 5: About Brand Page (`about.html`)
- Brand origin, philosophy, athletic community focus, and commitment to uncompromised sports nutrition.

---

## 4. Phase-by-Phase Execution Roadmap

| Phase | Description | Deliverables | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Competitive Research & Documentation | `docs/DESIGN_AND_BUSINESS_ANALYSIS.md`, `PLAN.md`, `TODO.md`, `HANDOFF.md` | **Completed** |
| **Phase 2** | User Asset Ingestion | User provides product images, names, macros, flavors, and weights | **Waiting on User** |
| **Phase 3** | Core Design System & CSS Engine | `assets/css/` (variables, base, components, responsive grid) | **Queued** |
| **Phase 4** | HTML Templates & Core Pages | `index.html`, `products.html`, `about.html`, `quality.html` | **Queued** |
| **Phase 5** | Individual Product Detail Pages | All product detail pages under `products/` | **Queued** |
| **Phase 6** | Local Preview, Quality Audit & Polish | Visual review, mobile responsiveness test, HTML5 validation | **Queued** |
| **Phase 7** | Approval Gate & Git / GitHub Deployment | Git initialization, commit history, GitHub Pages deployment guide | **Queued** |

---

## 5. Technology Stack & Performance Philosophy

1. **HTML5:** Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<table>`).
2. **CSS3:**
   - Custom CSS variables (`--color-*`, `--font-*`, `--space-*`, `--radius-*`)
   - CSS Grid and Flexbox layouts
   - Fluid typography with `clamp()`
   - Micro-interactions (hover elevations, subtle borders, card glow)
   - Zero framework overhead (< 45KB total unminified CSS)
3. **Performance Metrics Target:**
   - Google Lighthouse Performance: **98–100**
   - First Contentful Paint (FCP): **< 0.6s**
   - Largest Contentful Paint (LCP): **< 1.0s**
   - Cumulative Layout Shift (CLS): **0.00**
4. **GitHub Pages Deployment Strategy:**
   - Self-contained static assets
   - Relative path resolution (`./assets/...` and `../assets/...` for subpages)
   - Cross-browser compatibility across Safari, Chrome, Firefox, Edge, and iOS/Android webviews.
