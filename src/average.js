/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
  */

 const average = (arr) => {
  let numberOfArray = 0;
  let numberOfLength = arr.length;

  for (let i = 0; i < numberOfLength; i += 1) {
    //* verifica se o valor inserido é uma string
    if (typeof arr[i] === 'string') return undefined;
        
    //* Faz a soma dos valores do array
    numberOfArray += arr[i];
  }
  
  //* Faz o calculo que retornará a media
  const result = Math.round(numberOfArray / numberOfLength);

  //* verifica de o array esta vazio
  const emptyPhrase = (arr.length === 0) ? undefined : result;
  return emptyPhrase;
};

module.exports = average;

// console.log(average([2, 2])); // Retorno: 2;
// console.log(average([1, 1])); // Retorno: 1;
// console.log(average([1, '2'])); // Retorno: undefined;
// console.log(average([])); // Retorno: undefined;
// console.log(average([47, 63, 122])); // Retorno: 77;