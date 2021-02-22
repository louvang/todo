import { format } from 'date-fns';

const editTask = (editId) => {
  let tasks = [];
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const index = tasks.findIndex((taskObj) => {
    return taskObj.id == editId;
  });

  const taskDesc = document.getElementById(`desc-${editId}`);
  taskDesc.textContent = tasks[index].desc;

  const taskDueDate = document.getElementById(`due-${editId}`);
  if (tasks[index].dueDate == '') {
    taskDueDate.textContent = '';
  } else {
    let date = tasks[index].dueDate;
    let dateArr = date.split('-');
    const year = parseInt(dateArr[0]);
    const month = parseInt(dateArr[1]);
    const day = parseInt(dateArr[2]);

    let dateStr = format(new Date(year, month, day), 'PPP');
    taskDueDate.textContent = `Due ${dateStr}`;
  }

  const taskDiv = document.getElementById(`task-${editId}`);
  if (taskDiv.classList[1] == 'low-priority') {
    taskDiv.classList.remove('low-priority');
  } else if (taskDiv.classList[1] == 'med-priority') {
    taskDiv.classList.remove('med-priority');
  } else if (taskDiv.classList[1] == 'high-priority') {
    taskDiv.classList.remove('high-priority');
  }

  if (tasks[index].completed == false) {
    if (tasks[index].priority == 'low') {
      taskDiv.classList.add('low-priority');
    } else if (tasks[index].priority == 'medium') {
      taskDiv.classList.add('med-priority');
    } else if (tasks[index].priority == 'high') {
      taskDiv.classList.add('high-priority');
    }
  }
};

export default editTask;
