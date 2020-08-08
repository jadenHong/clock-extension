const body = document.querySelector('body');
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `/images/${imgNumber}.jpg`
    image.classList.add('backgroundImage');
    body.appendChild(image);
}

function generateRandom() {
    const number = parseInt(Math.random() * IMG_NUMBER + 1);
    return number;
}

function init() {
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}

init();