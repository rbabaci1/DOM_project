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
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks event
  filter.addEventListener('keyup', filterTasks);
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

// remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  ``;
}

// clear tasks
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent;

    if (item.toLocaleLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

  console.log(text);
}
