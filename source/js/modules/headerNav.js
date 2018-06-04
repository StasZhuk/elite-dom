module.exports = function () {
    $('.nav__trigger').click(function () {
        if ($('.nav__trigger').hasClass('active')) {
            $('.nav__trigger').removeClass('active');
            $('.nav__trigger').removeClass('no-animation');
            $('.header-nav').slideToggle('0.5', 'linear');
        } else {
            $('.nav__trigger').addClass('active');
            $('.nav__trigger').removeClass('no-animation');
            $('.header-nav').slideToggle('0.5', 'linear');
        }
    });
    $(window).resize(function () {
        if ($(window).width() >= 992) {
            $('.header-nav').css('display', 'flex');
        } else {
            $('.header-nav').css('display', 'none');
        }
        return false;
    });
}