var QF = {
    random: function (start, end) {
        return Math.random() * (end - start + 1) + start
    },
    animate: function animate(dom, cssObj, duration, callback) {
        // 1 获取当前元素的状态
        var nowObj = {};
        for (var i in cssObj) {
            nowObj[i] = parseInt(getCss(dom, i));
        }
        // 2 计算总次数
        var allCount = duration / 20;
        // 3 定义变量 用于计算走了多少步
        var count = 0;
        // 4 开始动画
        var timer = setInterval(function () {
            // 计算步数
            count++;
            for (var i in cssObj) {
                if (i.toLowerCase() === "opacity") {
                    dom.style[i] = nowObj[i] + (cssObj[i] - nowObj[i]) / allCount * count;
                } else {
                    dom.style[i] = nowObj[i] + (cssObj[i] - nowObj[i]) / allCount * count + "px";
                }
            }
            if (count >= allCount) {
                clearInterval(timer);
                // if (callback) {
                //     callback()
                // }

                // 短路语法： 因为&&这种写法要求两边都为真 所以一旦前面为假 则后面不执行了 前面为真时 后面会执行 等价于上面的if判定写法
                callback && callback.call(dom);
            }
        }, 20)
        function getCss(dom, cssProp) {
            if (window.getComputedStyle) {
                return getComputedStyle(dom)[cssProp];
            } else {
                return dom.currentStyle[cssProp];
            }
        }
    }
}