const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');
const USER_LS = "currentUser";


function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function askForName() {
    form.classList.add('showing');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentValue = input.value;
        paintGreeting(currentValue);
        saveName(currentValue);
    })
}

function paintGreeting(text) {
    greeting.classList.add('showing');
    form.classList.remove('showing');
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();