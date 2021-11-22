const dado1 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const dado2 = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let gab;
let resp;

const totalDePontos = (respostas, gabarito, funcao) => {
  gab = gabarito;
  resp = respostas;
  return funcao();
}


const comparaRespostas = () => {
  let soma = 0;
  for(let i = 0; i < gab.length; i += 1) {
    if (resp[i] === gab[i]){
      soma = soma + 1; 
    } else if (resp[i] === 'N.A') {
      soma = soma + 0;
    } else {
      soma = soma - 0.5;
    }
  }
  return `A pontuação total foi de ${soma} pontos`;
}

console.log(totalDePontos(dado2, dado1, comparaRespostas));



