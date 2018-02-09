require(['config'],function(){
    require(['jquery'],function($){
        $('.footer').load('../html/footer.html .footer');
     
        // 页面刷新把以前的cookie重新写入数组
     function getcookie(){
        var goodlist=[];
        var cookie=document.cookie;
        cookie=cookie.split('; ');
        cookie.forEach(function(item){
            var arr=item.split('=');
            if(arr[0]=='goodlist'){
                goodlist=JSON.parse(arr[1]);
            }
        });
        console.log(goodlist);
        return goodlist ;
    }
    function duqu(){
        var goodlist=getcookie();
        var t_price=0;
        var t_qty=0;
        var html=goodlist.map(function(item){
            t_price+=item.price*item.qty;
            t_qty=t_qty*1+item.qty*1;
            return   `<tr class="item" data-id="${item.id}">
                       <td align="center"></td>
                       <td class="p-num">15817701</td>
                       <td class="p-img">
                       <img src="${item.url}" height="50" width="50" alt="" />
                       </td>
                       <td class="p-name">
                       <h2>男子雨翼科技连帽针织运动上衣-15817701</h2>
                       <span class="color">颜色:纯净白 尺码:L</span>
                       </td>
                       <td class="p-price">
                           <span class="u_price">￥<i>429.00</i></span>
                           <span class="price">￥<i class="pp">${item.price}</i></span>
                       </td>
                       <td class="p-qty">
                           <div class="qty-form">
                               <span class="down">-</span>
                               <input type="text" class="qty" value="${item.qty}" />
                               <span class="up">+</span>
                           </div>
                       </td>
                       <td class="p-invent">${item.jifen*item.qty}</td>
                       <td class="p-remove"><span class="remove">删除</span></td>
                   </tr>`
        }).join('\n');
        // console.log(html);
        $('.goods_qty').text(t_qty);
        $('.goods_tprice').text(t_price);
        $('.cart_table tbody').html(html);
    }
    duqu();

    $('.cart_table').on('click','.down',function(){
         var price=$(this).parent().parent().prev().find('.pp')[0];
         var jifen=$(this).parent().parent().next()[0];
         if($(this).next()[0].value>=1){
               $('.goods_tprice')[0].innerHTML-=price.innerText;
               $('.goods_tprice')[1].innerHTML-=price.innerText;
               jifen.innerHTML-=price.innerText;
                $('.goods_qty')[0].innerHTML--;
            }
        $(this).next()[0].value--;
        // 数量为零就不再减
        if($(this).next()[0].value<=0){
            $(this).next()[0].value=0;
        }
        var tr =$(this).parent().parent().parent()[0];
        var id=tr.dataset.id;
        let goodlist=getcookie();
        for(let i=0;i<goodlist.length;i++){
                if(id==goodlist[i].id){
                    goodlist[i].qty--;
                    if(goodlist[i].qty<=0){
                       goodlist[i].qty=0;
                    }
                }
            }
       document.cookie='goodlist='+JSON.stringify(goodlist);         
    });

    $('.cart_table').on('click','.up',function(){
         var price=$(this).parent().parent().prev().find('.pp')[0];
         var jifen=$(this).parent().parent().next()[0];
         $(this).prev()[0].value++;
         $('.goods_tprice')[0].innerHTML=$('.goods_tprice')[0].innerHTML*1+price.innerText*1;
         $('.goods_tprice')[1].innerHTML=$('.goods_tprice')[1].innerHTML*1+price.innerText*1;
         jifen.innerHTML=jifen.innerHTML*1+price.innerText*1;
         $('.goods_qty')[0].innerHTML++;
         var tr =$(this).parent().parent().parent()[0];
         var id=tr.dataset.id;
         let goodlist=getcookie();
         for(let i=0;i<goodlist.length;i++){
                if(id==goodlist[i].id){
                    goodlist[i].qty++;
                    if(goodlist[i].qty<=0){
                       goodlist[i].qty=0;
                    }
                }
            }
       document.cookie='goodlist='+JSON.stringify(goodlist);         
    });

    $('.cart_table').on('click','.remove',function(){
        var tr=$(this).parent().parent()[0];
        var id=tr.dataset.id;
        var goodlist=getcookie();
            for(let i=0;i<goodlist.length;i++){
                if(id==goodlist[i].id){
                    goodlist.splice(i,1);
                }
            }
        document.cookie='goodlist='+JSON.stringify(goodlist);
        duqu();      
    });

   $('.cart_table').on('change','.qty',function(){
         var price=$(this).parent().parent().prev().find('.pp')[0];
         var jifen=$(this).parent().parent().next()[0];
         if(( $(this)[0].value).trim()==''||isNaN( $(this)[0].value)){
            $(this)[0].value=1; 
        }
        $('.goods_tprice')[0].innerHTML-=jifen.innerText;
        $('.goods_tprice')[1].innerHTML-=jifen.innerText;
        $('.goods_qty')[0].innerHTML=$('.goods_qty')[0].innerHTML-jifen.innerText/price.innerText;
        $('.goods_qty')[0].innerHTML= $('.goods_qty')[0].innerHTML*1+($(this)[0].value)*1;
        $('.goods_tprice')[0].innerHTML=$('.goods_tprice')[0].innerHTML*1+price.innerText*($(this)[0].value);
        $('.goods_tprice')[1].innerHTML=$('.goods_tprice')[1].innerHTML*1+price.innerText*($(this)[0].value);
        jifen.innerText=price.innerText*($(this)[0].value);
        var tr =$(this).parent().parent().parent()[0];
        var id=tr.dataset.id;
        let goodlist=getcookie();
        for(let i=0;i<goodlist.length;i++){
                if(id==goodlist[i].id){
                    goodlist[i].qty=($(this)[0].value);
                }
            }
        document.cookie='goodlist='+JSON.stringify(goodlist); 

   });

     $('.clearall').on('click',function(){
        var now=new Date();
        now.setDate(now.getDate()-10);
        //清除cookie：利用设置过期时间达到删除效果
        document.cookie = 'goodlist=null;expires='+now.toUTCString();
        console.log(document.cookie);
        duqu();
    });

    $('.shop').on('click',function(){
        location.href='../html/goodlist.html';
    });
   
        
    });
})

