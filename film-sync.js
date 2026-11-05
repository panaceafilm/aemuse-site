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

const previewFrames = [...document.querySelectorAll('.mp-film-preview')];
const filmDialog = document.querySelector('.mp-film-dialog');
if (previewFrames.length && filmDialog) {
  const dialogPlayer = filmDialog.querySelector('iframe');
  const closeButton = filmDialog.querySelector('.mp-film-dialog-close');
  let opener;

  previewFrames.forEach(frame => {
    const button = frame.querySelector('button');
    button.addEventListener('click', () => {
      opener = button;
      const url = new URL(button.dataset.filmSrc);
      url.searchParams.set('autoplay', 'true');
      url.searchParams.set('muted', 'false');
      dialogPlayer.title = button.getAttribute('aria-label');
      dialogPlayer.src = url.toString();
      filmDialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => filmDialog.close());
  filmDialog.addEventListener('click', event => {
    if (event.target === filmDialog) filmDialog.close();
  });
  filmDialog.addEventListener('close', () => {
    dialogPlayer.removeAttribute('src');
    opener?.focus();
  });
}
