// script.js
let ronaldoScore = 0;
let messiScore = 0;

function increaseScore(player) {
    if (player === 'ronaldo') {
        ronaldoScore++;
        document.getElementById('ronaldo-score').innerText = ronaldoScore;
        playSound('ronaldo');
    } else if (player === 'messi') {
        messiScore++;
        document.getElementById('messi-score').innerText = messiScore;
        playSound('messi');
    }
}

function playSound(player) {
    let audio = new Audio();
    if (player === 'ronaldo') {
        audio.src = 'ronaldo.mp3';
    } else if (player === 'messi') {
        audio.src = 'messi.mp3';
    }
    audio.play();
}
