let selectElem = document.querySelector('#theme-select');
let page = document.querySelector('body');
let contentBox = document.querySelector('.content');
let title = document.querySelector('.title h1');
let subtitle = document.querySelector('.title h2');
let logo = document.querySelector('.logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current === 'dark') {
    page.style.backgroundColor = '#1e1e1e';
    contentBox.style.backgroundColor = '#2b2b2b';
    contentBox.style.color = '#f0f0f0';
    title.style.color = '#ffffff';
    subtitle.style.color = '#66c0ff';
    logo.src = 'byui-logo-white.png';
  } else if (current === 'light') {
    page.style.backgroundColor = '#f9f9f9';
    contentBox.style.backgroundColor = '#ffffff';
    contentBox.style.color = '#222';
    title.style.color = '#000000';
    subtitle.style.color = '#006EB6';
    logo.src = 'byui.logo.webp';
  }
}
