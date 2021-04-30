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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
    const resultProducts = productDetails('Alcool gel', 'Máscara');
    productOne = (Object.values(Object.values(resultProducts)[0].details)).toString();
    productTwo = (Object.values(Object.values(resultProducts)[1].details)).toString();
    assert.strictEqual(Array.isArray(resultProducts), true);
    assert.strictEqual(resultProducts.length, 2);
    assert.strictEqual(typeof(resultProducts), 'object');
    assert.strictEqual(Object.values(resultProducts)[0] !== Object.values(resultProducts)[1], true);
    assert.strictEqual(productOne.endsWith('123'), true);
    assert.strictEqual(productTwo.endsWith('123'), true);
  });
});
