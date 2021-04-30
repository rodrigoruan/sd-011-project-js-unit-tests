/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

function checkString(route) {
  let found = false;
      for (let index = 0; index < route.length; index += 1) {
        if (typeof (route[index]) !== 'number') {
          found = true;
        }
      }
  return found;
}
function checkNull(route) {
  if (route[0] === undefined) {
    return true;
  }
  return false;
}

const average = (valu) => {
  let result = 0;
  if (checkString(valu) === false && checkNull(valu) === false) {
    for (let index = 0; index < valu.length; index += 1) {
      result += valu[index];
    }
    return Math.round(result / valu.length);
  } 
    return undefined;
};

module.exports = average;
