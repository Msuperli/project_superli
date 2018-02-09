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


require(['jquery','header','lunbo'],function($,callback){
    callback();
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

   
    $.ajax({
            url:'../mysql/index.php',
            dataType:'json',
            success:function(data){
                // console.log(data);
                getdata(data);
            }
        });

        var $goodlist=$('.produ-lists ul');
        function getdata(data){
            var html=$.map(data,function(item){
                   return   ` <li class="produ-box" data-guid="${item.id}">
                                <div class="produ-box-content">
                                <b  class="produ-img">
                                <img src="${item.url}" alt="" />
                                <div class="overburden"></div>
                                </b>
                                <div class="produ-classes">
                                 <ul>
                                   <li><img src="${item.smallurl1}" alt="" /></li>
                                   <li><img src="${item.smallurl2}" alt="" /></li>
                                   <li><img src="${item.smallurl3}" alt="" /></li>
                                   <li><img src="${item.smallurl4}" alt="" /></li>
                                </ul>
                                </div>
                                <span class="produ-info">${item.decrition}</span>
                                <span class="produ-price-info">￥${item.price}</span>
                                <span class="produ-buy-now"><b class="buy-now-btn">${item.buy}</b></span>
                                </div>
                            </li>`
                }).join('\n');
                $goodlist.html(html);
                console.log($('.produ-box'));
                 $('.produ-lists').on('click','.produ-box',function(){
                    console.log(this);
                    var id=this.dataset.guid;
                    var s='yes';
                    location.href ='../html/detail.html?'+'id='+id+'&'+'s='+s;
                });
        }


        $('.line-nav').on('click','.item-two',function(){
            location.href ='../html/goodlist.html';
        });
        
       

})
