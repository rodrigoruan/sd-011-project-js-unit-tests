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
    const productNameArray = ['Alcool gel', 'Máscara'];
    const product = productDetails(productNameArray[0], productNameArray[1]);

    assert.strictEqual(Array.isArray(product), true);
    assert.strictEqual(productDetails(productNameArray).length, 2);
    product.forEach((element) => assert.strictEqual(typeof element, 'object'));
    product.forEach((element) => assert.strictEqual(element.details.productId.includes('123'), true));
  });
});
