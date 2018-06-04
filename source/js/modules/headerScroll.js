module.exports = function() {
    (function () {
        var header = document.querySelector('.header');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 15) {
                header.classList.add('active');
                return false;
            }
            header.classList.remove('active');
        });
    })();


    // Header scroll
    (function () {
        var sliderNav = document.querySelector('.opinion__slider .slider-nav');
        var prev = sliderNav.querySelector('.slider-nav__prev');
        var next = sliderNav.querySelector('.slider-nav__next');
        var prevSlider = document.querySelector('.opinion__slider .lSPrev');
        var nextSlider = document.querySelector('.opinion__slider .lSNext');

        prev.addEventListener('click', function (e) {
            prevSlider.click();
        });
        next.addEventListener('click', function (e) {
            nextSlider.click();
        });
    })();
    (function () {
        var sliderNav = document.querySelector('.opinion__slider-video .slider-nav');
        var prev = sliderNav.querySelector('.slider-nav__prev');
        var next = sliderNav.querySelector('.slider-nav__next');
        var prevSlider = document.querySelector('.opinion__slider-video .lSPrev');
        var nextSlider = document.querySelector('.opinion__slider-video .lSNext');

        prev.addEventListener('click', function (e) {
            prevSlider.click();
        });
        next.addEventListener('click', function (e) {
            nextSlider.click();
        });
    })();
}