const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

countdown = function () {
    const newYearsDate = new Date('01/01/2022');
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const months = Math.floor(totalseconds /60 /60 /24 / 30);
    const days = Math.floor(totalseconds / 60 /60 /24) % 30;
    const hours = Math.floor(totalseconds /60 /60) % 24;
    const minutes = Math.floor(totalseconds /60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    monthsEl.innerHTML = formatTime(months);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? '0' + time : time;
}

setInterval(countdown, 1000);