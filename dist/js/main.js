/*  ---------------------------------------------------
    Theme Name: Anime
    Description: Anime video tamplate
    Author: Colorib
    Author URI: https://colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            FIlter
        --------------------*/
        $(document).on('click', '.filter__controls li', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });

        var tds = document.getElementsByTagName('crate');
        window.firstNum = 1;
        for(var x = 0; x < tds.length; x++) {
            tds[x].onclick = function () {
                if (window.firstNum % 2 == 1) {
                    $('#arc-widget-launcher-iframe').hide();
                } else {
                    $('#arc-widget-launcher-iframe').show();
                }
                window.firstNum = window.firstNum + 1;
            };
        }
    });

    /*------------------
        Background Set
    --------------------*/
    setBg();
    setBgV2();

    // Search model
    $(document).on('click', '.search-switch', function () {
        $('.search-model').fadeIn(400);
        $('#search-input').focusTextToEnd();
    });

    $(document).on('click', '.search-close-switch', function () {
        $('.search-model').fadeOut(400, function () {
            // $('#search-input').val('');
        });
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Hero Slider
    --------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    hero_s.hover(function () {
        $('.owl-carousel').trigger('stop.owl.autoplay');
    }, function () {
        $('.owl-carousel').trigger('play.owl.autoplay');
    });

    /*------------------
        Set Toastr
    --------------------*/
    toastr.options = {
        "positionClass": "toast-top-right",
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000"
    }

    /*------------------
        Make Landscape
    --------------------*/
    // function makeLandscape() {
    //     if (screen.orientation && screen.orientation.lock) {
    //         screen.orientation.lock('landscape');
    //     }
    // };

    /*------------------
        Video Player
    --------------------*/
    // $('#showWaiting').hide();
    // const player = new Plyr('#player', {
    //     controls: ['play-large', 'play', 'rewind', 'progress', 'current-time', 'fast-forward', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    //     tooltips: { controls: true, seek: true },
    //     seekTime: 10,
    //     ads: { enabled: true, publisherId: '', tagUrl: $('#vastTagRoute').val() }
    // });

    // player.on('ready', (event) => {
    //     const instance = event.detail.plyr;

    //     instance.on('enterfullscreen', (event) => {
    //         makeLandscape();
    //     });

    //     instance.on('waiting', (event) => {
    //         $('#showWaiting').show();
    //     });

    //     instance.on('pause', (event) => {
    //         $('#showWaiting').hide();
    //     });

    //     instance.on('play', (event) => {
    //         instance.rewind(1);
    //     });

    //     instance.on('playing', (event) => {
    //         $('#showWaiting').hide();
    //     });
    // });

    /*------------------
        Niceselect
    --------------------*/
    $('select').niceSelect();

    /*------------------
        Scroll To Top
    --------------------*/
    $("#scrollToTopButton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $('input[type=checkbox]').click(function () {
        if ($(this).is(':checked')) {
            $(this).siblings('label').addClass('text-danger');
            $(this).siblings('label').html('Ya');
        } else {
            $(this).siblings('label').removeClass('text-danger');
            $(this).siblings('label').html('Tidak');
        }
    });

    $('input[type=radio]').change(function() {
        $(this).closest("div").find(".setting__label").removeClass("text-danger");
        if ($(this).is(':checked')) {
          $(this).closest(".setting__label").addClass("text-danger");
        }
        else {
          $(this).closest(".setting__label").removeClass("text-danger");
        }
    });

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
    });

    $('[data-toggle="tooltip"]').tooltip();
})(jQuery);
