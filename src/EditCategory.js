const editCategory = (oldTitle, newTitle) => {
  const getCategories = JSON.parse(localStorage.getItem('categories'));
  const getDisplayedCategories = JSON.parse(localStorage.getItem('displayedCategories'));

  const newTitleExists = getCategories.findIndex((category) => {
    return category.name == newTitle;
  });

  if (newTitleExists != -1) {
    alert(`There's already a title with that name.`);
  } else {
    const index = getCategories.findIndex((category) => {
      return category.name == oldTitle;
    });

    if (index != -1) {
      getCategories[index].name = newTitle;
      localStorage.setItem('categories', JSON.stringify(getCategories));
    }

    const displayedCatIndex = getDisplayedCategories.findIndex((category) => {
      return category == oldTitle;
    });

    if (displayedCatIndex != -1) {
      getDisplayedCategories[displayedCatIndex] = newTitle;
      localStorage.setItem('displayedCategories', JSON.stringify(getDisplayedCategories));
    }
  }
};

export default editCategory;
