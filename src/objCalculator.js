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
const summation = (num1, num2) => Math.floor(num1 + num2);
const multiplication = (num1, num2) => Math.floor(num1 * num2);
const division = (num1, num2) => Math.floor(num1 / num2);
const subtraction = (num1, num2) => Math.floor(num1 - num2);

const calculator = {
  add: summation,
  mult: multiplication,
  div: division,
  sub: subtraction,
};

module.exports = calculator;
