$(function(){
    $("#headerBtn").click (function(){
        $("header").css("display","none");
    })

    $(".text").click (function(){
        $(".searchBar-key").css({"display":"none"});
    })
    $(".text").blur (function(){
        $(".searchBar-key").css({"display":"block"}); 
    })
})

