let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let resultado = [];

for (let index = 0; index < numbers.length; index += 1) {
    resultado.push(numbers[index] % 2);
}

console.log(resultado);