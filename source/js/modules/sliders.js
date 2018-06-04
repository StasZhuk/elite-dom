module.exports = function () {
    let slider;

    // slider projects
    $('.slick-slider-js').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".slider__arrow-prev",
        nextArrow: ".slider__arrow-next",
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Slider opinion
    $('#opinionGalery').lightSlider({
        gallery: false,
        item: 5,
        loop: true,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        freeMove: true,
        currentPagerPosition: 'center',
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#opinionGalery .lslide'
            });
        },
        responsive: [{
                breakpoint: 1080,
                settings: {
                    item: 4,
                }
            },
            {
                breakpoint: 920,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 540,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
        ]
    });
    // Slider opinion video
    $('#opinionVideo').lightSlider({
        gallery: false,
        item: 3,
        loop: true,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        freeMove: true,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    item: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
}