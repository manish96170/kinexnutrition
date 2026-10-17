# Project Task Checklist (TODO.md)

## Phase 1: Research, Strategy & Architecture [COMPLETE]
- [x] Fetch and inspect competitor benchmark sites:
  - [x] Optimum Nutrition India (`https://www.optimumnutrition.co.in/`)
  - [x] Avvatar India (`https://www.avvatarindia.com/`)
  - [x] MuscleBlaze (`https://www.muscleblaze.com/`)
- [x] Analyze business philosophy, authenticity pillars, trust badges, and macro presentations
- [x] Define pure HTML/CSS lightweight architecture suitable for GitHub Pages
- [x] Create comprehensive design & competitive analysis (`docs/DESIGN_AND_BUSINESS_ANALYSIS.md`)
- [x] Create project architecture and roadmap (`PLAN.md`)
- [x] Create project task tracking file (`TODO.md`)
- [x] Create transition and handoff document (`HANDOFF.md`)

---

## Phase 2: Product Image & Data Ingestion [COMPLETE]
- [x] Scan and inspect all 21 raw product images from `~/Documents/product-photo`
- [x] Extract full label text using Apple Vision OCR (`docs/EXTRACTED_PRODUCT_DATA.md`):
  - [x] Brand identified: **KINEX NUTRITION** (Chicago, IL, USA)
  - [x] Product 1: Kinex Elite Whey - Caramel Crown (24g Protein, 5g BCAA, 5 LBS)
  - [x] Product 2: Kinex Elite Whey - Cookie Crumble Pop (24g Protein, 5 LBS)
  - [x] Product 3: Kinex Nitro Whey + Creapure® - Chocolate Lava Cake (23g Protein, 4.8g BCAA, 5 LBS)
  - [x] Product 4: Kinex Nitro Whey + Creapure® - Vanilla Custard (23g Protein, 5 LBS)
  - [x] Product 5: Kinex Iso Elite Isolate - American Nuts Cream (26g Protein, 5.5g BCAA, 5 LBS)
  - [x] Product 6: Kinex Iso Elite Isolate - Caramel Latte (26g Protein, 5 LBS)
  - [x] Product 7: Kinex Ultra Gain Mass Gainer + Creapure® - Cookie Crumble (380 Cal, 15g Protein, 56g Carbs, 6 LBS)
  - [x] Product 8: Kinex Testvita with ZMA - Male Vitality & Testo Optimizer (1400mg Testo, 1100mg Multi, 600mg Neuro, 60 Tabs)
  - [x] Product 9: Kinex TUDCA + NAC with Milk Thistle - Liver & Cellular Detox (300mg TUDCA, 300mg NAC, 300mg Milk Thistle, 60 Tabs)
- [x] Create comprehensive product catalog blueprint (`docs/PRODUCT_CATALOG_PLAN.md`)
- [x] Optimize all 21 raw 56MB PNG images into high-performance retina WebP (40KB-74KB) and PNGs in `assets/images/products/`

---

## Phase 3: Core Design System & CSS Foundation [QUEUED]
- [ ] Set up directory structure (`assets/css/`, `assets/images/`, `assets/js/`, `products/`)
- [ ] Create `assets/css/variables.css` (color tokens, font scales, radii, transitions)
- [ ] Create `assets/css/base.css` (reset, layout container, navigation header, footer)
- [ ] Create `assets/css/components.css` (product cards, badges, macro pills, nutrition tables, breadcrumbs)
- [ ] Create `assets/css/pages.css` (hero section, catalog filter styles, detail layout)
- [ ] Create SVG trust badges & icons (100% genuine, lab certified, shaker steps)

---

## Phase 4: Core Pages Development [QUEUED]
- [ ] Develop `index.html`:
  - [ ] Top trust announcement ribbon
  - [ ] Sleek navigation bar with mobile hamburger support
  - [ ] Hero showcase with bold athlete/nutrition typography & CTA
  - [ ] Trust credentials bar (4 credibility pillars)
  - [ ] Featured product showcase cards linked to product pages
  - [ ] Goal/Level selector section (Build Muscle, Lean, Endurance)
  - [ ] Science & Purity formulation spotlight
  - [ ] Engaging brand story preview
  - [ ] Comprehensive footer
- [ ] Develop `products.html`:
  - [ ] Category filter pills (All, Whey, Gainers, Pre-Workout, Essentials)
  - [ ] Responsive multi-column product card grid
  - [ ] High-contrast macro highlight badges on every card
  - [ ] Clickable cards leading to individual product pages
- [ ] Develop `about.html`:
  - [ ] Brand origin, sourcing philosophy, and standards
- [ ] Develop `quality.html`:
  - [ ] Quality assurance, NABL lab testing protocols, safety certifications

---

## Phase 5: Individual Product Detail Pages [QUEUED]
- [ ] Develop individual pages under `products/`:
  - [ ] Product 1 detail page (e.g. `products/whey-isolate.html`)
  - [ ] Product 2 detail page (e.g. `products/performance-whey.html`)
  - [ ] Product 3 detail page (e.g. `products/creatine-creapure.html`)
  - [ ] Product 4 detail page (e.g. `products/pre-workout-ignite.html`)
  - [ ] Remaining product pages based on user assets
- [ ] On each product detail page, verify:
  - [ ] High-definition product imagery
  - [ ] Macro highlight pill badges
  - [ ] Available flavors & sizes info
  - [ ] Detailed Nutrition Facts & Amino Acid table
  - [ ] Usage directions (with shaker iconography)
  - [ ] Quality & authenticity seal section
  - [ ] Related products recommendation bar

---

## Phase 6: Quality Assurance & Local Review [QUEUED]
- [ ] Run local HTTP server for interactive testing
- [ ] Verify 100% responsive display on mobile (375px), tablet (768px), and desktop (1280px+)
- [ ] Verify all cross-page links, breadcrumbs, and image sources
- [ ] Audit HTML markup for semantic validity
- [ ] Ensure zero layout shifts and instantaneous load speed

---

## Phase 7: Approval Gate & Git / GitHub Pages Setup [QUEUED]
- [ ] Present completed local website to user for review and final approval
- [ ] Once approved:
  - [ ] Initialize git repository (`git init`)
  - [ ] Create `.gitignore`
  - [ ] Create initial commit
  - [ ] Configure GitHub repository remote
  - [ ] Deploy to GitHub Pages and verify live URL
