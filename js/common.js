$(document).ready(function() {
	$('.slider').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		dots: true,
		pauseOnDotsHover: true,
		autoplay: true,
		autoplaySpeed: 2000
    });
    $('.slick-dots li button').html("&nbsp;");

    shadowSliderView();
    $(window).resize(function() {
		shadowSliderView();
	});

	$('.carousel').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev">&nbsp;</button>',
		nextArrow: '<button type="button" class="slick-next">&nbsp;</button>',
		variableWidth: false,
		responsive: [
				    {
				      breakpoint: 1024,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3,
				      }
				    },
				    {
				      breakpoint: 600,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				  ]
    });

    var touch = $('.nav-icon');
	var menu = $('.main-menu ul');
		 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $('.main-menu ul li').on('click', function(e) {
    	var wid = $(window).width();
        if(wid < 900) {
        	e.preventDefault();
        	menu.slideToggle();
        }
    });
  
    $(window).resize(function(){
    	var wid = $(window).width();     
        if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

function shadowSliderView() {
	if ($(window).width() > 1024) {
		$('.slider .slick-slide').addClass('inner-shadow');
	} else {
		$('.slider .slick-slide').removeClass('inner-shadow');
	}
}