'use strict';

let score = 20;
let highScore = 0;

const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const bodyElement = document.querySelector('body');
const highScoreElement = document.querySelector('.highscore');

const secretNumberGenerator = () => Math.trunc(Math.random() * 20) + 1;

const decreaseScore = () => {
  score--;
  if (score <= 0) {
    messageElement.textContent = '😒 You lost the game';
  }

  if (score >= 0) {
    scoreElement.textContent = score;
  }
};

const victory = () => {
  numberElement.textContent = secretNumber;
  bodyElement.style.backgroundColor = 'green';
  numberElement.style.width = '30rem';
  if (score > highScore) {
    highScore = score;
    highScoreElement.textContent = highScore;
  }
};

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messageElement.textContent = '⚠️ No Number!';
  } else if (guess === secretNumber) {
    messageElement.textContent = '🎉 Correct Number!';
    victory();
  } else if (guess !== secretNumber) {
    guess > secretNumber
      ? (messageElement.textContent = 'Too High!')
      : (messageElement.textContent = 'Too Low!');
    decreaseScore();
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumberGenerator();
  bodyElement.style.backgroundColor = '#222';
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  numberElement.style.width = '15rem';
  messageElement.textContent = 'Start guessing...';
});

let secretNumber = secretNumberGenerator();
