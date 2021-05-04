const assert = require('assert');
const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna um array e se o array retornado contém somente números', () => {
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    assert.deepStrictEqual(numbers([1, 2, 3, 4, 5]), true);
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    assert.deepStrictEqual(numbers([1, 2, '3', 4, 5]), false);
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    assert.deepStrictEqual(numbers([1, 'a', 3]), false);
    // Escreva um teste em que a função recebe [' '] e retorna false
    assert.deepStrictEqual(numbers([' ']), false);    
  });
});
