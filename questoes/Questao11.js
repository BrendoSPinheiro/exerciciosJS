/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:

exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

function receberPrimeiroEUltimoElemento(elementos) {
  const primeiroEUltimo = [
    elementos[0], 
    elementos[elementos.length - 1],
  ];

  return primeiroEUltimo;
}

console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));