/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const assert = require('assert');

const average = (arr) => {
  const count = arr.length;
  let num = 1;

  if (typeof arr !== 'object' || count === 0) {
    return undefined;
  }

  for (let val of arr) {
    if (typeof val !== 'number') {
      return undefined;
    }
    num += val;
  }

  return Math.floor(num / count);
};

module.exports = average;
