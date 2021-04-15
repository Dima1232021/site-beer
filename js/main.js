//<ОСНОВНОЙ БЛОК>====================================================================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
//<ОСНОВНОЙ БЛОК>====================================================================================================
document.querySelector('.taste-history__burger').onclick = () => {
	document.querySelector('.taste-history__burger').classList.toggle('active');
	document.querySelector('.taste-history__block').classList.toggle('active');
};

document.querySelectorAll('.link').forEach((el) => {
	el.onclick = () => {
		document.querySelector('.taste-history__burger').classList.remove('active');
		document.querySelector('.taste-history__block').classList.remove('active');
	};
});
//<ОСНОВНОЙ БЛОК>====================================================================================================
new Swiper('.discovery__slider', {
	// поточне положення слайда, булет
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// керування клавою
	keyboard: {
		enabled: true,

	},

	//кількість слайдів
	slidesPerView: 3,

	//  відступ між слайдами
	spaceBetween: 30,

	// активний слайдер по центру
	centeredSlides: true,

	//  безкінечність слайдів
	loop: true,

	// адаптив
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		767.98: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		991.98: {
			slidesPerView: 3,
		},
	},

	// предзавантаження картинки
	preloadImages: false,

	// підзагрузка картинки
	lazy: {
		// підзагрузка на початку
		loadOnTransitionStart: false,
		// підзагрузка слідуючої картинки
		loadPrevNext: false,
	},

	// слідкувати за видимістю слайда
	watchSlidesProgress: true,
	// додавати клас видимим слайдам
	watchSlidesVisibility: true,

});
//<ОСНОВНОЙ БЛОК>====================================================================================================
new Swiper('.bestsellers__slider', {
	// стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// поточне положення слайда, булет
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// керування клавою
	keyboard: {
		enabled: true,

	},

	//кількість слайдів
	slidesPerView: 1,

	// предзавантаження картинки
	preloadImages: false,

	// підзагрузка картинки
	lazy: {
		// підзагрузка на початку
		loadOnTransitionStart: false,
		// підзагрузка слідуючої картинки
		loadPrevNext: false,
	},

	// слідкувати за видимістю слайда
	watchSlidesProgress: true,
	// додавати клас видимим слайдам
	watchSlidesVisibility: true,

});
//<ОСНОВНОЙ БЛОК>====================================================================================================
new Swiper('.image-slider', {
	// стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


	// керування клавою
	keyboard: {
		enabled: true,

	},

	//  безкінечність слайдів
	loop: true,

	// адаптив
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		767.98: {
			slidesPerView: 2,
		},
		991.98: {
			slidesPerView: 4,
		},
	},

	// предзавантаження картинки
	preloadImages: false,

	// підзагрузка картинки
	lazy: {
		// підзагрузка на початку
		loadOnTransitionStart: false,
		// підзагрузка слідуючої картинки
		loadPrevNext: false,
	},

	// слідкувати за видимістю слайда
	watchSlidesProgress: true,
	// додавати клас видимим слайдам
	watchSlidesVisibility: true,

});
//<ОСНОВНОЙ БЛОК>====================================================================================================
new Swiper('.testimonials__slider', {
	// стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// поточне положення слайда, булет
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// керування клавою
	keyboard: {
		enabled: true,

	},

	//кількість слайдів
	slidesPerView: 1,




	// предзавантаження картинки
	preloadImages: false,

	// підзагрузка картинки
	lazy: {
		// підзагрузка на початку
		loadOnTransitionStart: false,
		// підзагрузка слідуючої картинки
		loadPrevNext: false,
	},

	// слідкувати за видимістю слайда
	watchSlidesProgress: true,
	// додавати клас видимим слайдам
	watchSlidesVisibility: true,

});
//<ОСНОВНОЙ БЛОК>====================================================================================================
document.querySelectorAll('.choice__title').forEach((el, i) => {
	el.onclick = () => {
		if (document.querySelectorAll('.choice__block .choice__title')[i].querySelector('.choice__plus').classList.contains('active')) {
			document.querySelectorAll('.choice__plus').forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
		} else {
			document.querySelectorAll('.choice__plus').forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
			document.querySelectorAll('.choice__block .choice__title')[i].querySelector('.choice__plus').classList.toggle('active');
		}



		if (document.querySelectorAll('.choice__block')[i].querySelector('.choice__text').classList.contains('active')) {
			document.querySelectorAll('.choice__text').forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
		} else {
			document.querySelectorAll('.choice__text').forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
			document.querySelectorAll('.choice__block')[i].querySelector('.choice__text').classList.toggle('active');
		}


	};
});
//<ОСНОВНОЙ БЛОК>====================================================================================================
new Swiper('.our-brewery__slider', {
	// стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


	// керування клавою
	keyboard: {
		enabled: true,

	},

	//кількість слайдів
	slidesPerView: 1,


	// предзавантаження картинки
	preloadImages: false,

	// підзагрузка картинки
	lazy: {
		// підзагрузка на початку
		loadOnTransitionStart: false,
		// підзагрузка слідуючої картинки
		loadPrevNext: false,
	},

	// слідкувати за видимістю слайда
	watchSlidesProgress: true,
	// додавати клас видимим слайдам
	watchSlidesVisibility: true,

	// міні слайдер
	thumbs: {
		swiper: {
			el: '.our-brewery__mini-slider',

			//  відступ між слайдами
			spaceBetween: 30,

			// адаптив
			breakpoints: {
				320: {
					slidesPerView: 3,
				},
				767.98: {
					slidesPerView: 4,
					centeredSlides: false,
				},
				991.98: {
					slidesPerView: 6,
				},
			},

			// предзавантаження картинки
			preloadImages: false,

			// підзагрузка картинки
			lazy: {
				// підзагрузка на початку
				loadOnTransitionStart: false,
				// підзагрузка слідуючої картинки
				loadPrevNext: false,
			},

			// слідкувати за видимістю слайда
			watchSlidesProgress: true,
			// додавати клас видимим слайдам
			watchSlidesVisibility: true,
		}
	}

});
//<ОСНОВНОЙ БЛОК>====================================================================================================
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
//<ОСНОВНОЙ БЛОК>====================================================================================================

