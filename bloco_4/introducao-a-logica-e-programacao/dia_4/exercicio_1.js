let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Bem vinda,", info.personagem + "!")
info.recorrente = 'Sim'
console.log(info)

for(infos in info) {
    console.log(infos)
}

for(infos in info) {
    console.log(info[infos])
}

