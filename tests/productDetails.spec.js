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
    const f = productDetails('Alcool gel', 'Máscara');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails() === 'object', true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(f.length === 2, true);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof f[0] === 'object' && typeof f[1] === 'object', true);
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(f[0] === f[1], false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(/123$/.test(f[0].details.productId) && /123$/.test(f[1].details.productId), true);
  });
});
