(function ($) {
    function pageLoad() {

    }
    $(window).load(function () {
        // slider banner
        $('#slidernopage').nivoSlider({
            pauseTime: 4000,
            pauseOnHover: false,
            controlNav: true,
            directionNav: false
        });
    });
    $(function () {
        $(".panel-left").mobilepanel();
        //$(".panel-right").mobilepanel({ panelLeft: false });
        mymenudes();
        menusroll();
        $("#sroltop a").click(function () {
            $("html, body").stop(true, true).animate({ scrollTop: 0 }, 500);
            return false;
        });
        mysroll();
    });
    //function===============================================================================================
    // function mymenudes() use hover menu show menusub
    function mymenudes() {
        mymenusub();
        $(window).resize(function () {
            mymenusubre();
        });
        $("#menu li").hover(function () {
            $(this).find(".menu-sub:first").stop(true, true).slideDown();
        }, function () {
            $(this).find(".menu-sub:first").stop(true, true).slideUp();
        });
    }
    function mymenusub() {
        $("#menu").addClass("show-menu").find(".menu-sub").show();
        $("#menu li").each(function () {
            var wsub = $(this).find(".menu-sub:first").width();
            $(this).find(".menu-sub:first").width(wsub).attr("data-width", wsub);
            var position = $(this).position();
            var leftmenu = position.left;
            var menuw = $("#menu").width() - leftmenu;
            if (menuw < wsub) {
                $(this).find(".menu-sub:first").addClass("menu-right");
            }
        });
        $("#menu").removeClass("show-menu").find(".menu-sub").hide();
        //            $("#menu").removeClass("show-menu");
    }
    function mymenusubre() {
        $("#menu li").each(function () {
            var wsub = $(this).find(".menu-sub:first").attr("data-width");
            var position = $(this).position();
            var leftmenu = position.left;
            var menuw = $("#menu").width() - leftmenu;
            if (menuw < wsub) {
                $(this).find(".menu-sub:first").addClass("menu-right");
            } else {
                $(this).find(".menu-sub:first").removeClass("menu-right");
            }
        });
    }
    // function menusroll() when scroll menu always top not scroll
    function menusroll() {
        var htop = $("#header").height();
        srollmenu(htop);
        $(window).scroll(function () {
            srollmenu(htop);
        });
    }
    function srollmenu(htop) {
        if ($(window).scrollTop() > htop) {
            $("#header-menu").addClass("header-sroll");
        } else {
            $("#header-menu").removeClass("header-sroll");
        }
    }
    function mysroll() {
        mysrol();
        $(window).scroll(function () {
            mysrol();
        });
    }
    function mysrol() {
        var topsroll = $(window).scrollTop();
        if (topsroll > 100) {
            $("#sroltop").stop(true, true).animate({ "opacity": 0.5 }, 500);
        } else {
            $("#sroltop").stop(true, true).animate({ "opacity": 0 }, 500);
        }
    }
})(jQuery);
