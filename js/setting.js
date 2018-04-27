$(function() {

    var isTablet = false;
    var isMobile = false;
    var $win = $(window);

    var windowW = $(window).width();


    // if ()

    // navigation
    var navigation = function() {
        // $('body').on('click', '#homepage .main_nav ul li a, .main-nav a:not([class="external"])', function(event){
        var nav_height = $('#homepage .nav').outerHeight();
        $('.menu_link').click(function(e) {
            $('.menu_link').removeClass('active');
            $(this).addClass('active');
            var section = $(this).data('nav-section');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top - nav_height
                }, 500);
            }
            event.preventDefault();
            return false;
        });
    };

    var navigationSection = function() {
        var ofsetTop = window.scrollY;
        var position = ofsetTop + 100;

        var offsetHome = Math.round($('#home').offset().top);
        var offsetAdvertiser = Math.round($('#advertiser').offset().top);
        var offsetDeveloper = Math.round($('#developer').offset().top);
        var offsetAbout = Math.round($('#about').offset().top);
        var offsetDocumentitaion = Math.round($('#documentitaion').offset().top);

        if (position >= offsetHome) {
            $('.menu_link').removeClass('active');
            $('.menu_link').eq(0).addClass('active');
        }

        if (position >= offsetAdvertiser) {
            $('.menu_link').removeClass('active');
            $('.menu_link').eq(1).addClass('active');
        }
        //          console.log('offsetAbout'+ offsetAbout);
        // console.log('position'+ position);
        if (position >= offsetDeveloper) {
            $('.menu_link').removeClass('active');
            $('.menu_link').eq(2).addClass('active');
        }

        if (position >= offsetAbout) {
            $('.menu_link').removeClass('active');
            $('.menu_link').eq(4).addClass('active');
        }

        if (position >= offsetDocumentitaion) {
            $('.menu_link').removeClass('active');
            $('.menu_link').eq(5).addClass('active');
        }
    };

    var goToTop = function() {
        console.log();
        if ($win.scrollTop() > 200) {
            $('.js-top').addClass('active');
        } else {
            $('.js-top').removeClass('active');
        }
    };

    var animateNav = function() {
        if ($(this).scrollTop() > 100) {
            $('#homepage header').addClass('scroll');
            $('.nav').addClass('fixed');
            $('.nav').css('top', 0);
        } else {
            $('#homepage header').removeClass('scroll');
            $('.nav').removeClass('fixed')
            if (isTablet) {
                $('.nav').css('top', -150);
            } else if (isMobile) {
                $('.nav').css('top', -200);
            } else $('.nav').css('top', -107);
        }
    };

    var animateNavSp = function() {
        $('.menu_link').not('.drop_menu_access').click(function(event) {
            if (isMobile) {
                $('#homepage header .nav').removeClass('active');
                $('#menu_sp').removeClass('open');
                $('body').css('overflow', 'auto');           
            }
        });
    }
    animateNavSp();


    $('.js-gotop').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('html').offset().top }, 500);
        return false;
    });

    $('.main_nav .main_menu.drop_menu').mouseenter(function() {
        $(this).find('.menu_inner_wrap').slideDown(200);
    });

    $('.main_nav .main_menu.drop_menu').mouseleave(function() {
        $(this).find('.menu_inner_wrap').hide(200);
    });

    $('.main_nav .main_menu.drop_menu .drop_menu_access').click(function() {
        console.log(1);
        $(this).parent().find('.menu_inner_wrap').slideToggle(200);
    });

    // menu sp
    $('#menu_sp').click(function() {
        $(this).toggleClass('open');
        $('#homepage header .nav').toggleClass('active');
        if ($(this).hasClass('open')) {
            $('body').css('overflow', 'hidden');
            $('.gototop.active').hide();
            $('.main_menu.drop_menu .menu_inner_wrap').addClass('open');
        } else {
            $('body').css('overflow', 'auto');
            $('.gototop.active').show();
            $('.main_menu.drop_menu .menu_inner_wrap').removeClass('open');

        }
    });


    var checkScreen = function() {
        if (641 < windowW && windowW< 790) {
            console.log('isTablet');
            isTablet = true;
        } else if (320 < windowW && windowW < 640) {
            console.log('isMobile');

            isMobile = true;
        }
    }
    checkScreen();


    //window resize event
    $(window).resize(function() {
        checkScreen();
    });



    //window scroll event
    $(window).scroll(function() {
        goToTop();
        if (!isMobile) {
            animateNav();
        }
        navigationSection();
    });

    // call function    
    navigation();
    // navigationSection();



});