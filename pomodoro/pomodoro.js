const focusBtn = document.querySelector("#focus");
const shortBreakBtn = document.querySelector("#shortBreak");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const restartBtn = document.querySelector("#restartBtn");
const pomodoro = document.querySelector(".pomodoro");
const breaktimer = document.querySelector(".break");
const button = document.querySelectorAll(".btn");

let seconds = 60;
let minutes = 24;

const startTime = () => {
  seconds -= 1;
  if (seconds == -1) {
    seconds = 59;
    minutes -= 1;

    if (minutes == -1) {
      minutes = 0;
      seconds = 0;
      clearInterval(intervalId);
    }
  }

  var secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  var minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;

  pomodoro.textContent = minutesText + " : " + secondText;
};

const remove = () => {
  button.forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};
let intervalId;
focusBtn.addEventListener("click", () => {
  focusBtn.classList.remove("btnFoc");
  shortBreakBtn.classList.remove("btnBre");
  remove();
  startBtn.classList.add("btn-focus");
  (seconds = 60), (minutes = 24);
  pomodoro.textContent = 25 + " : " + 0 + "0";
});

shortBreakBtn.addEventListener("click", () => {
  shortBreakBtn.classList.add("btnBre");
  focusBtn.classList.add("btnFoc");
  remove();
  startBtn.classList.add("btn-focus");
  seconds = 60;
  minutes = 4;
  pomodoro.textContent = "0" + 5 + " : " + 0 + 0;
});

startBtn.addEventListener("click", () => {
  if (startBtn.classList.contains("isOpen")) {
    clearInterval(intervalId);
    startBtn.classList.remove("isOpen");
    startBtn.textContent = "Continue";
  } else {
    intervalId = setInterval(startTime, 1000);
    startBtn.textContent = "Pause";
    startBtn.classList.add("isOpen");
  }
});

restartBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  seconds = 60;

  pomodoro.textContent = minutes + 1 + " : " + "0" + 0;
  startBtn.textContent = "Start";
});
