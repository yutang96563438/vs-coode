var wrapper = document.getElementsByClassName("wrapper")[0];
var wrapChildren = wrapper.children;

var wrapper1 = document.getElementsByTagName("div")[0];
wrap1Children = wrapper1.children;

var divList = [],
  buttonList = [];
for (var i = 0; i < wrap1Children.length; i++) {
  if (i < wrap1Children.length / 2) {
    buttonList[i] = wrap1Children[i];
  } else {
    divList[i - 3] = wrap1Children[i];
  }
}
/* console.log(buttonList);
console.log(divList); */

var left = 20;
var enterInt = rd(0, 2);
// 用来显示div的时候用
var clickInt = rd(0, 2);

for (let index = 0; index < buttonList.length; index++) {
  buttonList[index].style.left = left * index + "%";
  divList[index].style.top = 30.66 + "px";
  // divList[index].style.left = left*index +'%';
}

for (let index = 0; index < buttonList.length; index++) {
  buttonList[index].addEventListener("mouseenter", function() {
    divList[index].style.display = "block";
    enterInt = index;
    //   if这一句不能省。如果移进的button不是刚点击过的button，那么，刚被点击过的button对应的div的内容需要隐藏，如果是同一个，则不用。
    if (enterInt != clickInt) {
      divList[clickInt].style.display = "none";
    }
  });
  // 鼠标离开的时候，将显示的div隐藏；将原来被点击的div显示
  buttonList[index].addEventListener("mouseleave", function() {
    divList[index].style.display = "none";
    divList[clickInt].style.display = "block";
  });
}

// 绑定点击事件
for (let index = 0; index < buttonList.length; index++) {
  // 点击button后，会显示div，所以要将以前div的display样式清除掉
  divList[index].style.display = "none";
  // 给button绑定点击事件，绑定相应的div，让div显示并给clickInt赋值
  buttonList[index].addEventListener("click", function() {
    divList[index].style.display = "block";
    clickInt = index;
  });
}
// 刷新页面后，随机显示一个div。这一句要写在后面，写在前面的话会被后面的样式覆盖掉。
divList[clickInt].style.display = "block";

// 求n到m之间的随机数
function rd(n, m) {
  var c = m - n + 1;
  return Math.floor(Math.random() * c + n);
}

/* 要实现的功能：
    1.刷新页面时，随机显示一个选项的内容
    2.鼠标移到button上时，显示该botton对应的div的内容，鼠标移开时，则显示点击过的button对应的div的内容
    3.鼠标点击哪一个button，就显示哪一个button对应的div的内容。
*/
