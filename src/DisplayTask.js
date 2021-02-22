import modalDiv from './EditTaskModal';
import deleteTask from './DeleteTask';
import saveTask from './SaveTask';
import editTask from './EditTask';
import completeTask from './CompleteTask';
import { format } from 'date-fns';

const displayTask = (task, category, priority, dueDate, completed, id) => {
  const taskDiv = document.createElement('div');
  taskDiv.id = `task-${id}`;
  taskDiv.classList.add('task');

  if (completed == false) {
    if (priority == 'low') {
      taskDiv.classList.add('low-priority');
    } else if (priority == 'medium') {
      taskDiv.classList.add('med-priority');
    } else if (priority == 'high') {
      taskDiv.classList.add('high-priority');
    }
  }

  const checkboxDiv = document.createElement('div');
  checkboxDiv.classList.add('checkbox');
  const checkboxIcon = document.createElement('i');
  if (completed == false) {
    checkboxIcon.classList.add('far', 'fa-square');
  } else {
    checkboxIcon.classList.add('far', 'fa-check-square');
  }

  checkboxIcon.id = `checkbox-${id}`;
  checkboxDiv.append(checkboxIcon);

  const descDiv = document.createElement('div');
  descDiv.classList.add('desc');
  descDiv.id = `desc-${id}`;
  descDiv.textContent = task;

  const ellipsisDiv = document.createElement('div');
  ellipsisDiv.classList.add('task-ellipsis');
  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.classList.add('fas', 'fa-ellipsis-v');
  ellipsisIcon.id = `editIcon-${id}`;

  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('due-date');
  dueDateDiv.id = `due-${id}`;
  if (dueDate != '') {
    let date = dueDate;
    let dateArr = date.split('-');
    const year = parseInt(dateArr[0]);
    const month = parseInt(dateArr[1]);
    const day = parseInt(dateArr[2]);

    let dateStr = format(new Date(year, month, day), 'PPP');
    dueDateDiv.textContent = `Due ${dateStr}`;
  }

  ellipsisDiv.append(ellipsisIcon);

  taskDiv.append(checkboxDiv);
  taskDiv.append(descDiv);
  taskDiv.append(ellipsisDiv);
  taskDiv.append(dueDateDiv);

  const catCol = document.getElementById(`col-${category}`);
  catCol.append(taskDiv);

  // Checkmark event listener
  const checkbox = document.getElementById(`checkbox-${id}`);
  checkbox.addEventListener('click', function () {
    if (checkbox.classList[1] == 'fa-square') {
      checkbox.classList.remove('fa-square');
      checkbox.classList.add('fa-check-square');
      completeTask(id, true);

      const taskDiv = document.getElementById(`task-${id}`);
      if (taskDiv.classList[1] == 'low-priority') {
        taskDiv.classList.remove('low-priority');
      } else if (taskDiv.classList[1] == 'med-priority') {
        taskDiv.classList.remove('med-priority');
      } else if (taskDiv.classList[1] == 'high-priority') {
        taskDiv.classList.remove('high-priority');
      }
    } else if (checkbox.classList[1] == 'fa-check-square') {
      checkbox.classList.remove('fa-check-square');
      checkbox.classList.add('fa-square');
      completeTask(id, false);

      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const index = tasks.findIndex((taskObj) => taskObj.id == id);
      if (tasks[index].priority == 'low') {
        taskDiv.classList.add('low-priority');
      } else if (tasks[index].priority == 'medium') {
        taskDiv.classList.add('med-priority');
      } else if (tasks[index].priority == 'high') {
        taskDiv.classList.add('high-priority');
      }
    }
  });

  // Ellipsis event listener
  const icon = document.getElementById(`editIcon-${id}`);
  icon.addEventListener('click', function () {
    modalDiv.style.display = 'block';
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    const selectedTask = allTasks.find((taskObj) => taskObj.id == id);

    const descInput = document.getElementById('task-desc');
    descInput.value = selectedTask.desc;

    const allRadios = document.getElementsByName('priority');
    allRadios.forEach((radioBtn) => {
      radioBtn.checked = false;
    });

    if (selectedTask.priority == 'none') {
      document.getElementById('none').checked = true;
    } else if (selectedTask.priority == 'low') {
      document.getElementById('low').checked = true;
    } else if (selectedTask.priority == 'medium') {
      document.getElementById('medium').checked = true;
    } else if (selectedTask.priority == 'high') {
      document.getElementById('high').checked = true;
    }

    const dueDateInput = document.getElementById('task-date');
    dueDateInput.value = selectedTask.dueDate;

    const deleteBtn = document.querySelector('.delete-task');
    deleteBtn.id = `delete-${id}`;

    const saveBtn = document.querySelector('.save-task');
    saveBtn.id = `save-${id}`;

    // Delete button event listener
    const taskToDelete = document.getElementById(`delete-${id}`);
    taskToDelete.addEventListener('click', function () {
      let taskToRemove = document.querySelector('.delete-task').id;
      taskToRemove = taskToRemove.slice(7);
      if (id == taskToRemove) {
        const confirmDeleteTask = confirm('Are you sure you want to delete this task?');

        if (confirmDeleteTask == true) {
          deleteTask(id);
          const taskToRemove = document.getElementById(`task-${id}`);
          taskToRemove.remove();
          modalDiv.style.display = 'none';
        }
      }
    });

    // Save button event listener
    const taskToSave = document.getElementById(`save-${id}`);
    taskToSave.addEventListener('click', function () {
      let taskToChange = document.querySelector('.save-task').id;
      taskToChange = taskToChange.slice(5);
      if (id == taskToChange) {
        const updatedDesc = document.getElementById('task-desc').value;
        const updatedDueDate = document.getElementById('task-date').value;
        let updatedPriority = '';

        if (document.getElementById('none').checked == true) {
          updatedPriority = 'none';
        } else if (document.getElementById('low').checked == true) {
          updatedPriority = 'low';
        } else if (document.getElementById('medium').checked == true) {
          updatedPriority = 'medium';
        } else if (document.getElementById('high').checked == true) {
          updatedPriority = 'high';
        }

        saveTask(id, updatedDesc, updatedPriority, updatedDueDate);
        editTask(id);
      }
      modalDiv.style.display = 'none';
    });
  });
};

export default displayTask;
