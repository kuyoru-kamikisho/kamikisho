var imgsider = new Vue({
    el: '#imgsider',
    data: {
        imgSrc: './img/hokaisier.jpg',
        imgAlt: 'https://www.pixiv.net/artworks/93518706',
        imgAuthor: '@まかだみぁ Pid:2782928'
    }
});

var indexS = 50;

var dateN = new Date();
var yearN = dateN.getFullYear();
var yearN1 = yearN+1;

var timecount = new Vue({
    el: '#t-inner',
    data: {
        a: 1,
        visiblity: true,
        colon1: true,
        colon2: true,
        indexP: `距离 ${yearN1} 年 1 月 1 日还剩`,
        indexD: 0,
        indexH: 0,
        indexM: 0,
        indexS: 0,
        indexNh: 0,
        indexNm: 0,
        indexNs: 0,
        indexNms: 0,
        isindexNms: false,
        colons1: ':',
        colons2: ':',
    },
})
var theTime = +new Date(`${yearN1}-1-1 00:00:00`);
countDown();
setInterval(countDown, 1000);
function countDown() {
    var nowTime = (+new Date()) + 28800000 + 500;
    var hours = parseInt(nowTime / 1000 / 60 / 60 % 24);
    var minutes = parseInt(nowTime / 1000 / 60 % 60);
    var seconds = parseInt(nowTime / 1000 % 60);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timecount.indexNh = hours;
    timecount.indexNm = minutes;
    timecount.indexNs = seconds;
    var times = (theTime - nowTime) / 1000;
    var h = parseInt(times / 60 / 60 % 24);
    var d = parseInt(times / 60 / 60 / 24);
    timecount.indexD = d + ' 天';
    h = h < 10 ? '0' + h : h;
    timecount.indexH = h + ' 時';
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    timecount.indexM = m + ' 分';
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    timecount.indexS = s + ' 秒';
    var vflag = "";
    if (seconds % 2 == 0) {
        vflag = "";
    } else {
        vflag = ":";
    }
    timecount.colons2 = vflag;
}

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
window.onload = function () {
    showProcess(today, calendar);
};
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}
function createProcess(year, month) {
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<td>" + week[i] + "</td>";
    }
    calendar += "</tr>";
    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                count++;
                if (year == today.getFullYear()
                    && month == (today.getMonth())
                    && count == today.getDate()) {
                    calendar += "<td class='today'>" + count + "</td>";
                } else {
                    calendar += "<td>" + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}
