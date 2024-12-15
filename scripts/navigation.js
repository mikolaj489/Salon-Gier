//reset nav
window.addEventListener('load', function() {
document.getElementById('navigation').checked = false;
});
//trigger nav animation
document.getElementById('trigger-button').addEventListener('click', function() {
let checkbox = document.getElementById('navigation');
checkbox.checked = !checkbox.checked;
});
//no scroll
document.getElementById('toggle-menu').addEventListener('change', function() {
if (this.checked) {
    document.body.classList.add('no-scroll');
} else {
    document.body.classList.remove('no-scroll');
}
});
//mouse move
setTimeout(() => {
    const arcadeFly = document.getElementById('bg-circle');
    const speed = 50; 

    document.addEventListener('mousemove', (event) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
    
        const distanceX = (centerX - event.clientX) / speed;
        const distanceY = (centerY - event.clientY) / speed;
    
        arcadeFly.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
});
},2000);
//nav-games-move
document.getElementById('moveBox1').addEventListener('click', function(event) {
    event.preventDefault();
    const box = document.getElementById('box1');
    if (!box.classList.contains('show')) {
        box.classList.add('show');
        setTimeout(() => {
            box.classList.add('move-up');
        }, 10); 
    } else {
        box.classList.remove('move-up');
        setTimeout(() => {
            box.classList.remove('show');
        }, 500); 
    }
});
document.getElementById('moveBox1').addEventListener('click', function(event) {
    event.preventDefault();
    const box = document.getElementById('box2');
    if (!box.classList.contains('show')) {
        box.classList.add('show');
        setTimeout(() => {
            box.classList.add('move-up');
        }, 10); 
    } else {
        box.classList.remove('move-up');
        setTimeout(() => {
            box.classList.remove('show');
        }, 500); 
    }
});
//a can use checked
document.getElementById('moveBox1').addEventListener('click', function(event) {
event.preventDefault(); 
    if (this.classList.contains('checked')) {
        this.classList.remove('checked');
    } else {
        this.classList.add('checked');
    }
});
        //nav-move
        document.getElementById('moveBox1').addEventListener('click', function(event) {
event.preventDefault();
document.querySelector('.box-anim').classList.toggle('moved');
setTimeout(() => {
let classHide = document.getElementsByClassName('hide-box');
document.querySelectorAll('.hide-box').forEach(element => {
    element.classList.remove('hide-box');
});
function checkOpacity() {

    if (classHide[0].className.includes('hide-box') && classHide[1].className.includes('hide-box')) {
        for (let i = 0; i < classHide.length; i++) {
            classHide[i].classList.remove('hide-box');
        
        }
    } else {
        for (let i = 0; i < classHide.length; i++) {
            classHide[i].classList.add('hide-box');
        
        }
    }
}
}, 500);
        });