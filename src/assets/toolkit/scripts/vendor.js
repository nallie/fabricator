'use strict';

// vendor js libraries
var $ = require('jquery');
var slickCarousel = require('slick-carousel');

function slick() {
	console.log('slick');
	$('.slick-carousel').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}]
	});
};


module.exports = { $, slick };
