$(document).ready(function () {
    $('div.js-user-menu-item').click(function () {
        $('div.js-user-menu-item').removeClass("is-active");
        $(this).addClass("is-active");
    });
    $('div.js-user-profile-nav__item').click(function () {
        $('.js-user-profile-nav__item').removeClass("is-active");
        $(this).addClass("is-active");
    });
    $('div.js-dropDown-btn').click(function () {
        $('div.js-dropDown-links').hasClass("is-active") ? $('div.js-dropDown-links').removeClass('is-active') : $('div.js-dropDown-links').addClass("is-active");
    });
    $('div.js-dropDown-links').mouseleave(function () {
        $(this).removeClass('is-active');
    });
});