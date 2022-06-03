// x-burger
const xBurgerBtn = document.querySelector(".x-burger-btn");
let xBurgerOpen = false;

xBurgerBtn.addEventListener("click", () => {
    if (!xBurgerOpen) {
        xBurgerBtn.classList.add("open");
        xBurgerOpen = true;
    } else {
        xBurgerBtn.classList.remove("open");
        xBurgerOpen = false;
    }
});

// coincide-burger
const coincideBtn = document.querySelector(".coincide-btn");
const coincide1 = document.querySelector(".coincide-1");
const coincide2 = document.querySelector(".coincide-2");
const coincide3 = document.querySelector(".coincide-3");
let coincide = false;

coincideBtn.addEventListener("click", () => {
    if (!coincide) {
        coincide1.style.top = "57px";
        coincide2.style.background = "transparent";
        coincide3.style.bottom = "57px";

        setTimeout(() => {
            coincide1.style.transform = "rotate(135deg)";
            coincide3.style.transform = "rotate(225deg)";
        }, 500);

        coincide = true;
    } else {
        coincide1.style.transform = "rotate(0)";
        coincide3.style.transform = "rotate(0)";

        setTimeout(() => {
            coincide1.style.top = "40px";
            coincide2.style.background = "#fff";
            coincide3.style.bottom = "40px";
        }, 500);

        coincide = false;
    }
});

// two-burger
const twoBtn = document.querySelector(".two-btn");
const twoTop = document.querySelector(".two-top");
const twoBottom = document.querySelector(".two-bottom");
let twoOpen = false;

twoBtn.addEventListener("click", () => {
    if (!twoOpen) {
        twoTop.style.transformOrigin = "center";
        twoBottom.style.transformOrigin = "center";

        twoTop.style.top = "40px";
        twoBottom.style.bottom = "40px";
        twoTop.style.backgroundColor = "red";
        twoBottom.style.backgroundColor = "red";

        setTimeout(() => {
            twoTop.style.width = "0";
            twoTop.style.transform = "translateX(-20px)";
            twoBottom.style.width = "0";
            twoBottom.style.transform = "translateX(20px)";
        }, 500);
        setTimeout(() => {
            twoTop.style.top = "57px";
            twoTop.style.transform = "rotate(45deg)";
            twoBottom.style.bottom = "57px";
            twoBottom.style.transform = "rotate(-45deg)";
        }, 1000);
        setTimeout(() => {
            twoTop.style.transform = "translateX(0) rotate(45deg)";
            twoBottom.style.transform = "translateX(0) rotate(-45deg)";
        }, 1400);

        setTimeout(() => {
            twoTop.style.width = "50px";
            twoBottom.style.width = "50px";
        }, 1500);

        twoOpen = true;
    } else {
        twoTop.style.width = "0";
        twoBottom.style.width = "0";

        setTimeout(() => {
            twoTop.style.top = "40px";
            twoBottom.style.bottom = "40px";
            twoTop.style.transform = "translateX(-20px)";
            twoBottom.style.transform = "translateX(20px)";
            twoTop.style.backgroundColor = "#fff";
            twoBottom.style.backgroundColor = "#fff";
            twoTop.style.transformOrigin = "top left";
            twoBottom.style.transformOrigin = "top right";
        }, 500);

        setTimeout(() => {
            twoTop.style.width = "50px";
            twoBottom.style.width = "50px";
            twoTop.style.transform = "translateX(0)";
            twoBottom.style.transform = "translateX(0)";
        }, 1000);

        setTimeout(() => {
            twoTop.style.top = "50px";
            twoBottom.style.bottom = "50px";
        }, 1600);

        twoOpen = false;
    }
});
