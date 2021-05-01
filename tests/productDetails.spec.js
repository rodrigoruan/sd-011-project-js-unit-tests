const assert = require('assert');
const { type } = require('os');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const products = productDetails;
    assert.strictEqual(typeof products, 'function');
    assert.strictEqual(products().length, 2);
    assert.strictEqual(typeof products(), 'object');
    assert.notStrictEqual(products()[0], products()[0]);
    const product1 = products()[0].details.productId;
    const product2 = products()[1].details.productId;
    assert.strictEqual(product1.slice(-3), '123');
    assert.strictEqual(product2.slice(-3), '123');
  });
});
