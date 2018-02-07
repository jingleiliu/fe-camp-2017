function checkTime(j) {
    if (j < 10) {
        j = "0" + j
    }
    return j
}
function showTime() {
    var d = new Date();
    var time = document.getElementById("time");
    var date = document.getElementById("date");
    var weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    date.innerHTML = weekday[d.getDay()] + ", " + month[d.getMonth() + 1] + " " + d.getDate();
    time.innerHTML = checkTime(d.getHours()) + ":" + checkTime(d.getMinutes());
}
var dis = 70;
function savePoint() {
    var anglepoints = [];
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            var point = {
                X: 80 + col * 70,
                Y: 65 + (14.4 * 6) * row
            }
            anglepoints.push(point);
        }
    }
    return anglepoints;
}
function drawTriangle(){
    var draw = document.getElementById("draw");
    var ctx = draw.getContext("2d");
    for(var i=0; i<pointarr.length; i++){
        var x = pointarr[i].X;
        var y = pointarr[i].Y;
        ctx.beginPath();
        ctx.moveTo(x,y-28.8);
        ctx.lineTo(x-25, y+14.4);
        ctx.lineTo(x+25, y+14.4);
        ctx.lineTo(x, y-28.8);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }
    
}
function isCheckedPoint(){

}
window.addEventListener("load", function main() {
    showTime();
    pointarr = savePoint();
    drawTriangle();
})
//增加旋转效果  可以用settimeout＋rotate（）