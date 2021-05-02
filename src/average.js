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

// Consegui depois de receber ajudar da Beatriz Ramalho em uma call no Slack

const average = (array) => {
  let divisor = array.length; // numero que sera usado para dividir para conseguir a media
  let sumArray = 0; // valor da soma de todos os números do array.
  
  if (array.length < 1) return undefined;

  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') return undefined;
    sumArray += array[index];
 } 
 return Math.round(sumArray / divisor);
};

const example = [1, 2, 3];
console.log(average(example));
// A função avarage recebe um array
module.exports = average;
