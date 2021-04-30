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

//* arredonda para baixo
const mathTrunc = (param) => Math.trunc(param);

const calculator = {
  //* soma os paramentors
  add: (param1, param2) => mathTrunc(param1 + param2),

  //* multiplica os parametros
  mult: (param1, param2) => mathTrunc(param1 * param2),
  
  //* divide os paramentros
  div: (param1, param2) => mathTrunc(param1 / param2),

  //* subtrai os parametros
  sub: (param1, param2) => mathTrunc(param1 - param2),
};
// console.log(calculator.add(3, 2));
module.exports = calculator;
