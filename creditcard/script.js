const numberInput = document.getElementById('number');
const nameInput = document.getElementById('name');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');
const cardNumber = document.getElementById('card-number');
const cardHolder = document.getElementById('card-holder');
const expMonth = document.getElementById('exp-month');
const expYear = document.getElementById('exp-year');
const cardCvc = document.getElementById('card-cvc');
const card = document.querySelector('.card');

numberInput.addEventListener('input', e => {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(.{4})/g, '$1 ').trim();
  cardNumber.textContent = value || '1234 5678 9101 1020';
});

nameInput.addEventListener('input', e => {
  cardHolder.textContent = e.target.value || 'John Doe';
});

monthInput.addEventListener('input', e => {
  expMonth.textContent = e.target.value || 'MM';
});

yearInput.addEventListener('input', e => {
  expYear.textContent = e.target.value || 'YY';
});

cvcInput.addEventListener('focus', () => card.classList.add('flip'));
cvcInput.addEventListener('blur', () => card.classList.remove('flip'));
cvcInput.addEventListener('input', e => {
  cardCvc.textContent = e.target.value || 'XXX';
});