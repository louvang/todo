import header from './Header';
import displayCategory from './DisplayCategory';
import modalDiv from './EditTaskModal';
import displayTask from './DisplayTask';

const content = document.getElementById('content');
content.append(header);
content.append(modalDiv);

const todoContainer = document.createElement('div');
todoContainer.classList.add('todo-container');
content.append(todoContainer);

let categories = [],
  displayedCategories = [],
  tasks = [];

if (!localStorage.getItem('categories')) {
  // Default categories if none is saved in localStorage
  categories = [
    { name: '👩‍💻 Work', catId: 'camcz5962f' },
    { name: '🪴 Self-care & Health', catId: 'cw5u7v6lno' },
    { name: '📕 Miscellaneous', catId: 'c2hvbu98vc' },
  ];
  localStorage.setItem('categories', JSON.stringify(categories));
} else {
  categories = JSON.parse(localStorage.getItem('categories'));
}

if (!localStorage.getItem('displayedCategories')) {
  // Default displayedCategories if none is saved in localStorage
  displayedCategories = [
    { name: '👩‍💻 Work', catId: 'camcz5962f' },
    { name: '🪴 Self-care & Health', catId: 'cw5u7v6lno' },
    { name: '📕 Miscellaneous', catId: 'c2hvbu98vc' },
  ];
  localStorage.setItem('displayedCategories', JSON.stringify(displayedCategories));
} else {
  displayedCategories = JSON.parse(localStorage.getItem('displayedCategories'));
}

displayedCategories.forEach((category) => {
  displayCategory(category.name, category.catId);
});

if (!localStorage.getItem('tasks')) {
  // Default tasks if none is saved in localStorage
  tasks = [
    {
      category: 'cw5u7v6lno',
      desc: 'Morning skincare routine',
      priority: 'none',
      dueDate: '',
      completed: true,
      id: '89skoo1ue',
    },
    {
      category: 'cw5u7v6lno',
      desc: 'Morning workout',
      priority: 'none',
      dueDate: '',
      completed: false,
      id: 'ngw51u867',
    },
    {
      category: 'cw5u7v6lno',
      desc: 'Track calories (no more than 1200 cals)',
      priority: 'none',
      dueDate: '',
      completed: false,
      id: 'n7229rnaz',
    },
    {
      category: 'cw5u7v6lno',
      desc: 'Affirmations and meditation',
      priority: 'none',
      dueDate: '',
      completed: false,
      id: 'qza4hwyvv',
    },
    {
      category: 'c2hvbu98vc',
      desc: 'Finish reading SABRIEL by Garth Nix',
      priority: 'none',
      dueDate: '',
      completed: false,
      id: 'rgojjx09j',
    },
    {
      category: 'camcz5962f',
      desc: 'Push todo list app to GitHub',
      priority: 'high',
      dueDate: '2020-02-22',
      completed: true,
      id: '0z9oul22b',
    },
    {
      category: 'camcz5962f',
      desc: 'Update portfolio website',
      priority: 'medium',
      dueDate: '2020-03-02',
      completed: false,
      id: '3vv20j4bo',
    },
    {
      category: 'camcz5962f',
      desc: 'Renew domain names and their SSL certifications',
      priority: 'low',
      dueDate: '2020-08-14',
      completed: false,
      id: 'le8ysrrb4',
    },
    {
      category: 'c2hvbu98vc',
      desc: 'Call to get car brakes checked',
      priority: 'high',
      dueDate: '2020-02-24',
      completed: false,
      id: '34bv41i2s',
    },
  ];
  localStorage.setItem('tasks', JSON.stringify(tasks));
} else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

displayedCategories.forEach((displayedCategory) => {
  tasks.forEach((taskObj) => {
    if (taskObj.category == displayedCategory.catId) {
      let catId = taskObj.category;
      catId = `col-${catId.replace(/\s/g, '')}`;
      displayTask(taskObj.desc, taskObj.category, taskObj.priority, taskObj.dueDate, taskObj.completed, taskObj.id);
    }
  });
});
