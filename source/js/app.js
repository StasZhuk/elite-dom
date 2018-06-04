$(document).ready(function () {
    // masked input
    $('input[type="tel"]').mask("79999999999");

    // Menu NAV adaptive
    (function () {
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
    })();

    // Header scroll
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
    setTimeout(() => {
        (function () {
            let sliderNav = document.querySelector('.opinion__slider .slider-nav');
            let prev = sliderNav.querySelector('.slider-nav__prev');
            let next = sliderNav.querySelector('.slider-nav__next');
            let prevSlider = document.querySelector('.opinion__slider .lSPrev');
            let nextSlider = document.querySelector('.opinion__slider .lSNext');

            prev.addEventListener('click', function (e) {
                prevSlider.click();
            });
            next.addEventListener('click', function (e) {
                nextSlider.click();
            });
        })();

        (function () {
            let sliderNav = document.querySelector('.opinion__slider-video .slider-nav');
            let prev = sliderNav.querySelector('.slider-nav__prev');
            let next = sliderNav.querySelector('.slider-nav__next');
            let prevSlider = document.querySelector('.opinion__slider-video .lSPrev');
            let nextSlider = document.querySelector('.opinion__slider-video .lSNext');

            prev.addEventListener('click', function (e) {
                prevSlider.click();
            });
            next.addEventListener('click', function (e) {
                nextSlider.click();
            });
        })();
    }, 1000);


    // Функция плавного скролла к якорю
    (function () {
        var linkNav = document.querySelectorAll('[href^="#scroll"]'), //выбираем все ссылки к якорю на странице
            V = 0.3; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

        for (var i = 0; i < linkNav.length; i++) {
            linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
                e.preventDefault(); //отменяем стандартное поведение
                var w = window.pageYOffset, // производим прокрутка прокрутка
                    hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
                t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                    start = null;
                requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
                function step(time) {
                    if (start === null) start = time;
                    var progress = time - start,
                        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                    window.scrollTo(0, r);
                    if (r != w + t) {
                        requestAnimationFrame(step)
                    } else {
                        location.hash = hash // URL с хэшем
                    }
                }
            }, false);
        }
    })();

    // Мигание кнопки
    (function () {
        $('[data-href="#mypres"]').each(function () {
            var $this = $(this);
            $this.css('overflow', 'hidden');
            var ink, d, x, y;

            setInterval(function () {
                if ($this.find(".ink").length === 0) {
                    $this.prepend("<span class='ink'></span>");
                }

                ink = $this.find(".ink");
                ink.removeClass("animate");

                if (!ink.height() && !ink.width()) {
                    d = Math.max($this.outerWidth(), $this.outerHeight());
                    ink.css({
                        height: d,
                        width: d
                    });
                }

                x = Math.round(Math.random() * ink.width() - ink.width() / 2);
                y = Math.round(Math.random() * ink.height() - ink.height() / 2);
                // y = 0;
                // x = e.pageX - $this.offset().left - ink.width()/2;
                // y = e.pageY - $this.offset().top - ink.height()/2;

                ink.css({
                    top: y + 'px',
                    left: x + 'px'
                }).addClass("animate");
            }, 3000)
        });
    })();

    // plan-home nav
    (function () {
        let planNav = document.querySelector('.plane-home__nav');
        let navLinks = planNav.querySelectorAll('.plane-home__link');
        let markItems = document.querySelectorAll('.plan-home__mark');

        planNav.addEventListener('click', function (e) {
            if (e.target.classList.contains('.popup-form-smeta')) {
                return false;
            };
            if (e.target.tagName == 'A') {
                e.preventDefault();
                let attr = e.target.getAttribute('data-mark');

                if (e.target.classList.contains('active')) {
                    e.target.classList.remove('active');

                    for (let i = 0; i < markItems.length; i++) {
                        if (markItems[i].classList.contains(attr)) {
                            markItems[i].firstElementChild.classList.remove('active');
                        }
                    }
                } else {
                    for (let i = 0; i < navLinks.length; i++) {
                        navLinks[i].classList.remove('active');
                    }
                    e.target.classList.add('active');

                    for (let i = 0; i < markItems.length; i++) {
                        markItems[i].firstElementChild.classList.remove('active');

                        if (markItems[i].classList.contains(attr)) {
                            markItems[i].firstElementChild.classList.add('active');
                        }
                    }
                }
            }
        });
    })();

    // magnific-popap in homes-galery
    (function () {
        $('#imageGallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    })();

    // index sliders , opinions and home project 
    (function () {
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
            arrows: true,
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
            arrows: true,
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
    })();

    // Popup open
    (function () {
        let popupClose = document.querySelector('.popup-close');
        let popupCont = document.querySelector('.popup-home__wrap');

        let popupHome = document.querySelector('.popup-home');
        let popupTitle = popupHome.querySelector('.popup-home__title');
        let popupSquare = popupHome.querySelector('.popup-home__square span');
        let imageGallery = popupHome.querySelector('#imageGallery');
        let homeCoast = popupHome.querySelector('.popup-home__coat-val');
        let homeIpoteca = popupHome.querySelector('.popup-home__ipoteca');
        let homeDescr = popupHome.querySelector('.popup-home__descr');
        let slider;

        // slider create
        slider = $('#imageGallery').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            thumbItem: 3,
            slideMargin: 0,
            enableDrag: false,
            enableTouch: false,
            freeMove: true,
            currentPagerPosition: 'left',
            onSliderLoad: function (el) {
                el.lightGallery({
                    selector: '#imageGallery .lslide'
                });
            }
        });

        slider.destroy();

        function fillPopupHome(target) {
            let dataHome = target.getAttribute('data-home');
            let objHome = homes[dataHome];

            popupTitle.innerHTML = objHome.title;
            popupSquare.innerHTML = objHome.square + 'м';
            homeIpoteca.innerHTML = 'Ипотека от ' + objHome.ipoteca + ' руб/мес.';
            homeCoast.innerHTML = objHome.coast + ' млн.р.';
            homeDescr.innerHTML = objHome.descr;

            imageGallery.innerHTML = '';
            // create gallery and fill it
            for (let i = 0; i < objHome.img.length; i++) {

                var li = document.createElement('LI');
                var img = document.createElement('IMG');
                var a = document.createElement('A');

                a.setAttribute('href', objHome.img[i].big);
                li.setAttribute('data-thumb', objHome.img[i].small);
                li.setAttribute('data-src', objHome.img[i].big);
                img.setAttribute('src', objHome.img[i].big);

                a.appendChild(img);
                li.appendChild(a);
                imageGallery.appendChild(li);
            }
        }

        document.body.addEventListener('click', function (e) {
            if (e.target.classList.contains('project-home__btn') || e.target.classList.contains('project-home__item')) {
                e.preventDefault();

                fillPopupHome(e.target);

                // popupCont.classList.add('active');


                setTimeout(function () {
                    // slider create
                    slider = $('#imageGallery').lightSlider({
                        gallery: true,
                        item: 1,
                        loop: true,
                        thumbItem: 3,
                        slideMargin: 0,
                        enableDrag: false,
                        enableTouch: false,
                        freeMove: true,
                        currentPagerPosition: 'left',
                        onSliderLoad: function (el) {
                            el.lightGallery({
                                selector: '#imageGallery .lslide'
                            });
                        }
                    });
                    setTimeout(function () {
                        popupCont.classList.add('active');

                    }, 300);

                }, 300);

            }
        });

        // Popup close and slider destroy
        popupCont.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup-home__wrap') || e.target.classList.contains('popup-close')) {
                popupCont.classList.remove('active');

                slider.destroy();
            }
        });
        popupCont.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) {
                popupCont.classList.remove('active');

                slider.destroy();
            }
        });
    })();

    // popup-form
    (function () {
        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function () {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    })();

    // map init

    (function () {
        if (window.map) {
            ymaps.ready(init);
            var myMap;

            function init() {
                myMap = new ymaps.Map("map", {
                        center: [57.624058, 39.893706],
                        zoom: 16,
                        controls: []
                    }),

                    myPlacemark = new ymaps.Placemark([57.624058, 39.893706], {
                        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                        balloonContentHeader: "ООО Эверест",
                        balloonContentBody: "ул. Революционная,18",
                        hintContent: "ООО Эверест"
                    });
                myMap.geoObjects.add(myPlacemark);

                myMap.behaviors.disable('scrollZoom');
                myMap.behaviors.disable('drag');
            }
        }
    })();

    $('.txt').html(function (i, html) {
        var chars = $.trim(html).split("");

        return '<span>' + chars.join('</span><span>') + '</span>';
    });

    (function () {
        $(function () {
            $("#opinionVideo").click(function (e) {
                if (e.target.classList.contains('opinion-video__preview', 'active')) {
                    var a = $(e.target),
                        b = a.next().attr("data-src");
                    a.next().attr("src",
                        b);
                    (new Promise(function (b, c) {
                        a.next().on("load", function () {
                            b()
                        })
                    })).then(function (b) {
                        a.removeClass("active")
                    })
                }
            })
        });
        $(function () {
            $("body").click(function (a) {
                $(".modal-youtube").each(function () {
                    this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', "*")
                })
            })
        });
    })();
});