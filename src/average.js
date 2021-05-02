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

const average = (param) => {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections     isNumber
  function isNumber(valor) {
    return typeof valor === 'number';
  }
  if (param.every(isNumber) !== true || param.length === 0) {
    return undefined;
  }
  let index = 0;
  let soma = 0;
  for (; index < param.length; index += 1) {
    soma += param[index];
  }
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round      Math.round
  let output = Math.round(soma / index);

  return output;
};
module.exports = average;
