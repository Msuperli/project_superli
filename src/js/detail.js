require(['config'],function(){
    require(['jquery','header','zoom'],function($,callback){
       callback();
       $('.bigImg').superzoom({
        width:400,
        height:400,
        position:'right',
        gap:20
       });

        $('.smallImg_list').on('click','img',function(){
                $('.bigImg img').attr({
                    src:this.src,
                    'data-big':this.dataset.big || this.src
                });
            });

        var goodlist=[];
        // 页面刷新把以前的cookie重新写入数组
        var cookie=document.cookie;
        cookie=cookie.split('; ');
        cookie.forEach(function(item){
           var arr=item.split('=');
            if(arr[0]==='goodlist'){
                goodlist=JSON.parse(arr[1]);
            }
        });

        var area=location.search;
        var arr=area.slice(1).split('&');
        var id=arr[0].split('=')[1];
        if(arr[1]){
            var shou=arr[1].split('=')[1];
        }
         $.ajax({
            url:'../mysql/detail.php',
            dataType:'json',
            data:{
                id:id,
                shou:shou
            },
            success:function(data){
                handle(data);
                console.log(data);
            }
        });

        function handle(data){
            
           if(data.shouye){
            var src='../'+data.url;
            console.log(src);
            $('.bigImg img')[0].src=src;
            $('.price').text(data.price);
            $('.pro_type').text(data.xinxi);
           }else{
            console.log(666);
            $('.bigImg img')[0].src=data.url;
            $('.price').text(data.price);
            $('.pro_type').text(data.decrition);
           }

           $('.addTocart').on('click',function(){
                if(data.shouye){
                    data.url='../'+data.url;
                }
                var id=data.id;
                var num= Number( $('.num').val());
                data.qty=num;
                for(var j=0;j<goodlist.length;j++){
                    if(id==goodlist[j].id){
                    goodlist[j].qty=goodlist[j].qty*1+num*1;
                    break;
                        }
                }
                if(j==goodlist.length){
                    goodlist.push(data);
                }
                console.log(goodlist);
                document.cookie='goodlist='+JSON.stringify(goodlist);
                var sr =$('.bigImg img')[0].src;
                var img =$('<img/>').css({
                    position:'absolute',
                    left:190,
                    top:180,
                    width:500,
                    height:500
                });
                img.attr('src',sr);
                img.appendTo('body');
                img.animate({left:$('.fei').offset().left,top:$('.fei').offset().top,width:30,height:30},1000,function(){
                    img.remove();
                });
            });
        }

        $('.buyNow').on('click',function(){
            location.href='../html/cart.html';
        });

   

    });
})