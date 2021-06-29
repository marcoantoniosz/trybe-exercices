function maiorNumero(numeros) {
	let i = 0;
	for (index = 0; index < numeros.length; index += 1) {
		if (numeros[i] < numeros[index]) {
			i = index;
		}
	} console.log(i)
}

maiorNumero([2, 3, 6, 7, 10, 1])


