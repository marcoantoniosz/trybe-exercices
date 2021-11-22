const headerC = document.querySelector('#header-container');
headerC.style.backgroundColor = 'rgb(0, 176, 105)';

const footerC = document.querySelector('#footer-container');
footerC.style.backgroundColor = 'green';

const etasks = document.querySelectorAll('.emergency-tasks div');
for (let i = 0; i < etasks.length; i += 1) {
    let atualTask = etasks[i];
    atualTask.style.backgroundColor = 'pink';
}

const netasks = document.querySelectorAll('.no-emergency-tasks div');
for (let i = 0; i < netasks.length; i += 1) {
    let atualTask = netasks[i];
    atualTask.style.backgroundColor = 'yellow';
}

const etasksh3 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < etasksh3.length; i += 1) {
    let atualTaskh3 = etasksh3[i];
    atualTaskh3.style.backgroundColor = 'purple';
}

const netasksh3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < netasksh3.length; i += 1) {
    let atualTaskh3 = netasksh3[i];
    atualTaskh3.style.backgroundColor = 'black';
}

