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

// References:
// Check if it's a number: https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/

const average = (media) => {
  let sum = 0;

  if (media.isNaN || !media.length) return undefined;

  for (let index of media) {
    if (typeof index !== 'number') return undefined;
    sum += index;
  }

  return Math.round(sum / media.length);
};

module.exports = average;
