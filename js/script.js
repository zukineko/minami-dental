

jQuery(window).on("scroll", function ($) {
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.to-top').addClass('is-show');
	} else {
		jQuery('.to-top').removeClass('is-show');
	}
});

jQuery('.to-top').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});

new WOW().init();


const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	effect: "fade",
	autoplay: {
		delay: 5000,
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiper1 = new Swiper('.slider1', {
	// Optional parameters
	loop: true,
	spaceBetween: 20,
	speed: 9000,
	autoplay: {
		delay: 1000,
	},
	slidesPerView: "auto",
});


$(document).ready(function () {
	$('.drawer').drawer();
});
