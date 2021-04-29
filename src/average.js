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

function sum(array) {
  return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
}

const average = (array) => {
  if (array.length === 0 || typeof (sum(array)) === 'string') {
    return undefined;
  }
  return Math.round(sum(array) / array.length);
};

module.exports = average;
