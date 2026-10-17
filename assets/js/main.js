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

  // 5. Interactive Flagship Hero Product Slider
  const heroSlider = document.getElementById('heroSlider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const navItems = heroSlider.querySelectorAll('.slider-nav-item');
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');

    let currentIndex = 0;
    let autoPlayTimer = null;
    let progressTimer = null;
    let progressValue = 0;
    const SLIDE_DURATION = 5500;
    const PROGRESS_INTERVAL = 50;

    function resetProgress() {
      if (progressTimer) clearInterval(progressTimer);
      progressValue = 0;
      navItems.forEach((item) => {
        const fill = item.querySelector('.progress-fill');
        if (fill) fill.style.width = '0%';
      });
    }

    function startProgress() {
      resetProgress();
      const currentFill = navItems[currentIndex]?.querySelector('.progress-fill');
      if (!currentFill) return;

      const increment = (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
      progressTimer = setInterval(() => {
        progressValue += increment;
        if (progressValue >= 100) {
          progressValue = 100;
          currentFill.style.width = '100%';
          clearInterval(progressTimer);
        } else {
          currentFill.style.width = `${progressValue}%`;
        }
      }, PROGRESS_INTERVAL);
    }

    function goToSlide(index) {
      if (index === currentIndex) return;
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      slides[currentIndex].classList.remove('active');
      slides[currentIndex].setAttribute('aria-hidden', 'true');
      navItems[currentIndex].classList.remove('active');
      navItems[currentIndex].setAttribute('aria-selected', 'false');

      currentIndex = index;

      slides[currentIndex].classList.add('active');
      slides[currentIndex].setAttribute('aria-hidden', 'false');
      navItems[currentIndex].classList.add('active');
      navItems[currentIndex].setAttribute('aria-selected', 'true');

      startProgress();
    }

    function nextSlide() {
      goToSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
      goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    function startAutoPlay() {
      stopAutoPlay();
      startProgress();
      autoPlayTimer = setInterval(nextSlide, SLIDE_DURATION);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      if (progressTimer) clearInterval(progressTimer);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoPlay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoPlay();
      });
    }

    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        const targetIndex = parseInt(item.getAttribute('data-nav-index'), 10);
        if (!isNaN(targetIndex)) {
          goToSlide(targetIndex);
          startAutoPlay();
        }
      });
    });

    heroSlider.addEventListener('mouseenter', stopAutoPlay);
    heroSlider.addEventListener('mouseleave', startAutoPlay);

    let touchStartX = 0;
    let touchEndX = 0;

    heroSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSlider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const threshold = 40;
      if (touchEndX < touchStartX - threshold) {
        nextSlide();
        startAutoPlay();
      } else if (touchEndX > touchStartX + threshold) {
        prevSlide();
        startAutoPlay();
      }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
      const rect = heroSlider.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        if (e.key === 'ArrowRight') {
          nextSlide();
          startAutoPlay();
        } else if (e.key === 'ArrowLeft') {
          prevSlide();
          startAutoPlay();
        }
      }
    });

    startAutoPlay();
  }
});
