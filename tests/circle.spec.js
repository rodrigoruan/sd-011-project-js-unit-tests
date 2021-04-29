/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna um objeto.
    // Teste se o objeto retornado tem 3 entradas.
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.

    const expected1 = typeof (circle(3)) === 'object';

    assert.strictEqual(expected1, true, 'If it returns an Object, it returns True');

    const expected2 = (Object.keys(circle(3))).length === 3;

    assert.strictEqual(expected2, true, 'If it returns 3 entries, it returns True');

    const expected3 = circle() === undefined;

    assert.strictEqual(expected3, true, 'If there are no arguments and returns undefined, it returns True');

    const expected4 = ((circle(2).circumference) === 12.56);

    assert.strictEqual(expected4, true, 'If the circumference value is correctly calculed for radius value of 2, it returns True');

    const expected5 = ((circle(3).area) === 28.259999999999998);

    assert.strictEqual(expected5, true, 'If the circumference value is correctly calculed for radius value 3, it returns True');

    const expected6 = ((circle(3).area) === 28.259999999999998) && ((circle(3).circumference) === 18.84);

    assert.strictEqual(expected6, true, 'If the cicle values are correctly calculed for radius value 3, it returns True');
  });
});
