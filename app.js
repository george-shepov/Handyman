const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation?.classList.toggle('is-open', !open);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation?.classList.remove('is-open');
  });
});

document.querySelector('#year')?.replaceChildren(String(new Date().getFullYear()));

const quoteForm = document.querySelector('#quote-form');
quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const subject = `Handyman request: ${data.get('project')} in ${data.get('city')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Email: ${data.get('email') || 'Not provided'}`,
    `City: ${data.get('city')}`,
    `Project type: ${data.get('project')}`,
    '',
    'Project details:',
    data.get('details'),
    '',
    'I will attach project photos to this email.'
  ].join('\n');
  const status = document.querySelector('#form-status');
  if (status) status.textContent = 'Opening your email app. Add photos before sending.';
  window.location.href = `mailto:gshepov@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
