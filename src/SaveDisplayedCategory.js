const saveDisplayedCategory = (catName, index) => {
  let displayedCategories = [];
  if (localStorage.getItem('displayedCategories')) {
    displayedCategories = JSON.parse(localStorage.getItem('displayedCategories'));
  }

  displayedCategories[index].name = catName;
  localStorage.setItem('displayedCategories', JSON.stringify(displayedCategories));
};

export default saveDisplayedCategory;
