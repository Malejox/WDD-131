let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'water') {
        document.body.style.backgroundImage = "url('shark.webp')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'earth') {
        document.body.style.backgroundImage = "url('lizard.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'air') {
        document.body.style.backgroundImage = "url('falcon.jpeg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}