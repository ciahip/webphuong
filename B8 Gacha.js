let randomNumber = null;
let difficultyLevel = null;

function startGame() {
    const difficulty = parseInt(document.getElementById('difficulty').value);

    if (isNaN(difficulty)) {
        document.getElementById('gameSection').style.display = 'none';
        document.getElementById('message').textContent = 'Mom chưa chọn level kìa !!';
        return;
    } else if (difficulty < 1) {
        document.getElementById('gameSection').style.display = 'none';
        document.getElementById('message').textContent = 'Bạn sợ à ?';
        return;
    } else if (difficulty > 9) {
        document.getElementById('gameSection').style.display = 'none';
        document.getElementById('message').textContent = 'Cao quá rồi !!';
        return;
    }

    difficultyLevel = difficulty;
    randomNumber = Math.floor(Math.random() * (difficulty + 1));

    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('maxNumber').textContent = difficulty;
    document.getElementById('message').textContent = 'Game Started';

    generateNumberOptions(difficulty);
    document.addEventListener('keydown', handleKeyPress);
}

function generateNumberOptions(maxNumber) {
    const numberOptions = document.getElementById('numberOptions');
    numberOptions.innerHTML = '';

    for (let i = 0; i <= maxNumber; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = function () {
            checkGuess(i);
        };
        numberOptions.appendChild(button);
    }
}

function handleKeyPress(event) {
    const userGuess = parseInt(event.key);

    if (!isNaN(userGuess) && userGuess >= 0 && userGuess <= difficultyLevel) {
        checkGuess(userGuess);
    } else {
        document.getElementById('message').textContent = `Chọn đáp án từ 0 đến ${difficultyLevel}.`;
    }
}

function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
        document.getElementById('message').textContent = 'Congratulations!!';
        // document.getElementById('trueanswer').textContent = `${randomNumber}`;
        document.removeEventListener('keydown', handleKeyPress);
    } else {
        randomNumber = Math.floor(Math.random() * (difficultyLevel + 1));
        document.getElementById('message').textContent = `Try again 0 - ${difficultyLevel}.`;
    }
}
