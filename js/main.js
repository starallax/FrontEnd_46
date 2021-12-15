jQuery(document).ready(function() {
		
    //fixed navigation
    $(document).scroll (function(){
        if ($(document).scrollTop() > 0) $('.navbar').addClass('navbar-fixed');
        else $('.navbar').removeClass('navbar-fixed');
    });


    // Slow scrolling to sections
    $(".nav-link").click(function(e){     
        e.preventDefault();
        $('html, body').animate({scrollTop: ($(this.hash).offset().top) - 110}, 500);
    });

});