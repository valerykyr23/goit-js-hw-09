import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

console.log(Notiflix);

console.log(flatpickr);


const startBtn = document.querySelector("button[data-start]");
console.log(startBtn);

const input = document.querySelector("#datetime-picker");
console.log(input);

const daysSpan = document.querySelector("span[data-days]");
console.log(daysSpan);

const minutesSpan = document.querySelector("span[data-minutes]");

const secondsSpan = document.querySelector("span[data-seconds]");

const hoursSpan = document.querySelector("span[data-hours]");

input.addEventListener("input", () => {
    Notiflix.Notify.failure("Please choose a date in the future"); });

startBtn.setAttribute('disabled', '');

timerId = null;

startBtn.addEventListener("click", () => {
     
    timerId = setInterval(() => {
      
      
  }, 1000);
 })

const options = {
//   minDate: "today",
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      
  },
};

flatpickr("#datetime-picker", options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}