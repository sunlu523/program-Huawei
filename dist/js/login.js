$(function(){
    $("#btn1").click(function(){
            $.get("http://jx.xuzhixiang.top/ap/api/login.php",{
                username:$("input").eq(0).val(),
                password:$("input").eq(1).val()
        },data =>{
            console.log(data);
            if(data.code == 1){
                localStorage.setItem("username",$("input").eq(0).val());
                location.href = "index.html";
                $("#signIn").
            }else{
                alert("用户名或密码错误，请重试！");
            }
        })
    })

})