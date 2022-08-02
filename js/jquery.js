$('#switch_right').on('click', function () {
    if ($(this).hasClass('switch_right_inactive')) {
        $('#switch_left').toggleClass('switch_left_inactive');
        $('#switch_left').removeClass('switch_left');
        $('#switch_left').children().css('color', '#d9d9d9');
        $(this).toggleClass('switch_right');
        $(this).removeClass('switch_right_inactive');
        $(this).children().css('color', 'black');
    }
    $('.bakulina').css('display', 'none');
    $('.peremohy').css('display', 'block');
});
$('#switch_left').on('click', function () {
    if ($(this).hasClass('switch_left_inactive')) {
        $('#switch_right').toggleClass('switch_right_inactive');
        $('#switch_right').removeClass('switch_right');
        $('#switch_right').children().css('color', '#d9d9d9');
        $(this).toggleClass('switch_left');
        $(this).removeClass('switch_left_inactive');
        $(this).children().css('color', 'black');
        $('.bakulina').css('display', 'block');
        $('.peremohy').css('display', 'none');
    }
});

$(function () {
    var activeWindow = 'div.bakulina';
    var total = $(activeWindow).children().length;
    $(activeWindow + ' div.item').eq(0).addClass('active');
    carousel(activeWindow, total);

    $('#switch_left').on('click', function () {
        if ($('.bakulina').is(':visible')) {
            activeWindow = 'div.bakulina';
        }
        total = $(activeWindow).children().length;

        $('.peremohy').children('.item').each(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('inactive');
            }
        });

        $(activeWindow + ' div.item').eq(0).addClass('active');
        $(activeWindow + ' div.item').eq(0).removeClass('inactive');
        carousel(activeWindow, total);
    });

    $('#switch_right').on('click', function () {
        if ($('.peremohy').is(':visible')) {
            activeWindow = 'div.peremohy';
        }
        total = $(activeWindow).children().length;

        $('.bakulina').children('.item').each(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('inactive');
            }
        });

        $(activeWindow + ' div.item').eq(0).addClass('active');
        $(activeWindow + ' div.item').eq(0).removeClass('inactive');
        carousel(activeWindow, total);
    });

});

function carousel(activeWindow, total) {
    var current = 0;
    var thisWin = activeWindow;
    setSlide(current, current + 1);

    $('#next').off().on('click', function () {
        var prev = current;
        current = current + 1;
        setSlide(thisWin, prev, current);
    });
    $('#prev').off().on('click', function () {
        var prev = current;
        current = current - 1;
        setSlide(thisWin, prev, current);
    });

    function setSlide(activeWindow, prev, next) {
        var slide = current;

        if (next > total - 1) {
            slide = 0;
            current = 0;
        }

        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }

        $(activeWindow + ' div.item').eq(prev).removeClass('active');
        $(activeWindow + ' div.item').eq(prev).addClass('inactive');
        $(activeWindow + ' div.item').eq(slide).addClass('active');
        $(activeWindow + ' div.item').eq(slide).removeClass('inactive');

        setTimeout(function () {

        }, 800);
    }
}

function closeForm() {
    $('.form-popup').removeClass('is-visible');
}

$(document).ready(function ($) {
    $('#reserve').on('click', function (event) {
        event.preventDefault();
        $('.form-popup').addClass('is-visible');
        var adress;
        var room;
        if ($('.switch-btn').hasClass('switch_left')) {
            adress = $('.switch_left').children('.switch-text').text();
        } else {
            adress = $('.switch_right').children('.switch-text').text();
        }

        if ($('.item').hasClass('active')) {
            room = $('.active').children('.room-info').children('h1').text();
        }
        $('#selected-adress').text(adress);
        $('#selected-room').text(room);
    })

    $('.form-popup').on('click', function (event) {
        if ($(event.target).is('.form-popup') ||
            $(event.target).is('#closeForm')) {
                event.preventDefault();
                $(this).removeClass('is-visible');
            }
    })
});

$('.adr-left').on('click', function() {
    $(this).css('border-bottom', '1px solid');
    $('.adr-right').css('border-bottom', 'none');
    $('.map-left').css('display', 'block');
    $('.map-right').css('display', 'none');
});

$('.adr-right').on('click', function() {
    $(this).css('border-bottom', '1px solid');
    $('.adr-left').css('border-bottom', 'none');
    $('.map-left').css('display', 'none');
    $('.map-right').css('display', 'block');
});