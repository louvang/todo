const completeTask = (editId, completionStatus) => {
  let tasks = [];
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const index = tasks.findIndex((taskObj) => taskObj.id == editId);
  tasks[index].completed = completionStatus;

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default completeTask;
