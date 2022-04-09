function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
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
         slidesPerView: 3,
         spaceBetween: 30,
         speed: 800,
         navigation: {
            nextEl: '.portfolio-section__next',
            prevEl: '.portfolio-section__prev',
         },
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
         slidesPerView: 3,
         spaceBetween: 30,
         speed: 800,
         // Arrows
         navigation: {
            nextEl: '.related-projects__next',
            prevEl: '.related-projects__prev',
         },
      });
   }

   const projectSlider = document.querySelector('.project-slider-swiper');
   if (projectSlider) {
      const sliderProjectNav = new Swiper('.project-slider-nav', {
         slidesPerView: 10,
         spaceBetween: 20,
         speed: 800,
         freeMode: true,
         watchSlidesProgress: true,
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
   const heroHeight = !!document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 500;

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

let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
function form_submit(event) {
	let btn = event.target;
	let form = btn.closest('form');
	let message = form.getAttribute('data-message');
	let error = form_validate(form);
	if (error == 0) {
		//SendForm
		form_clean(form);
		if (message) {
			popup_open(message + '-message');
			event.preventDefault();
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		event.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

/*
//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}

function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}
*/

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				datepicker(input, {
					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}


let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
// selects
const selects = document.querySelectorAll('.form-field__select');
let popupSelect;

selects.forEach((el) => {
   const choice = new Choices(el, {
      shouldSort: false,
      position: 'bottom',
      searchEnabled: false,
   });
   if (el.classList.contains('form-field__select--popup')) {
      popupSelect = choice;
   }
});

// поддержка webp
function testWebP(callback) {
   let webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
//=================
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
//=================
// da
('use strict');

(function () {
   let originalPositions = [];
   let daElements = document.querySelectorAll('[data-da]');
   let daElementsArray = [];
   let daMatchMedia = [];
   //Заполняем массивы
   if (daElements.length > 0) {
      let number = 0;
      for (let index = 0; index < daElements.length; index++) {
         const daElement = daElements[index];
         const daMove = daElement.getAttribute('data-da');
         if (daMove != '') {
            const daArray = daMove.split(',');
            const daPlace = daArray[1] ? daArray[1].trim() : 'last';
            const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
            const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
            const daDestination = document.querySelector('.' + daArray[0].trim());
            if (daArray.length > 0 && daDestination) {
               daElement.setAttribute('data-da-index', number);
               //Заполняем массив первоначальных позиций
               originalPositions[number] = {
                  parent: daElement.parentNode,
                  index: indexInParent(daElement),
               };
               //Заполняем массив элементов
               daElementsArray[number] = {
                  element: daElement,
                  destination: document.querySelector('.' + daArray[0].trim()),
                  place: daPlace,
                  breakpoint: daBreakpoint,
                  type: daType,
               };
               number++;
            }
         }
      }
      dynamicAdaptSort(daElementsArray);

      //Создаем события в точке брейкпоинта
      for (let index = 0; index < daElementsArray.length; index++) {
         const el = daElementsArray[index];
         const daBreakpoint = el.breakpoint;
         const daType = el.type;

         daMatchMedia.push(window.matchMedia('(' + daType + '-width: ' + daBreakpoint + 'px)'));
         daMatchMedia[index].addListener(dynamicAdapt);
      }
   }
   //Основная функция
   function dynamicAdapt(e) {
      for (let index = 0; index < daElementsArray.length; index++) {
         const el = daElementsArray[index];
         const daElement = el.element;
         const daDestination = el.destination;
         const daPlace = el.place;
         const daBreakpoint = el.breakpoint;
         const daClassname = '_dynamic_adapt_' + daBreakpoint;

         if (daMatchMedia[index].matches) {
            //Перебрасываем элементы
            if (!daElement.classList.contains(daClassname)) {
               let actualIndex = indexOfElements(daDestination)[daPlace];
               if (daPlace === 'first') {
                  actualIndex = indexOfElements(daDestination)[0];
               } else if (daPlace === 'last') {
                  actualIndex =
                     indexOfElements(daDestination)[indexOfElements(daDestination).length];
               }
               daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
               daElement.classList.add(daClassname);
            }
         } else {
            //Возвращаем на место
            if (daElement.classList.contains(daClassname)) {
               dynamicAdaptBack(daElement);
               daElement.classList.remove(daClassname);
            }
         }
      }
      customAdapt();
   }

   //Вызов основной функции
   dynamicAdapt();

   //Функция возврата на место
   function dynamicAdaptBack(el) {
      const daIndex = el.getAttribute('data-da-index');
      const originalPlace = originalPositions[daIndex];
      const parentPlace = originalPlace['parent'];
      const indexPlace = originalPlace['index'];
      const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
      parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
   }
   //Функция получения индекса внутри родителя
   function indexInParent(el) {
      var children = Array.prototype.slice.call(el.parentNode.children);
      return children.indexOf(el);
   }
   //Функция получения массива индексов элементов внутри родителя
   function indexOfElements(parent, back) {
      const children = parent.children;
      const childrenArray = [];
      for (let i = 0; i < children.length; i++) {
         const childrenElement = children[i];
         if (back) {
            childrenArray.push(i);
         } else {
            //Исключая перенесенный элемент
            if (childrenElement.getAttribute('data-da') == null) {
               childrenArray.push(i);
            }
         }
      }
      return childrenArray;
   }
   //Сортировка объекта
   function dynamicAdaptSort(arr) {
      arr.sort(function (a, b) {
         if (a.breakpoint > b.breakpoint) {
            return -1;
         } else {
            return 1;
         }
      });
      arr.sort(function (a, b) {
         if (a.place > b.place) {
            return 1;
         } else {
            return -1;
         }
      });
   }
   //Дополнительные сценарии адаптации
   function customAdapt() {
      //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
   }
})();
//=================
// ibg
function ibg() {
   let ibg = document.querySelectorAll('._ibg');
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage =
            'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

let observer = new MutationObserver((mutationRecords) => {
   mutationRecords.forEach((item) => {
      if (item.addedNodes[0]) {
         if (item.addedNodes[0].classList) {
            if (item.addedNodes[0].classList.contains('_ibg')) ibg();
         }
      }
   });
});

observer.observe(document.body, {
   childList: true,
   subtree: true,
});

ibg();
//=================
// isMobile
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   },
};
//=================
//RemoveClasses
function _removeClasses(el, class_name) {
   for (let i = 0; i < el.length; i++) {
      el[i].classList.remove(class_name);
   }
}
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
};
let _slideDown = (target, duration = 500) => {
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;
   if (display === 'none') display = 'block';

   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
};
let _slideToggle = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (window.getComputedStyle(target).display === 'none') {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
};
//=================
//IsHidden
function _is_hidden(el) {
   return el.offsetParent === null;
}
//=================
let unlock = true;
let popups = document.querySelectorAll('.popup');

for (let index = 0; index < popups.length; index++) {
   const popup = popups[index];
   popup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__body')) {
         popup_close(e.target.closest('.popup'));
      }
   });
}
//=================
function popup_open(item, video = '') {
   let activePopup = document.querySelectorAll('.popup._active');
   if (activePopup.length > 0) {
      popup_close('', false);
   }
   let curent_popup = document.querySelector('.popup_' + item);
   if (curent_popup && unlock) {
      if (video != '' && video != null) {
         let popup_video = document.querySelector('.popup_video');
         popup_video.querySelector('.popup__video').innerHTML =
            '<iframe src="https://www.youtube.com/embed/' +
            video +
            '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      }
      if (!document.querySelector('.menu__body._active')) {
         body_lock_add(500);
      }
      curent_popup.classList.add('_active');
      history.pushState('', '', '#' + item);
   }
}
//=================
function popup_close(item, bodyUnlock = true) {
   if (unlock) {
      if (!item) {
         for (let index = 0; index < popups.length; index++) {
            const popup = popups[index];
            let video = popup.querySelector('.popup__video');
            if (video) {
              video.innerHTML = '';
            }
            popup.querySelector('.popup__form').reset();
            popup.classList.remove('_active');
         }
      } else {
         let video = item.querySelector('.popup__video');
         if (video) {
            video.innerHTML = '';
         }
         item.querySelector('.popup__form').reset();
         item.classList.remove('_active');
      }
      popupSelect.setChoiceByValue('');
      if (!document.querySelector('.menu__body._active') && bodyUnlock) {
         body_lock_remove(500);
      }
      history.pushState('', '', window.location.href.split('#')[0]);
   }
}
//=================
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
   for (let index = 0; index < popup_close_icon.length; index++) {
      const el = popup_close_icon[index];
      el.addEventListener('click', function () {
         popup_close(el.closest('.popup'));
      });
   }
}
document.addEventListener('keydown', function (e) {
   if (e.key == 'Escape') {
      popup_close();
   }
});

const popupBtns = document.querySelectorAll('[data-open]');

popupBtns.forEach((el) => {
   const value = el.getAttribute('data-open');

   el.addEventListener('click', () => {
      popup_open(value);
   });
});
//=================
// body lock
function body_lock(delay) {
   let body = document.querySelector('body');
   if (body.classList.contains('_lock')) {
      body_lock_remove(delay);
   } else {
      body_lock_add(delay);
   }
}
function body_lock_remove(delay) {
   let body = document.querySelector('body');
   if (unlock) {
      let lock_padding = document.querySelectorAll('._lp');
      setTimeout(() => {
         for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = '0px';
         }
         body.style.paddingRight = '0px';
         body.classList.remove('_lock');
      }, delay);

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, delay);
   }
}

function body_lock_add(delay) {
   let body = document.querySelector('body');
   if (unlock) {
      let lock_padding = document.querySelectorAll('._lp');
      for (let index = 0; index < lock_padding.length; index++) {
         const el = lock_padding[index];
         el.style.paddingRight =
            window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }
      body.style.paddingRight =
         window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      body.classList.add('_lock');

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, delay);
   }
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
   gallery_init();
}
function gallery_init() {
   for (let index = 0; index < gallery.length; index++) {
      const el = gallery[index];
      lightGallery(el, {
         counter: false,
         selector: 'a',
         download: false,
      });
   }
}
//=================
;
// @ @include('files/burger.js', {});
let spollers = document.querySelectorAll("[data-spoller]");
if (spollers.length > 0) {
   let isReadyToChange = true;
   
	function initSpollers(spoller){
		if (spoller.classList.contains('_spoller-992') && window.innerWidth < 992) {
			spoller.classList.add('_init');
		}else if (spoller.classList.contains('_spoller-768') && window.innerWidth < 768) {
			spoller.classList.add('_init');
		}else{
			spoller.classList.remove('_init');
		}
	}
   
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		
		if (spoller.hasAttribute('data-active')){
			spoller.classList.add('_active');
		}else{
			_slideUp(spoller.nextElementSibling);
		}
      
      spoller.addEventListener('click', function (e) {
         if (isReadyToChange){
            if (spoller.hasAttribute('data-992') && window.innerWidth > 992) {
               return false;
            }
            if (spoller.hasAttribute('data-768') && window.innerWidth > 768) {
               return false;
            }
            if (spoller.closest('[data-spollers]')) {
               let curent_spollers = spoller.closest('[data-spollers]').querySelectorAll('[data-spoller]');
               for (let i = 0; i < curent_spollers.length; i++) {
                  let el = curent_spollers[i];
                  if (el != spoller) {
                     el.classList.remove('_active');
                     _slideUp(el.nextElementSibling);
                  }
               }
            } 

            spoller.classList.toggle('_active');
            _slideToggle(spoller.nextElementSibling);
            isReadyToChange = false;

            setTimeout(() => {
               isReadyToChange = true;
            }, 500);
         }
      });

		initSpollers(spoller);

		window.addEventListener('resize',() =>  initSpollers(spoller));
	}
};
// @ @include("files/select.js",{});
// @ @include("files/tabs.js",{});
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_about = new Swiper('.about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
;
if(!!document.querySelector('.video-block')){
   const videpBlock = document.querySelector('.video-block');
   const video = videpBlock.querySelector('video');
   const videoPlayBtn = videpBlock.querySelector('.video-block__play');
   const videoPlayMuted = document.querySelector('.video-block__muted');
   const iconMute = document.querySelector('.video-block__mute');
   const iconUnmute = document.querySelector('.video-block__unmute');

   videoPlayBtn.addEventListener('click', () => {
      videpBlock.classList.add('play');
      videoPlayBtn.classList.add('played');
      videoPlayMuted.classList.add('played');
      video.controls = true;
      video.play();
   });

   const changeMuted = () => {
      iconMute.classList.toggle('hide');
      iconUnmute.classList.toggle('show');
      video.muted = !video.muted;
   }

   videoPlayMuted.addEventListener('click', changeMuted);
}
;
    