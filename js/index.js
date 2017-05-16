$(function () {

//        $(".tab").slide({
//            trigger: "click"
//        });


    $("#tabTitle li").click(function () {
        $('.conR').addClass('unfold');
        $(this).addClass("on").siblings().removeClass("on");
        var i = $(this).index();
        $('#tabContent>ul').eq(i).addClass("on").siblings().removeClass("on");
        $('#btnCtrl').show();
    });

    $('#tabFold').on('click', function () {
        closeMenu();
    });
    function closeMenu() {
        $('.conR').removeClass('unfold');
        $('#tabContent>ul').removeClass("on");
        $("#tabTitle li").removeClass("on");
        $('#btnCtrl').hide();
    }

    $('#tabLock').on('click', function () {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $('#tabFold').off('click');
        } else {
            $('#tabFold').on('click', function () {
                closeMenu();
            });
        }
    });

//        导航菜单
    $('.user-nav-bar').click(function(){
        $(this).next().toggle();
    })
});