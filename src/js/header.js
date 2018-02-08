define(['jquery'],function(){
    return function(){
    $('.nav-search-input').on('click',function(){
        $('.suggestion').slideDown();
    });
    $('.suggestion').on('click','li',function(){
        $('.nav-search-input')[0].value=$(this).text();
        $('.suggestion').slideUp();
    });

    function getscroll(){
        var top=$(window).scrollTop();
        var h=88;
        $('.right-sidebar').css({top:0});
        if(top>h){
            $('.go-to-top').slideDown();
            $('.nav').css({
                position:'fixed',
                zIndex:300,
                top:0
            });
        }else{
            $('.right-sidebar').css({top:52});
            $('.go-to-top').slideUp();
            $('.nav').css({
                position:'relative',
                zIndex:300,
                top:0
            });
        }
    }
    getscroll();
    $(window).on('scroll',function(){
        getscroll();
    });

    $('.go-to-top').on('click',function(){
        $('html,body').animate({scrollTop:0});
    });

    $('.right-sidebar').on('mouseenter','li',function(){
        $(this).find('.sidebar-tab-tip').slideDown();
    }).on('mouseleave','li',function(){
        if( $(this).find('.sidebar-tab-tip').length!=0){
            $(this).find('.sidebar-tab-tip').slideUp(5);
        }
    });
    $('.line-nav').on('click','.item-two',function(){
            location.href ='../html/goodlist.html';
        });
    $('.line-nav').on('click','.item-first',function(){
            location.href ='../index.html';
        });

    }
});
