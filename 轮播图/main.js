
// 获取html中的元素
var banner = document.getElementById('banner'),
    mainPicture = document.getElementById('mainPicture'),
    topPicture = document.getElementById('topPicture'),
    bottomPicture = document.getElementById('bottomPicture'),
    selector = document.querySelector('ul.selector'),
    btnLeft = document.getElementById('btnLeft'),
    btnRight = document.getElementById('btnRight');
var listSelector = selector.getElementsByTagName('li');

var currentPage = 1;
// 默认第一张图片是1.jpg,所以首先将第一个圆点的颜色设置好
listSelector[0].style.backgroundColor = 'rgb(223, 114, 12)';

// 最主要的函数,将图片圆点绑定
function changePage() {
    currentPage++;
    for (let index = 0; index < listSelector.length; index++) {
        listSelector[index].style.backgroundColor = 'beige';
    }
    listSelector[currentPage - 1].style.backgroundColor = 'rgb(223, 114, 12)';
    mainPicture.querySelector('img').src = 'images/' + currentPage + '.jpg';
    topPicture.querySelector('img').src = 'images/' + currentPage + '-1.jpg';
    bottomPicture.querySelector('img').src = 'images/' + currentPage + '-2.jpg';
    currentPage = currentPage >= 8 ? 0 : currentPage;
// 通过变量currentPage的变化来实现图片的轮播

}
// 定时器,timer是定时器的ID,它会一直执行,直到遇到clearInterval(timer);
// setTimeout只执行一次.
var timer = setInterval(changePage, 1000);

// 增加临听事件,当鼠标在轮播图上时,停止定时器.
banner.addEventListener('mouseover', pauseTimer);

function pauseTimer() {
    window.clearInterval(timer);
}

// 增加临听事件,当鼠标离开轮播图时,启动定时器.
banner.addEventListener('mouseout', startTimer);

function startTimer() {
    timer = setInterval(changePage, 1000);
}

// 给左箭头增加监听事件
btnLeft.addEventListener('click', previousPage);
// 注意处理好currentPage的值.
function previousPage() {
    /*  if (currentPage <= 1)
         currentPage = 9; */
    currentPage = currentPage <= 1 ? 9 : currentPage;
    currentPage -= 2;
    changePage();
    currentPage = currentPage == 0 ? 8 : currentPage;
    /* if(currentPage == 0)
    {
        currentPage = 8;
    } */
}
// 给右箭头增加监听事件
btnRight.addEventListener('click', nextPage);

function nextPage() {
    changePage();
}

// 这里index要用let来定义,如果用var定义的话,就必须用到注释掉的两句来实现.
for (let index = 0; index < listSelector.length; index++) {
    // listSelector[index].index = index;
    listSelector[index].addEventListener('mouseover', function () {
        // currentPage = parseInt(listSelector[index].index);
        currentPage = index;
        changePage();
    },false)
}