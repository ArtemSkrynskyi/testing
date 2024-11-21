const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')
const btnClose = document.querySelector('.btn-close')

burger.addEventListener('click', function () {
	menu.classList.add('active')
})

btnClose.addEventListener('click', function () {
	menu.classList.remove('active')
})

const heroBtn = document.querySelector('.hero__content-btn')

const menuBtn = document.querySelectorAll('.menu__list-item')
const menuSwiperSlide = document.querySelectorAll('.menu__swiper-slide')
const headerMenuItem = document.querySelectorAll('.header__menu-item')
const modalMenu = document.querySelector('.modal-menu')
const menuBtnClose = document.querySelector('.btn-close-modal')

menuBtn.forEach(item => {
	item.addEventListener('click', function () {
		modalMenu.classList.add('active')
	})
})

menuSwiperSlide.forEach(itemSlide => {
	itemSlide.addEventListener('click', function () {
		modalMenu.classList.add('active')
	})
})

headerMenuItem.forEach(link => {
	link.addEventListener('click', function () {
		menu.classList.remove('active')
	})
})

heroBtn.addEventListener('click', function () {
	modalMenu.classList.add('active')
})

menuBtnClose.addEventListener('click', function () {
	modalMenu.classList.remove('active')
})
