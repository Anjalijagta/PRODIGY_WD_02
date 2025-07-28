let startTime = 0;
let interval;
let isRunning = false;

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - startTime;
    interval = setInterval(updateTime, 1000);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(interval);
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  isRunning = false;
  startTime = 0;
  updateDisplay(0, 0, 0);
});

function updateTime() {
  const elapsed = Date.now() - startTime;
  const hrs = Math.floor(elapsed / 3600000);
  const mins = Math.floor((elapsed % 3600000) / 60000);
  const secs = Math.floor((elapsed % 60000) / 1000);

  updateDisplay(hrs, mins, secs);
}

function updateDisplay(h, m, s) {
  hours.textContent = pad(h);
  minutes.textContent = pad(m);
  seconds.textContent = pad(s);
}

function pad(n) {
  return n.toString().padStart(2, "0");
}
