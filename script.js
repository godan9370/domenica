const vinyl = document.getElementById('vinyl');
const audio = document.getElementById('audio');
const trackSelect = document.getElementById('trackSelect');

// Click vinyl to play/pause
vinyl.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Change track when selection changes
trackSelect.addEventListener('change', () => {
  const selectedTrack = trackSelect.value;
  audio.src = selectedTrack;
  audio.play();
});
