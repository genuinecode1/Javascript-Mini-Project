let imageBox= document.querySelector(".img-box");
let imageWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");


originalImg.style.width = imageBox.offsetWidth + "px";
var leftSpace = imageBox.offsetLeft;


imageBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    imageWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}