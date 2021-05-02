/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/


const calculator = {
  add: (param1, param2) => param1 + param2,
  mult: (param1, param2) => param1 * param2,
  div: (param1, param2) => Math.floor(param1 / param2),
  sub: (param1, param2) => param1 - param2,
};

// const assert = require('assert');

// assert.strictEqual(calculator.add(1, 3), 4);
// assert.strictEqual(calculator.mult(10, 3), 30);
// assert.strictEqual(calculator.div(5, 2), 2);
// assert.strictEqual(calculator.sub(1, 3), -2);
module.exports = calculator;
