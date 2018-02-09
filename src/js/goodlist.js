require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1.min.js'
    }
});

require(['jquery','header'],function($,callback){
    callback();

   var $goodlist=$('.goodlist');
   function pageing(num,qty){
     $.ajax({
            url:'../mysql/goodlist.php',
            dataType:'json',
            data:{
                    pageno:num,
                    qty:qty
                },
            success:function(data){
               // console.log(data);
               handle(data);
            }
        });
   }
   pageing(1,30); 

   function handle(data){
    console.log(data);
       var html=$.map(data.data,function(item){
         return  `<li class="pro_item" data-guid="${item.id}">
                      <b class="pro_img">
                          <img src="${item.url}" alt="" />
                      </b>
                      <div class="small_list">
                          <ul class="clearfix">
                              <li><img src="${item.smallimg1}" alt="" /></li>
                              <li><img src="${item.smallimg2}" alt="" /></li>
                              <li><img src="${item.smallimg3}" alt="" /></li>
                          </ul>
                      </div>
                      <p class="pro_price">￥<span>${item.price}</span></p>
                      <p class="pro_mark">${item.decrition}</p>
                      <p class="pro_buy">
                          <span class="now_buy"><i></i>立即购买</span>
                          <span class="add"><i></i>加入购物车</span>
                      </p>
                  </li>` 
      }).join('\n');
      $goodlist.html(html);

      var pageqty=Math.ceil(data.total/data.qty);
      $('.num').html('');
      for(let i=1;i<=pageqty;i++){
          var span=$('<span/>');
          span.text(i);
          $('.num').append(span);
      }
      $('.num').find('span').eq(data.pageno-1).addClass('active');
      $('.num').on('click','span',function(){
       var pageno =Number($(this).text());
       pageing(pageno,30);
      });

      console.log($('.pro_item'));
      $('.goodlist').on('click','.pro_item',function(){
          var id=this.dataset.guid;
          location.href ='../html/detail.html?'+'id='+id;
      });
   }

   $('.jump').on('click',function(){
     var pageno=Number($('.pageno').val());
     if(isNaN(pageno)||pageno==''){
        return;
     }else{
        if(pageno>3){
            pageno=1;
        }
        pageing(pageno,30);
     }
   });

   $('.btn_next').on('click',function(){
     var pageno= $('.active').text()*1+1;
     if(pageno>3){
        pageno=1;
     }
     pageing(pageno,30);
   });
  
}) 