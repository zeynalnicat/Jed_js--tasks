const cage = document.getElementById("cage");
const img = document.querySelector("img");
let sound;

cage.addEventListener("mouseover", (e) => {
   img.src = "./img/angry-lion.jpg";
   sound = document.createElement("audio");
   sound.src = "./img/anger.mp3";
   sound.play()
});

cage.addEventListener("mouseout", (e) => {
   img.src = "./img/lion.png";
   if (sound) {
      sound.pause();
   }
});
