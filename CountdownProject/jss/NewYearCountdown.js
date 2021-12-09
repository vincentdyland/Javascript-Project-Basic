showUI();

function showUI() {
  var main = document.querySelector(".main");
  main.innerHTML = `
  <div>
  <h1>New Year Eve</h1>
  <div class="countdown-container">
      <div class="countdown-el month-c">
          <p class="big-text" id="months">0</p>
          <span>Months</span>
      </div>
      <div class="countdown-el day-c">
          <p class="big-text" id="days">0</p>
          <span>Days</span>
      </div>
      <div class="countdown-el hour-c">
          <p class="big-text" id="hours">0</p>
          <span>Hours</span>
      </div>
      <div class="countdown-el minute-c">
          <p class="big-text" id="minutes">0</p>
          <span>Minutes</span>
      </div>
      <div class="countdown-el second-c">
          <p class="big-text" id="seconds">0</p>
          <span>Seconds</span>
      </div>
  </div>
</div>
  `;

  const monthsEl = document.getElementById("months");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  countdown = function () {
    const newYearsDate = new Date("01/01/2022");
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const months = Math.floor(totalseconds / 60 / 60 / 24 / 30);
    const days = Math.floor(totalseconds / 60 / 60 / 24) % 30;
    const hours = Math.floor(totalseconds / 60 / 60) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    monthsEl.innerHTML = formatTime(months);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  };

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  setInterval(countdown, 1000);
}
