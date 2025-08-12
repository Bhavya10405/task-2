const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"> ${taskText}`;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});
