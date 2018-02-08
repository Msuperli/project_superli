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
                console.log(data);
                handle(data);
            }
        });

        function handle(data){
            
           if(data.shouye){
            var src='../'+data.url
            console.log(src);
            $('.bigImg img')[0].src=src;
            $('.price').text(data.price);
            $('.pro_type').text(data.xinxi);
           }else{
            console.log(666);
            $('.bigImg img')[0].src=data.bigimg;
            $('.price').text(data.price);
            $('.pro_type').text(data.decrition);
           }
           
        }




    });
})