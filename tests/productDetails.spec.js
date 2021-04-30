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
    
    
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
    //assert.strictEqual(Object.keys(productDetails("um", "dois")), 4); <=DEVOLVE UM ARRAY!!
  
    assert.strictEqual(Array.isArray(productDetails("um", "dois")), true);
    assert.strictEqual(Object.keys(productDetails("um", "dois")).length, 2);
    assert.strictEqual(typeof(Object.values(productDetails("um", "dois"))),'object' ,'object' );
    assert.notStrictEqual(Object.values(productDetails("um", "dois")[0]), Object.values(productDetails("um", "dois")[1]));
    assert.strictEqual(Object.values(productDetails("um", "dois")[0]),
                        Object.values(productDetails("um", "dois")[1][productId]));
    });
});
