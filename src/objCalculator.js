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
  add: (num1, num2) => num1 + num2,
  mult: (num3, num4) => num3 * num4,
  div: (num5, num6) => Math.floor(num5 / num6),
  sub: (num7, num8) => num7 - num8,
};

module.exports = calculator;
