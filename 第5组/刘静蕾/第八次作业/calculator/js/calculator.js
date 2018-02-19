var display = document.getElementById("show");
var storageM = "0";
var storageA = "0";
window.onload = function () {
    var buttons = document.getElementsByTagName("span");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var icon = this.innerText;
            if (this.id == "equal") {
                showResult();
            }
            if (this.id == "addSave") {
                addStorage()
            }
            if (this.id == "minSave") {
                minStorage();
            }
            if (this.className == "det") {
                if (icon == "C") {
                    clear(0)
                } else {
                    clear(1)
                }
            }
            if (this.className == "number" || this.className == "cal") {
                calculate(icon);
            }
        })
    }
}
function calculate(content) {
    display.innerText += content;
}
function showResult() {
    if (storageA != "0" || storageM != "0") {
        var result = storageA + "+" + storageM;
        display.innerText = eval(result);
    }
    var result = eval(display.innerText);
    display.innerText = result;

}
function clear(value) {
    if (value == 0) {
        display.innerText = "";
    } else if (value == 1) {
        display.innerText = "";
        storageA = "";
        storageM = "";
    }
}
function addStorage() {
    storageA += "+" + display.innerText;
    display.innerText = "";
}
function minStorage() {
    storageM += "-" + display.innerText;
    display.innerText = "";
}
//数据类型