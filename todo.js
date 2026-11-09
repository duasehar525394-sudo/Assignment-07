
const taskcontainer = document.createElement('div');
taskcontainer.id = 'todoContainer';
document.body.appendChild(taskcontainer);

const heading = document.createElement('h1');
heading.textContent = 'My Tasks';
taskcontainer.appendChild(heading);

const taskControls = document.createElement('div');
taskControls.id = 'taskControls';
taskcontainer.appendChild(taskControls);

const taskInput = document.createElement('input');
taskInput.id = 'taskInput';
taskInput.type = 'text';
taskInput.placeholder = 'Enter a task';
taskControls.appendChild(taskInput);

const addtaskbutton = document.createElement('button');
addtaskbutton.id = 'addtaskButton';
addtaskbutton.textContent = 'Add Task';
taskControls.appendChild(addtaskbutton);

const taskList = document.createElement('ul');  
taskList.id = 'taskList';
taskcontainer.appendChild(taskList);


addtaskbutton.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (task === '') return;

    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
});
