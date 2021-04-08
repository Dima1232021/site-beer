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

	// //кількість слайдів
	// slidesPerView: 4,


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
//<ОСНОВНОЙ БЛОК>====================================================================================================