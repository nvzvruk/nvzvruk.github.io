$(window).load(function(){
    var local = location.hash,
        top = $('body').find(local);

    if(top.length) {
        var topPos = top.offset().top,
            wScroll = $(window).scrollTop(),
            navH = $('.top_menu').outerHeight();
        setTimeout(function(){
            if(wScroll === topPos) {
                var newScroll = wScroll - navH;
                $('html, body').scrollTop(newScroll, 200);
            }
        }, 0)

    }
})

$(document).ready(function () {

    // Dropdown Button TOGGLE
    function toogleBtn () {
        var toggleBtn = $("#sandwich").parent();

        toggleBtn.on('click', function(){
            $('.top_menu .nav-container').toggleClass('toggled');
            $(this).children().toggleClass('active');
        });

        if (toggleBtn.parent().is(':visible')) {
            $('.nav-container').on('click', 'ul li', function(){
                $('.nav-container').removeClass('toggled');
                toggleBtn.children().removeClass('active');
            });
        }

    }
    toogleBtn ();

    // Dev TABS
    if ($('.dev_tab-content').length){
        $('.dev_tab-content').not(':first').hide();
        $('.header-tabs ul li').on('click', function(){
            $('.header-tabs ul li').removeClass('dev_tab-active').eq($(this).index()).addClass('dev_tab-active');
            $('.dev_tab-content').hide().eq($(this).index()).fadeIn();
        }).eq(0).addClass('dev_tab-active');
    }

    // FOOTER always bottom side
    function heightFooterDetect () {
        $('.page-view').height('auto');
        if( $('.page-view').height() < $(window).height() ) {
            $('.page-view').css('minHeight', $(window).height() - $('.footer').outerHeight());
        }
    }
    if ($('.page-view').length) {
        heightFooterDetect ();
    }

    function columnHeight(column) {
        var tallestColumn = 0;
        $(column).height('auto');
        $(column).each(function () {
            if (tallestColumn < $(this).outerHeight()) {
                tallestColumn = $(this).outerHeight();
            }
        });
        $(column).height(tallestColumn);
    }

    if($('.info-text-container').length > 1) {
        columnHeight('.info-text-container');
    }

    $(window).on('resize', function () {
        if ($('.info-text-container').length > 1) {
            columnHeight('.info-text-container');
        }
        if ($('.page-view').length) {
            heightFooterDetect();
        }

        if(this.innerWidth > 1000){
            $('.top_menu .nav-container').removeClass('toggled');
            $("#sandwich").removeClass('active');
        }
    });

}); // -> ready_END;