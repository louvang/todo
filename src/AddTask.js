let tasks = [];
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

class Task {
  constructor(category, desc, priority, dueDate, completed, id) {
    this.category = category;
    this.desc = desc;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = completed;
    this.id = id;
  }
}

const addTask = (newTask, category, id) => {
  tasks.push(new Task(category, newTask, 'none', '', false, id));
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default addTask;
