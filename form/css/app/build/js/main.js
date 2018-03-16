function handleMobileMenu() {
    var mobileMenu = document.querySelector('.header-menu');
    mobileMenu.addEventListener('click', function (e) {
        if (e.target.classList.contains('icon') || e.target.parentNode.classList.contains('icon')) {
            mobileMenu.classList.contains('is-active') ?
                mobileMenu.classList.remove('is-active') :
                mobileMenu.classList.add('is-active');
        }
    });
}

function handleNavItem(){
    var navItems = document.querySelectorAll('.header-nav-item');

    function clear() {
        navItems.forEach(function (item) {
            item.classList.remove('is-active');
        })
    }

    navItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            if (e.target.classList.contains('click-target')) {

                if (item.classList.contains('is-active')) {
                    item.classList.remove('is-active');
                }

                else {
                    clear();
                    item.classList.add('is-active');
                }
            }
        })
    })
}

function jCarousel() {
    var slides = document.querySelectorAll('.slide');
    var arrowRight = document.querySelector('.testimonials-carousel-arrow_right');
    var arrowLeft = document.querySelector('.testimonials-carousel-arrow_left');
    var index = 0;

    function getSliderSizes() {
        var slider = document.querySelector('.slider');
        var slides = document.querySelectorAll('.slide');
        var desktopSize = '788px';
        var responsiveSizes = {
            479 : '300px',
            660 : '450px',
            930 : '588px'
        };

        for(var key in responsiveSizes) {

            if(window.innerWidth <= key) {
                slider.style.width = responsiveSizes[key];
                console.log(slider.style.width);
                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.width = responsiveSizes[key];
                    slides[i].style.minWidth = responsiveSizes[key];
                }
                break;
            }

            else {
                slider.style.width = desktopSize;
                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.width = desktopSize;
                    slides[i].style.minWidth = desktopSize;
                }
            }
        }
    }

    getSliderSizes();

    // window.addEventListener('resize', getSliderSizes);

    arrowRight.addEventListener('click', function(){
        index < slides.length -1 ? index++ : index = 0;
        slides[0].style.marginLeft = -slides[0].offsetWidth * index + "px";
    });

    arrowLeft.addEventListener('click', function(){
        index > 0 ? index-- : index = slides.length - 1;
        slides[0].style.marginLeft = -slides[0].offsetWidth * index + "px";
    });

}

window.onload = function() {
    handleNavItem();
    handleMobileMenu();
    // getSliderSizes();
    jCarousel();
};