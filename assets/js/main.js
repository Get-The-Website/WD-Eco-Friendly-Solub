/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	windowOn.on('load', function () {
		wowAnimation();
	}); 

	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});
	
	
	//////////////////////////////////////////////////
	// 03. Common Js

	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});


	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	$('.tp-hamburger-toggle').on('click', function () {
		$('.tp-header-side-menu').slideToggle('tp-header-side-menu');
	});



	////////////////////////////////////////////////////
	// 10. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});
	

	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - -60
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	////showcase-slider
	var showcase = new Swiper('.tp-showcase-active', {
		slidesPerView: 2,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 300,
		speed: 1000,
		centeredSlides:true,
		breakpoints: {
			'1600': {
				slidesPerView: 2,
				spaceBetween: 300,
			},
			'1400': {
				slidesPerView: 2,
				spaceBetween: 100,
			},
			'1200': {
				slidesPerView: 2,
				spaceBetween: 100,
			},
			'992': {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			'768': {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			'576': {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		a11y: false,

	});


	////showcase-slider
	var showcase = new Swiper('.tp-sb-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		centeredSlides:true,
		a11y: false,

	});

	////showcase-slider
	var showcase = new Swiper('.tp-sb-slider-active-2', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 0,
		speed: 1500,
		centeredSlides:true,
		a11y: false,

	});


	var tp_feature_slide = new Swiper(".tp-feature-slide-top", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 15,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	  });

	var tp_feature_slide = new Swiper(".tp-feature-slide-middle", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 15,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	// wow
	function wowAnimation() {
		var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 0,
				mobile: false,
				live: true
		});
		wow.init();
}


})(jQuery);