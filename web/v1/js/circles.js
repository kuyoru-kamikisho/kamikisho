// author:kuyoru
// github:https://github.com/kuyoru730
// date:2021-11-4
var containerA = document.querySelector('.container');
for(var i=0;i<200;i++){
    var divcircle=document.createElement("div");
    containerA.appendChild(divcircle).className="circle-container";
}
var containers=document.querySelectorAll('.circle-container');
for(var i=0;i<200;i++){
    var circles=document.createElement('div');
    containers[i].appendChild(circles).className="circle";
}