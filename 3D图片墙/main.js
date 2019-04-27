
var listImg = document.querySelectorAll('div.wrapper img');
// console.log(listImg);
for (let index = 0; index < listImg.length; index++) {
    listImg[index].style.transform = 'rotateY'+'(' + index*36 +'deg)' + 'translateZ(650px)';
    // console.log(listImg[index]);
}
console.log(1);
