$(document).ready(function() {
  document.querySelector('video').addEventListener('ended', function() {
    let elements = document.querySelectorAll('.ytp-play-button');
    let playBtn = elements[0];
    playBtn.click();
  });
});
