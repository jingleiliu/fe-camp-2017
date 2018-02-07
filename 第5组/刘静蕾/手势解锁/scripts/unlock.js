function checkTime(j){
    if(j < 10){
        j = "0" + j
    }
    return j
}
function showTime() {
    var d = new Date();
    var time = document.getElementById("time");
    var date = document.getElementById("date");
    var weekday = ["Mon","Tue","Wed", "Thu", "Fri", "Sat", "Sun"];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    date.innerHTML = weekday[d.getDay()] + ", " + month[d.getMonth() + 1] + " " + d.getDate();
    time.innerHTML = checkTime(d.getHours()) + ":" + checkTime(d.getMinutes());
}
var icons = document.getElementsByClassName("icon");
for (var i = 0; i < icons.length; i++) {
    icons[i].ontouchmove = function(){
        drawPattern();
    }
}
function checkPattern(times) {
    
    var prostore = "";
    if (times == 1) {
        

    }
    else if (times == 2) {
        if (prostore == localStorage.getItem(pattern)) {

        } else {

        }
    } else {
        return false;
    }
}
function drawPattern(){
    var cir = this.getElementsByClassName("cir");
    console.log(true);
    cir.style.display = "inline-block";
    var ctx = this.getContext("2d");
    ctx.beginPath();
    ctx.arc(35,35,10,0,2 * Math.PI,false);
    ctx.fillStyle = "white";
    ctx.fill();
}
function tryPattern() {

}

window.addEventListener("load", function main() {
    showTime();
    var redraw = document.getElementById("redraw");
    /* redraw.addEventListener("click", function () {
        checkPattern(1);
    }); */
    var done = document.getElementById("done");
    /* done.addEventListener("click", function () {
        tryPattern();
    }); */
})


