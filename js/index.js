let topMid = document.getElementById("top-mid");

let leftIcon = document.getElementById("header-left-logo-button");
let leftName = document.getElementById("header-left-name-button");
let barButton = document.getElementById("header-right-bar-button");
let sidebar = document.getElementById("sidebar");

let topBox2 = document.getElementById("top-box2");
let miniBox1 = document.getElementById("minibox-1");
let miniBox2 = document.getElementById("minibox-2");
let miniBox3 = document.getElementById("minibox-3");

let midPainting1 = document.getElementById("mid-painting-1");
let midPainting2 = document.getElementById("mid-painting-2");
let midPainting3 = document.getElementById("mid-painting-3");

let footer = document.getElementById("footer");

leftIcon.onmouseover = fadeLeftButtons;
leftIcon.onmouseout = unFadeLeftButtons;

leftName.onmouseover = fadeLeftButtons;
leftName.onmouseout = unFadeLeftButtons;

let offset = 0;
let sidebarToggle = 0;
let revealed = 0;

window.addEventListener("scroll", function () {
    offset = this.window.scrollY * 0.01;
    // console.log(offset);
    reveal();
    adjustHeader();
    adjustPainting1();
    adjustPainting2();
    adjustPainting3();
});

function reveal() {
    if (revealed == 0 && offset > 2) {
        topBox2.style.transform = "translate(0)";
        topBox2.style.opacity = "1";

        miniBox1.style.transform = "translate(0)";
        miniBox1.style.opacity = "1";

        miniBox2.style.transform = "translate(0)";
        miniBox2.style.opacity = "1";

        miniBox3.style.transform = "translate(0)";
        miniBox3.style.opacity = "1";

        revealed = 1;
    }
}

function adjustPainting1() {
    if (offset > 6 && offset < 10) {
        let style = getComputedStyle(midPainting1);
        let cur = style.top;
        cur = cur.slice(0, 2);
        cur = parseInt(cur);
        cur = cur - ((offset * 10) - 60) / 2;
        midPainting1.style.marginTop = cur + "px";
        // console.log(cur);
    }
}

function adjustPainting2() {
    if (offset > 6) {
        let style = getComputedStyle(midPainting2);
        let cur = style.top;
        cur = cur.slice(0, 2);
        cur = parseInt(cur);
        cur = cur - ((offset * 10) - 60) * 2;
        midPainting2.style.marginTop = cur + "px";
        // console.log(cur);
    }
}

function adjustPainting3() {
    if (offset > 6) {
        let style = getComputedStyle(midPainting3);
        let cur = style.top;
        cur = cur.slice(0, 2);
        cur = parseInt(cur);
        cur = cur - ((offset * 10) - 60);
        midPainting3.style.marginTop = cur + "px";
        // console.log(cur);
    }
}

function adjustSidebar() {
    if (sidebarToggle == 0) {
        sidebar.style.height = "100%"
        barButton.style.transform = "rotate(-90deg)"
        if (visualViewport.width <= 450) {
            sidebar.style.transform = "translate(-230px)";
        } else if (visualViewport.width <= 820) {
            sidebar.style.transform = "translate(-450px)";
        }
        sidebarToggle = 1;
    } else {
        barButton.style.transform = "rotate(0deg)"
        sidebar.style.transform = "translate(0px)";
        setTimeout(() => {
            sidebar.style.height = "0";
        }, 150);
        sidebarToggle = 0;
    }
}

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

function scrollToFooter() {
    footer.scrollIntoView();
    barButton.style.transform = "rotate(0deg)"
    sidebar.style.transform = "translate(0px)";
    setTimeout(() => {
        sidebar.style.height = "0";
    }, 150);
    sidebarToggle = 0;
}