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
    assert.strictEqual(Object.prototype.toString.call(productDetails('teste1', 'teste2')), '[object Array]');// Teste que o retorno da função é um array.
    assert.deepEqual(productDetails('Alcool', 'Mask').length, 2);// Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(typeof productDetails('teste1', 'teste2')[0], 'object');// Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('teste1', 'teste2')[1], 'object');// Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('teste1', 'teste2')[0], productDetails('teste1', 'teste2')[1]);
    assert.deepStrictEqual(productDetails('teste', 'teste').map((value) => value.details.productId.slice(-3)), [ '123', '123' ]);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
