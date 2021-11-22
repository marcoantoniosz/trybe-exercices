// 1º
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

console.log(numbers.find(findDivisibleBy3And5));

// 2º

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (element) => element.length === 5;

console.log(names.find(findNameWithFiveLetters));

// 3º

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  

const findMusic = (element) => element.id == 31031685;

console.log(musicas.find(findMusic));
  


