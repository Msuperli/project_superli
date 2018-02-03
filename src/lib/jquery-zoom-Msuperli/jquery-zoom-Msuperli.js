;(function($){
    $.fn.superzoom=function(options){
        var defaults={
            width:400,
            height:400,
            // 显示位置
            position:'right',
            gap:15,
            multiple:5
        }
        return this.each(function(){
            var opt=$.extend({},defaults,options);
            var $small=$(this);
            var $smallimg=$small.find('img');

            $small.addClass('sup-zoom');
            // 获取/创建节点
            // 绑定事件
            function init(){
                // 创建大图区域
                var $big=$('<div/>').addClass('sup-zoom-big');
                $big.css({
                    width:opt.width,
                    height:opt.height
                });

                var left,top;
                if(opt.position=='right'){
                    left=$small.offset().left+$small.outerWidth()+opt.gap;
                    top = $small.offset().top;
                    console.log($small.offset().left,);
                }else if(opt.position === 'left'){
                    left = $small.offset().left - opt.width - opt.gap;
                    top = $small.offset().top;
                }else if(opt.position === 'top'){
                    left = $small.offset().left;
                    top = $small.offset().top - opt.height - opt.gap;
                }else if(opt.position === 'bottom'){
                    left = $small.offset().left;
                    top = $small.offset().top + $small.outerHeight() + opt.gap;
                }

                $big.css({
                    left:left,
                    top:top
                });

                // 创建大图
                var $bigimg=$('<img/>').attr('src',$smallimg.attr('data-big')||$smallimg[0].src);

                $bigimg.appendTo($big);
                $big.appendTo('body');

                // 创建放大镜
                var $minzoom=$('<span/>').addClass('minzoom');
                $minzoom.appendTo($small);

                $small.on('mouseenter',function(){

                    $bigimg.attr('src',$smallimg.attr('data-big') || $smallimg[0].src);
                    $bigimg.attr({
                        width:$smallimg.outerWidth()*opt.multiple,
                        height:$smallimg.outerHeight()*opt.multiple
                    });
                    $minzoom.show();
                    $big.show();
                    $minzoom.css({
                        width:opt.width/opt.multiple,
                        height:opt.height/opt.multiple
                    });
                }).on('mouseleave',function(){
                    $big.hide();
                    $minzoom.hide();
                }).on('mousemove',function(e){
                    var left = e.pageX - $small.offset().left - $minzoom.outerWidth()/2;
                    var top = e.pageY - $small.offset().top - $minzoom.outerHeight()/2;

                        // 边界判断
                    if(left<0){
                        left = 0;
                    }else if(left > $smallimg.innerWidth()-$minzoom.outerWidth()){
                        left = $smallimg.innerWidth()-$minzoom.outerWidth()
                    }

                    if(top < 0){
                        top = 0;
                    }else if(top > $smallimg.innerHeight()-$minzoom.outerHeight()){
                        top = $smallimg.innerHeight()-$minzoom.outerHeight()
                    }


                    $minzoom.css({
                        left:left,
                        top:top
                    });


                    $bigimg.css({
                        left:-left*opt.multiple,
                        top:-top*opt.multiple
                    })

            })


        }
            init();





        })
    }
})(jQuery);