const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");
const colors = ['green', 'blue', 'red', 'orange'];

//Global variables
let userClicks = [];
let gameClicks = [];
let inplay = false;
let playNum = 1;

//Event listners..
window.addEventListener("load", setUp);
button.addEventListener('click', function () {
    console.log("clicked");
    player();
})

///player function

function player() {
    if (!inplay) {
        button.disabled = "true";
        userClicks = [];
        gameClicks = [];
        runSequence();
    }
}

///runSequence function
function runSequence() {
    inplay = true;
}

//Function setUp for dynamically creating the elements and adding eventListeners respectively...
function setUp() {
    let element;

    for (let i = 0; i < colors.length; i++) {
        element = createElement("div");
        element.style.backgroundColor = colors[i];
        element.classList.add('boxes');
        element.myColors = colors[i];
        element.addEventListener("click", checkAnswer);
        gameArea.appendChild(element);
        element.style.opacity = "0.6";
    }
}

function checkAnswer(e) {
    let ele;
    if (inplay) {
        ele = e.target;
        userClicks.push(ele.myColors);
        ele.style.opacity = "1";
        setTimeout(function () {
            ele.style.opacity = ".6";
        }, 500);
    }
    console.log(ele.myColors);
    console.log(userClicks);
}

function createElement(div) {
    let el = document.createElement(div);
    return el;
}