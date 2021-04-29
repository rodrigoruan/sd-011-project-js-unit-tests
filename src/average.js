/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1!;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (inputArray) => {
  let sum = 0;
  let final = 0;
  if (inputArray.length === 0) {
    return undefined
  }
  for (let i = 0; i < inputArray.length; i += 1) {
    if (typeof inputArray[i] !== 'number') {
      return undefined;
    }
    sum += inputArray[i]; 
  }
  final = sum/inputArray.length;
  sum > 0 ? Math.floor(final) : Math.ceil(final);
  return final;
};

console.log(average([1,3,5,7,6,9]))

module.exports = average;
