let taskList = [];
//initialize task list from local storage
taskList = JSON.parse(localStorage.getItem("taskList")) || [];

window.onload = () => renderTasks(taskList);

document.getElementById("add-task-button").addEventListener("click", addTask);

function addTask() {
  let taskInputElement = document.getElementById("to-do-input");
  const task = taskInputElement.value;
  let dueDateElement = document.getElementById("date-input");
  const taskDueDate = dueDateElement.value;

  // Should validate empty inputs
  if (!task.trim()) return;

  taskList.push({
    task,
    taskDueDate,
  });
  taskInputElement.value = "";
  dueDateElement.value = "";

  //save to local storage
  localStorage.setItem("taskList", JSON.stringify(taskList));

  renderTasks(taskList);
}

function renderTasks(taskList) {
  const taskListContainer = document.getElementById("task-list-container");
  let renderedTasks = "";

  taskList.forEach(function (task, index) {
    renderedTasks += `
        <div>
        ${escapeHtml(task.task)}
        </div>
        <div>
        ${escapeHtml(task.taskDueDate)}
        </div>
        <button class="delete-task-button" onclick="deleteTask(${index})">Delete</button>
    `;
  });
  taskListContainer.innerHTML = renderedTasks;
}

function deleteTask(index) {
  const taskListContainer = document.getElementById("task-list-container");
  taskList.splice(index, 1);

  //adjust local storage
  localStorage.setItem("taskList", JSON.stringify(taskList));

  renderTasks(taskList);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
