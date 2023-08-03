(function ($) {
	'use strict'
	$('.nav-bar .fa-bars').on('click', function () {
		$('.header-section .menu').slideDown();
		$('.nav-bar .fa-square-xmark').show();
		$(this).hide();

	});
	$('.nav-bar .fa-square-xmark').on('click', function () {
		$('.header-section .menu').slideUp();
		$('.nav-bar .fa-bars').show();
		$(this).hide();

	});

	$(window).resize(function () {
		var screenSize = $(window).width();
		if(screenSize> 991){
		   $('.menu').removeAttr('style')
		   }
	})
	  
	
	$(document).ready(function() {
$('#particles').particleground({
  minSpeedX: 0.1,
  maxSpeedX: 0.7,
  minSpeedY: 0.1,
  maxSpeedY: 0.7,
  directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
  directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
  density: 10000, // How many particles will be generated: one particle every n pixels
  dotColor: '#903ac6',
  lineColor: '#903ac6',
  particleRadius: 7, // Dot size
  lineWidth: 1,
  curvedLines: false,
  proximity: 100, // How close two dots need to be before they join
  parallax: true,
  parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
  onInit: function() {},
  onDestroy: function() {}
});
});

})(jQuery);
