//your JS code here. If required.
function playSound(soundFile) {
  const audioElement = document.getElementById('audio');

  // Clear any existing source elements
  while (audioElement.firstChild) {
    audioElement.removeChild(audioElement.firstChild);
  }

  const sourceElement = document.createElement('source');
  sourceElement.src = `sounds/${soundFile}`;
  audioElement.appendChild(sourceElement);

  audioElement.load();
  audioElement.play()
    .catch((error) => {
      console.error(error);
      alert('Failed to play the audio. Please check the file format and location.');
    });
}

function stopSound() {
  const audioElement = document.getElementById('audio');
  audioElement.pause();
  audioElement.currentTime = 0;
}