require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1',
    }
 });

require(['jquery'],function($){

    $('.reg-wrapper').load('login.html .wrapper',function(){
    $('.username')[0].placeholder='邮箱/手机号';
    var tx =$('<h/>').text('请输入手机号码或邮箱地址注册：');
    tx.css({
       display:'block',
       marginTop:10,
       marginBottom:20,
       fontSize:15,
       color:'#666',
       fontWeight:'bold'
    }); 
    $('.login').prepend(tx);
    var mi_box=$('<div/>').addClass('input-box');
    var confirm=$('<input/>').addClass('confirm');
    confirm[0].placeholder='确认密码';
    confirm[0].type='password';
    confirm.appendTo(mi_box);
    $('.sub-btn').before(mi_box);
    var code_box=$('<div/>').addClass('input-box');
    var code=$('<input/>').addClass('code');
    code.appendTo(code_box);
    code[0].placeholder='图片验证码';
    code.css({width:200});
    code.parent().css({width:230});
    mi_box.after(code_box);
    var code_num=$('<span/>').addClass('code_num');
    code_num.appendTo(code_box);
    $('.sub-btn')[0].value='确认';
    $('.other-login-type').remove();
    $('.n_links_area').remove();
    // 获取验证码
    $('.code_num').text(getCode());
    $('.code_num').on('click',function(){
        $('.code_num').text(getCode());
    });

    var t_phone=$('<span/>').addClass('t_phone');
    var i_phone=$('<i/>').addClass('i_phone'); 
    var f_phone=$('<span/>').addClass('f_phone').text('邮箱和手机号都不正确');
    i_phone.appendTo(f_phone);
    $('.username').before(t_phone);
    $('.username').after(f_phone);
    var caj=$('<span/>').addClass('caj').text('这个手机号或邮箱已被注册');
    f_phone.after(caj);

    var t_mima=$('<span/>');
    var i_mima=$('<i/>').addClass('i_mima'); 
    var t_mima=$('<span/>').addClass('t_mima').text('密码强度弱');
    i_mima.appendTo($('.password').parent());
    var f_mima=$('<span/>');
    var fi_mima=$('<i/>').addClass('fi_mima'); 
    var f_mima=$('<span/>').addClass('f_mima').text('密码不能是空格和长度为6到12');
    fi_mima.appendTo(f_mima);
    $('.password').before(t_mima);
    $('.password').after(f_mima);

    var t_confirm=$('<span/>').addClass('t_confirm');
    var f_confirm=$('<span/>');
    var i_confirm=$('<i/>').addClass('i_confirm'); 
    var f_confirm=$('<span/>').addClass('f_confirm').text('密码不一致');
    i_confirm.appendTo(f_confirm);
    $('.confirm').before(t_confirm);
    $('.confirm').before(f_confirm);
    
    
    // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    // 邮箱和手机号验证
    function username(){
        var u_value=$('.username').val();
        var w=/^[\w\.\-]{3,}@[\w\-]{1,63}(\.[a-z]{2,6}){1,5}$/.test(u_value);
        var p=/^1[34578]\d{9}$/.test(u_value);
        console.log(w,p);
        if(w||p){
            $('.f_phone').css('display','none');
            $('.t_phone').css('display','block');
            return true;
        }else{
            $('.f_phone').css('display','block');
            $('.t_phone').css('display','none');
            return false; 
        }
    }
    $('.username').on('change',function(){
        username();
        exist();
    });

    // 密码验证
    function c_code(){
        var _password=$('.password').val();
        if(/^\S{6,12}$/.test(_password)){
        if(/^\d{6,12}$/.test(_password)){
           $('.f_mima').css('display','none');
           $('.t_mima').css('display','block').text('密码强度弱');
           $('.i_mima').css('display','block');
           return true;
        }
        else if(/^[A-Za-z\d]{6,12}$/.test(_password)){
           $('.f_mima').css('display','none');
           $('.t_mima').css('display','block').text('密码强度一般');
            $('.i_mima').css('display','block');
           return true;
        }
        else if(/^[\S.]{6,12}$/.test(_password)){
           $('.f_mima').css('display','none');
           $('.t_mima').css('display','block').text('密码强度强');
            $('.i_mima').css('display','block');
           return true;
        }
    }else{
           $('.t_mima').css('display','none');
            $('.i_mima').css('display','none');
           $('.f_mima').css('display','block');
        return false;
    }   
}
    $('.password')[0].onchange=c_code;

    // 密码验证是否一致
    function cf(){
        var _password=$('.password').val();
        var _confirm=$('.confirm').val(); 
        if(_confirm==_password){
            $('.t_confirm').css('display','block');
            $('.f_confirm').css('display','none');
            return true; 
        }else{
            $('.t_confirm').css('display','none');
            $('.f_confirm').css('display','block');
            return false;
        }
    }
    $('.confirm')[0].onchange=cf;
   
   function exist(){
     var t=username();
     var aj;
     if(t){
        $.ajax({
                url:'../mysql/reg.php',
                data:{
                    username:$('.username').val(),
                    uscon:'yy'
                },
                success:function(data){
                    console.log(data);
                    if(data.trim() ==='none'){
                        $('.caj').css('display','none');
                    }else{
                        $('.caj').css('display','block');
                    }
                }
            });
     }
   }

   $('.sub-btn').on('click',function(){
        if(username()&&c_code()&&cf()){
        var code=$('.code').val().toLowerCase();
        var code_num=$('.code_num').text().toLowerCase();
        if(code==code_num){
             $.ajax({
                url:'../mysql/reg.php',
                data:{
                    username:$('.username').val(),
                    password:$('.password').val(),
                     uscon:'nn'
                },
                success:function(data){
                    console.log(data);
                   if(data.trim()=='success'){
                     location.href ='login.html';
                   }else{
                     $('.caj').css('display','block');
                   }
                }
            });
            
        }else{
            var code_confirm=$('<span/>').addClass('.ccc').text('验证码错误').css({
                position:'absolute',
                left:0,
                bottom:-18,
                fontSize:14,
                color:'#d00'
            });
            $('.code').val('');
            $('.code_num').after(code_confirm);
        }
      }
   });


});
    // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
$('.footer').load('login.html .footer');
$('.top').load('login.html .top');
    // 随机生成验证码
    function getCode(){
    // 用于存放结果
    var res = '';
    var arr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for(var i=0;i<4;i++){
        var idx = parseInt(Math.random()*arr.length);
        res += arr[idx];
    }
    return res
}
    
});