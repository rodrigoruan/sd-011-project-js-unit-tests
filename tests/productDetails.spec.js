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
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('Álcool gel', 'Máscara')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Álcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const isObject = (obj) => obj === Object(obj);
    const test3returnValue = productDetails('Álcool gel', 'Máscara');
    assert.strictEqual(isObject(test3returnValue[0]) && isObject(test3returnValue[1]), true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(test3returnValue[0], test3returnValue[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const endsIn123 = (productId) => productId.indexOf('123') === productId.length - 3;
    const productId1 = test3returnValue[0].details.productId;
    const productId2 = test3returnValue[1].details.productId;
    assert.strictEqual(endsIn123(productId1) && endsIn123(productId2), true);
  });
});
