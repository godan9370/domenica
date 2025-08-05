const vinyl = document.getElementById('vinyl');
const audio = document.getElementById('audio');
const trackSelect = document.getElementById('trackSelect');

// Toggle play/pause when clicking the vinyl
vinyl.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Start spinning when audio plays
audio.addEventListener('play', () => {
  vinyl.classList.add('spin');
});

// Smooth stop when audio pauses
audio.addEventListener('pause', () => {
  vinyl.classList.remove('spin');
});

// Change track
trackSelect.addEventListener('change', () => {
  const selectedTrack = trackSelect.value;
  audio.src = selectedTrack;
  audio.play();
});
