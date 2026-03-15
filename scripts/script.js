// Подсветка активной ссылки по текущему hash
(function () {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const setActive = function () {
    const hash = window.location.hash || '#about';
    navLinks.forEach(function (a) {
      a.classList.toggle('nav-link--active', a.getAttribute('href') === hash);
    });
  };
  window.addEventListener('hashchange', setActive);
  setActive();
})();
