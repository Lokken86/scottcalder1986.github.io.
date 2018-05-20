// JavaScript Document
$(document).ready(function () {
   'use strict';
	$('header').fadeIn(1500).removeClass('hidden');
	$('.herotext').fadeIn(2000).removeClass('hidden');
	$('.herotext p').fadeIn(3000).removeClass('hidden');
	$('.episodetop').fadeIn(3000).removeClass('hidden');
});


$(document).ready(function() {   
    'use strict';
    $(window).scroll( function(){   
        $('.hideme').each( function(){ 
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();     
            if( bottom_of_window > bottom_of_object ){      
                $(this).animate({'opacity':'1'},2000);               
            }
        }); 
    }); 
});














$(document).ready(function(){
	
	'use strict';
	
	$('.menu-icon').click(function(){
		$('nav').slideToggle(600);
		$('herotext').slideToggle(600);
	});
	$('.Arrow').click(function(){
		$('.box1').slideToggle(600);
		$('.box2').slideToggle(600);
		$('.box3').slideToggle(600);
	});
	$('.Arrow').click(function(){
		$('.box4').slideToggle(600);
		$('.box5').slideToggle(600);
		$('.box6').slideToggle(600);
	});
});