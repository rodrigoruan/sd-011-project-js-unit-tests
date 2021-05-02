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
    assert.strictEqual(typeof productDetails, 'function');
    const produto = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof produto, 'object');
    assert.strictEqual(produto.length, 2);
    assert.strictEqual(typeof produto[0], 'object');
    assert.strictEqual(typeof produto[1], 'object');
    assert.notStrictEqual(produto[0], produto[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
