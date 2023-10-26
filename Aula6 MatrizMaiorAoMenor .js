/*
6.Classifique uma matriz do menor para o maior
Você também pode criar uma função para esta solução, mas não deixe de testar seu programa com comprimentos e tipos variados de matrizes. 
Experimente um com todos os números inteiros, outro com números negativos e outro com decimais.
/

/*encontrar o maior numero e menor numero de um array*/

/*Dado um array com números inteiros, imprima apenas o maior número*/


function ordenarArray(array) {


    array.sort(function(a, b) {
      return a - b;
    });
    return array;
  }
  const numerosInteiros = [5, 2, 9, 1, 5];
  const numerosNegativos = [-3, -1, -5, -2, -4];
  const numerosDecimais = [2.5, 1.1, 3.3, 0.5, 4.7];
  
  console.log("Números inteiros ordenados:", ordenarArray(numerosInteiros));
  console.log("Números negativos ordenados:", ordenarArray(numerosNegativos));
  console.log("Números decimais ordenados:", ordenarArray(numerosDecimais));
  
  Essa função ordenarArray recebe uma matriz de números e a classifica do menor para o maior usando a função de comparação na função sort.
  
  function encontrarMaiorNumero(array) {
    return Math.max(...array);
  }
  
  const numeros = [5, 2, 9, 1, 5];
  const maiorNumero = encontrarMaiorNumero(numeros);
  console.log("O maior número na matriz é:", maiorNumero);
  
  Essa função encontrarMaiorNumero retorna o maior número da matriz fornecida.



/*numeros.sort(); // aqui ele vai ordernar do menor para o maior*/
/*numeros.reverse(); // aqui ele vai inverter as posições fazendo o efeito desejado*/

