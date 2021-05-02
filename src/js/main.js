/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId);
	const nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu');
		});
	}
};

showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

let linkAction = () => {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
};
navLink.forEach((e) => {
	e.addEventListener('click', linkAction);
});

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

let scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		let sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
};
window.addEventListener('scroll', scrollActive);

/*===== CHANGE BACKGROUND HEADER =====*/
let scrollHeader = () => {
	const header = document.getElementById('header');
	if (scrollY >= 200) {
		header.classList.add('scroll-header');
	} else header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/*===== SHOW SCROLL TOP =====*/
let scrollTop = () => {
	const scrollTop = document.getElementById('scroll-top');
	if (scrollY >= 560) {
		scrollTop.classList.add('show-scroll');
	} else scrollTop.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollTop);

/*===== MIXITUP FILTER PORTFOLIO =====*/
import mixitup from 'mixitup';

var mixer = mixitup('.portfolio__container', {
	selectors: {
		target: '.portfolio__content',
	},
	animation: {
		duration: 400,
	},
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio__item');

function activePortfolio() {
	if (linkPortfolio) {
		linkPortfolio.forEach((l) => l.classList.remove('active-portfolio'));
		this.classList.add('active-portfolio');
	}
}
linkPortfolio.forEach((l) => l.addEventListener('click', activePortfolio));

/*===== SWIPER CAROUSEL =====*/

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.testimonial__container', {
	spaceBetween: 16,
	loop: true,
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

/*===== GSAP ANIMATION =====*/
gsap.from('.home__img', { opacity: 0, duration: 2, delay: 0.3, x: 60 });
gsap.from('.home__data', { opacity: 0, duration: 2, delay: 0.6, y: 25 });
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {
	opacity: 0,
	duration: 2,
	delay: 0.8,
	y: 25,
	ease: 'expo.out',
	stagger: 0.2,
});
gsap.from('.nav__logo, .nav__toggle', {
	opacity: 0,
	duration: 2,
	delay: 1.3,
	y: 25,
	ease: 'expo.out',
	stagger: 0.2,
});
gsap.from('.nav__item', {
	opacity: 0,
	duration: 2,
	delay: 1.6,
	y: 25,
	ease: 'expo.out',
	stagger: 0.2,
});
gsap.from('.home__social-icon', {
	opacity: 0,
	duration: 2,
	delay: 2,
	y: 25,
	ease: 'expo.out',
	stagger: 0.2,
});
