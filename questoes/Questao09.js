/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.

exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

function repetir(valor, quantidade) {
  let elementos = [];
  for(let cont = 0; cont < quantidade; cont++) {
    elementos.push(valor);
  }
  
  return elementos;
}

console.log(repetir(7, 3));