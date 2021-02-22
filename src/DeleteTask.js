const deleteTask = (id) => {
  let tasks = [];
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const index = tasks.findIndex((taskObj) => {
    return taskObj.id == id;
  });

  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default deleteTask;
