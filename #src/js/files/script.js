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

    const circles = document.querySelectorAll('.facts-element__circle');
    circles.forEach((el) => {
      if (el.dataset.percentage == 'true') {
          let progress = el.querySelector('.progress');
          let valueBlock = el.querySelector('.facts-element__value');
          let radius = progress.getAttribute('r');
          let circleLength = 2 * Math.PI * radius;
          let full = el.dataset.full;
          let value = el.dataset.value;
          let percentageProgress = Math.floor((value / full) * 100);
          console.log(percentageProgress);
          valueBlock.textContent = value;
          progress.setAttribute('stroke-dasharray', circleLength);
          progress.setAttribute(
             'stroke-dashoffset',
             circleLength - (circleLength * percentageProgress) / 100,
          );
       } else {
          let progress = el.querySelector('.progress');
          let valueBlock = el.querySelector('.facts-element__value');
          let radius = progress.getAttribute('r');
          let circleLength = 2 * Math.PI * radius;
          let percent = el.dataset.percent;
          let percentageProgress = Math.floor(percent);
          valueBlock.textContent = percent + '%';
          progress.setAttribute('stroke-dasharray', circleLength);
          progress.setAttribute(
             'stroke-dashoffset',
             circleLength - (circleLength * percentageProgress) / 100,
          );
       }
    });

}); // end