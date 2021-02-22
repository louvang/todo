const saveTask = (editId, editDesc, editPriority, editDueDate) => {
  let tasks = [];
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const index = tasks.findIndex((taskObj) => {
    return taskObj.id == editId;
  });

  if (index > -1) {
    tasks[index].desc = editDesc;
    tasks[index].priority = editPriority;
    tasks[index].dueDate = editDueDate;
  } else {
    alert(`Sorry, that task doesn't seem to exist anymore.`);
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default saveTask;
