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
    // Referência do primeiro teste: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    assert.strictEqual(Array.isArray(productDetails('p1', 'p2')), true);
    assert.strictEqual(productDetails('p1', 'p2').length, 2);   
    assert.strictEqual(typeof productDetails('p1', 'p2')[0, 1], 'object');
    assert.notStrictEqual(productDetails('p1', 'p2')[0], productDetails('p1', 'p2')[1]);  
    // Referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice  
    assert.strictEqual(productDetails('p1', 'p2')[0].details.productId.slice(-3), '123');
    assert.strictEqual(productDetails('p1', 'p2')[1].details.productId.slice(-3), '123');
  });
});
