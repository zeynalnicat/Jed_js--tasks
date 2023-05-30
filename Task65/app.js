const inputSize = document.getElementById("pxValue");
const circle = document.getElementById("circle");
const btn = document.querySelector("#shwBtn");
const lengthCircle = document.getElementById("lengthCircle");
const areaCircle = document.getElementById("areaCircle");

btn.onclick = () => {
  circle.style.border = "2px solid";
  circle.style.width = `${inputSize.value}px`;
  circle.style.height = `${inputSize.value}px`;
  circle.style.borderRadius = "50%";
  const radius = inputSize.value/2;
  const cevreUzunluq = 2 * Math.floor(Math.PI) * radius;
  const cevreSahe = Math.floor(Math.PI) * radius ** 2;
  lengthCircle.innerHTML = `<p>Cevrenin uzunlugu : ${cevreUzunluq}</p>`;
  areaCircle.innerHTML = `<p>Cevrenin sahesi : ${cevreSahe}</p>`;
};
