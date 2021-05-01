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
//declaração da constante passando como paremetro um array e uma funçao vazia. 
const average = (array) => {
  //se o comprimento do parametro array for igual a 0, retorne indefinido
  if (array.length === 0) return undefined;
  //variavél elementos dos numeros atribui o comprimento da variavel array
  let numberElements = array.length;
  //variavel resultado atribui por enquanto o valor 0
  let resultNumbers = 0;
  //para variavél index atribui o valor 0, enquanto index for menor do que o comprimento do parametro array, index passa a receber mais um valor.
  for (let index = 0; index < array.length; index += 1) {
    //se o tipo do cumprimento do array for diferente de igual a number, retorne undefined 
    if (typeof array[index] !== 'number') return undefined;
    //variavél numero atual atribui a posição do array 
    let numberCurrent = array[index];
    // a variavel resultado dos numeros que (ainda é 0) atribui a variavel numero atual (que agora tem como elemento o comprimento do array)
    //cada vez que o if rodar, a variavel result vai atribuir mais um valor do array.
    resultNumbers += numberCurrent;
  }
  //quando terminar de rodar a condição retorne o result divido pelo elemento dos numeros (array) com o comando math.round(que vai arredondar o valor, caso, o numero não seja inteiro)
  return Math.round(resultNumbers / numberElements);
};

module.exports = average;
