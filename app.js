// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// Function
function loadEventListeners() {
  // add task event
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === '') {
    alert('Add a task');
    return;
  }

  // Create li element
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // create text node and append to to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to the li
  li.appendChild(link);
  // append the li to the ul
  taskList.appendChild(li);
  // clear the input
  taskInput.value = '';
}
