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
    
    assert.deepStrictEqual(Array.isArray(productDetails('Alcool gel', 'Mascara')), true);
    assert.deepStrictEqual(productDetails('Alcool gel', 'Mascara').length, 2);
    assert(productDetails('Alcool gel', 'Mascara').every(item => typeof item === 'object'));
    assert.notDeepStrictEqual(productDetails('Alcool gel', 'Mascara')[0], productDetails('Alcool gel', 'Mascara')[1]);
    assert(productDetails('Alcool gel', 'Mascara').every(item => item.details.productId.endsWith(123)));
  });
});
