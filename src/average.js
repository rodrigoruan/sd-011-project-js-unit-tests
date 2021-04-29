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
const isValid = (arr) => {
  let result = true;
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof (arr[index]) !== 'number') {
      result = false;
    }
  }
  return result;
};

const notEmpty = (arr) => {
  let result = true;
  if (!arr.length) {
    result = false;
  }
  return result;
};

const average = (arr) => {
  let sum = 0;
  if (!isValid(arr) || !notEmpty(arr)) {
    return undefined;
  }
  for (let index = 0; index < arr.length; index += 1) {
    sum += arr[index];
  }
  return Math.round(sum / arr.length);
};

module.exports = average;
