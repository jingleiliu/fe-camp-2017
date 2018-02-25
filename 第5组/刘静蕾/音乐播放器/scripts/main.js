var list = document.getElementById("musiclist").children;

window.onload = function () {
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
            var music = this.children;
            this.setAttribute("class", "play");
            play();
        })
    }
}
function play(){
    
}