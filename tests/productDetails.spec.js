const assert = require('assert');
const productDetails = require('../src/productDetails');

function verifyReturn(returnOfFunction) {
  for (const obj of returnOfFunction) {
    if (typeof (obj) !== 'object') {
      return false;
    }
  }
  return true;
}

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    assert.deepStrictEqual(typeof (productDetails('Alcool gel', 'Máscara')), 'object');
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0].name !== productDetails('Alcool gel', 'Máscara')[1].name, true);
    assert.deepStrictEqual(
      productDetails('Alcool gel', 'Máscara')[0].details.productId.includes('123')
      && productDetails('Alcool gel', 'Máscara')[1].details.productId.includes('123'), true);
  });
});
