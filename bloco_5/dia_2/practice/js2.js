const elementoAtual = document.querySelector('#elementoOndeVoceEsta');
const pai = elementoAtual.parentNode;
const pFDF = document.querySelector('#primeiroFilhoDoFilho');
pai.style.color = "blue";
elementoAtual.firstElementChild.innerText = "Olá, mundo";
console.log(pai.firstElementChild);
console.log(elementoAtual.previousElementSibling);
console.log(elementoAtual.nextSibling);
console.log(elementoAtual.nextElementSibling);
console.log(pai.firstElementChild.nextElementSibling.nextElementSibling);

const novoElemento = document.createElement('div');
novoElemento.id = "EA2";
pai.appendChild(novoElemento);

const novoElemento2 = document.createElement('div');
novoElemento2.id = "EAF";
elementoAtual.appendChild(novoElemento2);

const novoElemento3 = document.createElement('div');
novoElemento3.id = "pfdff";
pFDF.appendChild(novoElemento3);

const filhoCriado = document.querySelector('#pfdff');

console.log(filhoCriado.parentElement.parentElement.nextElementSibling);
