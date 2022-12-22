'use strict';

// todo: SET VARIABLES
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
// console.log(document.querySelector('.number').textContent = secretNumber);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
};

// todo: IMPLEMENT 'SCORES' PART
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess) {
        displayMessage('🚩 No number!');

    // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        displayNumber(secretNumber);

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Setting highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When player is wrong
    } else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(
            guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                displayMessage('👺 You lost..');
                document.querySelector('.score').textContent = 0;
            }
    }
});

// todo: AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    displayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});