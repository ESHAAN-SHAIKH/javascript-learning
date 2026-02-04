const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateClock() {
  const now = new Date();

  hoursEl.textContent = String(now.getHours()).padStart(2, "0");
  minutesEl.textContent = String(now.getMinutes()).padStart(2, "0");
  secondsEl.textContent = String(now.getSeconds()).padStart(2, "0");
}


updateClock();

setInterval(updateClock, 1000);
