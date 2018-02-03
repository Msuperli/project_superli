// imgs:['img/001.jpg','img/002.jpg','img/003.jpg','img/004.jpg'],
// type:,
// width:,
// height:,
// time:,
// autopaly:,
// page:,
// seamless:,
 
;(function($){
    $.fn.lunbo_li=function(options){
        // 默认参数
        var defualts={
            width:810,
            height:320,
            type:'vertical',//horizontal,fade,'vertical',
            page:true,
            autoplay:true,
            seamless:true,//无缝滚动
            time:2000,
            index:0
        }
        this.each(function(){
            // 把传入的参数与默认的参数合并到一个对象里
            var opt=$.extend({},defualts,options);
            // 转换为jQuery
            var $this=$(this);
            $this.addClass('lunbo-lzq');
            $this.css({
                width:opt.width,
                height:opt.height
            });
            opt.len=opt.imgs.length;
            var $ul;

            function getimg(){
                var html=$.map(opt.imgs,function(url){
                    return '<li><img src="'+ url +'"/></li>';
                    }).join('\n');
                return html;
            }
    
           
        switch(opt.type){
            case 'vertical':
            function v_init(){
                $ul=$('<ul/>');
                if(!opt.seamless){
                    $ul.html(getimg());
                    $this.append($ul);
                }else{
                    var html=getimg()+'<li><img src="'+ opt.imgs[0] +'"/></li>';
                    $ul.html(html);
                    $this.append($ul);
                }

            }
            v_init();
            break;

            case 'horizontal':
            function h_init(){
                $ul=$('<ul/>');
                if(!opt.seamless){
                    $ul.html(getimg());
                    $ul.css('width',opt.len*opt.width);
                    $ul.find('li').addClass('h_li');
                    $this.append($ul);
                }else{
                    var html=getimg()+'<li><img src="'+ opt.imgs[0] +'"/></li>';
                    $ul.html(html);
                    $ul.css('width',(opt.len+1)*opt.width);
                    $ul.find('li').addClass('h_li');
                    $this.append($ul);
                }
            }
            h_init();
            break;

            case 'fade':
            function f_init(){
               $ul=$('<ul/>');
               $ul.html(getimg());
               $ul.find('li').addClass('fade_li');
               $this.append($ul);
            }
            f_init();
            break;
         }   

         function autoplay(){
            opt.index++;
            show();
         }
         function show(){
            if(opt.seamless&&opt.type!='fade'){
                if(opt.index>=opt.len+1){
                    opt.index=1;
                    if(opt.type=='vertical'){
                        $ul.css('top',0);
                    }else if(opt.type=='horizontal'){
                        $ul.css('left',0);
                    }  
                }
                
                $this.find('.page').find('.active').removeClass('active');
                if(opt.index<opt.len){
                    $this.find('.page').find('span').eq(opt.index).addClass('active');
                }else{
                    $this.find('.page').find('span').first().addClass('active');
                }
                
            }else{
                if(opt.index>=opt.len){
                    opt.index=0;
                }
                
                $this.find('.page').find('.active').removeClass('active');
                $this.find('.page').find('span').eq(opt.index).addClass('active');
            }


            if(opt.type=='vertical'){
                var target= -opt.index*opt.height;
                $ul.stop().animate({top:target});
            }else if(opt.type=='horizontal'){
                var target= -opt.index*opt.width;
                $ul.stop().animate({left:target});
            }else if(opt.type=='fade'){
                $ul.find('li').eq(opt.index).stop().fadeIn().siblings().stop().fadeOut();
            }

         }

         var timer;
         $this.on('mouseenter',function(){
            clearInterval(timer);
         }).on('mouseleave',function(){
            timer=setInterval(autoplay,opt.time);
         }).trigger('mouseleave');
         
         // 生成页码盒子
         var page=$('<div/>');
            if(opt.seamless&&opt.type!='fade'){
            for(var i=1;i<opt.len+1;i++){
                var $span=$('<span/>');
                $span.text(i);
                // 默认第一个高亮
                if(i==opt.index+1){
                    $span.addClass('active');
                }
                page.append($span);
           }
           page.addClass('page');
           $this.append(page);
         }else{
            opt.len=opt.len;
            for(var i=1;i<=opt.len;i++){
                var $span=$('<span/>');
                // $span.text(i);
                // 默认第一个高亮
                if(i==opt.index+1){
                    $span.addClass('active');
                }
                page.append($span);
           }
           page.addClass('page');
           $this.append(page);
         }
         
         // 左右
         if(opt.type!='vertical'){
            $prev=$('<button/>').addClass('prev').text('<');
            $next=$('<button/>').addClass('next').text('>');
            $prev.appendTo($('.lunbo-lzq'));
            $next.appendTo($('.lunbo-lzq'));
         }
         

         $this.on('click','.prev',function(){
            opt.index--;
            if(opt.seamless&&opt.type!='fade'){
                if(opt.index<0){
                opt.index=opt.len-1;
                if(opt.type=='vertical'){
                    $ul.css('top',-opt.len*opt.height);
                }else if(opt.type=='horizontal'){
                     $ul.css('left',-opt.len*opt.width);
                }
                
              }
            }else{
                if(opt.index<0){
                opt.index=opt.len-1;
              }
            }
            show();
         }).on('click','.next',function(){
            opt.index++;
            show();
         }).on('click','span',function(){
            var idx=$(this).index();
            opt.index=idx;
            show();
         })

        })
        return this;
    }
})(jQuery);