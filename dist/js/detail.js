// $(function(){
//     $.get("http://jx.xuzhixiang.top/ap/api/productlist.php",{
//         uid: "32974"
//     }).then(data =>{
//         data = data["data"];
//         let str = loadData(data);
//         //$("#list").html(str);
//         console.log(data);
//     })
// })
var pid = location.search.split("=")[1];
$(function(){
        $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {   
             id:pid
        }).then(data =>{
            data = data["data"];
            console.log(123);
            loadData(data);
        })
        $("#tianjia").click(function() {
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
              uid: data.uid,
              pid: data.pid,
              pnum: 1
            }).then(data => {
              console.log(data);
              location.href = "cart.html";
            });
          });
})
    
    function loadData(data){
        $("#for-title").html(`<span>${data.pname} 3200万人像超级夜景 4800万超广角AI三摄 麒麟810旗舰级芯片 全网通版6GB+128GB 蝶羽蓝</span>`);
        $("#for-price").html(`<span>￥&nbsp;${data.pprice}</span>`)
    }

