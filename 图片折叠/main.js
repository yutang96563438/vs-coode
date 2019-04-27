var divNode = document.getElementsByTagName('div')[0],
    aUl = divNode.children;
var p = document.getElementsByTagName('div')[1];
var arr = ['one', 'two', 'three'],
    arr2 = ['angle1', 'angle2', 'angle3'],
    arr3 = ['car1', 'car2', 'car3'];
console.log(arr);
var swich = true;
divNode.addEventListener('click', function () {
    if (swich) {
        for (var i = 0, len = aUl.length; i < len; i++) {
            aUl[i].className = arr[i];
            setTimeout((function (i) {
                return function () {
                    for (var j = 0, len1 = aUl[i].children.length; j < len1; j++) {
                        aUl[i].children[j].className = arr3[j];
                    }
                }
            })(i), 400);
        }

    } else {
        for (var i = 0, len = aUl.length; i < len; i++) {
            aUl[i].className = '';
            setTimeout((function (i) {
                return function () {
                    for (var j = 0, len1 = aUl[i].children.length; j < len1; j++) {
                        aUl[i].children[j].className = arr2[j];
                    }
                }
            })(i), 400);
        }
    }

    swich = !swich;

})