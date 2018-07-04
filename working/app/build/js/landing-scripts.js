$(document).ready(function () {

    var navH = $('.top_menu').outerHeight();
// page scroll to id
    $(".top_menu ul a[href*='#'], .industries-link").mPageScroll2id({
        offset: navH,
        forceSingleHighlight: false,
    });

//owl-carousel_technologies
    $("#owl-demo_technologies").owlCarousel({
        items: 8,
        loop: true,
        navigationText: ["<i class='nav_techno icon-arrow-l'></i>", "<i class='nav_techno icon-arrow-r'></i>"],
        navigation: true,
        autoPlay: false,
        itemsDesktop: [1199, 8],
        itemsDesktopSmall: [979, 8],
        itemsTablet: [768, 4],
        itemsMobile: [479, 3]
    });

//owl-carousel_how-we-work
    $("#owl-demo_case-study").owlCarousel({
        items: 3,
        loop: true,
        navigationText: ["<i class='nav_how-we-work icon-arrow-l'></i>", "<i class='nav_how-we-work icon-arrow-r'></i>"],
        navigation: true,
        autoPlay: false,
        responsive: true,
        itemsCustom: [
            [0, 1],
            [400, 1],
            [751, 2],
            [984, 3]
        ]
    });

//owl-carousel_testimonials
    $("#owl-demo_industries").owlCarousel({
        items: 2,
        loop: true,
        navigationText: ["<i class='nav_testimonials icon-arrow-l'></i>", "<i class='nav_testimonials icon-arrow-r'></i>"],
        navigation: true,
        autoPlay: false,
        responsive: true,
        itemsDesktop: [900, 2],
        itemsDesktopSmall: [700, 2],
        itemsTablet: [600, 2],
        itemsMobile: [200, 2]
    });

//owl-carousel_testimonials
    $("#owl-demo_testimonials").owlCarousel({
        items: 1,
        loop: true,
        navigationText: ["<i class='nav_testimonials icon-arrow-l'></i>", "<i class='nav_testimonials icon-arrow-r'></i>"],
        navigation: true,
        autoPlay: false,
        responsive: true,
        itemsDesktop: [900, 1],
        itemsDesktopSmall: [700, 1],
        itemsTablet: [600, 1],
        itemsMobile: [200, 1]
});

//owl-carousel_how-we-work
$("#owl-demo_our-clients").owlCarousel({
items: 4,
loop: true,
navigationText: ["<i class='nav_our-clients icon-arrow-l'></i>", "<i class='nav_our-clients icon-arrow-r'></i>"],
navigation: true,
autoPlay: false,
responsive: true,
itemsDesktop: [1199, 4],
itemsDesktopSmall: [979, 4],
itemsTablet: [768, 3],
itemsMobile: [479, 2]
});

}); // -> ready_END;