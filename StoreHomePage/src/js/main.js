$(document).ready(function () {
    $('.js-nav-item').click(function () {
        $('.js-nav-item').removeClass("nav__item_is-active");
        $(this).addClass("nav__item_is-active");
    });
});
