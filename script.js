const pages = [
  ['work.html', 'работы', 'work'],
  ['services.html', 'услуги', 'services'],
  ['styles.html', 'стили съёмки', 'styles'],
  ['about.html', 'о нас', 'about']
];
const current = document.body.dataset.page;
const mark = `<svg viewBox="0 0 64 64" aria-hidden="true"><g transform="rotate(-38 32 32)" fill="currentColor"><path fill-rule="evenodd" d="M20 17a15 15 0 1 0 13.64 21.28H57a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4H33.64A15 15 0 0 0 20 17Zm0 9a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/><path d="M45 34h7v10h-7zM53 34h7v7h-7z"/></g></svg>`;
const flags = {
  ru: '<svg viewBox="0 0 3 2" aria-hidden="true"><path fill="#fff" d="M0 0h3v2H0z"/><path fill="#3158a8" d="M0 .667h3v1.333H0z"/><path fill="#d52b31" d="M0 1.333h3v.667H0z"/></svg>',
  en: '<svg viewBox="0 0 60 40" aria-hidden="true"><path fill="#17306f" d="M0 0h60v40H0z"/><path stroke="#fff" stroke-width="9" d="m0 0 60 40M60 0 0 40"/><path stroke="#c9213b" stroke-width="3" d="m0 0 60 40M60 0 0 40"/><path stroke="#fff" stroke-width="13" d="M30 0v40M0 20h60"/><path stroke="#c9213b" stroke-width="7" d="M30 0v40M0 20h60"/></svg>',
  fr: '<svg viewBox="0 0 3 2" aria-hidden="true"><path fill="#fff" d="M0 0h3v2H0z"/><path fill="#1b3f93" d="M0 0h1v2H0z"/><path fill="#db3440" d="M2 0h1v2H2z"/></svg>',
  it: '<svg viewBox="0 0 3 2" aria-hidden="true"><path fill="#fff" d="M0 0h3v2H0z"/><path fill="#15945b" d="M0 0h1v2H0z"/><path fill="#d7313b" d="M2 0h1v2H2z"/></svg>'
};
const languageChoices = [['ru', 'Русский'], ['en', 'English'], ['fr', 'Français'], ['it', 'Italiano']]
  .map(([code, label]) => `<button type="button" data-lang="${code}" aria-label="${label}"><span class="lang-flag">${flags[code]}</span><span>${code.toUpperCase()}</span></button>`).join('');
const links = pages.map(([href, label, id]) => `<a href="${href}" ${current === id ? 'aria-current="page"' : ''}>${label}</a>`).join('');
const header = document.getElementById('site-header');
header.innerHTML = `<a class="brand" href="index.html" aria-label="AEMUSE — главная">${mark}<span>aemuse</span></a><nav aria-label="Разделы сайта">${links}</nav><div class="header-actions"><div class="lang-control"><button class="lang-trigger" type="button" aria-label="Язык сайта" aria-expanded="false" aria-controls="lang-options"><span class="lang-flag">${flags.ru}</span><span class="lang-current">RU</span><svg viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></button><div class="lang-options" id="lang-options" role="group" aria-label="Выбор языка" hidden>${languageChoices}</div></div><a class="header-contact" href="contact.html">обсудить съёмку <span aria-hidden="true">↗</span></a><button class="mp-menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div><nav class="mp-mobile-nav" id="mobile-nav" aria-label="Мобильное меню">${links}<a href="contact.html">обсудить съёмку</a></nav>`;
if (current === 'services') {
  const jumpNav = document.querySelector('.mp-jump-nav');
  if (jumpNav) header.after(jumpNav);
}
const footer = document.getElementById('site-footer');
if (footer) footer.innerHTML = `<div class="mp-footer-top"><a class="mp-footer-brand" href="index.html">aemuse.me</a><p>Фото и видео для мест, которые хочется почувствовать.</p><a href="mailto:hi@aemuse.me">hi@aemuse.me</a></div><div class="mp-footer-bottom"><nav aria-label="Навигация внизу страницы">${links}<a href="contact.html">контакты</a></nav><span>Екатерина и Андрей Ефимовы · 2026</span></div>`;
document.body.insertAdjacentHTML('beforeend', `<aside class="mp-quick-contact" aria-label="Быстрая связь"><a href="https://t.me/efimovandrey" target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram"><img src="contact-telegram.png" alt="" width="50" height="44"></a><a href="https://wa.me/79261767139" target="_blank" rel="noopener noreferrer" aria-label="Написать в WhatsApp"><img src="contact-whatsapp.png" alt="" width="45" height="44"></a></aside>`);
const menu = header.querySelector('.mp-menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  window.aemuseI18n?.syncMenuLabel();
  header.classList.toggle('menu-open', open);
});
header.querySelectorAll('.mp-mobile-nav a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  header.classList.remove('menu-open');
}));
const scenes = document.querySelectorAll('[data-tone]');
const updateHeader = () => {
  const active = [...scenes].reverse().find(scene => scene.getBoundingClientRect().top < 90);
  header.dataset.theme = active?.dataset.tone ?? document.body.dataset.headerTone ?? 'dark';
  header.dataset.scrolled = window.scrollY > 40;
};
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.dataset.visible = 'true';
      observer.unobserve(entry.target);
    }
  }), { rootMargin: '0px 0px -6%' });
  document.querySelectorAll('[data-enter]').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('[data-enter]').forEach(el => el.dataset.visible = 'true');
}
const strip = document.getElementById('moment-strip');
const progress = document.getElementById('moment-progress');
if (strip && progress) {
  const updateProgress = () => {
    const max = strip.scrollWidth - strip.clientWidth;
    progress.style.transform = `scaleX(${max ? .2 + .8 * strip.scrollLeft / max : 1})`;
  };
  strip.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  document.querySelectorAll('.moment-arrow').forEach(button => button.addEventListener('click', () => {
    const step = strip.querySelector('figure').getBoundingClientRect().width + 22;
    strip.scrollBy({ left: step * Number(button.dataset.direction), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }));
  updateProgress();
}
