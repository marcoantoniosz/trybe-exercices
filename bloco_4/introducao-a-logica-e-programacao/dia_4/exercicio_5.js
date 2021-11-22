function menorNumero(numeros) {
	let i = 0;
	for (index = 0; index < numeros.length; index += 1) {
		if (numeros[i] > numeros[index]) {
			i = index;
		}
	} console.log(i)
}

menorNumero([2, 3, 6, 7, 10, 20])