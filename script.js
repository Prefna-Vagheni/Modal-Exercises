'use strict';

// Variable declaration
const modal = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnClosemodel = document.querySelector('.close-model');
const btnsOpenModal = document.querySelectorAll('.show-model');

//  Events handler
const closeModal = function () {
  modal.classList.add('hidden');
  `${overlay.classList.add('hidden')}`;
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnClosemodel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) closeModal();
  }
  console.log(e);
});

// const model = document.querySelector('.model');
// const overlay = document.querySelector('.overlay');
// const btnClosemodel = document.querySelector('.close-model');
// const btnsOpenmodel = document.querySelectorAll('.show-model');

// console.log(btnsOpenmodel);

// const showOrHide = function () {
//   model.classList.toggle('hidden');
//   overlay.classList.toggle('hidden');
// };

// for (let i = 0; i < btnsOpenmodel.length; i++) {
//   btnsOpenmodel[i].addEventListener('click', showOrHide);
// }

// btnClosemodel.addEventListener('click', showOrHide);
// overlay.addEventListener('click', showOrHide);

// document.addEventListener('keydown', e => {
//   console.log(e.key);
//   if (e.key === 'Escape' && !model.classList.contains('hidden')) {
//     showOrHide();
//   }
// });
