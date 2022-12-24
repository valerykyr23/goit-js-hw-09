const startBtn = document.querySelector("button[data-start]");
console.log(startBtn);

const stopBtn = document.querySelector("button[data-stop]");
console.log(stopBtn);

const body = document.querySelector("body");
console.log(body);

let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
      
  }, 1000);
    
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled', '');
});


stopBtn.addEventListener("click", () => {
    startBtn.removeAttribute('disabled', '');
    stopBtn.setAttribute('disabled', '');
    clearInterval(timerId);
    
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.dir(body);