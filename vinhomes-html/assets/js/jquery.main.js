(function ($) {
    function pageLoad() {

    }
    $(window).load(function () {
        // slider content
        
        $('.slick-slider').slick({
            centerMode: true,
//            centerPadding: '40px',
            slidesToShow: 3,
            responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
        });
    });
    $(function () {
        //$(".panel-left").mobilepanel();
        //$(".panel-right").mobilepanel({ panelLeft: false });
//        $(".panel-left").click(function () {
//            $(this).toggleClass("current");
//            var idmenu = $(this).attr("href");
//            if ($(this).hasClass("current")) {
//                $(idmenu).slideDown();
//            } else {
//                $(idmenu).slideUp();
//            }
//            $("#menuContent").mouseleave(function () {
//                $(".panel-left").removeClass("current");
//                $("#menuContent").fadeOut();
//            });
//            return false;
//        });
        $("#menuContent").mouseleave(function () {
            $(".panel-left").removeClass("current");
            $("#menuContent").fadeOut();
        });
        mymenudes();
        menusroll();
        $("#sroltop a").click(function () {
            $("html, body").stop(true, true).animate({ scrollTop: 0 }, 500);
            return false;
        });
        $(".login-link").click(function () {
            //$("#mask-bg").remove();
            $(this).toggleClass("current");
            var idlogin = $(this).attr("href");
            if ($(this).hasClass("current")) {
                $(idlogin).slideDown();
                //$("#wrapper").append('<div id="mask-bg"></div>');
            } else {
                $(idlogin).slideUp();
                //$("#mask-bg").remove();
            }
            $("#login").mouseleave(function () {
                $(".login-link").removeClass("current");
                $("#login").fadeOut();
                //  $("#mask-bg").remove();
            });
            return false;
        });
        function runEffect() {
            // get effect type from
            var selectedEffect = $("#effectTypes").val();

            // most effect types need no options passed by default
            var options = {};
            // some effects have required parameters
            if (selectedEffect === "scale") {
                options = { percent: 0 };
            } else if (selectedEffect === "size") {
                options = { to: { width: 200, height: 60} };
            }

            // run the effect
            $("#effect").toggle(selectedEffect, options, 500);
        };

        // set effect from select menu value
        $("#button").click(function () {
            runEffect();
        });
        $('.listAside').textHeight({
            activetit: true,
            listcss: [{ cssname: ".box-name"}],
            wpointb: false,
            widthpont: 420,
            desbool: true,
            listpos: [{ cssnamepos: ".box-name a", cssheightnum: "1"}],
            max: true
        });
        mysroll();
        mymenu2();
    });
    //function===============================================================================================
    // function mymenudes() use hover menu show menusub
    function mymenudes() {
        //mymenusub();
        //        $(window).resize(function () {
        //            mymenusubre();
        //        });
        $("#menu > li").hover(function () {
            //$('.wrapper-all').show();
            $("#wrapper").append('<div id="mask-bg"></div>');
            $(this).find(".menu-sub:first").stop(true, true).slideDown();
        }, function () {
            $(this).find(".menu-sub:first").stop(true, true).slideUp();
        });
        $("#menu > li").mouseleave(function() {
            $("#mask-bg").remove();
        });
        $("#menul2 li").hover(function () {
            $(this).find(".menul2-sub:first").stop(true, true).slideDown();
        }, function () {
            $(this).find(".menul2-sub:first").stop(true, true).slideUp();
        });
//        var $dim = $('.wrapper-all');
//        $('#menu li').hover(function () {
//            $dim.fadeIn(200);
//        }, function () {
//            $dim.fadeOut(200);
//        });
    }
    function mymenusub() {
        $("#menu").addClass("show-menu").find(".menu-sub").show();
        $("#menu li").each(function () {
            var wsub = $(this).find(".menu-sub:first").width();
            $(this).find(".menu-sub:first").width(wsub).attr("data-width", wsub);
            var position = $(this).position();
            var leftmenu = position.left;
            var menuw = $("#menu").width() - leftmenu;
            //if (menuw < wsub) {
            $(this).find(".menu-sub:first").addClass("menu-right");
            //}
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
    //function menu2
    function mymenu2() {
        $('*').click(function () {
            $(".button-menu a").click(function (e) {
                e.stopPropagation();
            });
            var idmenu2 = $(".button-menu a").attr("href");
            $(idmenu2).slideUp();
            if ($(idmenu2).css('display') == 'none') {
                $(".button-menu a").removeClass("current");
            }
        });
        $(".button-menu a").click(function (e) {
            $(this).toggleClass("current");
            var idmenu = $(this).attr("href");
            if ($(this).hasClass("current")) {
                $(idmenu).slideToggle();
            } else {
                $(idmenu).slideUp();
            }
            return false;
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
