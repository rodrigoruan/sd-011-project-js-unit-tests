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
    const firstProduct = productDetails('Alcool gel', 'Máscara')[0];
    const secondProduct = productDetails('Alcool gel', 'Máscara')[1];
    // Teste que o retorno da função é um array.
    // Consulta em https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery
    assert.deepStrictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails().length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof firstProduct, 'object')
    assert.deepStrictEqual(typeof secondProduct, 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(firstProduct, secondProduct)
    // (Difícil) Teste que os dois productIds terminam com 123.
    const firstProductId = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const secondProductId = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    assert.deepStrictEqual(firstProductId === 'Alcool gel123', true)
    assert.deepStrictEqual(secondProductId === 'Máscara123', true)
  });
});
