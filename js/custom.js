        $( document ).ready(function() {
          
          $( window ).scroll(function(){
            displayNavMenu();
          });

        });

        var displayNavMenu = function()
        {
        	var menuPosition = $('#services').offset().top;
	          if ( $(window).scrollTop() >= menuPosition ){
    	      	$('nav').removeClass('no-display');
        	    }else{
            	$('nav').addClass('no-display');
            	}
        };

$('#btn-hire-me').click(function (e) {
    $('html, body').animate(
    {scrollTop: $('#services').offset().top},
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