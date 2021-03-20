module.exports = {
	fibonacci: function (n) {
		return n < 1
			? 0
			: n <= 2
			? 1
			: this.fibonacci(n - 1) + this.fibonacci(n - 2);
	},
	esPar: function (n) {
		return n % 2 === 0;
	},
	esImpar: function (n) {
		return n % 2 !== 0;
	},
	ordenamientoBurbuja: function (arreglo) {
		let aux;
		for (let i = 1; i < arreglo.length; i++) {
			for (let j = 0; j < arreglo.length - i; j++) {
				if (arreglo[j] > arreglo[j + 1]) {
					aux = arreglo[j];
					arreglo[j] = arreglo[j + 1];
					arreglo[j + 1] = aux;
				}
			}
		}
		return arreglo;
	},
	promedio: function (valores) {
		let promedio = 0;
		valores.forEach((valor) => (promedio += valor));
		return promedio / valores.length;
	},
	numeroMayor: function (n1, n2) {
		return n1 > n2
			? `El mayor es ${n1}`
			: n1 === n2
			? `Son iguales`
			: `El mayor es ${n2}`;
	},
	numeroMenor: function (n1, n2) {
		return n1 < n2
			? `El menor es ${n1}`
			: n1 === n2
			? `Son iguales`
			: `El menor es ${n2}`;
	},
};
