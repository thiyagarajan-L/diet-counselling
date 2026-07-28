/**
 * NUVITA BY KRISH - DIETITIAN & NUTRITIONIST
 * Interactive Script (script.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initActiveNavLink();
  initGalleryFilter();
  initContactForm();
  initWhatsAppBuilder();
  initScrollAnimations();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('nuvita_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(currentTheme);
      localStorage.setItem('nuvita_theme', currentTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  
  themeToggleBtns.forEach(btn => {
    if (theme === 'dark') {
      btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      btn.setAttribute('title', 'Switch to Light Mode');
    } else {
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      btn.setAttribute('title', 'Switch to Dark Mode');
    }
  });
}

/* ==========================================================================
   2. Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      mobileBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Close mobile menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }
}

/* ==========================================================================
   3. Highlight Active Link Based on Page
   ========================================================================== */
function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ==========================================================================
   4. Before & After Transformation Gallery Filters
   ========================================================================== */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.transformation-card');

  if (filterBtns.length > 0 && galleryCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease forward';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

/* ==========================================================================
   5. Interactive Contact Form Submission
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('consultationForm');
  const formResponse = document.getElementById('formResponse');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim();
      const phone = document.getElementById('formPhone')?.value.trim();
      const service = document.getElementById('formService')?.value || 'Diet Consultation';
      const message = document.getElementById('formMessage')?.value.trim();

      // Send conversion event to Google Analytics
      trackGAEvent('submit_consultation_form', {
        program_selected: service
      });

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Booking...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        if (formResponse) {
          formResponse.style.display = 'block';
          formResponse.innerHTML = `
            <div style="background: var(--primary-light); color: var(--primary); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--primary); margin-top: 1rem;">
              <h4 style="margin-bottom: 0.25rem;"><i class="fa-solid fa-circle-check"></i> Thank you, ${name || 'Friend'}!</h4>
              <p style="font-size: 0.9rem;">Your inquiry for <strong>${service}</strong> has been received. Dietitian Krish will reach out to you shortly via WhatsApp (${phone}).</p>
            </div>
          `;
        }

        // Trigger custom direct WhatsApp link launch option
        const whatsappMsg = `Hi Nuvita by Krish! My name is ${name}. I submitted a request for ${service}. Phone: ${phone}. Note: ${message}`;
        const encodedUrl = `https://wa.me/918610530654?text=${encodeURIComponent(whatsappMsg)}`;
        
        setTimeout(() => {
          if (confirm('Would you also like to open WhatsApp directly to start chatting with Dietitian Krish immediately?')) {
            window.open(encodedUrl, '_blank');
          }
        }, 600);

      }, 1200);
    });
  }
}

/* ==========================================================================
   6. WhatsApp Direct Consultation Builder
   ========================================================================== */
function initWhatsAppBuilder() {
  const waButtons = document.querySelectorAll('.trigger-whatsapp, .whatsapp-float');

  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const packageType = btn.getAttribute('data-package') || 'General WhatsApp Contact';
      
      // Send conversion event to Google Analytics
      trackGAEvent('click_whatsapp', {
        package_name: packageType
      });

      if (btn.classList.contains('trigger-whatsapp')) {
        const customMessage = `Hi Dietitian Krish (Nuvita)! I am interested in booking the "${packageType}" program. Please guide me with consultation details.`;
        const waUrl = `https://wa.me/918610530654?text=${encodeURIComponent(customMessage)}`;
        window.open(waUrl, '_blank');
      }
    });
  });
}

/* ==========================================================================
   7. Scroll Fade In Animations
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.service-card, .package-card, .pillar-card, .approach-step, .testimonial-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
}

/* ==========================================================================
   8. Google Analytics Event Tracking Helper
   ========================================================================== */
function trackGAEvent(eventName, eventParams = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
    console.log(`[Google Analytics Event Tracked]: ${eventName}`, eventParams);
  }
}

