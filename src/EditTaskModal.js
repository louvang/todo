const modalDiv = document.createElement('div');
modalDiv.classList.add('modal');
modalDiv.id = 'editModal';

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const closeSpan = document.createElement('span');
closeSpan.classList = 'close';
closeSpan.textContent = '×';
closeSpan.addEventListener('click', function () {
  modalDiv.style.display = 'none';
});

const editHeading = document.createElement('h2');
editHeading.textContent = 'Edit Task';

const descRow = document.createElement('div');
const tdLabel = document.createElement('label');
tdLabel.htmlFor = 'task-desc';
tdLabel.textContent = 'Description:';
descRow.append(tdLabel);
const tdInput = document.createElement('input');
tdInput.type = 'text';
tdInput.id = 'task-desc';
descRow.append(tdInput);

const priorityRow = document.createElement('div');
priorityRow.append('Priority:');
const noneRadio = document.createElement('input');
noneRadio.type = 'radio';
noneRadio.name = 'priority';
noneRadio.id = 'none';
noneRadio.value = 'none';
priorityRow.append(noneRadio);
const noneLabel = document.createElement('label');
noneLabel.htmlFor = 'none';
noneLabel.textContent = 'None';
priorityRow.append(noneLabel);

const lowRadio = document.createElement('input');
lowRadio.type = 'radio';
lowRadio.name = 'priority';
lowRadio.id = 'low';
lowRadio.value = 'low';
priorityRow.append(lowRadio);
const lowLabel = document.createElement('label');
lowLabel.htmlFor = 'low';
lowLabel.textContent = 'Low';
priorityRow.append(lowLabel);

const mediumRadio = document.createElement('input');
mediumRadio.type = 'radio';
mediumRadio.name = 'priority';
mediumRadio.id = 'medium';
mediumRadio.value = 'medium';
priorityRow.append(mediumRadio);
const mediumLabel = document.createElement('label');
mediumLabel.htmlFor = 'medium';
mediumLabel.textContent = 'Medium';
priorityRow.append(mediumLabel);

const highRadio = document.createElement('input');
highRadio.type = 'radio';
highRadio.name = 'priority';
highRadio.id = 'high';
highRadio.value = 'high';
priorityRow.append(highRadio);
const highLabel = document.createElement('label');
highLabel.htmlFor = 'high';
highLabel.textContent = 'High';
priorityRow.append(highLabel);

const dateRow = document.createElement('div');
const ddLabel = document.createElement('label');
ddLabel.htmlFor = 'task-date';
ddLabel.textContent = 'Due Date (YYYY-MM-DD):';
dateRow.append(ddLabel);
const dateInput = document.createElement('input');
dateInput.type = 'date';
dateInput.id = 'task-date';
dateRow.append(dateInput);

const saveRow = document.createElement('div');
saveRow.id = 'save-row';
const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-task');
deleteBtn.textContent = 'Delete Task';
saveRow.append(deleteBtn);
const saveBtn = document.createElement('button');
saveBtn.classList.add('save-task');
saveBtn.textContent = 'Save Task';
saveRow.append(saveBtn);

modalContent.append(closeSpan);
modalContent.append(editHeading);
modalContent.append(descRow);
modalContent.append(priorityRow);
modalContent.append(dateRow);
modalContent.append(saveRow);

modalDiv.append(modalContent);

window.onclick = function (event) {
  if (event.target == modalDiv) {
    modalDiv.style.display = 'none';
  }
};

export default modalDiv;
