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
  add: (a, b) => {
    const summ = a + b;
    return Math.floor(summ);
  },
  mult: (a, b) => {
    const mult = a * b;
    return Math.floor(mult);
  },
  div: (a, b) => {
    const div = a / b;
    return Math.floor(div);
  },
  sub: (a, b) => {
    const sub = a - b;
    return Math.floor(sub);
  },
};
module.exports = calculator;
