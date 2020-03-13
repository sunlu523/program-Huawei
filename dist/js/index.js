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
    $("#erji").load("menu.html");


    var theme = localStorage.getItem("username");
    if(theme == null || theme ==""){
        $("#signIn_1").html("请登录");
        // var p = $("#signIn").attr("href");
        // $("#signIn_ing").hide();
    }else{
        $("#signIn_1").html("您好，").append(theme);
        // $("signIn_ing").show().text(theme);
    }

    // window.onbeforeunload=function(){
    //     localStorage.clear();
    // }
})

