require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'zoom':'../lib/jquery-zoom-Msuperli/jquery-zoom-Msuperli'
    },

    shim:{
        'zoom':{
            deps:['jquery'],
            exports:'jQuery.prototype.superzoom'
        },
        'lunbo':{
            deps:["jquery"],
            exports:'jQuery.prototype.lunbo_li'
        }

    }
});