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
    //console.log("clicked");

    if (!inplay) {
        player();

    }
})

///player function

function player() {

    button.style.display = "none";
    Message("Match pattern")
    // button.disabled = true;
    userClicks = [];
    gameClicks = [];
    runSequence(playNum);
}


///runSequence function
function runSequence(num) {
    num--;
    if (num < 0) {
        inplay = true;
        return;
    }
    let squares = document.querySelectorAll('.boxes');
    //console.log(squares);
    let randomNum = Math.floor(Math.random() * colors.length);
    //console.log(randomNum);
    squares[randomNum].style.opacity = "1";
    gameClicks.push(colors[randomNum]);
    // console.log(gameClicks);
    setTimeout(function () {
        squares[randomNum].style.opacity = "0.6";
        setTimeout(function () {
            runSequence(num);
        }, 200);
    }, 500);
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
        if (gameClicks.length == userClicks.length) { //if the length matchs the game ends or moves to the next level..
            inplay = false;
            endgame();
        }
    }
    //console.log(ele.myColors);
    //console.log(userClicks);

}

///function which creates the child elements 
function createElement(div) {
    let el = document.createElement(div);
    return el;
}

//EndGame function..
function endgame() {
    if (userClicks.toString() == gameClicks.toString()) {
        playNum++;
        Message("CORRECT!!  " + " level" + playNum);
        button.style.display = "block";
        button.style.disabled = false;

    } else {
        Message("INCORRECT!");
        button.style.display = "block";
        // button.style.disabled = false;
    }
}

//Message function to display the output over different contents
function Message(mes) {
    message.innerHTML = mes;
}


