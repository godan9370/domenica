const vinyl = document.getElementById('vinyl');
const audio = document.getElementById('audio');
const trackSelect = document.getElementById('trackSelect');

let angle = 0;
let speed = 0; // rotation speed in degrees per frame
let targetSpeed = 0;
let isPlaying = false;

// Click vinyl to toggle play/pause
vinyl.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// When audio plays
audio.addEventListener('play', () => {
  isPlaying = true;
  targetSpeed = 1.2; // adjust for faster/slower spin
});

// When audio pauses
audio.addEventListener('pause', () => {
  isPlaying = false;
  targetSpeed = 0;
});

// When changing track
trackSelect.addEventListener('change', () => {
  const selectedTrack = trackSelect.value;
  audio.src = selectedTrack;
  audio.play();
});

// Rotate the vinyl smoothly
function animate() {
  // Smoothly ramp speed up or down
  speed += (targetSpeed - speed) * 0.05;

  angle += speed;
  vinyl.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(animate);
}

animate(); // Start animation loop
