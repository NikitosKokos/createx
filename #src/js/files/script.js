document.addEventListener('DOMContentLoaded', () => {
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

}); // end