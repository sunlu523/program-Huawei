$(function(){
    $("#btn").click(function(){
        $.get("http://jx.xuzhixiang.top/ap/api/checkname.php?username=1",{username:
        $("#username").val()},data => {
            console.log(1);
            if(data.code == 1){
                $.get("http://jx.xuzhixiang.top/ap/api/reg.php",{
                    username:$("#username").val(),
                    password:$("#password").val()
            
                },data =>{
                    if(data.code == 1){
                        location.href = "login.html";
                    }
                })
            }else{
                alert("用户名重名");
            }
        })
    })
})