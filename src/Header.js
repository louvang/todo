const header = document.createElement('header');

const logoText = document.createElement('h1');
logoText.textContent = 'Todo';

const bugLink = document.createElement('a');
bugLink.href = 'https://github.com/louvang/todo/issues/new';
bugLink.target = '_blank';
bugLink.textContent = 'Report a Bug';

header.append(logoText);
header.append(bugLink);

export default header;
