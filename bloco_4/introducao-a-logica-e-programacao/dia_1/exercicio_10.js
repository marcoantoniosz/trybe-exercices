let custoProduto = 10;
let valorVenda = 30;
let custoTotalProduto = (custoProduto) * (1.2);
let lucro = (valorVenda - custoTotalProduto);

if (custoProduto < 0 || valorVenda < 0) {
    console.log("Número invalido - negativo");
} else if (custoProduto > 0 && valorVenda > 0) {
    console.log(lucro * 1000);
};