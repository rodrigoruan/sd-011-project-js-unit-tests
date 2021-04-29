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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.

    assert.notStrictEqual(productDetails('a', 'b'), Array.isArray());

    const expected1 = (productDetails('a', 'b').length === 2);

    assert.strictEqual(expected1, true);

    const object0 = productDetails('a', 'b')[0];
    const object1 = productDetails('a', 'b')[1];

    const areObjects = typeof object0 === 'object' && typeof object1 === 'object';

    assert.strictEqual(areObjects, true);

    const areObjectsEqual = object0 === object1;

    assert.strictEqual(areObjectsEqual, false);

    const productIdCheck = (object0.details.productId).includes('123') && (object1.details.productId).includes('123');

    assert.strictEqual(productIdCheck, true, 'test if productsIds end with 123')
  });
});
