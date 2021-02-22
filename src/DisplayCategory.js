import editCategory from './EditCategory';
import saveDisplayedCategory from './SaveDisplayedCategory';
import addTask from './AddTask';
import displayTask from './DisplayTask';

const displayCategory = (catName, catId) => {
  let displayedCategories = JSON.parse(localStorage.getItem('displayedCategories'));

  const column = document.createElement('div');
  column.classList.add('column');
  document.querySelector('.todo-container').append(column);

  const catHeading = document.createElement('div');
  catHeading.classList.add('cat-heading');
  column.append(catHeading);

  const catTitle = document.createElement('div');
  catTitle.classList.add('cat-title');
  catHeading.append(catTitle);

  const inputCatTitle = document.createElement('input');
  inputCatTitle.type = 'text';
  inputCatTitle.value = catName;
  column.id = `col-${catId}`;
  inputCatTitle.id = `cat-${catId}`;
  catTitle.append(inputCatTitle);
  const titleInput = document.getElementById(`cat-${catId}`);
  const oldTitle = titleInput.value;

  let colIndex = 0;
  if (displayedCategories) {
    colIndex = displayedCategories.findIndex((category) => {
      return category.catId == catId;
    });
  }

  inputCatTitle.onkeyup = function (e) {
    if (e.key == 'Enter' && inputCatTitle.value.length > 3) {
      editCategory(oldTitle, inputCatTitle.value);
      let updatedTitle = inputCatTitle.value;
      inputCatTitle.blur();

      saveDisplayedCategory(updatedTitle, colIndex);
    }
  };

  window.addEventListener('click', function () {
    displayedCategories = JSON.parse(localStorage.getItem('displayedCategories'));
    if (inputCatTitle.value != displayedCategories[colIndex].name) {
      editCategory(oldTitle, inputCatTitle.value);
      let updatedTitle = inputCatTitle.value;
      inputCatTitle.blur();

      saveDisplayedCategory(updatedTitle, colIndex);
    }
  });

  const catDropdownArrow = document.createElement('div');
  catDropdownArrow.classList.add('cat-arrow');
  catHeading.append(catDropdownArrow);

  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fas', 'fa-caret-down');
  arrowIcon.id = `ddIcon-${catId}`;

  catDropdownArrow.append(arrowIcon);

  const dropdown = document.createElement('div');
  dropdown.classList.add('cat-dropdown');
  dropdown.id = `dd-${catId}`;
  catDropdownArrow.append(dropdown);

  const addTaskForm = document.createElement('div');
  addTaskForm.classList.add('add-task-form');
  column.append(addTaskForm);

  const addTaskFormCol1 = document.createElement('div');
  addTaskFormCol1.classList.add('task-form-col-1');
  addTaskForm.append(addTaskFormCol1);

  const newTaskInput = document.createElement('input');
  newTaskInput.type = 'text';
  newTaskInput.placeholder = 'Create new task';
  newTaskInput.id = `task-${catId}`;
  addTaskFormCol1.append(newTaskInput);

  const addTaskFormCol2 = document.createElement('div');
  addTaskFormCol2.classList.add('task-form-col-2');
  addTaskForm.append(addTaskFormCol2);

  const addTaskBtn = document.createElement('button');
  addTaskBtn.textContent = 'Add';
  addTaskBtn.id = `add-to-${catId}`;
  addTaskBtn.addEventListener('click', function () {
    const newTaskDesc = newTaskInput.value;
    if (newTaskDesc.length > 3) {
      const taskID = Math.random().toString(36).substr(2, 9);
      addTask(newTaskDesc, catId, taskID);
      displayTask(newTaskDesc, catId, 'none', '', false, taskID);
      newTaskInput.value = '';
    }
  });
  addTaskFormCol2.append(addTaskBtn);

  newTaskInput.onkeypress = function (e) {
    const newTaskDesc = newTaskInput.value;
    if (e.key == 'Enter' && newTaskDesc.length > 3) {
      const taskID = Math.random().toString(36).substr(2, 9);
      addTask(newTaskDesc, catId, taskID);
      displayTask(newTaskDesc, catId, 'none', '', false, taskID);
      newTaskInput.value = '';
    }
  };
};

export default displayCategory;
