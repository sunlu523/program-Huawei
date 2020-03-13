$(document).ready(function(){
        $('li').mouseover(function () {
            var index = $(this).index();
            $('.sunlu').eq(index).show().siblings('.yujia').hide();
        });
        $('nav').mouseleave(function () {
            $('.sunlu').hide();
        });

})