/* 
author:kuyoru
https://github.com/kuyoru-kamikisho
date:2021-11-3
Functions implemented by this document function:
1. Create 26 elements for style
2. Obtain the relative coordinates of the mouse in the left box
3. Obtain the relative coordinates of the box on the right side of the mouse
4. Obtain the relative coordinates of the mouse in the document
*/
var cnav = document.querySelector('.c-nav-wrap');
var cnavinner = cnav.querySelector('.c-nav__inner');

for (var i = 0; i < 26; i++) {
    var letters = String.fromCharCode(65 + i);
    var div = document.createElement("div");
    cnavinner.appendChild(div);
    var divts = cnavinner.querySelectorAll('div');
    divts[i].className = "c-nav__content"; 
    var cnavcontent=document.querySelectorAll('.c-nav__content');
    cnavcontent[i].innerHTML="<ul id=\"c-nav__list"+letters+"\" class=\"c-nav__list\"><li class=\"c-nav__item\" v-for=\"item in items\" :key=\"item.message\" v-html=\"item.message\">{{ item.message }}</li></ul>";
}
var boxLeft = document.querySelector('.h-side');
boxLeft.addEventListener('mousemove', function(e) {
    var xl = e.pageX - this.offsetLeft;
    var yl = e.pageY - this.offsetTop;
})
var boxRight = document.querySelector('.c-nav-wrap');
boxRight.addEventListener('mousemove', function(e) {
    var xr = e.pageX - this.offsetLeft;
    var yr = e.pageY - this.offsetTop;
})
document.addEventListener('mousemove',function(e) {
    var xd = e.pageX;
    var yd = e.pageY;
})

var commoninner=document.querySelector('.common-websites').querySelector('.c-w__inner');
for(var i=0;i<8;i++){
var cwitems=document.createElement('li');
cwitems.className="c-w__items";
cwitems.innerHTML="<p v-text=\"coomnp"+(i+2)+"\" v-bind:class=\"thepbar"+(i+2)+"\"></p><a v-bind:href=\"href"+(i+2)+"\"></a>";
commoninner.appendChild(cwitems);
}
