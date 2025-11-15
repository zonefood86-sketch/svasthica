/* ========================================
   SVASTHICA AYURVEDIC WELLNESS RETREAT
   Main JavaScript - script.js
   ======================================== */

// ============= MOBILE MENU TOGGLE =============
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        
        // Reset hamburger animation
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ============= SMOOTH SCROLLING =============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============= HEADER SCROLL EFFECT =============
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    // Hide/show header on scroll
    if (currentScroll > lastScroll && currentScroll > 300) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ============= INTERSECTION OBSERVER FOR ANIMATIONS =============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and elements
document.querySelectorAll('.about-card, .offering-card, .package-card, .doctor-card, .gallery-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============= GALLERY LIGHTBOX (SIMPLE) =============
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Simple scale animation
        item.style.transition = 'transform 0.3s ease';
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 300);
    });
});

// ============= LAZY LOADING IMAGES =============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============= PACKAGE CARD HOVER EFFECT =============
const packageCards = document.querySelectorAll('.package-card');

packageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        packageCards.forEach(c => {
            if (c !== card) {
                c.style.opacity = '0.7';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        packageCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ============= TESTIMONIAL SLIDER (AUTO-ROTATE) =============
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonialCards.forEach((card, index) => {
        card.style.transition = 'opacity 0.5s ease';
        if (index === currentTestimonial) {
            card.style.opacity = '1';
            card.style.transform = 'scale(1.05)';
        } else {
            card.style.opacity = '0.6';
            card.style.transform = 'scale(1)';
        }
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

// Start rotation
if (testimonialCards.length > 0) {
    setInterval(rotateTestimonials, 4000);
}

// ============= PHONE NUMBER CLICK TRACKING =============
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.textContent);
    });
});

// ============= EMAIL CLICK TRACKING =============
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Email clicked:', link.textContent);
    });
});

// ============= CONSOLE WELCOME MESSAGE =============
console.log('%c🌿 Welcome to Svasthica Ayurvedic Wellness Retreat', 'color: #2d5016; font-size: 16px; font-weight: bold;');
console.log('%cAncient Wisdom. Modern Luxury. Holistic Wellness.', 'color: #8b7355; font-size: 14px; font-style: italic;');

// ============= PAGE LOAD ANIMATION =============
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.open-modal');
  const modal = document.getElementById('bookingModal');
  const modalDialog = modal?.querySelector('.modal-dialog');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalCancel = document.getElementById('modalCancel');
  const packageInput = document.getElementById('packageInput');
  const modalTitle = document.getElementById('modalTitle');
  const form = document.getElementById('bookingForm');
  const submitBtn = document.getElementById('bookingSubmit');
  const statusEl = document.getElementById('formStatus');

  function openModal(packageName) {
    packageInput.value = packageName || '';
    modalTitle.textContent = packageName ? `Enquire: ${packageName}` : 'Book / Enquire';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('name')?.focus(), 100);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    statusEl.textContent = '';
    form.reset();
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkg = btn.getAttribute('data-package') || '';
      openModal(pkg);
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modalCancel?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  function validateForm(data) {
    if (!data.name || !data.email || !data.phone) {
      return 'Please provide name, email and phone.';
    }
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(data.email)) return 'Please provide a valid email.';
    return '';
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    statusEl.textContent = 'Sending...';

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      preferredDate: form.preferredDate.value || null,
      package: form.package.value || null,
      message: form.message.value.trim() || null,
      submittedAt: new Date().toISOString()
    };

    const validationError = validateForm(formData);
    if (validationError) {
      statusEl.textContent = validationError;
      submitBtn.disabled = false;
      return;
    }

    try {
      // TODO: replace with your backend endpoint
      const apiUrl = 'https://example.com/api/bookings';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => '');
        throw new Error(errText || 'Server error');
      }

      statusEl.textContent = 'Thank you — your enquiry has been sent.';
      setTimeout(() => closeModal(), 2000);
    } catch (err) {
      console.error(err);
      statusEl.textContent = 'Could not send enquiry. Please try again later.';
    } finally {
      submitBtn.disabled = false;
    }
  });

  /* Enhanced centered 3-up carousel (highlight center slide) */
  (function initGalleryCarousel() {
    const carousel = document.getElementById('galleryCarousel');
    if (!carousel) return;
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const indicators = carousel.querySelector('.carousel-indicators');
    const count = slides.length;
    let index = 0;
    let autoplayTimer = null;
    const AUTOPLAY = true;
    const INTERVAL = 4000;

    // helper: minimal delta in circular list
    function deltaFor(i, center) {
      let d = i - center;
      if (d > count / 2) d -= count;
      if (d < -count / 2) d += count;
      return d;
    }

    function applyPositions(centerIndex) {
      slides.forEach((s, i) => {
        s.className = 'carousel-slide'; // reset classes
        const d = deltaFor(i, centerIndex);
        if (d === 0) {
          s.classList.add('is-center');
        } else if (d === -1 || (d === count - 1 && centerIndex === 0)) {
          s.classList.add('is-side', 'is-left');
        } else if (d === 1 || (d === -(count - 1) && centerIndex === count - 1)) {
          s.classList.add('is-side', 'is-right');
        } else if (d <= -2 || (d > 0 && Math.abs(d) >= count - 1)) {
          s.classList.add('is-back-left');
        } else {
          s.classList.add('is-back-right');
        }
      });
      updateIndicators(centerIndex);
    }

    function updateIndicators(active) {
      if (!indicators) return;
      indicators.querySelectorAll('.indicator').forEach((b, i) => {
        b.classList.toggle('active', i === active);
        b.setAttribute('aria-selected', i === active ? 'true' : 'false');
      });
    }

    function buildIndicators() {
      if (!indicators) return;
      indicators.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const btn = document.createElement('button');
        btn.className = 'indicator';
        btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
        btn.dataset.index = i;
        btn.addEventListener('click', () => {
          goTo(i);
          resetAutoplay();
        });
        indicators.appendChild(btn);
      }
    }

    function goTo(i) {
      index = ((i % count) + count) % count;
      applyPositions(index);
    }
    function prev() { goTo(index - 1); resetAutoplay(); }
    function next() { goTo(index + 1); resetAutoplay(); }

    // autoplay
    function startAutoplay() {
      stopAutoplay();
      if (!AUTOPLAY) return;
      autoplayTimer = setInterval(() => { next(); }, INTERVAL);
    }
    function stopAutoplay() { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } }
    function resetAutoplay() { stopAutoplay(); startAutoplay(); }

    // pointer/touch swipe handling (simple)
    let startX = 0, isPointer = false;
    function onPointerDown(e) {
      isPointer = true;
      startX = (e.touches ? e.touches[0].clientX : e.clientX);
      stopAutoplay();
    }
    function onPointerMove(e) {
      if (!isPointer) return;
      // nothing visual during drag for simplicity (could add translateX)
    }
    function onPointerUp(e) {
      if (!isPointer) return;
      isPointer = false;
      const endX = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX);
      const dx = endX - startX;
      const threshold = (carousel.clientWidth || window.innerWidth) * 0.08;
      if (dx > threshold) prev();
      else if (dx < -threshold) next();
      startAutoplay();
    }

    // keyboard support when focused
    function onKey(e) {
      if (!carousel.contains(document.activeElement)) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }

    // attach events
    prevBtn?.addEventListener('click', prev);
    nextBtn?.addEventListener('click', next);
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('touchstart', onPointerDown, { passive: true });
    carousel.addEventListener('touchend', onPointerUp);
    carousel.addEventListener('pointerdown', (e) => onPointerDown(e));
    window.addEventListener('pointerup', onPointerUp);
    document.addEventListener('keydown', onKey);

    // initialization
    buildIndicators();
    goTo(0);
    startAutoplay();

    // expose for debugging if needed
    carousel._goTo = goTo;
  })();
});
