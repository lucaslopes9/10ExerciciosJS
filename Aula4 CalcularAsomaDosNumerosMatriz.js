/*  Calcule a soma dos números dentro de uma matriz[array]
Você pode criar sua própria matriz de números, mas considere tentar esse problema com alguns conjuntos diferentes para verificar sua solução. Tenha um array com números negativos e positivos e outro com números inteiros e decimais.
Você também pode tentar usar matrizes de comprimentos diferentes. Se você se sentir confortável com isso, experimente o desafio bônus um pouco mais desafiador abaixo.
Desafio intermediário bônus: crie uma função que possa retornar a soma de uma determinada coluna ou número de linha em uma tabela.*/

function somaMatriz(matriz) {
  return matriz.reduce((total, linha) => total + linha.reduce((soma, numero) => soma + numero, 0), 0);
}

const matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const resultado1 = somaMatriz(matriz1);
console.log("Soma da matriz 1:", resultado1);

const matriz2 = [
  [1.5, 2.5],
  [3.5, 4.5],
  [5.5, 6.5]
];
const resultado2 = somaMatriz(matriz2);
console.log("Soma da matriz 2:", resultado2);