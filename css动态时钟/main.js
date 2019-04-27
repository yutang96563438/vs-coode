var finger = document.getElementsByClassName('finger')[0],
    hour = finger.getElementsByClassName('hour')[0],
    minute = finger.getElementsByClassName('minute')[0],
    second = finger.getElementsByClassName('second')[0];

function getTime() {
    var date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    var time = {
        h: h,
        m: m,
        s: s
    };
    return time;
}

var fingers = {
    h: hour,
    m: minute,
    s: second
};

function setTime(time, fingers) {
    time.h = time.h >= 12 ? time.h - 12 : time.h;
    var h = time.h * 30 + time.m / 60 * 6-90,
        m = time.m * 6 + time.s / 60 * 6-90,
        s = time.s * 6-90;
    fingers.h.style.transform = 'rotateZ(' + h + 'deg)';
    fingers.m.style.transform = 'rotateZ(' + m + 'deg)';
    fingers.s.style.transform = 'rotateZ(' + s + 'deg)';
}


// setTime(getTime(), fingers);


setInterval(function () {
    setTime(getTime(), fingers);
    // console.log(getTime());
}, 500);