document.addEventListener("DOMContentLoaded", function() {
    const arcadeDelay = document.getElementById("arcadeId");

    arcadeDelay.pause();

    setTimeout(function() { 
        arcadeDelay.play();
    }, 1800);
});
//mouse move
setTimeout(() => {
const arcadeFly = document.getElementById('arcadeId');
const speed = 100; 

document.addEventListener('mousemove', (event) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const distanceX = (centerX - event.clientX) / speed;
    const distanceY = (centerY - event.clientY) / speed;

    arcadeFly.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
});
}, 2000);

//body-croll
document.querySelector('.button-more').addEventListener('click', () => {
const body = document.body;
    
body.style.overflowY = 'visible';  
body.style.height = '7050px';



setTimeout(() => {
    const exploreMore = document.getElementById('explor-more');

    exploreMore.style.display= 'block';  

}, 10);

setTimeout(() => {
    const exploreMore = document.getElementById('explor-more');

    exploreMore.scrollIntoView({ behavior: 'smooth' }); 

}, 20);
});
//zmiana-pozycjonowania
document.querySelector('.button-more').addEventListener('click', function() {

const custombackgroundElement = document.querySelector('.custom-background');
custombackgroundElement.style.top = '0%';
custombackgroundElement.style.transform = 'translate(-0%)';

const organisedElement = document.querySelector('.organised');
organisedElement.style.top = '0%';
organisedElement.style.transform = 'translate(-0%)';    

const containerElement = document.querySelector('.container');
containerElement.style.top = '0%';
containerElement.style.transform = 'translate(-0%)';
});

//wondow-upp
window.addEventListener('load', () => {
window.scrollTo(0, 0);
});


//icon-slide
document.addEventListener("scroll", function() {
let languagesSection = document.getElementById("languages");
let tooltipContainers = document.querySelectorAll(".tooltip-container");

let rect = languagesSection.getBoundingClientRect();
let inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

tooltipContainers.forEach(function(container) {
if (inView) {
    container.classList.add("active");
} else {
    container.classList.remove("active");
}
});
});

// Otwieranie elementu .card-fixed
document.querySelector('.open').addEventListener('click', function() {
const cardFixed = document.querySelector('.card-fixed');
cardFixed.classList.add('visible');
});

// Zamykanie elementu .card-fixed
document.querySelector('.close').addEventListener('click', function() {
const cardFixed = document.querySelector('.card-fixed');
cardFixed.classList.remove('visible');
});

// Otwieranie elementu .card-fixed2
document.querySelector('.open2').addEventListener('click', function() {
const cardFixed = document.querySelector('.card-fixed2');
cardFixed.classList.add('visible');
});

// Zamykanie elementu .card-fixed2
document.querySelector('.close2').addEventListener('click', function() {
const cardFixed = document.querySelector('.card-fixed2');
cardFixed.classList.remove('visible');
});   

//video-autoplay on hover
const cardElems = document.querySelectorAll('.card-elem1');

cardElems.forEach(function(cardElem) {

const cardVideo = cardElem.querySelector('.card-video');


cardElem.addEventListener('mouseenter', function() {
    cardVideo.play();
});

cardElem.addEventListener('mouseleave', function() {
    cardVideo.pause();
});
});
