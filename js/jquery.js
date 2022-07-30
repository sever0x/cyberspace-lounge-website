$('#switch_right').click(function () {
    if ($(this).hasClass('switch_right_inactive')) {
        $('#switch_left').toggleClass('switch_left_inactive');
        $('#switch_left').removeClass('switch_left');
        $('#switch_left').children().css('color', '#d9d9d9');
        $(this).toggleClass('switch_right');
        $(this).removeClass('switch_right_inactive');
        $(this).children().css('color', 'black');
    }
});
$('#switch_left').click(function () {
    if ($(this).hasClass('switch_left_inactive')) {
        $('#switch_right').toggleClass('switch_right_inactive');
        $('#switch_right').removeClass('switch_right');
        $('#switch_right').children().css('color', '#d9d9d9');
        $(this).toggleClass('switch_left');
        $(this).removeClass('switch_left_inactive');
        $(this).children().css('color', 'black');
    }
});