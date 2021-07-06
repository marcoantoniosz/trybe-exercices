const newTitle = document.createElement('h1');
const masterBody = document.getElementsByTagName('body')[0];
newTitle.className = 'title';
newTitle.innerText = 'Exercício 5.2 - JavaScript DOM';
masterBody.appendChild(newTitle)

const newMainDiv = document.createElement('div');
newMainDiv.className = 'main-content';
masterBody.appendChild(newMainDiv);

for (let i = 1; i <= 3; i += 1) {
  let mainDivs = document.createElement('div');
  mainDivs.className = 'main-divs';
  newMainDiv.appendChild(mainDivs);
}

const newLeftDiv = document.createElement('div');
newLeftDiv.className = 'left-content';
newMainDiv.appendChild(newLeftDiv);

const newLeftImage = document.createElement('img');
newLeftImage.src = 'https://picsum.photos/200';
newLeftImage.className = 'small-image'
newLeftDiv.appendChild(newLeftImage);

const newRightDiv = document.createElement('div');
newRightDiv.className = 'right-content';
newMainDiv.appendChild(newRightDiv);

const newUl = document.createElement('ul');
newUl.className = 'newCUl';
newRightDiv.appendChild(newUl);

for(let i = 1; i <= 10; i += 1) {
  let criaLis = document.createElement('li');
  criaLis.className = 'list-item';
  criaLis.innerText = i;
  newUl.appendChild(criaLis);
}

const newCenterContent = document.createElement('div');
newCenterContent.className = 'center-content';
newMainDiv.appendChild(newCenterContent);

const newParagraph = document.createElement('p');
newParagraph.className = 'main-paragraph-1';
newParagraph.innerText = 'Final Fantasy XIV (ファイナルファンタジーXIV Fainaru Fantajī Fōtīn?), também chamado de Final Fantasy XIV Online, é um jogo eletrônico MMORPG desenvolvido pela Square Enix exclusivamente para Microsoft Windows. É o décimo quarto jogo principal da série Final Fantasy e o segundo MMORPG da franquia após Final Fantasy XI. Ele se passa em Eorzea e os jogadores assumem o controle de um avatar customizável enquanto exploram o mundo, sendo pegos tanto na invasão do Império Garleano quanto na ameaça dos Primals, divindades das tribos locais. Eventualmente eles se envolvem em um complô de um legato garleano para destruir os Primals ao colidir um dos satélites naturais do planeta com Eorzea.'
newCenterContent.appendChild(newParagraph);



