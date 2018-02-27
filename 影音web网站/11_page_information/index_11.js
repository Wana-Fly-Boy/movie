$(function(){
    $('.con > ul li').on('mouseover',function(){
        $(this).css({background:"#FFFFFF",boxShadow:"0 3px 6px 0 rgba(0,0,0,0.13)"});
        // $(this).outerWidth('213.4px');
        // $(this).outerHeight('256.4px');
    });
    $('.con > ul li').on('mouseleave',function(){
        // $(this).outerWidth('213.4px');
        // $(this).outerHeight('256.4px');
        $(this).css({background:"#EFF2F5",boxShadow:"none"});
    });
});
