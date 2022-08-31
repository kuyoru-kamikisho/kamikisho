charset="UTF-8";
window.oncontextmenu=function(e){
    e.preventDefault();
}
document.onselectstart = function(){ return false; };
window.addEventListener('keydown', function (e) {
    if((e.ctrlKey || e.metaKey) && e.key === 's'){
        this.savePrevent();
        e.preventDefault();
    }   
})
function savePrevent() {
    return false;
}