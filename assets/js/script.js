var open = false;

function ToogleMenu() {
    var x = document.getElementsByClassName("menu-container")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
        open = false;
    } else {
        x.style.display = "block";
        open = true;
    }
}

var width, height;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;
    if (width >= 670) {
        document.getElementsByClassName("menu-container")[0].style.display = "block";
    } else {
        if (open) {
            document.getElementsByClassName("menu-container")[0].style.display = "block";
        } else {
            document.getElementsByClassName("menu-container")[0].style.display = "none";
        }
    }
}