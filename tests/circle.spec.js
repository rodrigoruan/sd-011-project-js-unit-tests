const assert = require('assert');
const { KeyObject } = require('crypto');
const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna um objeto.
    assert.deepStrictEqual(typeof circle(1), 'object');
    // Teste se o objeto retornado tem 3 entradas.
    assert.deepStrictEqual(Object.keys(circle(9)).length, 3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.deepStrictEqual(circle(), undefined);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    assert.deepStrictEqual(circle(2).circumference, 12.56);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    assert.deepStrictEqual(circle(3).area, 28.259999999999998);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    assert.deepStrictEqual(circle(3), {"area": 28.259999999999998, "circumference": 18.84, "radius": 3});
  });
});
