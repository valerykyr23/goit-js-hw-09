

import Notiflix from 'notiflix';
Notiflix.Notify.init({ cssAnimationStyle: "zoom", fontAwesomeIconStyle: "shadow" });

const form = document.querySelectorAll(".form");
console.log(form[0]);

const inputDelay = document.querySelector("input[name=delay]")
console.log(inputDelay);

const inputStep = document.querySelector("input[name=step]")
console.log(inputStep);

const inputAmount = document.querySelector("input[name=amount]")
console.log(inputAmount);

form[0].addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();


  const valueOfDelay = Number(inputDelay.value);
  console.log(valueOfDelay);


  const valueOfStep = Number(inputStep.value);
  console.log(valueOfStep);


  const valueOfPromisesAmount = Number(inputAmount.value);
  console.log(valueOfPromisesAmount);
  
  
  for (let i = 1; i <= valueOfPromisesAmount; i += 1) {

const delayPlusStep = valueOfDelay + valueOfStep * (i - 1);
    createPromise(i, delayPlusStep).then(onSuccess).catch(onError)
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        fulfill({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  });
};

function onSuccess({ position, delay }) { 
  Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
  Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
};