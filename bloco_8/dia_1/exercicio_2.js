const sorteio = () => {
    const numbers = [1, 2, 3, 4, 5];
    const sorteio = parseInt(Math.random() * 5);
    return numbers[sorteio];
};

const sorteador = (num, func) => {
    const numeroSorteado = func();
    if(num === numeroSorteado){
        return `Parabéns você ganhou!!!`;
    }
    return `Tente novamente`;
};

