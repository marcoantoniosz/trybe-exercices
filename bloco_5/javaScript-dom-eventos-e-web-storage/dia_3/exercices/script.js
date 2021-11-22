function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDayz(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listaMae = document.getElementById('days');

  for(let i = 0; i < dezDaysList.length; i += 1) {
    const diaAtual = dezDaysList[i];
    const diaMes = document.createElement('li');
    diaMes.innerText = diaAtual;

    if (diaAtual === 25) {
      diaMes.classList = 'day holiday friday';
    } else if (diaAtual === 24 || diaAtual === 31) {
      diaMes.classList = 'day holiday';
    } else if (diaAtual === 4 || diaAtual === 11 || diaAtual === 18){
      diaMes.classList = 'day friday';
    } else {
      diaMes.classList = 'day';
    }
    listaMae.appendChild(diaMes);
  };
};

createDayz();

function createButton (Feriados) {
  const maeBotao = document.querySelector('.buttons-container');
  const criaBotao = document.createElement('button');
  criaBotao.innerText = 'Feriados';
  criaBotao.id = 'btn-holiday';
  maeBotao.appendChild(criaBotao);
}

createButton();

const arrayFeriados = document.getElementsByClassName('holiday');
const botaoFeriados = document.getElementById('btn-holiday');
botaoFeriados.addEventListener('click', mudaCor)

function mudaCor ()  {
  for (let i = 0; i < arrayFeriados.length; i += 1) {
    if (arrayFeriados[i].style.backgroundColor === ''){
    arrayFeriados[i].style.backgroundColor = 'pink';
    } else {
      arrayFeriados[i].style.backgroundColor = '';
    }
  };
};


function createButton2 (Sextas) {
  const maeBotao = document.querySelector('.buttons-container');
  const criaBotao = document.createElement('button');
  criaBotao.innerText = 'Sexta-Feira';
  criaBotao.id = 'btn-friday';
  maeBotao.appendChild(criaBotao);
}

createButton2();

const arraySextas = document.getElementsByClassName('friday');
const botaoSextas = document.getElementById('btn-friday');
botaoSextas.addEventListener('click', mudaTexto)

function mudaTexto () {
  for (let i = 0; i < arraySextas.length; i += 1) {
    if (arraySextas[i].style.backgroundColor !== 'yellow'){
      arraySextas[i].style.backgroundColor = 'yellow';
      arraySextas[i].innerHTML = 'SEXTOU!';
      } else {
        arraySextas[i].style.backgroundColor = '';
        arraySextas[i].innerHTML = arraySextas[i];
      }
  }
}
