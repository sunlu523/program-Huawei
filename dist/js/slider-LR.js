//设计这个类
function Slider(ele) {
    //轮播区域
    this.sliderBox = ele;
    //图片列表ul
    this.sliderUl = this.sliderBox.querySelectorAll(".sliderList")[0];
    //图片列表
    this.sliderList = this.sliderUl.children;
    //取列表的长度
    this.length = this.sliderList.length;
    //取单位宽
    this.perWidth = this.sliderList[0].offsetWidth;
    //设置图片列表的宽度
    this.sliderUl.style.width = this.perWidth * this.length + "px";

    this.autoPlay();
    this.clear();

}
//自动轮播
Slider.prototype.autoPlay = function () {
    this.count = 0;
    this.timer = setInterval(() => {
        this.move();
    }, 3000);
}
Slider.prototype.move = function () {
    this.count++;

    if (this.count == this.length) {
        this.sliderUl.style.left = 0;
        this.count = 1;
    }

    if (this.count == -1) {
        this.sliderUl.style.left = - this.perWidth * (this.length - 1) + "px";
        this.count = this.length - 2;
    }

    if (this.focusList) {
        for (let i = 0; i < this.focusList.length; i++){
            this.focusList[i].className = "";
        }
    
        if (this.count == this.length - 1) {
            this.focusList[0].className = "hover";
        } else {
            this.focusList[this.count].className = "hover";
        }
    }
    



    startMove(this.sliderUl, { "left": -this.perWidth * this.count });
}
Slider.prototype.addBtn = function () {
    //按钮的结构是通过js添加进去
    this.btnNode = document.createElement("div");
    this.btnNode.className = "btns";
    //吧按钮添加到轮播区域
    this.sliderBox.appendChild(this.btnNode);
    this.btnNode.innerHTML = "<span>&lt;</span><span>&gt;</span>";

    //取按钮
    this.btns = this.btnNode.children;

    //左箭头
    this.btns[0].onclick = () => {
        this.count -= 2;
        this.move();
    }
    //右箭头
    this.btns[1].onclick = () => {
        this.move();
    }
    



}
Slider.prototype.addFocus = function () {
    this.focusNode = document.createElement("ul");
    this.focusNode.className = "numList";
    this.sliderBox.appendChild(this.focusNode);
    //添加li  不确定图片列表有多少，动态生成
    let str = "";
    for (let i = 0; i < this.length - 1; i++){
        str += `<li>${i+1}</li>`;
    }
    this.focusNode.innerHTML = str;

    this.focusList = this.focusNode.children;

    this.focusList[0].className = "hover";

    for (let i = 0; i < this.focusList.length; i++){
        this.focusList[i].onmouseover = () => {
            this.count = i - 1;
            this.move();
        }
    }




}
Slider.prototype.clear = function () {
    this.sliderBox.onmouseover = () => {
        clearInterval(this.timer);
    }
    this.sliderBox.onmouseout = () => {
        this.timer = setInterval(() => {
            this.move();
        },3000)
    }
}