let addItem = document.getElementById('add');
let deleteItem = document.getElementById('delete');
let inputTache = document.getElementById('input');

let emptyDiv = document.querySelector('.tache-list');

let newDiv;
let newInput;
let label;

let taskArray = [];
let taskNumber = 0;

addItem.addEventListener('click', (e) => {
  e.preventDefault();
  taskFunc();
});

function taskFunc() {
  if (inputTache.value.length === 0) {
    alert('Please enter a task');
  } else {
    createContent(label);
    localStorage.setItem('task', inputTache.value);
    inputTache.value = '';
    deleteItems(newDiv);
  }
}

function createContent(label, task) {
  newDiv = document.createElement('div');
  newInput = document.createElement('input');
  label = document.createElement('label');
  newInput.type = 'checkbox';
  newInput.id = 'check';
  newInput.value = 'check';
  label.htmlFor = 'check';
  label.classList.add('label');
  emptyDiv.append(newDiv);
  newDiv.append(newInput);
  newDiv.append(label);
  newDiv.classList.add('newDiv');
  label.innerHTML += inputTache.value || task;

  newInput.onclick = function() {
    label.classList.toggle('task-done');
    newDiv.classList.toggle('active');
  }
}


function deleteItems(newDiv) {
  deleteItem.addEventListener('click', (e) => {
    e.preventDefault();
    newDiv.parentNode.removeChild(newDiv);
    localStorage.removeItem('task');
  });
}


window.addEventListener('load', () => {
  const task = localStorage.getItem('task');

  if (task !== null) {
    createContent(label, task);
    deleteItems(newDiv);
  } else {
    return;
  }
});
