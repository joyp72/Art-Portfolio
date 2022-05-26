let topMid = document.getElementById("top-mid");
let body = document.getElementById("body");

let leftIcon = document.getElementById("logo-button");
let leftName = document.getElementById("name-button");

let midPainting1 = document.getElementById("mid-painting1");
let midPainting2 = document.getElementById("mid-painting2");
let midPainting3 = document.getElementById("mid-painting3");

let topDescription = document.getElementById("top-description");

let miniBox1 = document.getElementById("mini-box-1");
let miniBox2 = document.getElementById("mini-box-2");
let miniBox3 = document.getElementById("mini-box-3");

leftIcon.onmouseover = fadeLeftButtons;
leftIcon.onmouseout = unFadeLeftButtons;

leftName.onmouseover = fadeLeftButtons;
leftName.onmouseout = unFadeLeftButtons;

let offset = 0;
let topDesc = 0;
let topDescSet = 0;
let bottom = 3;
let paintingBottom2 = -35;



window.addEventListener("scroll", function () {
    offset = window.pageYOffset;
    // console.log(offset * 0.15);
    if (offset * 0.15 > 30 && topDesc == 0) {
        topDescription.style.opacity = "1";
        revealTopDesc();
        topDescSet = 1;
    }
    if (offset * 0.15 >= 45) {
        if (topDescSet == 0) {
            topDescription.style.opacity = "1";
            revealTopDesc();
            topDescSet = 1;
        }
        topDesc = 1;
    }
    if (offset * 0.15 > 75) {
        miniBox1.style.opacity = "1";
        miniBox2.style.opacity = "1";
        miniBox3.style.opacity = "1";
    }
    if (offset * 0.15 <= 240.45) {
        if (offset * 0.15 > 90) {
            adjustHeader();
            movePainting1();
        }
        if (offset * 0.15 > 110) {
            movePainting3();
            movePainting2();
        }
    }
})


function fadeLeftButtons() {
    leftIcon.style.opacity = "0.7";
    leftName.style.opacity = "0.7";
}

function unFadeLeftButtons() {
    leftIcon.style.opacity = "1";
    leftName.style.opacity = "1";
}

function movePainting1() {
    let os = offset * 0.15;
    let num = 200 - (os - 60);
    if (midPainting1 != null) {
        midPainting1.style.paddingTop = num + "px";
    }
}

function movePainting2() {
    let style = getComputedStyle(midPainting2);
    let mT = style.paddingTop;
    mT = mT.slice(0, 3);
    let mTint = parseInt(mT);
    let os = offset - 480;
    let num = (620 * 2) - os;
    if (midPainting2 != null) {
        midPainting2.style.paddingTop = num + "px";
        // console.log(num);
    }
}

function movePainting3() {
    let os = offset * 0.15;
    let num = 400 - (os - 80);
    if (midPainting3 != null) {
        midPainting3.style.paddingTop = num + "px";
    }
}

function adjustHeader() {
    let os = offset * 0.15;
    if (os >= 210) {
        topMid.style.opacity = "1";
    } else if (os < 225) {
        topMid.style.opacity = "0";
    }
}

function revealTopDesc() {
    bottom = bottom + 0.1;
    if (topDescription != null) {
        topDescription.style.bottom = bottom + "%";
    }
}