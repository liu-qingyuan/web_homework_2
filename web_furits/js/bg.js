//需求：无缝轮播图
    //步骤：
    //1.获取相关元素。
    //2.补齐相互盒子
    //1.复制第一张图片所在的li，填入所在的ul中。
    //2.生成相关的ol中的li。
    //3.点亮第一个ol中的li。
    //4.添加定时器。
    //5.左右切换的按钮。






    //1.获取相关元素。
    var box = document.getElementById("dom");
    var ul = box.children[0].children[0];
    var ol = box.children[0].children[1];
    var ulLiArr = ul.children;
    //2.补齐相互盒子
    //1.复制第一张图片所在的li，填入所在的ul中。
    var newLi = ulLiArr[0].cloneNode(true);
    ul.appendChild(newLi);
    //2.生成相关的ol中的li。
    for (var i = 0; i < ulLiArr.length - 1; i++) {
        var newOlLi = document.createElement("li");
        newOlLi.innerHTML = '';
        ol.appendChild(newOlLi);
    }
    //3.点亮第一个ol中的li。
    var olLiArr = ol.children;
    ol.children[0].className = "current";
    //3.鼠标放到小方块儿上，轮播图片。
    for (var i = 0; i < olLiArr.length; i++) {
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function () {
            for (var j = 0; j < olLiArr.length; j++) {
                olLiArr[j].className = "";
            }
            olLiArr[this.index].className = "current";
            animate(ul, -this.index * ul.children[0].offsetWidth);
            key = square = this.index;
        }
    }
    //4.添加定时器。
    var timer = null;
    var key = 0;
    var square = 0;
    timer = setInterval(autoPlay, 1000);


    function autoPlay() {
        key++;
        square++;
        if (key > olLiArr.length) {
            key = 1;
            ul.style.left = 0;
        }
        animate(ul, -key * ul.children[0].offsetWidth);


        square = square > olLiArr.length - 1 ? 0 : square;
        for (var j = 0; j < olLiArr.length; j++) {
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";
    }
    //5.鼠标移开开启定时器，鼠标放上去开启定时器。
    box.onmouseover = function () {
        clearInterval(timer);
    }
    box.onmouseout = function () {
        timer = setInterval(autoPlay, 1000);
    }

    //  基本封装
    function animate(obj, target) {
        clearInterval(obj.timer);
        var speed = obj.offsetLeft < target ? 15 : -15;
        obj.timer = setInterval(function () {
            var result = target - obj.offsetLeft;
            obj.style.left = obj.offsetLeft + speed + "px";
            if (Math.abs(result) <= 15) {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 10);
    }
	var snow = function () {
        var b = document.getElementById("christmasCanvas"), a = b.getContext("2d"), d = window.innerWidth,
            c = window.innerHeight;
        b.width = d;
        b.height = c;
        for (var e = [], b = 0; b < 70; b++) {
            e.push({x: Math.random() * d, y: Math.random() * c, r: Math.random() * 4 + 1, d: Math.random() * 70})
        }
        var h = 0;
        window.intervral4Christmas = setInterval(function () {
            a.clearRect(0, 0, d, c);
            a.fillStyle = "rgba(49, 240, 49, 0.6)";
            a.shadowBlur = 5;
            a.shadowColor = "rgba(49, 240, 49, 0.9)";
            a.beginPath();
            for (var b = 0; b < 70; b++) {
                var f = e[b];
                a.moveTo(f.x, f.y);
                a.arc(f.x, f.y, f.r, 0, Math.PI * 2, !0)
            }
            a.fill();
            h += 0.01;
            for (b = 0; b < 70; b++) {
                if (f = e[b], f.y += Math.cos(h + f.d) + 1 + f.r / 2, f.x += Math.sin(h) * 2, f.x > d + 5 || f.x < -5 || f.y > c) {
                    e[b] = b % 3 > 0 ? {x: Math.random() * d, y: -10, r: f.r, d: f.d} : Math.sin(h) > 0 ? {
                        x: -5,
                        y: Math.random() * c,
                        r: f.r,
                        d: f.d
                    } : {x: d + 5, y: Math.random() * c, r: f.r, d: f.d}
                }
            }
        }, 70)
    }
    snow();