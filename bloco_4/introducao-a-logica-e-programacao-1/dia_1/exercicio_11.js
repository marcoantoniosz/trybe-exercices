let salarioBruto = 3000;
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
};

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase <= 2.826,65) {
    ir = ((salarioBase * 7.5) / 100) - (142.80);
} else if (salarioBase <= 3751.05) {
    ir = ((salarioBase * 15) / 100) - (354.80);
} else if (salarioBase <= 4664.68) {
    ir = ((salarioBase * 22.5) / 100) - (636.13);
} else if (salarioBase > 4664.68) {
    ir = ((salarioBase * 27.5) / 100) - (869.36);
};

let salarioLiquido = salarioBruto - inss - ir;

console.log(inss, ir, salarioLiquido);