let dogumtarixi = prompt("Dogum tarixnizi daxil edin (MM.DD.YYYY) : ");
let birthdate = new Date(dogumtarixi);

let currentTime = new Date();

let daydifference = currentTime.getTime() - birthdate.getTime();
let sec = daydifference / 1000;
let min = sec * 0.0167;
let hour = min * 0.0167;
let days = hour * 0.0417;
console.log(Math.floor(days) + " days that you have been living");
