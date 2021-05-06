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
    assert.strictEqual(Object.prototype.toString.call(productDetails('teste1', 'teste2')), '[object Array]');
    assert.deepEqual(productDetails('Álcool', 'Mask').length, 2);
    assert.deepStrictEqual(typeof productDetails('teste1', 'teste2')[0], 'object');
    assert.notDeepStrictEqual(productDetails('teste1', 'teste2')[1], 'object');
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('teste', 'teste').map((value) => value.details.productId.slice(-3)), ['123', '123']);
  });
});
