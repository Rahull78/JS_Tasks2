/*const soundFiles = [
  "sounds/boom.wav",
  "sounds/clap.wav",
  "sounds/hihat.wav",
  "sounds/kick.wav",
  "sounds/openhat.wav",
  "sounds/ride.wav",
  "sounds/snare.wav",
  "sounds/tink.wav",
  "sounds/tom.wav",
];*/

// Fetch buttons using their class name
/*const buttonsGrp = document.querySelectorAll(".sound-button");
// const buttonsGrp = document.getElementsByClassName("sound-button");

// Functtion for playing sound
function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}

// Loop for each and every sounds
buttonsGrp.forEach((button, i) => {
  button.onclick = () => {
    const soundFile = soundFiles[i];
    playSound(soundFile);
  };
});*/
// for (let i = 0; i < buttonsGrp.length; i++) {
//   buttonsGrp[i].onclick = () => {
//     const soundFile = soundFiles[i];
//     playSound(soundFile);
//   };
// }

// Mouse click function

/*
function drumkit(e) {
  const keyCode = e.target.getAttribute("data-key");
  const audio = document.getElementById(keyCode);
  audio.play();
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", drumkit);
});
*/

// Key press function

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[id = "${e.keyCode}"]`);
  audio.play();
});
