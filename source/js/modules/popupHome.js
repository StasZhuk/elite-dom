module.exports = function () {
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
                setTimeout(function() {
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
}