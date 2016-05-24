$(function() {
    //fade in
    $('body').removeClass('fade-out');

	// smoothScroll plug-in
    $('nav.main-nav a').smoothScroll({
    	speed: 400
    });
    
    $('section.about a').smoothScroll({
        speed: 400
    });

    // flickity plug-in
    $('.portfolio-slider').flickity({
    	cellAlign: 'left',
    	contain: true,
        imagesLoaded:true,
    	wrapAround: true
    });
    
    // wow js
    new WOW().init();

    //MENU

    //Click menu button to reveal side nav
    $('div.menu-btn').on('click', function(){
        $('nav.main-nav').addClass('pull');
        $(this).addClass('hide');
    });

    //Click x to hide side nav & hide menu button
    $('div.close').on('click', function(){
        $('nav.main-nav').removeClass('pull');
        $('div.menu-btn').removeClass('hide');
    });

    //Closes side nav after clicking main nav links
    $('nav a.main-link').on('click', function(){
        $('nav.main-nav').removeClass('pull');
        $('div.menu-btn').removeClass('hide');
    });
}); 