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

    $('.sub-btn').on('click',function(){
        $.ajax({
            url:'../mysql/login.php',
            data:{
                username:$('.username').val(),
                password:$('.password').val()
            },
            success:function(data){
                console.log(data);
                if(data === 'success'){
                    location.href = 'http://localhost:1996/';
                }else if(data === 'fail'){
                    if($('.warn').length>0){
                        $('.warn').remove();
                    }
                    var warn= $('<p/>').html('用户名不存在或密码错误');
                    warn.addClass('warn').css({
                        position:'absolute',
                        left:110,
                        top:43,
                        fontSize:14,
                        color:'#d00'
                    });
                    $('.password').parent().css({
                        position:'relative'
                    });
                    $('.password').after(warn);
                    $('.username').val('');
                    $('.password').val('');
                }
            }
        });
    });

});