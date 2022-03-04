document.addEventListener('DOMContentLoaded', () => {
   // sliders
    const sliderPortfolio = new Swiper('.portfolio-section__items', {
       slidesPerView: 3,
       spaceBetween: 30,
       speed: 800,
       // Arrows
       navigation: {
          nextEl: '.portfolio-section__next',
          prevEl: '.portfolio-section__prev',
       },
    });
    const sliderTestimonials = new Swiper('.testimonials__items', {
       slidesPerView: 1,
       spaceBetween: 30,
       loop: true,
       speed: 800,
       // Arrows
       navigation: {
          nextEl: '.testimonials__next',
          prevEl: '.testimonials__prev',
       },
    });

}); // end