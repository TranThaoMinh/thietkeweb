const signUpBtn = document.querySelector(".transparent-signup");
const container = document.querySelector(".container");
const signInBtn = document.querySelector(".transparent-signin")
const panelRight = document.querySelector(".panel-right");
const panelLeft = document.querySelector(".panel-left");
const signUpForm = document.querySelector(".sign-up__form");
const signInForm = document.querySelector(".sign-in__form");

signUpBtn.addEventListener("click",e => {
    e.preventDefault();
    container.classList.add("switch");
    panelLeft.classList.add("move-left-out");
    panelRight.classList.add("move-left-in");
    signUpForm.classList.add("left-move");
    signInForm.classList.add("right-move");
})

signInBtn.addEventListener("click", e => {
    e.preventDefault();
    container.classList.remove("switch");
    panelLeft.classList.remove("move-left-out");
    panelRight.classList.remove("move-left-in");
    signUpForm.classList.remove("left-move");
    signInForm.classList.remove("right-move");
})