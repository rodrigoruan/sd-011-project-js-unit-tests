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

const checkIfArrayAndNotEmptyAndNumeric = (numberArray) => {
  if (!Array.isArray(numberArray) || !numberArray.length) {
    return false;
  }

  const isNumber = numberArray.every(function (element) {
    return typeof (element) === 'number';
  });

  return isNumber;
};

const average = (numberArray) => {
  if (checkIfArrayAndNotEmptyAndNumeric(numberArray) !== false) {
    const sum = numberArray.reduce((a, b) => a + b);
    return Math.round(sum / numberArray.length);
  }

  return undefined;
};

module.exports = average;
