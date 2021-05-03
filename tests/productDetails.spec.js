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
    const alcool = 'Alcool gel';
    const mascara = 'Máscara';
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (productDetails(alcool, mascara)), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails(alcool, mascara).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails(alcool, mascara)[0]), 'object');
    assert.strictEqual(Array.isArray(productDetails(alcool, mascara)[0]), true);
    assert.strictEqual(typeof (productDetails(alcool, mascara)[1]), 'object');
    assert.strictEqual(Array.isArray(productDetails(alcool, mascara)[1]), true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails(alcool, mascara)[0], productDetails(alcool, mascara)[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let producID0 = productDetails(alcool, mascara)[0].details.productId;
    let producID1 = productDetails(alcool, mascara)[1].details.productId;
    assert.deepStrictEqual(producID0.slice((producID0.length - 3), producID0.length), '123');
    assert.deepStrictEqual(producID1.slice((producID1.length - 3), producID1.length), '123');
  });
});
