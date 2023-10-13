function contarVogais(string, contarCaracteres = false) {
    let vogais = 'aeiouAEIOU';
    let contadorVogais = 0;
    let contadorCaracteres = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (vogais.includes(string[i])) {
        contadorVogais++;
      }
      if (contarCaracteres) {
        contadorCaracteres++;
      }
    }
  
    if (contarCaracteres) {
      return { vogais: contadorVogais, caracteres: contadorCaracteres };
    } else {
      return contadorVogais;
    }
  }
  const minhaString = "Esta é uma string de exemplo";
  const resultado = contarVogais(minhaString, true);
  console.log("Número de vogais:", resultado.vogais);
  console.log("Número total de caracteres:", resultado.caracteres)