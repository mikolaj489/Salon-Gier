function playGame(playerMove) {
    // Usunięcie klas animacji i ukrycie wszystkich obrazów i wideo
    document.querySelectorAll('.wybor, .animation-choice').forEach(element => {
        element.classList.add('hidden');
    });

    // Ustawienie odpowiedniego obrazu dla ruchu gracza
    if (playerMove === 'papier') {
        document.getElementById('wybor-papier-gracz').classList.remove('hidden');
        // Wyświetlenie animacji wyboru papieru przez gracza
        document.getElementById('animacja-wybor-papier-gracz').classList.remove('hidden');
        document.getElementById('animacja-wybor-papier-gracz').currentTime = 0; // restartowanie wideo
        document.getElementById('animacja-wybor-papier-gracz').play();
    } else if (playerMove === 'kamien') {
        document.getElementById('wybor-kamien-gracz').classList.remove('hidden');
        // Wyświetlenie animacji wyboru kamienia przez gracza
        document.getElementById('animacja-wybor-kamien-gracz').classList.remove('hidden');
        document.getElementById('animacja-wybor-kamien-gracz').currentTime = 0; // restartowanie wideo
        document.getElementById('animacja-wybor-kamien-gracz').play();
    } else if (playerMove === 'nozyce') {
        document.getElementById('wybor-nozyce-gracz').classList.remove('hidden');
        // Wyświetlenie animacji wyboru nozyce przez gracza
        document.getElementById('animacja-wybor-nozyce-gracz').classList.remove('hidden');
        document.getElementById('animacja-wybor-nozyce-gracz').currentTime = 0; // restartowanie wideo
        document.getElementById('animacja-wybor-nozyce-gracz').play();
    }

    setTimeout(() => {
        const computerMove = pickComputerMove();
        let result = '';

        // Logika wyników gry
        // Wyświetlenie odpowiedniego obrazu i wideo dla ruchu komputera
        if (computerMove === 'papier') {
            document.getElementById('wybor-papier-przeciwnik').classList.remove('hidden');
            // Wyświetlenie animacji wyboru papieru przez przeciwnika
            document.getElementById('animacja-wybor-papier-przeciwnik').classList.remove('hidden');
            document.getElementById('animacja-wybor-papier-przeciwnik').currentTime = 0; 
            document.getElementById('animacja-wybor-papier-przeciwnik').play();
        } else if (computerMove === 'kamien') {
            document.getElementById('wybor-kamien-przeciwnik').classList.remove('hidden');
            // Wyświetlenie animacji wyboru kamienia przez przeciwnika
            document.getElementById('animacja-wybor-kamien-przeciwnik').classList.remove('hidden');
            document.getElementById('animacja-wybor-kamien-przeciwnik').currentTime = 0; 
            document.getElementById('animacja-wybor-kamien-przeciwnik').play();
        } else if (computerMove === 'nozyce') {
            document.getElementById('wybor-nozyce-przeciwnik').classList.remove('hidden');
            // Wyświetlenie animacji wyboru nozyce przez przeciwnika
            document.getElementById('animacja-wybor-nozyce-przeciwnik').classList.remove('hidden');
            document.getElementById('animacja-wybor-nozyce-przeciwnik').currentTime = 0; 
            document.getElementById('animacja-wybor-nozyce-przeciwnik').play();
        }

        setTimeout(() => {
            if (playerMove === 'nozyce' && computerMove === 'kamien') {
                //dodawanie klasy chowania zeyby nie bylo pokazane
                document.getElementById('animacja-wybor-nozyce-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-kamien-przeciwnik').classList.add('hidden')
                //resetowanie czasu dla animacji
                document.getElementById('animacja-nozyce-przegrywaja').classList.remove('hidden');
                document.getElementById('animacja-nozyce-przegrywaja').currentTime = 0; 
                document.getElementById('animacja-nozyce-przegrywaja').play();
            } else if (playerMove === 'nozyce' && computerMove === 'papier') {
                document.getElementById('animacja-wybor-nozyce-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-papier-przeciwnik').classList.add('hidden')
                document.getElementById('animacja-nozyce-wygrywaja').classList.remove('hidden');
                document.getElementById('animacja-nozyce-wygrywaja').currentTime = 0; 
                document.getElementById('animacja-nozyce-wygrywaja').play();
            } else if (playerMove === 'nozyce' && computerMove === 'nozyce') {
                document.getElementById('animacja-wybor-nozyce-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-nozyce-przeciwnik').classList.add('hidden')
                document.getElementById('animacja-nozyce-remis').classList.remove('hidden');
                document.getElementById('animacja-nozyce-remis').currentTime = 0; 
                document.getElementById('animacja-nozyce-remis').play();
            }
            //papier
            if (playerMove === 'papier' && computerMove === 'kamien') {
                //dodawanie klasy chowania zeyby nie bylo pokazane
                document.getElementById('animacja-wybor-papier-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-kamien-przeciwnik').classList.add('hidden')
                //resetowanie czasu dla animacji
                document.getElementById('animacja-papier-wygrywaja').classList.remove('hidden');
                document.getElementById('animacja-papier-wygrywaja').currentTime = 0; 
                document.getElementById('animacja-papier-wygrywaja').play();
            } else if (playerMove === 'papier' && computerMove === 'papier') {
                document.getElementById('animacja-wybor-papier-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-papier-przeciwnik').classList.add('hidden')
                document.getElementById('animacja-papier-remis').classList.remove('hidden');
                document.getElementById('animacja-papier-remis').currentTime = 0; 
                document.getElementById('animacja-papier-remis').play();
            } else if (playerMove === 'papier' && computerMove === 'nozyce') {
                document.getElementById('animacja-wybor-papier-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-nozyce-przeciwnik').classList.add('hidden')
                document.getElementById('animacja-papier-przegrywaja').classList.remove('hidden');
                document.getElementById('animacja-papier-przegrywaja').currentTime = 0; 
                document.getElementById('animacja-papier-przegrywaja').play();
            }
            
            if (playerMove === 'kamien' && computerMove === 'kamien') {
                //dodawanie klasy chowania zeyby nie bylo pokazane
                document.getElementById('animacja-wybor-kamien-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-kamien-przeciwnik').classList.add('hidden')
                //resetowanie czasu dla animacji
                document.getElementById('animacja-kamien-remis').classList.remove('hidden');
                document.getElementById('animacja-kamien-remis').currentTime = 0; 
                document.getElementById('animacja-kamien-remis').play();
            } else if (playerMove === 'kamien' && computerMove === 'papier') {
                document.getElementById('animacja-wybor-kamien-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-papier-przeciwnik').classList.add('hidden')
                document.getElementById('animacja-kamien-przegrywaja').classList.remove('hidden');
                document.getElementById('animacja-kamien-przegrywaja').currentTime = 0; 
                document.getElementById('animacja-kamien-przegrywaja').play();
            } else if (playerMove === 'kamien' && computerMove === 'nozyce') {
                document.getElementById('animacja-wybor-kamien-gracz').classList.add('hidden')
                document.getElementById('animacja-wybor-nozyce-przeciwnik').classList.add('hidden')
                document.getElementById('animacja-kamien-wygrywaja').classList.remove('hidden');
                document.getElementById('animacja-kamien-wygrywaja').currentTime = 0; 
                document.getElementById('animacja-kamien-wygrywaja').play();
            }
        }, 750);
    }, 1100);
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 3) {
        computerMove = 'kamien';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'papier';
    } else {
        computerMove = 'nozyce';
    }

    return computerMove;
}

function disableButtn() {
    const butt = document.querySelectorAll('button');

    butt.forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
        butt.forEach(button => {
            button.disabled = false;
        })
    }, 5200);
}

//reset checked
window.onload = function() {
document.getElementById('start').checked = false;
};
