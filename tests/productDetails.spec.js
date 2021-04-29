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
    assert.strictEqual(typeof productDetails, 'function')
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails('Alcool gel', 'Máscara')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof Object.values(productDetails('Alcool gel', 'Máscara')), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const obj1 = Object.values(productDetails('Alcool gel', 'Máscara'))[0];
    const obj2 = Object.values(productDetails('Alcool gel', 'Máscara'))[1];
    assert.notDeepStrictEqual(obj1,obj2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let lettersObj1 = obj1.details.productId.split('');
    let lettersObj2 = obj2.details.productId.split('');
    let lastLettersObj1 = [];
    let lastLettersObj2 = [];
    for (let index = 3; index > 0; index -= 1) {
    lastLettersObj1.push(lettersObj1[lettersObj1.length - [index]]);
    lastLettersObj2.push(lettersObj2[lettersObj2.length - [index]]);
    }
    const verify = lastLettersObj1.join('') === '123' && lastLettersObj2.join('') === '123';
    assert.strictEqual(verify, true);
  });
});
