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
const assert = require('assert');

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  var summation = 0;
  for (let number of array) {
    if (typeof (number) !== 'number') {
      return ('undefined');
    }
    summation += number;
  }
  return Math.round(summation / array.length);
};

assert.strictEqual(average([1, 2, 3]), 2);
assert.strictEqual(average([1, 2, 3, 4, 5]), 3);
assert.strictEqual(average([]), undefined);
assert.strictEqual(average([1, 0.3]), 1);

module.exports = average;
