        $( document ).ready(function() {
          
          $( window ).scroll(function(){
            displayNavMenu();
          });

        });

        var displayNavMenu = function()
        {
        	var menuPosition = $('#services').offset().top;
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


$('#btn-home').click(function (e){
    e.preventDefault();
    $('html, body').animate(
    {scrollTop: $('#header').offset().top},
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