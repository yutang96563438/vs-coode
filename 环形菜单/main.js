var cirBox = document.getElementsByTagName('div')[0];
var spans = cirBox.children[0];



// var point = new Object;
class Point {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
}

var point = new Point();
var R = cirBox.offsetWidth / 2;
var angle = 0;
var counter = true;
var timer;

/* 
//小球在圆环上运动
timer = setInterval(move,30);
function move() {
    angle += 5;
    spans.style.left = point.X + 'px';
    spans.style.top = point.Y + 'px';
    getPoint(R, angle);
} */
//获取圆弧上的坐标.
function getPoint(r, angle) {
    point.X = r + r * Math.sin(angle * Math.PI / 180);
    point.Y = r - r * Math.cos(angle * Math.PI / 180);
    return point;
}

/*
//点击cirBox小球开始运动,再点击则停止.
cirBox.addEventListener('click', function () {
    if (counter) {
        timer = setInterval(move, 30);
        counter=false;
    }
    else{
        clearInterval(timer);
        counter = true;
    }
})
 */

cirBox.addEventListener('click', function () {
    // startMove(spans, 360);
    if(counter){
        for (let i = 0; i < cirBox.childElementCount; i++) {
            var a = 360 / cirBox.childElementCount * i;
            startMove(cirBox.children[i], a);
        }
        //1 counter = false;
    }else{
        for (let i = 0; i < cirBox.childElementCount; i++) {
            startMove(cirBox.children[i], 0);
        }
        //2 counter = true;
    }
    counter = !counter;//这一句代替上面注释的2句。
    
});
var XY = new Point();

function startMove(obj, targetAngle) {
    clearInterval(obj.timer);
    obj.startAngle = obj.startAngle || 0;//给obj增加数据，将角度，存在里面。
    var count = Math.floor(1000/30);//这是用来控制时间
    var start = obj.startAngle;
    var dis = targetAngle - start;
    var n = 0;

    obj.timer = setInterval(function () {
        n++;
        var a = n / count;//决定方向
        var currentAngle = start + dis *(Math.pow(a,3));//改变a的大小,起到缓冲作用
        XY = getPoint(R,currentAngle);

        obj.style.left = XY.X + 'px';
        obj.style.top = XY.Y + 'px';

          obj.startAngle = currentAngle;//更新角度，退回的时候用到。
        // console.log(n);
        if (n >= count) {
            clearInterval(obj.timer);
        }
    }, 30)
}
var n = 9;
function createElements(parents,number,elementName){
    
    for (let i = 0; i < n; i++) {
        var oSpan = document.createElement(elementName);
        //将创建的span平均分布在圆环上
        /* var a = 360 / (n+1) * (i + 1);
        var pointXY = getPoint(R, a);
        oSpan.style.left = pointXY.X + 'px';
        oSpan.style.top = pointXY.Y + 'px'; */

        parents.appendChild(oSpan);
    }
}

 createElements(cirBox,n,'span');




