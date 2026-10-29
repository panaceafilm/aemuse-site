const filmFrames = [...document.querySelectorAll('.mp-film-frame')];

if (filmFrames.length > 1 && window.playerjs) {
  const players = filmFrames.map(frame => new playerjs.Player(frame.querySelector('iframe')));

  players.forEach((player, index) => {
    player.on('play', () => {
      filmFrames[index].classList.add('is-playing');
      players.forEach((other, otherIndex) => {
        if (otherIndex !== index) other.pause();
      });
    });
    for (const event of ['pause', 'ended']) {
      player.on(event, () => filmFrames[index].classList.remove('is-playing'));
    }
  });
}
