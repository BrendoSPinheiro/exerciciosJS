/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 */

function maiorOuIgual(num1, num2) {
  if(typeof num1 !== typeof num2) return false;
  return num1 >= num2 ? true : false;
}

console.log(maiorOuIgual(10, 5));
