$(document).ready(function () {
    $('div.js-user-menu-item').click(function () {
        $('.js-user-menu-item').removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(document).ready(function () {
    $('div.js-user-profile-nav__item').click(function () {
        $('.js-user-profile-nav__item').removeClass("is-active");
        $(this).addClass("is-active");
    });
});
