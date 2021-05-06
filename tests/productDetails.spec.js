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
    //Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    assert.deepStrictEqual(Array.isArray(productDetails('firstProduct', 'secondProduct')), true);
    assert.deepStrictEqual(productDetails('firstProduct', 'secondProduct').length, 2);
    //Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
    assert.strictEqual(typeof productDetails('firstProduct', 'secondProduct')[0] && typeof productDetails('firstProduct', 'secondProduct')[1], 'object');
    assert.notStrictEqual(productDetails('firstProduct', 'secondProduct')[0], productDetails('firstProduct', 'secondProduct')[1]);
    //Source: https://www.w3schools.com/jsref/jsref_endswith.asp
    assert.strictEqual(productDetails('firstProduct', 'secondProduct')[0].details.productId.endsWith('123') && productDetails('firstProduct', 'secondProduct')[1].details.productId.endsWith('123'),true);
  });
});
