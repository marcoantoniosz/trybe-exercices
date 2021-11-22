const movimento = (peca) => {
    const pecaLower = peca.toLowerCase();
    if (pecaLower === 'rei') {
        return `Rei se movimenta, se deslocando uma casa na direção horizontal, vertical ou diagonal. Ele tem um movimento especial chamado roque.`;
    } else if (pecaLower === 'dama') {
        return `A Dama também chamada de Rainha possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.`;
    } else if (pecaLower === 'torre') {
        return `A Torre move-se em linha reta nas colunas e fileiras do Tabuleiro.`;
    } else if (pecaLower === 'bispo') {
        return `O Bispo movimenta-se em linhas retas nas diagonais do tabuleiro. Devido ele andar somente nas diagonais seu movimento é restrito pela cor das casas, ou seja, alcança somente 32 casas no tabuleiro (claras ou escuras).`;
    } else if (pecaLower === 'cavalo') {
        return `O Cavalo pode mover para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L, podendo pular peças intervenientes.`
    } else if (pecaLower === 'peão' || pecaLower === 'peao') {
        return `Peão se movimenta para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas.`;
    } else {
      return `Peça inválida`;
    }
}

console.log(movimento('cavalo'));