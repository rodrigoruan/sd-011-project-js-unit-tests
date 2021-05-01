/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {

   assert.strictEqual(numbers([1, 2, 3, 4, 5]), true);
   assert.strictEqual(numbers([1, 2, '3', 4, 5]), false);
   assert.strictEqual(numbers([1, 'a', 3 ]), false);
   assert.strictEqual(numbers([' ']), false)
  });
});
