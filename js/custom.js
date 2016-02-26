        /* document ready function begins --> */$( document ).ready(function() {
          
          $( window ).scroll(function(){
            displayNavMenu();
          });    

        //Mobile Nav Menu
		$('.mobile-menu').click(function(e){
			e.preventDefault();
			$(".mobilenav").fadeToggle(300);
		});



		 $('.about-nav li a').click(function() {
		  	var curChildIndex = $(this).parent().prevAll().length + 1;
		  	var testValue = $(this).data("tabname");
		  	
		  	$(this).parent().parent().children('.active').removeClass('active');
		  	$(this).parent().addClass('active');
		  	$('.about-inner').children('.active').fadeOut('fast',function() {
		   	$(this).removeClass('active');
		   	if (testValue == "SKILLS")
		   	{
			   	$(this).parent().children('div:nth-child('+curChildIndex+')').fadeIn('normal',function() {
		    	$(this).addClass('active');
				   	$('.skillbar').each(function(){
						$(this).find('.skillbar-bar').animate({
							width:$(this).attr('data-percent')
						},4000);
					});	
		   		});
		   		
		   	}
		   	else
		   	{
			   	$(this).parent().children('div:nth-child('+curChildIndex+')').fadeIn('normal',function() {
			    $(this).addClass('active');
			   });
			}
		  });
		  return false;        
		 });

        });/* <-- document ready function ends */

        var displayNavMenu = function()
        {
        	var menuPosition = $('#services').offset().top - 30;
	          if ( $(window).scrollTop() >= menuPosition ){
    	      	$('nav').removeClass('no-display').addClass('navbar navbar-static-top navbar-inverse fixed');
        	    }else{
            	$('nav').removeClass('navbar navbar-static-top navbar-inverse fixed').addClass('no-display');
            	}
        };

$('#btn-services').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#services').offset().top},
    {duration: 1000,easing: "swing"}
    );
    $(".mobilenav").fadeToggle(1000);
    $(".mobile-menu").removeClass('is-active');
});

$('#btn-portfolio').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#portfolio').offset().top},
    {duration: 1000,easing: "swing"}
    );
    $(".mobilenav").fadeToggle(1000);
    $(".mobile-menu").removeClass('is-active');
});

$('#btn-about-me').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#about-me').offset().top},
    {duration: 1000,easing: "swing"}
    );
    $(".mobilenav").fadeToggle(1000);
    $(".mobile-menu").removeClass('is-active');
});

$('#btn-read-more').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#services').offset().top},
    {duration: 1000,easing: "swing"}
    );
});

$('#btn-home').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#header').offset().top},
    {duration: 1000,easing: "swing"}
    );
});

$('#btn-hireme').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#contact').offset().top},
    {duration: 1000,easing: "swing"}
    );
});

$('#btn-contact').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#contact').offset().top + 1},
    {duration: 1000,easing: "swing"}
    );
    $(".mobilenav").fadeToggle(1000);
    $(".mobile-menu").removeClass('is-active');
});

// Mobile Nav Close Menu - ESC Btn
$(document).keydown(function(e) {
  if (e.keyCode == 27) {
	$(".mobilenav").fadeOut(300);
	$(".mobile-menu").removeClass('is-active');
  }
});

// Mobile Nav Menu - Toggle Btn
  (function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

  })();

// Initialize wowJS
wow = new WOW(
          	{
              boxClass:     'wow',      
              animateClass: 'animated', 
              offset:       200,        
              mobile:       true,       
              live:         true
        	}
       	)	
wow.init();