const estado = (num) => {
    if (num === 0){
        return 'zero';
    } else if (num < 0){
        return 'negativo';
    }
    return 'positivo';
};

console.log(estado(-12));