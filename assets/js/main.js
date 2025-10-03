function toggleMobileNav() {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;
  nav.classList.toggle('is-open');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.nav-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.setAttribute(
        'aria-expanded',
        toggleBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
      toggleMobileNav();
    });
  }
});
