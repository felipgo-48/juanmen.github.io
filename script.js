    document.addEventListener('DOMContentLoaded', function() {
      const carousel = new bootstrap.Carousel(document.getElementById('carouselMedioAmbiente'), {
        interval: 4000,
        wrap: true,
        touch: true
      });

      // Pausar al hacer hover
      const carouselElement = document.getElementById('carouselMedioAmbiente');
      carouselElement.addEventListener('mouseenter', () => carousel.pause());
      carouselElement.addEventListener('mouseleave', () => carousel.cycle());

      // Animaciones al hacer scroll
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

      // Observar elementos para animaciones
      document.querySelectorAll('.card, .intro-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
      });

      // Smooth scroll para navegación
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    });
