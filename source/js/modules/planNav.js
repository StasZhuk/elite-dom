module.exports = function () {
    let planNav = document.querySelector('.plane-home__nav');
    let navLinks = planNav.querySelectorAll('.plane-home__link');
    let markItems = document.querySelectorAll('.plan-home__mark');

    planNav.addEventListener('click', function (e) {
        if(e.target.classList.contains('.popup-form-smeta')) {
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
}