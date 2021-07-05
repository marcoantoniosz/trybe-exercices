function palindromo(palavra){
    let palavraContraria = '';
    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        palavraContraria = palavraContraria + palavra[index];
    } if (palavraContraria === palavra) {
        console.log(true);
    } else {
        console.log(false);
    }
}
palindromo("ovo");