let salarioBruto = 1556.94;
let inss;
let ir;

if (salarioBruto <= 1556.94) {
    inss = ((salarioBruto * 8) / 100);
} else if (salarioBruto <= 2594.92) {
    inss = ((salarioBruto * 9) / 100);
} else if (salarioBruto <= 5189.82) {
    inss = ((salarioBruto * 11) / 100);
} else if (salarioBruto > 5189.82) {
    inss = 570.88;
}
