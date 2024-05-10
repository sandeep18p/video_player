const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress__filled');
const playerButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('input[name="volume"]');
const playbackSpeedInput = document.querySelector('input[name="playbackRate"]');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');

// Play or pause the video when playerButton is clicked
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playerButton.classList.toggle('toggle'); // Toggle the 'toggle' class
}

// Update the volume of the video
function updateVolume() {
  video.volume = volumeInput.value;
}

// Update the playback speed of the video
function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeedInput.value;
}

// Rewind the video by 10 seconds
function rewind() {
  video.currentTime -= 10;
}

// Skip forward the video by 25 seconds
function skip() {
  video.currentTime += 25;
}

// Update the progress bar as the video plays
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

// Event listeners
video.addEventListener('click', togglePlay);
playerButton.addEventListener('click', togglePlay);
volumeInput.addEventListener('input', updateVolume);
playbackSpeedInput.addEventListener('input', updatePlaybackSpeed);
rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', skip);
video.addEventListener('timeupdate', updateProgress);
