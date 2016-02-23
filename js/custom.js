        /* document ready function begins --> */$( document ).ready(function() {
          
          $( window ).scroll(function(){
            displayNavMenu();
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
});

$('#btn-portfolio').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#portfolio').offset().top},
    {duration: 1000,easing: "swing"}
    );
});

$('#btn-about-me').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#about-me').offset().top},
    {duration: 1000,easing: "swing"}
    );
});

$('#btn-more-about-me').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#about-me').offset().top},
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
    {scrollTop: $('#contact').offset().top},
    {duration: 1000,easing: "swing"}
    );
});

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