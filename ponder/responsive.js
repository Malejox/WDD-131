const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

function handleResize() {
  if (window.innerWidth >= 700) {
    nav.classList.remove('hide');
  } else {
    if (!menuButton.classList.contains('change')) {
      nav.classList.add('hide');
    }
  }
}

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hide');
  menuButton.classList.toggle('change');
});

window.addEventListener('resize', handleResize);
handleResize();