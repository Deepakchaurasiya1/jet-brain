// Video Section Start Here

const video = document.getElementById("videoPlayer");
const button = document.getElementById("toggleButton");

button.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    button.textContent = "Pause"; // Update button text
  } else {
    video.pause();
    button.textContent = "Play"; // Update button text
  }
});

// Hide the button when the video is playing
video.addEventListener("play", function () {
  button.style.display = "none";
});

// Show the button when the video is paused
video.addEventListener("pause", function () {
  button.style.display = "block";
});
// Video Section End Here

// Spot Light Section Start Here

const updateCursor = ({ x, y }) => {
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--y", y);
};
document.body.addEventListener("pointermove", updateCursor);

// Spot Light Section End Here
