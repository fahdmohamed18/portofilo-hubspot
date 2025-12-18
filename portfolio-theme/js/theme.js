/**
 * Fahd Mohamed - Portfolio Theme JavaScript
 * Smooth animations and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animate skill progress bars
        if (entry.target.classList.contains('skill-category')) {
          const progressBars = entry.target.querySelectorAll('.skill-progress');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = bar.style.width || '0%';
            }, index * 100);
          });
        }
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.skill-category, .project-card, .timeline-item, .contact-card'
  );
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Add visible class styles
  const style = document.createElement('style');
  style.textContent = `
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
  
  // Scroll to Top Button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.id = 'scrollToTop';
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Typing effect for role text (optional enhancement)
  const roleText = document.querySelector('.role-text');
  if (roleText) {
    const text = roleText.textContent;
    roleText.textContent = '';
    let index = 0;
    
    function typeWriter() {
      if (index < text.length) {
        roleText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
  }
  
  // Add hover effect for tech items
  const techItems = document.querySelectorAll('.tech-item, .tech-tag');
  techItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Parallax effect for hero background glows
  const heroGlows = document.querySelectorAll('.hero-glow');
  if (heroGlows.length > 0) {
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      heroGlows.forEach((glow, index) => {
        const speed = (index + 1) * 20;
        glow.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  }
  
  // Console Easter Egg
  console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #00d4aa;');
  console.log('%cInterested in working together? Let\'s connect!', 'font-size: 14px; color: #a0a0b0;');
  console.log('%c🚀 Built with HubSpot CMS', 'font-size: 12px; color: #512bd4;');
  
});
