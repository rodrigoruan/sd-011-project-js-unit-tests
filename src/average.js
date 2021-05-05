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

function checarString(rota) {
  let achar = false;
      for (let index = 0; index < rota.length; index += 1) {
        if (typeof (rota[index]) !== 'number') {
          achar = true;
        }
      }
  return achar;
  }
function checarNulo(rota) {
  if (rota[0] === undefined) {
    return true;
  }
    return false;
}

const average = (valor) => {
  let resultado = 0;
  if (checarString(valor) === false && checarNulo(valor) === false) {
    for (let index = 0; index < valor.length; index += 1) {
      result += valor[index];
    }
    return Math.round(result/ valor.length);
  }
    return undefined;
};

module.exports = average;

  let accumulator = 0;

  for (let index = 0; index < number.length; index +=1) {
    accumulator += number[index];
  }

  return accumulator/number.length;

};
// add your implementation here

//assert.strictEqual(typeof(average), 'function');
//assert.strictEqual(average(1), 1);
console.log (average([4,4]));


module.exports = average;
