window.addEventListener("load", eventWindowed, false);
function eventWindowed() {
    colorNumber();
    setInterval(colorNumber(),1000);
    drawClock();
}
function drawClock() {
    var clock = document.getElementById("clock");
    var ctx = clock.getContext("2d");
    //画外圆
    ctx.beginPath();
    ctx.arc(150, 150, 120, 0, 2 * Math.PI, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    //画指针交点
    ctx.beginPath()
    ctx.arc(150, 150, 5, 0, 2 * Math.PI, false);
    ctx.translate(150, 150);
    ctx.fillStyle = "black"
    ctx.fill();
    ctx.closePath();

    //画数字
    ctx.beginPath();
    ctx.font = "bold 16px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("I", 50, -86.6);
    ctx.fillText("II", 86.6, -50);
    ctx.fillText("IV", 86.6, 50);
    ctx.fillText("V", 50, 86.6);
    ctx.fillText("VII", -50, 86.6);
    ctx.fillText("VIII", -86.6, 50);
    ctx.fillText("XI", -50, -86.6);
    ctx.fillText("X", -86.6, -50);
    ctx.closePath();

    //突出数字
    ctx.beginPath();
    ctx.font = "bold 20px Arial";
    ctx.fillText("XII", 0, -105);
    ctx.fillText("III", 105, 0);
    ctx.fillText("VI", 0, 105);
    ctx.fillText("IX", -105, 0);
    ctx.closePath();
}
function colorNumber(){
    var col = document.getElementsByClassName("col")
    var oHour=col[0];
    var oMinute=col[1];
    var oSecond=col[2];

    var nowTime=new Date();
    var nowHoure
    if(nowTime.getHours() > 11){
        nowHoure = nowTime.getHours() - 12;
    }else{
        nowHoure = nowTime.getHours();
    }
    var nowMinute=nowTime.getMinutes();
    var nowSecond=nowTime.getSeconds();
    var houreDeg=(nowMinute/60)*30;
    var minuteDeg=(nowSecond/60)*6;
    oHour.style.WebkitTransform="rotate("+ (-180+nowHoure * 30+houreDeg) + "deg)";
    oMinute.style.WebkitTransform="rotate("+ (-180+nowMinute * 6+ minuteDeg) + "deg)";
    oSecond.style.WebkitTransform="rotate("+ (-180+nowSecond * 6) + "deg)";
}


