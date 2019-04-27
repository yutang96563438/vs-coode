//计算两点间的距离
function distance(p1x, p1y, p2x, p2y) {
    return Math.sqrt(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2));
}

//获得两数之间的随机值
function random(min, max) {
    return Math.random() * (max - min) + min;
}

//弧度角与角度之间的转换
function radianToAngle(radian) {
    return radian * 180 / Math.PI;
}

function angleToRadian(angle) {
    return angle * Math.PI / 180;
}
//两点形成的直线与x轴的夹角。该角是弧度角。可以把其中一个点看成是原点来进行三角函数计算。
function getAngle(p1x, p1y, p2x, p2y) {
    return Math.atan2(p1y - p2y, p1x - p2x);
}

//获取窗口的宽高。
function getWindowSize() {
    var w = window.innerWidth || document.documentElement.clientWidth || body.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight || body.clientHeight,
        size = {
            w: w,
            h: h
        };
    return size;
}

function Ball(x, y, r, ex, ey, color) {
    this.sx = this.x = x || 0;
    this.sy = this.y = y || 0;
    this.ex = ex || 0;
    this.ey = ey || 0;
    this.radius = r || 20;
    this.color = color || '#fff';
    this.vx = 0;
    this.vy = 0;
    this.friction = 0.05;
    this.angle = 0;
    this.speed = 0;
    this.arguments = arguments;
};

Ball.prototype = {
    draw: function () {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    },

    getBounds: function () {
        return {
            x: this.x - this.radius,
            y: this.y - this.radius,
            w: this.radius * 2,
            h: this.radius * 2
        };
    },
}