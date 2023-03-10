

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const input = document.querySelector('#datetime-picker');

const startBtn = document.querySelector("button[data-start]");

const daysSpan = document.querySelector("span[data-days]");

const minutesSpan = document.querySelector("span[data-minutes]");

const secondsSpan = document.querySelector("span[data-seconds]");

const hoursSpan = document.querySelector("span[data-hours]");

startBtn.setAttribute('disabled', '');

let intervalId = null;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);



    if (selectedDates[0] < new Date()) {
      startBtn.setAttribute('disabled', '');
      Notiflix.Notify.failure('Please choose a date in the future!');
      return;
    }
    if (selectedDates[0] > new Date()) {
      startBtn.removeAttribute('disabled', '');
    }

    startBtn.addEventListener('click', () => {
      intervalId = setInterval(() => {
        const differenceInTime = selectedDates[0] - new Date();

        if (differenceInTime < 1000) {
          clearInterval(intervalId);
        }
        const result = convertMs(differenceInTime);
        setDateInSpan(result);
      }, 1000);
    });
  },
};

flatpickr('#datetime-picker', options);

function setDateInSpan ({ days, hours, minutes, seconds }) {
  daysSpan.textContent = `${days}`;
  hoursSpan.textContent = `${hours}`;
  minutesSpan.textContent = `${minutes}`;
  secondsSpan.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

