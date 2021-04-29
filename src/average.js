/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
  */

 const average = (event) => {
   let numberOfArray = 0;
  let numberOfLength = event.length;
  for (let i = 0; i < numberOfLength; i += 1) {
    if (typeof event[i] === 'string') {
      return undefined;
    }
      numberOfArray += event[i];
  }
  return numberOfArray / numberOfLength;
};

module.exports = average;

console.log(average([2, 2])); // Retorno: 2;
console.log(average([1, 1])); // Retorno: 1;
console.log(average([1, '2'])); // Retorno: undefined;