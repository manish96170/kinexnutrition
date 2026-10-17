/**
 * KINEX NUTRITION - Lightweight Vanilla JavaScript
 * Zero external dependencies. Fast, accessible, and responsive.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileBtn.contains(e.target) && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Product Detail Image Gallery Switcher
  const thumbBtns = document.querySelectorAll('.gallery-thumb-btn');
  const mainImage = document.getElementById('mainGalleryImage');

  if (thumbBtns.length > 0 && mainImage) {
    thumbBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        let newSrc = btn.getAttribute('data-image');
        if (newSrc) {
          if (newSrc.startsWith('../assets/')) {
            newSrc = '/' + newSrc.substring(3);
          }
          mainImage.src = newSrc;
          thumbBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  }

  // 3. Product Detail Information Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabBtns.length > 0 && tabPanes.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        
        tabBtns.forEach((b) => b.classList.remove('active'));
        tabPanes.forEach((p) => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // 4. Products Catalog Category Filter
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-grid .product-card');

  if (filterPills.length > 0 && productCards.length > 0) {
    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const category = pill.getAttribute('data-category');

        filterPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');

        productCards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
