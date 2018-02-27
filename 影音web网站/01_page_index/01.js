$(function(){
    $('.con > ul li').on('mouseover',function(){
        $(this).css({background:"#FFFFFF",boxShadow:"0 3px 6px 0 rgba(0,0,0,0.13)",padding:"3px",marginRight:"8px",marginBottom:"8px"});
        $(this).outerWidth('213.4px');
        $(this).outerHeight('256.4px');
    });
    $('.con > ul li').on('mouseleave',function(){
        $(this).outerWidth('213.4px');
        $(this).outerHeight('256.4px');
        $(this).css({background:"#EFF2F5",boxShadow:"none",padding:"0px",marginRight:"14px",marginBottom:"14px"});
    });
});
