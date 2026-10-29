(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const filters = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.article-card')];
  const emptyState = document.querySelector('#empty-state');
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visibleCount = 0;
    cards.forEach(card => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) visibleCount++;
    });
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }));

  const form = document.querySelector('#newsletter-form');
  const email = document.querySelector('#email');
  const message = document.querySelector('#form-message');
  if (form && email && message) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const value = email.value.trim();
      if (!value || !email.validity.valid) {
        message.textContent = 'Please enter a valid email address to continue.';
        message.className = 'form-hint error';
        email.focus();
        return;
      }
      message.textContent = 'Thanks for your interest! This demo is frontend-only, so your email has not been sent or stored.';
      message.className = 'form-hint success';
      form.querySelector('button[type="submit"]').setAttribute('aria-label', 'Email validated');
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();