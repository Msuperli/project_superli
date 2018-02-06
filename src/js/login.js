require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1',
    }
 });

require(['jquery'],function($){
    function getscroll(){
        var top=$(window).scrollTop();
        var h=$('.sub-btn').offset().top;
        if(top>h){
            $('.btn-top').slideDown();
        }else{
            $('.btn-top').slideUp();
        }
    }
    getscroll();
    $(window).on('scroll',function(){
        getscroll();
    });

    $('.btn-top').on('click',function(){
        console.log($('html body'));
        $('html,body').animate({scrollTop:0});
    });
});