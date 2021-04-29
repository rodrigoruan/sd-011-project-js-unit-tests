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
    const output1 = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(Array.isArray(output1), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    const output2 = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(output2.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const output3 = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(typeof output3.entries(output3), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const output4 = productDetails('Alcool gel', 'Máscara');
    assert.notDeepStrictEqual(output4[0], output4[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const output5 = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(output5[1].details.productId.substr(output5[1].details.productId.length - 3), '123');
    assert.deepStrictEqual(output5[0].details.productId.substr(output5[0].details.productId.length - 3), '123');
  });
});
