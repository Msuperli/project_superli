require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1',
    }
 });

require(['jquery'],function($){
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
    
    $('.code_num').text(getCode());
});