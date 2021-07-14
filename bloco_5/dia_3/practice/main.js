const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const techAtual = document.getElementsByClassName('tech');
const but = document.getElementById('but');
const top3 = document.getElementById('my-spotrybefy');

firstDiv.addEventListener('click', mudaClasse);
secondDiv.addEventListener('click', mudaClasse);
thirdDiv.addEventListener('click', mudaClasse);
input.addEventListener('change', mudaTexto);
top3.addEventListener('dblclick', redireciona);
top3.addEventListener('mouseover', mudaCor);
top3.addEventListener('mouseout', voltaCor)

function voltaCor () {
  top3.style.color = 'black';
}

function mudaCor (){
  top3.style.color = 'blue';
}

function redireciona(){
  window.location.href = 'http://marcoantoniosz.github.io'
}

function mudaTexto () {
  if (input.value !== '') {
  techAtual[0].innerText = input.value;
  }
}

function mudaClasse(evento) {
  firstDiv.className = 'vazio';
  secondDiv.className = 'vazio';
  thirdDiv.className = 'vazio';
  evento.target.className = 'tech';
}
