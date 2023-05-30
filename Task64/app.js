const btn1 = document.querySelector(".color-one")
const btn2 = document.querySelector(".color-two")
const btn3 = document.querySelector(".color-three")
const btn4 = document.querySelector(".color-four")

btn1.onclick = () => {
   document.body.style.backgroundColor="gray";
}

btn2.onclick = () => {
   document.body.style.backgroundColor="red";
}
btn3.onclick = () => {
   document.body.style.backgroundColor="blue";
}
btn4.onclick = () => {
   document.body.style.backgroundColor="yellow";
}

