const vinyl = document.getElementById('vinyl');
const audio = document.getElementById('audio');

// Click vinyl image to toggle play/pause
vinyl.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
