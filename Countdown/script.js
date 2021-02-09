const $countdown = document.getElementById("countdown");
const $days = document.getElementById("days");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $seconds = document.getElementById("seconds");
const $nyear = document.getElementById("nyear");

const $btn = document.getElementById("btn");
const $body = document.body;

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

$nyear.innerHTML = "Happy " + (currentYear + 1);

function UpdateTime() {
    const currentDate = new Date();
    const totalMilliseconds = nextYear - currentDate;
    
    const day = Math.floor(totalMilliseconds / 1000 / 60 / 60 / 24);
    const hour = Math.floor(totalMilliseconds / 1000 / 60 / 60) % 24;
    const minute = Math.floor(totalMilliseconds / 1000 / 60) % 60;
    const second = Math.floor(totalMilliseconds / 1000) % 60;

    days.innerHTML = day;
    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    minutes.innerHTML = minute < 10 ? '0' + minute : minute;
    seconds.innerHTML = second < 10 ? '0' + second : second;
}

function changeBG() {
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();

    const colorStr = `rgb(${col1}, ${col2}, ${col3})`;

    $body.style.background = colorStr;
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

setInterval(UpdateTime, 1000);

$btn.addEventListener("click", changeBG);
