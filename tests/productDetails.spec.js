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
    const valuesArray = ['Alcool gel', 'Máscara'];
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails(valuesArray)), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails(valuesArray).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (let index of productDetails(valuesArray)) {
      assert.strictEqual(typeof index, 'object');
    }
    // Teste que os dois objetos são diferentes entre si.
    const first = productDetails(valuesArray)[0];
    const second = productDetails(valuesArray)[1];
    assert.notDeepStrictEqual(first, second);
    // (Difícil) Teste que os dois productIds terminam com 123.
    for(let index2 of productDetails(valuesArray)) {
      assert.strictEqual(index2.details.productId.endsWith('123'), true);
    }
  });
});
