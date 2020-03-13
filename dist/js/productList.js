// $(function(){
//     $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{
//         pname:"HUAWEI ss",
//         pprice: "1599",
//         pimg: "../img/goodsList.png",
//         pdesc: "1676人评价 100%好评",
//         uid: "32974"
//     }).then(data =>{
//         console.log(data);
//     })
// })
// $(function(){
//     $.get(" http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php",{
//        pid:"197887",
//        uid:"32974",
//        token:"bf23c6d12ea4f34bfd0b1cb0cb07996e"
//     }).then(data =>{
//         console.log(data);
//     })
// })


$(function(){
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php",{
        uid: "32974"
    }).then(data =>{
        data = data["data"];
        let str = loadData(data);
        //$("#list").html(str);
        console.log(data);
    })
})

function loadData(data){
    let str = "";
    for(let i = 0;i < data.length; i++){
        str += `
            <li>
                <a href="detail.html?pid=${data[i].pid}">
                    <p class="p-img"><img src="${data[i].pimg}" alt=""></p>
                    <p class="p-name">${data[i].pname}</p>
                    <p class="p-price">${data[i].pprice}</p>
                    <p class="p-commit"><em>${data[i].pdesc}</em></p>
                </a>
            </li>
            `;     
    }
    $("#list").html(str);
}