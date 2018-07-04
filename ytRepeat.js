function YtRepeat(endScreen, playBtn) {
  this.endScreen = endScreen;
  this.playBtn = playBtn;

  this.repeat = function() {
    let endScreenElement = $(this.endScreen);
    let playBtnElement = $(this.playBtn);

    if (endScreenElement.css('display') !== 'none') {
      playBtnElement.click();
    }
  };
}

$(document).ready(function() {
  const endScreenCss = '.videowall-endscreen';
  const playBtnCss = '.ytp-play-button';
  var ytRepeatObj = new YtRepeat(endScreenCss, playBtnCss);

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
      ytRepeatObj.repeat();
    });
  });
  var elements = document.querySelectorAll(playBtnCss);
  observer.observe(elements[0], { attributes: true });
});
