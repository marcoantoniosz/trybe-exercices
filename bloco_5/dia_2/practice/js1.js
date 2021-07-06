const elementoAtual = document.querySelector('#elementoOndeVoceEsta');
const pai = elementoAtual.parentNode;
pai.style.color = "blue";
elementoAtual.firstElementChild.innerText = "Olá, mundo";
console.log(pai.firstElementChild);
console.log(elementoAtual.previousElementSibling);
console.log(elementoAtual.nextSibling);
console.log(elementoAtual.nextElementSibling);
console.log(pai.firstElementChild.nextElementSibling.nextElementSibling);
