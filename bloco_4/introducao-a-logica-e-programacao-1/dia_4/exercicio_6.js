function maiorNome(nomes) {
    i = 0;
    for (let index = 0; index < nomes.length; index += 1) {
        if (nomes[i].length < nomes[index].length) {
            i = index
        }
    } console.log(nomes[i])
}

maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);