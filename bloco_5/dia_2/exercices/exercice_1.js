const newTitle = document.createElement('h1');
const masterBody = document.getElementsByTagName('body')[0];
newTitle.className = 'title';
newTitle.innerText = 'Exercício 5.2 - JavaScript DOM';
masterBody.appendChild(newTitle)

const newMainDiv = document.createElement('div');
newMainDiv.className = 'main-content';
masterBody.appendChild(newMainDiv);

