const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = document.querySelector('.toDoInput');
const toDoList = document.querySelector('.js-toDoList');
const TODOS_LS = 'toDos';

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '❌';
    const span = document.createElement('span');
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();