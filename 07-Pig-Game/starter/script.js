'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const cScore0El = document.getElementById('current--0');
const cScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentScore, currentPlayer, playing;

const newGameInit = () => {
  currentPlayer = 0;
  currentScore = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  cScore0El.textContent = 0;
  cScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

newGameInit();

const changePlayer = () => {
  if (playing) {
    if (currentPlayer === 0) {
      score0El.textContent = currentScore + Number(score0El.textContent);
      cScore0El.textContent = 0;
      currentPlayer = 1;
    } else {
      score1El.textContent = currentScore + Number(score1El.textContent);
      cScore1El.textContent = 0;
      currentPlayer = 0;
    }
    currentScore = 0;

    if (score0El.textContent >= 100) {
      player0.classList.add('player--winner');
      diceEl.classList.toggle('hidden');
      playing = false;
    } else if (score1El.textContent >= 100) {
      player1.classList.add('player--winner');
      diceEl.classList.toggle('hidden');
      playing = false;
    }
  }
};

const rollDice = () => {
  if (playing) {
    const dice = Number(Math.trunc(Math.random() * 6) + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += Number(dice);

      if (currentPlayer === 0) {
        cScore0El.textContent = currentScore;
      } else {
        cScore1El.textContent = currentScore;
      }
    } else {
      currentScore = 0;
      changePlayer();
    }
  }
};

btnNew.addEventListener('click', newGameInit);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', changePlayer);
