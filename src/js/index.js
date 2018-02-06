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

    $('.slider-box').lunbo_li({
        imgs:['img/xz_830.jpg','img/lq_628.jpg','img/lq_0807.jpg'],
        type:'horizontal',
        width:583,
        height:406,
        time:6000
    });
    $('.slider-box').find('.page').find('span').text('');

    $('.slider-box').find('.page').css({
        right:'42%',
        transform:'translate(-50%,0)'
    });

    $('.slider-box-r').lunbo_li({
        imgs:['img/nz_830.jpg','img/kb_209.jpg','img/fz_830.jpg'],
        type:'horizontal',
        width:583,
        height:406,
        time:6000
    });
    $('.slider-box-r').find('.page').find('span').text('');

    $('.slider-box-r').find('.page').css({
        right:'42%',
        transform:'translate(-50%,0)'
    });

    // var goodlist=[
    //     {
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:1
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:2
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:3
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:4
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:5
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:6
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:7
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:8
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:9
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:10
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:11
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:12
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:13
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:14
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:15
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:16
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:17
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:18
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:19
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:20
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:21
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:22
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:23
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:24
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:25
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:26
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:27
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:28
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:29
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:30
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:31
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:32
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:33
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:34
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:35
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:36
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:37
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:38
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:39
    //     },{
    //         url:'img/11811102_7_01--w_288_h_288.jpg',
    //         smallurl1:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl2:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl3:'img/11811102_10_01--w_30_h_30.jpg',
    //         smallurl4:'img/11811102_10_01--w_30_h_30.jpg',
    //         xinxi:'2018新款汤普森3代战靴',
    //         price:598.00,
    //         buy:'立即购买',
    //         id:40
    //     }
    // ]
    // console.log(goodlist);    
    // console.log(JSON.stringify(goodlist));
    console.log($('.produ-lists'));
    var $goodlist=$('.produ-lists ul');
    $.ajax({
            type:'GET',
            url:'../api/data/index.json',
            dataType:'json',
            success:function(data){
                var html=$.map(data,function(item){
                   return   ` <li class="produ-box" data-guid="${item.id}">
                                <div class="produ-box-content">
                                <a href="" class="produ-img">
                                <img src="${item.url}" alt="" />
                                <div class="overburden"></div>
                                </a>
                                <div class="produ-classes">
                                 <ul>
                                   <li><img src="${item.smallurl1}" alt="" /></li>
                                   <li><img src="${item.smallurl2}" alt="" /></li>
                                   <li><img src="${item.smallurl3}" alt="" /></li>
                                   <li><img src="${item.smallurl4}" alt="" /></li>
                                </ul>
                                </div>
                                <span class="produ-info">${item.xinxi}</span>
                                <span class="produ-price-info">￥${item.price}.00</span>
                                <span class="produ-buy-now"><a href="" class="buy-now-btn">${item.buy}</a></span>
                                </div>
                            </li>`
                }).join('\n');
                console.log(html);
                console.log($goodlist);
                $goodlist.html(html);
                $('.produ-lists').append($goodlist);
            }
        });



})
