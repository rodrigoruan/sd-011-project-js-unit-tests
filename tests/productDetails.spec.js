const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[1], 'object');
    assert.notDeepStrictEqual(productDetails('Alcool gel', 'Máscara')[0], productDetails('Alcool gel', 'Máscara')[1]);
    assert.deepStrictEqual(productDetails('Alcool gel', 'Mascara')[0].details.productId.slice(-3), '123');
    assert.deepStrictEqual(productDetails('Alcool gel', 'Mascara')[1].details.productId.slice(-3), '123');
  });
});
