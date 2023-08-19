const video = document.querySelector("video");
const playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML = "&#10074;&#10074;"; // Pause icon
  } else {
    video.pause();
    playPauseButton.innerHTML = "&#9658;"; // Play icon
  }
});

video.addEventListener("play", function () {
  playPauseButton.innerHTML = "&#10074;&#10074;"; // Pause icon
});

video.addEventListener("pause", function () {
  playPauseButton.innerHTML = "&#9658;"; // Play icon
});

video.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
