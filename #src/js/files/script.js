document.addEventListener('DOMContentLoaded', () => {
   // sliders
   const sliderMain = document.querySelector('.hero-slider');
   if (sliderMain) {
      const sliderHero = new Swiper(sliderMain, {
         slidesPerView: 1,
         speed: 1000,
         // Arrows
         navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
         },
         pagination: {
            el: '.hero__pag',
            clickable: true,
         },
         autoplay: {
            delay: 5000,
         },
         on: {
            afterInit: function () {
               const paginationBullets = document.querySelectorAll(
                  '.hero__pag .swiper-pagination-bullet',
               );

               paginationBullets.forEach((el) => {
                  el.innerHTML = `<span class="hero__bar"></span>`;
               });
            },
         },
      });
   }
   const sliderCont = document.querySelector('.portfolio-section__items');
   if (sliderCont) {
      const sliderPortfolio = new Swiper(sliderCont, {
         slidesPerView: 1,
         spaceBetween: 30,
         speed: 800,
         navigation: {
            nextEl: '.portfolio-section__next',
            prevEl: '.portfolio-section__prev',
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 3,
            }
         }
      });
   }
   const sliderContTest = document.querySelector('.testimonials__items');
   if (sliderContTest) {
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
   }
   const relatedSlider = document.querySelector('.related-projects__items');
   if (relatedSlider) {
      const sliderRelated = new Swiper(relatedSlider, {
         slidesPerView: 1,
         spaceBetween: 30,
         speed: 800,
         // Arrows
         navigation: {
            nextEl: '.related-projects__next',
            prevEl: '.related-projects__prev',
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 3,
            }
         }
      });
   }

   const projectSlider = document.querySelector('.project-slider-swiper');
   if (projectSlider) {
      const sliderProjectNav = new Swiper('.project-slider-nav', {
         slidesPerView: 6,
         spaceBetween: 10,
         speed: 800,
         freeMode: true,
         watchSlidesProgress: true,
         breakpoints: {
            320: {
               slidesPerView: 6,
               spaceBetween: 10,
            },
            576: {
               spaceBetween: 20,
            },
            1260: {
               slidesPerView: 10,
            }
         }
      });
      const sliderProject = new Swiper(projectSlider, {
         slidesPerView: 1,
         spaceBetween: 20,
         speed: 800,
         thumbs: {
            swiper: sliderProjectNav,
         },
         // Arrows
         navigation: {
            nextEl: '.project-slider__next',
            prevEl: '.project-slider__prev',
         },
      });
   }

   const historySlider = document.querySelector('.history-slider');
   if (historySlider) {
      const sliderHistory = new Swiper(historySlider, {
         slidesPerView: 1,
         spaceBetween: 20,
         speed: 800,
         // Arrows
         navigation: {
            nextEl: '.history__next',
            prevEl: '.history__prev',
         },
      });
      const historyNavBtns = document.querySelectorAll('.history-nav__btn');

      sliderHistory.on('slideChange', () => {
         historyNavBtns.forEach((elem) => {
            elem.classList.remove('_active');
         });

         document
            .querySelector(`.history-nav__btn[data-index="${sliderHistory.realIndex}"]`)
            .classList.add('_active');
      });

      historyNavBtns.forEach((el, i) => {
         el.setAttribute('data-index', i);

         el.addEventListener('click', (e) => {
            const i = e.currentTarget.dataset.index;

            historyNavBtns.forEach((elem) => {
               elem.classList.remove('_active');
            });

            e.currentTarget.classList.add('_active');

            sliderHistory.slideTo(i);
         });
      });
   }

   //  circles
   const circles = document.querySelectorAll('.facts-element__circle');
   if (circles) {
      circles.forEach((el) => {
         if (el.dataset.percentage == 'true') {
            let progress = el.querySelector('.progress');
            let valueBlock = el.querySelector('.facts-element__value');
            let radius = progress.getAttribute('r');
            let circleLength = 2 * Math.PI * radius;
            let full = el.dataset.full;
            let value = el.dataset.value;
            let percentageProgress = Math.floor((value / full) * 100);
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
   }

   //  checkbox with from
   const formCheckbox = document.querySelector('.contacts-from__checkbox .custom-checkbox__input');
   const formBtn = document.querySelector('.contacts-from__btn');

   const changeBtnState = (checkbox) => {
      formBtn.disabled = !checkbox.checked;
   };

   if (formCheckbox) {
      formCheckbox.addEventListener('change', (e) => changeBtnState(e.currentTarget));
      changeBtnState(formCheckbox);
   }

   const formCheckboxContacts = document.querySelector('.form-contacts__checkbox .custom-checkbox__input');
   const formBtnContacts = document.querySelector('.form-contacts__btn');

   const changeBtnContactsState = (checkbox) => {
      formBtnContacts.disabled = !checkbox.checked;
   };

   if (formCheckboxContacts) {
      formCheckboxContacts.addEventListener('change', (e) =>
         changeBtnContactsState(e.currentTarget),
      );
      changeBtnContactsState(formCheckboxContacts);
   }

   //  tabs
   const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');
   const portfolioTabsNavBts = document.querySelectorAll('.portfolio-tabs-nav__btn');
   const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
   const loadMore = document.querySelector('.portfolio-more');
   const itemsCount = 9;
   let page = 1;

   if (portfolioTabsNav) {
      const isLoadMoreNeeded = (selector, page = 1) => {
         if (selector.length <= itemsCount * page) {
            loadMore.style.display = 'none';
         } else {
            loadMore.style.display = 'flex';
         }
      };

      portfolioTabsNav.addEventListener('click', (e) => {
         const target = e.target;
         if (target.classList.contains('portfolio-tabs-nav__btn')) {
            const path = target.dataset.path;

            page = 1;

            portfolioTabsItems.forEach((el) => {
               el.classList.remove('_visible');
            });

            if (path === 'all') {
               [...portfolioTabsItems].slice(0, itemsCount).forEach((el) => {
                  el.classList.add('_visible');
               });
               portfolioTabsNavBts.forEach((el) => {
                  el.classList.remove('_active');
               });
               target.classList.add('_active');
               isLoadMoreNeeded(document.querySelectorAll('.portfolio-tabs__item'));
               return;
            }

            let currentItems = document.querySelectorAll(`[data-target='${path}']`);
            if (document.querySelectorAll(`[data-target='${path}']`).length > itemsCount) {
               currentItems = [...currentItems].slice(0, itemsCount);
            }
            currentItems.forEach((el) => {
               el.closest('.portfolio-tabs__item').classList.add('_visible');
            });

            portfolioTabsNavBts.forEach((el) => {
               el.classList.remove('_active');
            });
            target.classList.add('_active');

            isLoadMoreNeeded(document.querySelectorAll(`[data-target='${path}']`));
         }
      });

      if (portfolioTabsItems.length > itemsCount) {
         [...portfolioTabsItems].slice(0, itemsCount).forEach((el) => {
            el.classList.add('_visible');
         });
      }

      isLoadMoreNeeded(portfolioTabsItems);

      loadMore.addEventListener('click', (e) => {
         const path = document.querySelector('.portfolio-tabs-nav__btn._active').dataset.path;

         if (path === 'all') {
            const hiddenItems = [...portfolioTabsItems].slice(itemsCount * page);

            if (hiddenItems.length > itemsCount) {
               const currentItems = [...portfolioTabsItems].slice(
                  itemsCount * page,
                  itemsCount * (page + 1),
               );

               currentItems.forEach((el) => {
                  el.classList.add('_visible');
               });
            } else {
               hiddenItems.forEach((el) => {
                  el.classList.add('_visible');
               });
            }
            page++;
            isLoadMoreNeeded(portfolioTabsItems, page);
         } else {
            const hiddenItems = [...document.querySelectorAll(`[data-target='${path}']`)].slice(
               itemsCount * page,
            );

            if (hiddenItems.length > itemsCount) {
               const currentItems = [...document.querySelectorAll(`[data-target='${path}']`)].slice(
                  itemsCount * page,
                  itemsCount * (page + 1),
               );
               currentItems.forEach((el) => {
                  el.closest('.portfolio-tabs__item').classList.add('_visible');
               });
            } else {
               hiddenItems.forEach((el) => {
                  el.closest('.portfolio-tabs__item').classList.add('_visible');
               });
            }
            page++;
            isLoadMoreNeeded(document.querySelectorAll(`[data-target='${path}']`), page);
         }
      });
   }

   // scroll to top
   const scroll = new SmoothScroll('.to-top', {
      speed: 200
   });

   const toTop = document.querySelector('.to-top');
   const heroHeight = !!document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : (!!document.querySelector('.page-hero') ? document.querySelector('.page-hero').offsetHeight : 500);

   const isVisibleToTop = (y = 0) => {
      if(y >= heroHeight){
         toTop.classList.add('_active');
      }else{
         toTop.classList.remove('_active');
      }
   }

   isVisibleToTop(window.scrollY);

   window.addEventListener('scroll', () => {
      isVisibleToTop(window.scrollY);
   });

}); // end
