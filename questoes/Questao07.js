/*
Crie uma função que receba quatro números como parâmetro (numero, inicioIntervalo, finalIntervalo, inclusivo) 
e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/

function estaEntre(numero, inicioIntervalo, finalIntervalo, inclusivo = false) {
  if(inclusivo === true) {
    if(inicioIntervalo > finalIntervalo) {
      return (numero <= inicioIntervalo && numero >= finalIntervalo) 
      ? true 
      : false;
    }else {
      return (numero >= inicioIntervalo && numero <= finalIntervalo) 
      ? true 
      : false;
    }
  }else {
    if(inicioIntervalo > finalIntervalo) {
      return (numero < inicioIntervalo && numero > finalIntervalo) 
      ? true 
      : false;
    }else {
      return (numero > inicioIntervalo && numero < finalIntervalo) 
      ? true 
      : false;
    }
  }
}

console.log(estaEntre(50, 10, 100, true));