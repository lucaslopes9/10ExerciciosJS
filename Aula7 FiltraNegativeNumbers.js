
/*10. 
Retorne o número de vogais em uma string
Crie uma função que retornará um número inteiro do número de vogais, encontradas em uma string. 
Esta é uma ótima maneira de praticar a determinação dos recursos de um conjunto de dados. 
Se você usar JavaScript mais tarde em sua carreira, estará bem preparado para determinar em 
que consistem os conjuntos de dados 
(ou apenas strings). Se você quiser um desafio extra, considere retornar o número de caracteres.*/



function contarVogais(string) {
 
    string = string.toLowerCase();
    
   
    const vogais = "aeiou";
    
    let contador = 0;
    
    for (let i = 0; i < string.length; i++) {
      if (vogais.includes(string[i])) {
        contador++;
      }
    }
    
    return contador;
  }
  
  const minhaString = "Esta é uma string de exemplo";
  const numeroDeVogais = contarVogais(minhaString);
  console.log(`O número de vogais na string é: ${numeroDeVogais}`)