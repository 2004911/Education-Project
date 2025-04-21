  AOS.init();

  function countUp(element, target) {
    let current = 0;
    const speed = 200;
    const increment = target / speed;
  
    const updateCount = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target.toLocaleString();
      }
    };
  
    updateCount();
  }
  
  function startCounting() {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      countUp(counter, target);
    });
  }
  
  let counted = false;
  
  // Wait for DOM & AOS
  document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      once: true,
      duration: 1000,
    });
  
    window.addEventListener('scroll', () => {
      const section = document.querySelector('.numbers');
      if (!section) return;
  
      const sectionTop = section.getBoundingClientRect().top;
  
      if (sectionTop < window.innerHeight - 100 && !counted) {
        startCounting();
        counted = true;
      }
    });
  });
 
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  });