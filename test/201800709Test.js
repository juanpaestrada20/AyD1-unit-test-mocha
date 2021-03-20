const assert = require('chai').assert;
const funciones = require('../201800709.js');

// Pruebas Unitarias
describe('Funciones 201800709', () => {
	describe('Fibonacci()', () => {
		const fibonacciNegativo = funciones.fibonacci(-5);
		const fibonacciUno = funciones.fibonacci(1);
		const fibonacciEntero = funciones.fibonacci(8);
		const fibonacciDecimal = funciones.fibonacci(2.5);
		it('Sucesión de Fibonacci de número negativo', () =>
			assert.strictEqual(fibonacciNegativo, 0, 'Debe retornar 0'));
		it('Sucesión de Fibonacci de 1', () =>
			assert.strictEqual(fibonacciUno, 1, 'Debe retornar 1'));
		it('Sucesión de Fibonacci de número mayor a 2', () =>
			assert.strictEqual(fibonacciEntero, 21, 'Debe retornar 21'));
		it('Sucesión de Fibonacci de número decimal', () =>
			assert.strictEqual(fibonacciDecimal, 1, 'Debe retornar 1'));
	});
	describe('esPar()', () => {
		const esParNegativoImpar = funciones.esPar(-5);
		const esParNegativoPar = funciones.esPar(-16);
		const esParImpar = funciones.esPar(7);
		const esParEntero = funciones.esPar(8);
		it('Verificacion de número negativo para ver si -5 es par', () =>
			assert.isFalse(
				esParNegativoImpar,
				'El numero negativo -5 no es par'
			));
		it('Verificacion de numero negativo para ver si -16 es par', () =>
			assert.isTrue(esParNegativoPar, 'El numero negativo -16 es par'));
		it('Verificar funcionalidad con un numero impar sea falso', () =>
			assert.isFalse(esParImpar, 'El numero 7 no es par'));
		it('Verificacion de número par entero funcione', () =>
			assert.isTrue(esParEntero, 'El numero 8 es par'));
	});
	describe('esImpar()', () => {
		const esImparNegativoImpar = funciones.esImpar(-5);
		const esImparNegativoPar = funciones.esImpar(-16);
		const esImparImpar = funciones.esImpar(7);
		const esImparEntero = funciones.esImpar(8);
		it('Verificacion de número negativo para ver si -5 es impar', () =>
			assert.isTrue(
				esImparNegativoImpar,
				'El numero negativo -5 es impar'
			));
		it('Verificacion de numero negativo para ver si -16 es impar', () =>
			assert.isFalse(
				esImparNegativoPar,
				'El numero negativo -16 no es impar'
			));
		it('Verificar funcionalidad con un numero impar sea verdadero', () =>
			assert.isTrue(esImparImpar, 'El numero 7 es impar'));
		it('Verificacion de número par entero no sea verdadero', () =>
			assert.isFalse(esImparEntero, 'El numero 8 no es impar'));
	});
	describe('ordenamientoBurbuja()', () => {
		const arregloPrueba = [5, 98, 14, 1, 5, -9, 4];
		const arregloOrdenado = funciones.ordenamientoBurbuja(arregloPrueba);
		it('Verificacion de que el arreglo se ordene de forma ascendente', () =>
			assert.deepEqual(
				arregloOrdenado,
				[-9, 1, 4, 5, 5, 14, 98],
				'Arreglo ordenado correctamente'
			));
		it('Verificar que la funcion si retorne un arreglo', () =>
			assert.isArray(arregloOrdenado, 'Si retorna un arreglo'));
	});
	describe('promedio()', () => {
		const arregloPrueba = [8, 14, 1, 5, 9, 4, 8];
		const promedio = funciones.promedio(arregloPrueba);
		it('Verificacion de que el arreglo se ordene de forma ascendente', () =>
			assert.strictEqual(promedio, 7, 'Promedio obtenido correctamente'));
		it('Verificar que la funcion no retorne un arreglo', () =>
			assert.isNotArray(promedio, 'No retorna un arreglo'));
	});
	describe('numeroMayor()', () => {
		const primero = funciones.numeroMayor(1, -1);
		const segundo = funciones.numeroMayor(8, 59);
		const iguales = funciones.numeroMayor(5, 5);
		it('Comprobar que el primer numero de los parametros es mayor', () =>
			assert.strictEqual(
				primero,
				'El mayor es 1',
				'Primer valor es mayor'
			));
		it('Comprobar que el segundo numero de los parametros es mayor', () =>
			assert.strictEqual(
				segundo,
				'El mayor es 59',
				'Segundo valor es mayor'
			));
		it('Comprobar que los numero de los parametros son iguales', () =>
			assert.strictEqual(
				iguales,
				'Son iguales',
				'Ambos numeros son iguales'
			));
	});
	describe('numeroMenor()', () => {
		const primero = funciones.numeroMenor(-91, -1);
		const segundo = funciones.numeroMenor(88, 9);
		const iguales = funciones.numeroMenor(54, 54);
		it('Comprobar que el primer numero de los parametros es menor', () =>
			assert.strictEqual(
				primero,
				'El menor es -91',
				'Primer valor es menor'
			));
		it('Comprobar que el segundo numero de los parametros es menor', () =>
			assert.strictEqual(
				segundo,
				'El menor es 9',
				'Segundo valor es menor'
			));
		it('Comprobar que los numero de los parametros son iguales', () =>
			assert.strictEqual(
				iguales,
				'Son iguales',
				'Ambos numeros son iguales'
			));
	});
});
