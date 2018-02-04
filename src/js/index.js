require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'lunbo':'../lib/jquery-lzq-lunbo/jquery-lzq-lunbo'
    },
    shim:{
        'lunbo':{
            deps:["jquery"],
            exports:'jQuery.prototype.lunbo_li'
        }

    }
 });


require(['jquery','lunbo'],function($){
    $('#box').lunbo_li({
        imgs:['img/nianhuo_0201.jpg','img/hn_108.jpg'],
        type:'horizontal',
        width:1920,
        height:550,
        time:3000,
        seamless:false,
        cover:true
    });
    $('#box').find('.page').find('span').first().text('年货节').siblings().text('闪能科技跑鞋'); 
    
})
