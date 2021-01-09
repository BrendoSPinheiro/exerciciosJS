/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function imprimeMais(quantidade) {
  let mais = '';
  for(let cont = 0; cont < quantidade; cont++) {
    mais += '+';
  }
  
  return mais;
}

console.log(imprimeMais(10));