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
    const produtos = productDetails('param1', 'param2') //array is array**

    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(produtos), true);
    
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(produtos.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof produtos[0], 'object');
    assert.deepStrictEqual(typeof produtos[1], 'object');
   
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(produtos[0], produtos[1]);
    
    // Teste que os dois productIds terminam com 123.//método para verificar final de string
    const produtos1 = produtos[0].details.productId;
    assert.strictEqual(produtos1.slice(-3), '123');

    const produtos2 = produtos[1].details.productId;
    assert.strictEqual(produtos2.slice(-3), '123');

  });
});
