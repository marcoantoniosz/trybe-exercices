const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const techAtual = document.getElementsByClassName('tech');
const but = document.getElementById('but');


firstDiv.addEventListener('click', mudaClasse);
secondDiv.addEventListener('click', mudaClasse);
thirdDiv.addEventListener('click', mudaClasse);
input.addEventListener('change', mudaTexto);



function mudaTexto () {
  techAtual[0].innerText = input.value;
}

function mudaClasse(evento) {
  firstDiv.className = 'vazio';
  secondDiv.className = 'vazio';
  thirdDiv.className = 'vazio';
  evento.target.className = 'tech';
}



/*

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.