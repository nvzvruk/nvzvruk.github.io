$(document).ready(function () {
    $('div.js_service_name').click(function () {
        $(this).hasClass("is-active") ? $(this).removeClass('is-active') : $(this).addClass("is-active");
    });
    $('div.js-dropDown-btn').click(function () {
        $('div.js-dropDown-links').hasClass("is-active") ? $('div.js-dropDown-links').removeClass('is-active') : $('div.js-dropDown-links').addClass("is-active"); 
    });
    $('div.js-dropDown-links').mouseleave(function () {
        $(this).removeClass('is-active');
    });
});
