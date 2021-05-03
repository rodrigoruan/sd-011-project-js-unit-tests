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

function testeArray(array2) {
  let retorno = true;
  if (array2.length === 0) {
    retorno = undefined;
  } 
  for (let i = 0; i < array2.length; i += 1) {
    const tipo = typeof array2[i];
    if (tipo === 'string') {
      retorno = undefined;
    }
  }
  return retorno;
}

const average = (array) => {
  let tipo = testeArray(array);
  let soma = 0;
  if (tipo) {
    for (let i = 0; i < array.length; i += 1) {
      soma += array[i];
    }
    tipo = Math.round(soma / array.length);
  }
  return tipo;
};

module.exports = average;
