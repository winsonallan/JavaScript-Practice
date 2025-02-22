'use strict';

const showModalElement = document.querySelectorAll('.show-modal');
const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const closeModal = () => {
  modalElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
};
const openModal = () => {
  modalElement.classList.remove('hidden');
  overlayElement.classList.remove('hidden');
};

showModalElement.forEach(element => {
  element.addEventListener('click', openModal);
});

overlayElement.addEventListener('click', closeModal);
document.querySelector('.close-modal').addEventListener('click', closeModal);
