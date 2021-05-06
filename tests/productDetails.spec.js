const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Recebi ajuda de Oryange Strifezze, para solucionar o teste da linha 7
    assert.deepStrictEqual(Array.isArray(productDetails()), true);
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.deepStrictEqual((typeof productDetails('Alcool gel', 'Máscara')[0]) && (typeof productDetails('Alcool gel', 'Máscara')[1]), 'object');
    assert.notDeepStrictEqual(productDetails('alcool','mascara')[0], productDetails('alcool', 'mascara')[1]);
    assert.deepStrictEqual(productDetails('alcool', 'mascara')[0].details.productId.slice(-3), '123');
    assert.deepStrictEqual(productDetails('alcool', 'mascara')[1].details.productId.slice(-3), '123');
  });
});
