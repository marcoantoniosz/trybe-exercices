let custoProduto = 1;
let valorVenda = 5;
let custoTotalProduto = (custoProduto) * (1.2);

if (custoProduto < 0 || valorVenda < 0) {
    console.log("Número invalido - negativo");
} else if (custoProduto > 0 && valorVenda > 0) {
    let lucro = (valorVenda - custoTotalProduto) * (1000);
    console.log(lucro)
};