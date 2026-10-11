// AOS anima una sola vez, con menor duración en pantallas pequeñas.
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!window.AOS || reducedMotion.matches) return;
  document.documentElement.classList.add('aos-ready');
  try {
    AOS.init({
      duration: window.matchMedia('(max-width: 767px)').matches ? 450 : 600,
      once: true,
      offset: 40,
      easing: 'ease-out',
      disable: () => reducedMotion.matches
    });
  } catch (error) {
    document.documentElement.classList.remove('aos-ready');
  }
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      document.documentElement.classList.remove('aos-ready');
    }
  });
})();
