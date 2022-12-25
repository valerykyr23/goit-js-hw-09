import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';




const startBtn = document.querySelector("button[data-start]");

const input = document.querySelector("#datetime-picker");

const daysSpan = document.querySelector("span[data-days]");

const minutesSpan = document.querySelector("span[data-minutes]");

const secondsSpan = document.querySelector("span[data-seconds]");

const hoursSpan = document.querySelector("span[data-hours]");



startBtn.setAttribute('disabled', '');

let timerId = null;





const options = {

  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    

    const delta = selectedDates[0] - new Date();

    console.log(delta)
     
    if (selectedDates[0] < new Date()) {
      
      Notiflix.Notify.failure("Please choose a date in the future");
      
    return;
    };

    if (selectedDates[0] > new Date()) {
      startBtn.removeAttribute('disabled', '');
      return;
    };

    startBtn.addEventListener("click", () => {
     
    timerId = setInterval(() => {
      
      const resultFromConvartation = convertMs(delta);
      // const resultAfterPad = addLeadingZero(resultFromConvartation);
      setDateInSpan(resultFromConvartation);
      
  }, 1000);
 })
      
  },
};

flatpickr("#datetime-picker", options);


function addLeadingZero(value) { 
  return toString(value).padStart(2, "0");
}


function setDateInSpan({ days, hours, minutes, seconds }) {

      daysSpan.textContent = `${days}`;
      minutesSpan.textContent = `${minutes}`;
      secondsSpan.textContent = `${seconds}`;
      hoursSpan.textContent = `${hours}`;
}


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