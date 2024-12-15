const scoreNumber = document.getElementById('score');
const gameContainer = document.getElementById('box');
    
let score = 0;
const squareCount = 20;
    
function generatePosition(square) {
    const containerRect = gameContainer.getBoundingClientRect();
    const maxX = containerRect.width - square.offsetWidth;
    const maxY = containerRect.height - square.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    square.style.left = `${randomX}px`;
    square.style.top = `${randomY}px`;
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('shoot-target');
    generatePosition(square);

    square.addEventListener('click', function () {
        score++;
        scoreNumber.textContent = `Wynik: ${score}`;
    
        generatePosition(square);
    });

    gameContainer.appendChild(square);
}

for (let i = 0; i < squareCount; i++) {
    createSquare();
}
//rozmiar kolek
const sensitivitySlider = document.getElementById('sensitivitySlider');
let sensitivity = sensitivitySlider.value / 50; 

sensitivitySlider.addEventListener('input', function () {
    sensitivity = sensitivitySlider.value / 50;
    const squares = document.querySelectorAll('.shoot-target');
    squares.forEach(square => {
        square.style.transform = `scale(${sensitivity})`; 
    })
})

//zmiania  kolorow
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', function(){
    const color = this.value;
    const squares = document.querySelectorAll('.shoot-target');
    squares.forEach(square => {
        square.style.background = color;
    })
})


//reset checked
window.onload = function() {
    document.getElementById('start').checked = false;
};

//restart-button
document.addEventListener('DOMContentLoaded', function () {
const restartButton = document.querySelector('input[name="restart"]');

restartButton.addEventListener('click', function() {
    location.reload();
});
});

//sub-on/off
let isActive = false;
const toggleButton = document.getElementById('toggleButton');
const sub1 = document.getElementById('sub1');

toggleButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    isActive = !isActive;
    if (isActive) {
        sub1.classList.add('active');
    } else {
        sub1.classList.remove('active');
    }
});