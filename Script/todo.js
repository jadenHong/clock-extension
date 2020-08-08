const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = document.querySelector('.toDoInput');
const toDoList = document.querySelector('.js-toDoList');
const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(e) {
    const btn = e.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter((toDo) => { return toDo.id !== parseInt(li.id) });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));// when you save just like this, you will see object Object in the value. because localStorage can not save JS's data. Only!!! can save String type.
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo) => paintToDo(toDo.text));
    }
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '❌';
    delBtn.addEventListener('click', deleteToDo);
    const span = document.createElement('span');
    const newID = toDos.length + 1;
    span.innerHTML = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID,
    }
    toDos.push(toDoObj);
    saveToDos();
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