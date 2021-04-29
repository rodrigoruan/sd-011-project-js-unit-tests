/* eslint-disable max-len */
const assert = require('assert');
const lodash = require('lodash');

/*
  Essa função recebe o raio de um círculo,
  retornando um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos! Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

const circle = (radius) => {
  const PI = 3.14;
  if (!radius) {
    return undefined;
  }
  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};

module.exports = circle;

const testArea = (n) => Number(parseFloat(circle(n).area.toPrecision(4)));
const testCirc = (n) => Number(parseFloat(circle(n).circumference.toPrecision(4)));

assert.ok(lodash.isObject(circle(1)) === true);
assert.ok(Object.keys(circle(1)).length === 3);
assert.ok(circle() === undefined);
assert.ok(testCirc(2) === 12.56);
assert.ok(testArea(3) === 28.26);
assert.ok(testArea(3) === 28.26 && testCirc(3) === 18.84);
