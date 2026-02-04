(function ($) {
	"use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        //jQuery Sticky Menu
        $(".header-area").sticky({topSpacing: 0});
        
        
        //Scroll Spy Line Before Navbar Collapse
        $('body').scrollspy({target: '.navbar-collapse'});
        
        
        //Parallax Background or Scrolling Background Activation
        $('.parallax-bg').scrolly({bgParallax: true});
        
        
        //jQuery Smooth Scroll
        $('li.smooth-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            var headerH = '75';
            
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            
            event.preventDefault();
        });
        
        
        //jQuery Scroll Top
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.scroll-up-area').fadeIn();
            } else {
                $('.scroll-up-area').fadeOut();
            }
        });
        
        $('.scroll-up-area').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        
        //GMaps Script Goes Here
        var map;
        $(document).ready(function () {
            map = new GMaps({
                el: '#map',
                lat: 48.88939,
                lng: 2.4013153,
                zoom: 13
            });
            map.addMarker({
                lat: 48.88939,
                lng: 2.4013153,
                title: 'M Hoche',
                details: {
                    database_id: 42,
                    author: 'HPNeo'
                },
                click: function (e) {
                    if (console.log)
                    console.log(e);
                    console.log(e);
                    alert('37 Rue du Pré Saint Gervais 93500 Pantin, M Hoche');
                },
                mouseover: function(e){
                    if (console.log)
                    console.log(e);
                }
            });
        });
        
        
        //GMaps Script Goes Here
        var map;
        $(document).ready(function(){
                map = new GMaps({
                    el: '#map-small',
                    lat: 48.88939,
                    lng: 2.4013153,
                });
                map.addMarker({
                    lat: 48.88939,
                    lng: 2.4013153,
                    title: '37 Rue du Pré Saint Gervais 93500 Pantin, M Hoche',
                    details: {
                    database_id: 42,
                    author: 'HPNeo'
                    },
                    click: function(e){
                        if(console.log)
                        console.log(e);
                        alert('You clicked in this marker');
                    },
                    mouseover: function(e){
                        if(console.log)
                        console.log(e);
                    }
                });
            });
        
        
            //Single-Food-owlCarousel
            $("my-carousel-wrapper").owlCarousel({
                items: 4,
                autoplay: true,
                loop: true,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
            });
        
        
            
            //Mobile-Menu-Button-Show-or-Hide
            $(".navbar-toggle").click(function(){
                $("body").addClass("mobile-menu-activated");
            });
         
        
        
            //Load-More-Button-Code-for-PIZZA-Base-Tomate-Section
            $(function () {
                $(".base-tomate-hidden").slice(0, 4).show();
                
                $("#load-btn").on('click', function (e) {
                    e.preventDefault();
                    $(".base-tomate-hidden:hidden").slice(0, 2).slideDown();
                    if ($(".base-tomate-hidden:hidden").length == 0) {
                        $("#load").fadeOut('slow');
                    }
                });
            });
        
        
            //Load-More-Button-Code-for-PIZZA-Speciales-Section
            $(function () {
                $(".speciales-hidden").slice(0, 4).show();
                
                $("#load-btn-2").on('click', function (e) {
                    e.preventDefault();
                    $(".speciales-hidden:hidden").slice(0, 2).slideDown();
                    if ($(".speciales-hidden:hidden").length == 0) {
                        $("#load").fadeOut('slow');
                    }
                });
            });
        
        
            //Load-More-Button-Code-for-PIZZA-Creme-Fraiche-Section
            $(function () {
                $(".creme-fraiche-hidden").slice(0, 4).show();
                
                $("#load-btn-3").on('click', function (e) {
                    e.preventDefault();
                    $(".creme-fraiche-hidden:hidden").slice(0, 2).slideDown();
                    if ($(".creme-fraiche-hidden:hidden").length == 0) {
                        $("#load").fadeOut('slow');
                    }
                });
            });
        
        
        
            //Footer-sticky-button-popup-box-email-btn
            $(".email-btn").on("click", function () {
                $(".sticky-box-email, .sticky-box-overlay").addClass("appear");
                return false;
            });
        
            $(".sticky-box-close, .sticky-box-overlay").on("click", function () {
                $(".sticky-box-email, .sticky-box-overlay").removeClass("appear");
            });
        
            //Footer-sticky-button-popup-box-phone-btn
            $(".phone-btn").on("click", function () {
                $(".sticky-box-phone, .sticky-box-overlay").addClass("appear");
                return false;
            });
        
            $(".sticky-box-close, .sticky-box-overlay").on("click", function () {
                $(".sticky-box-phone, .sticky-box-overlay").removeClass("appear");
            });
        
            //Footer-sticky-button-popup-box-location-btn
            $(".location-btn").on("click", function () {
                $(".sticky-box-location, .sticky-box-overlay").addClass("appear");
                return false;
            });
        
            $(".sticky-box-close, .sticky-box-overlay").on("click", function () {
                $(".sticky-box-location, .sticky-box-overlay").removeClass("appear");
            });

        
    
    });
    


    jQuery(window).load(function () {

        
    });


}(jQuery));