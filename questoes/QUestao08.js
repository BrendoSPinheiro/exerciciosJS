/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de multiplicação.

exemplos:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

function multiplicar(num1, num2) {
  let produto = 0;
  for(let cont = 0; cont < num1; cont++) {
    produto += num2;
  }

  return produto;
}

console.log(multiplicar(9,6));