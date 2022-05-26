let topMid = document.getElementById("top-mid");

let leftIcon = document.getElementById("header-left-logo-button");
let leftName = document.getElementById("header-left-name-button");

leftIcon.onmouseover = fadeLeftButtons;
leftIcon.onmouseout = unFadeLeftButtons;

leftName.onmouseover = fadeLeftButtons;
leftName.onmouseout = unFadeLeftButtons;

let offset = 0;

window.addEventListener("scroll", function () {
    offset = this.window.scrollY * 0.01;
    // console.log(offset);
    adjustHeader();

});

function fadeLeftButtons() {
    leftIcon.style.opacity = "0.7";
    leftName.style.opacity = "0.7";
}

function unFadeLeftButtons() {
    leftIcon.style.opacity = "1";
    leftName.style.opacity = "1";
}

function adjustHeader() {
    if (offset > 8) {
        topMid.style.opacity = "1";
    } else {
        topMid.style.opacity = "0";
    }
}