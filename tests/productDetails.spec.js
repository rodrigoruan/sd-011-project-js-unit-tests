const { notDeepStrictEqual } = require('assert');
const assert = require('assert');
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
    // ESCREVA SEUS TESTES ABAIXO:
    assert.deepStrictEqual( typeof productDetails(), 'object');
    assert.deepStrictEqual(productDetails().length, 2);
    assert.deepStrictEqual(typeof productDetails('Alcool gel','Máscara')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('Alcool gel','Máscara')[1], 'object');
    const first = productDetails('Alcool gel','Máscara')[0];
    const second = productDetails('Alcool gel','Máscara')[1];
    notDeepStrictEqual(first,second);
    const firstProduct = productDetails('Alcool gel', 'Máscara')[0].details.productId.slice(-3);
    const secondProduct = productDetails('Alcool gel', 'Máscara')[1].details.productId.slice(-3);
    assert.strictEqual(firstProduct, '123');
    assert.strictEqual(secondProduct, '123');
  });
});
