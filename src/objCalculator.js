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

  sub: (num1, num2) => num1 - num2,

  mult: (num1, num2) => num1 * num2,

  div: (num1, num2) => {
    if (num2 === 0) {
      return 'Math error';
    }
    return Math.trunc(num1 / num2);
  },
};

module.exports = calculator;

// arredondar para baixo descartando os números decimais => Math.trunc()
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc