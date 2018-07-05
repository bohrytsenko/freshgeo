$(document).ready(function() {

    // Mobile nav

    $(".nav_mobile__icon").click(function(){
        $(this).toggleClass('active');
        $('.nav_mobile ul').toggleClass('show');
        $('body').toggleClass('overflow');
    });


    // Hash class

    $(function(){
        $("a").each(function(){
            if ($(this).attr("href") == window.location.pathname){
                $(this).addClass("selected");
            }
        });
    });

    // Scroll add class

    $(function() {
        //caches a jQuery object containing the header element
        var header = $(".page_content__pages ul");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 650) {
                header.addClass("fixed");
            } else {
                header.removeClass('fixed');
            }
        });
    });

    // Slider

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 30,
        autoplay: true,
        speed: 3000,
        loop: true,
        breakpoints: {
            // when window width is <= 768px
            768: {
                slidesPerView: 2,
                slidesPerColumn: 3
            }
        }
    });

    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);

});

var controller = new ScrollMagic.Controller();

// Header logo

var t0 = new TimelineLite();
t0.staggerFromTo('.header_logo', 2, { opacity: 0}, { opacity: 1}, 0.2);

// Header menu

var t1 = new TimelineLite();
t1.staggerFromTo('.header_nav li', 0.1, { opacity: 0}, { opacity: 1}, 0.1);

// Header info

var t2 = new TimelineLite();
t2.staggerFromTo('.header_info div', 2, { opacity: 0}, { opacity: 1}, 0.2);

// Header image

var t3 = new TimelineLite();
t3.staggerFromTo('.header_info__img img', 2, {x: -100}, {x: 0}, 1);

// Header image

var tween1 = TweenMax.staggerFromTo(".header_info__img img", 2, {y: 0}, {y: '30%'}, 1);
var scene = new ScrollMagic.Scene({
    triggerElement: ".about", duration: 2000,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween1)
    .addTo(controller);

// About wrap

var tween2 = TweenMax.staggerFromTo(".about_wrap", 2, {y: -150}, {y: 0}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".about", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween2)
    .addTo(controller);

// Products wrap

var tween3 = TweenMax.staggerFromTo(".products_wrap", 2, {y: -100}, {y: 0}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".products", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween3)
    .addTo(controller);

// Contacts wrap

var tween4 = TweenMax.staggerFromTo(".contacts_wrap", 2, {y: -100}, {y: 0}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".contacts", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween4)
    .addTo(controller);

// About top

var tween5 = TweenMax.staggerFromTo(".about_header__wrapper", 2, {y: 0}, {y: -100}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".about_mission", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween5)
    .addTo(controller);

// About mission

var tween5 = TweenMax.staggerFromTo(".about_mission__img", 2, {y: 0}, {y: -100}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".about_mission", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween5)
    .addTo(controller);

// About exp

var tween6 = TweenMax.staggerFromTo(".about_exp_team", 2, {y: -50}, {y: 0}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".about_exp", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween6)
    .addTo(controller);

// About join

var tween7 = TweenMax.staggerFromTo(".about_join__img", 2, {y: 0}, {y: -100}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".about_join", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween7)
    .addTo(controller);

// About question

var tween8 = TweenMax.staggerFromTo(".about_q_wrap", 2, {y: -50}, {y: 0}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".about_question", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween8)
    .addTo(controller);

// About question

var tween9 = TweenMax.staggerFromTo(".product_s_wrap", 2, {y: -50}, {y: 0}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".product_services", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween9)
    .addTo(controller);

// Product use

var tween10 = TweenMax.staggerFromTo(".product_use__img", 2, {y: 0}, {y: -100}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".product_use", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween10)
    .addTo(controller);


// Product secure

var tween11 = TweenMax.staggerFromTo(".product_secure__img", 2, {y: 0}, {y: -100}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".product_secure", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween11)
    .addTo(controller);

// Product access

var tween12 = TweenMax.staggerFromTo(".product_access__img", 2, {y: 0}, {y: -100}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".product_access", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween12)
    .addTo(controller);

// Product privacy

var tween13 = TweenMax.staggerFromTo(".product_privacy__img", 2, {y: 0}, {y: -100}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".product_privacy", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween13)
    .addTo(controller);

// Product power

var tween14 = TweenMax.staggerFromTo(".product_p_wrap", 2, {y: -50}, {y: 0}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".product_power", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween14)
    .addTo(controller);

// Product pack

var tween14 = TweenMax.staggerFromTo(".product_pack__wrapper", 2, {y: -50}, {y: 0}, 0.2);
var scene = new ScrollMagic.Scene({
    triggerElement: ".product_pack", duration: 1700,
    triggerHook: 1,
    offset: 0
})
    .setTween(tween14)
    .addTo(controller);



// Preloader

(function() {

    'use strict';

    var overlay = document.querySelector('.overlay'),
        loader = document.querySelector('.overlay-loader'),
        overlayTL = new TimelineMax(),
        loaderTL = new TimelineMax();

    var animateOut_2 = function() {
        overlayTL.to( overlay, .6, { top: '100%', ease: Power4.easeInOut, delay: .25 } );
        loaderTL.to( loader, .5, { y: '40', opacity: 0 } );
    };

    var animateIn = function() {
        overlayTL.fromTo( overlay, .6, { top: '100%', bottom: 0 }, { top: 0, ease: Power4.easeInOut } );
        loaderTL.fromTo( loader, .5, { y: '40', opacity: 0, delay: .30 }, { y: 0, opacity: 1, delay: .6, ease: Power2.easeOut } );
    };

    animateOut_2();
})();

