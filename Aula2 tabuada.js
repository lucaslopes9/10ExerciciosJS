/*imprimir tabela com tabuadas 1 a 10 */

/*alterado com git status*/
var valor = 1;

for(var i =1; i < 11; i++){
    console.log(valor + "x" + i + "= " + (valor * i));
    for(var j = 1; j < 11; j++){
        console.log(i + "x" + j + "");
    }
}

