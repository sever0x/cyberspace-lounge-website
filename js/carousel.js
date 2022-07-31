$(function() {
    $('.item').eq(0).addClass('active');
    var total = $('.item').length;
    var current = 0;

    $('#next').on('click', function() {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });
    $('#prev').on('click', function() {
        var prev = current;
        current = current - 1;
        setSlide(prev, current);
    });

    function setSlide(prev, next) {
        var slide = current;

        if (next > total - 1) {
            slide = 0;
            current = 0;
        }

        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }

        $('.item').eq(prev).removeClass('active');
        $('.item').eq(prev).addClass('inactive');
        $('.item').eq(slide).addClass('active');
        $('.item').eq(slide).removeClass('inactive');
        setTimeout(function() {

        }, 800);
    }
});