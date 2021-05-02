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
    assert.deepStrictEqual(typeof (productDetails()), 'object'); //para verificar se a funcao é um array testamos object
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(Object.keys(productDetails('Alcool gel','Máscara')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('Alcool gel','Máscara')[0],'object');
    assert.deepStrictEqual(typeof productDetails('Alcool gel','Máscara')[1],'object');  
    // Teste que os dois objetos são diferentes entre si.
    const product1 = productDetails('Alcool gel', 'Máscara')[0];
    const product2 = productDetails('Alcool gel', 'Máscara')[1];
    assert.notDeepStrictEqual(product1, product2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    // * Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith(123), true);
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith(123), true);
  });
});
