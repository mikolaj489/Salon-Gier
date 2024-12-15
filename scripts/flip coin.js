
function playGame(playerClick) {
    document.querySelectorAll('.animation-choice').forEach(element => {
        element.classList.add('hidden');
    })
        const computerMove = randomCoinFlipChance();

      if (computerMove === 'reszka'){
        document.getElementById('animacja-reszka').classList.remove('hidden');
        document.getElementById('animacja-reszka').currentTime = 0;
        document.getElementById('animacja-reszka').play();
      } else{
        document.getElementById('animacja-orzel').classList.remove('hidden');
        document.getElementById('animacja-orzel').currentTime = 0;
        document.getElementById('animacja-orzel').play();
      }
}

function randomCoinFlipChance() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 2) {
        computerMove = 'reszka'
    } else {
        computerMove = 'orzel'
    }

    return computerMove;
}

function disableButton() {
    const butt = document.querySelectorAll('button');

    butt.forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
        butt.forEach(button => {
            button.disabled = false;
        })
    }, 1000);
}


//reset checked
 window.onload = function() {
document.getElementById('start').checked = false;
};