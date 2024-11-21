const swiperMenu = new Swiper('.menu__swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 5,
	grabCursor: true,
	spaceBetween: 5,
	loop: true,
	speed: 700,
	centeredSlides: true,

	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.btns-actions-next',
		prevEl: '.btns-actions-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},

	breakpoints: {
		480: {
			slidesPerView: 2, // На больших экранах видны 2.5 слайда
			spaceBetween: 5,
		},

		640: {
			slidesPerView: 3, // На больших экранах видны 2.5 слайда
			spaceBetween: 5,
		},

		768: {
			slidesPerView: 3.5, // На больших экранах видны 2.5 слайда
			spaceBetween: 5,
		},
		1024: {
			slidesPerView: 4.5, // На еще больших экранах — 3.5
			spaceBetween: 5,
		},

		1440: {
			slidesPerView: 5.5, // На еще больших экранах — 3.5
			spaceBetween: 5,
		},
	},
})

const swiperGallery = new Swiper('.gallery__swiper', {
	direction: 'horizontal',
	grabCursor: true,
	loop: true,
	speed: 700,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true, // Включаем динамические точки
		dynamicMainBullets: 1, // Указываем, сколько точек должно отображаться
	},
})
