/* retorna todos os numeros pares de 0 a 10 de uma lista */

/* variavel que guarda 10 valores, através de um array*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*numeros pares guarda array com metodo filtro, depois a função  que 
retorna item, resto de dois identico a 0 */

const numerospares = array.filter(function(item){ /*função imediata utilizada*/
    return item % 2 === 0; /*identifica os numeros pares*/
 });

/*console log printa todos os numeros pares*/
console.log(numerospares);

