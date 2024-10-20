window.addEventListener('load', () => {
  const c = setTimeout(() => {
    document.body.classList.remove('not-loaded');
    clearTimeout(c);
  }, 1000);

  const audioElement = document.getElementById('background-music');

  // Giảm âm lượng xuống còn 30% (tức là nhỏ lại 70%)
  audioElement.volume = 0.3;

  audioElement.play();

  audioElement.onended = function () {
    audioElement.currentTime = 0;
    audioElement.play();
  };
});
