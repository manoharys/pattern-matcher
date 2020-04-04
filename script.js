const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");

console.log(message);
console.log(gameArea);
console.log(button);

window.addEventListener("load", setUp);
const colors = ['green', 'blue', 'yellow', 'orange'];

function setUp() {
    for (let i = 0; i < colors.length; i++) {
        let element = createElement("div");
        element.style.backgroundColor=colors[i];
        element.classList.add('boxes');
        gameArea.appendChild(element);
   
    }
}

function createElement(div) {
    let el = document.createElement(div);
    return el;
}