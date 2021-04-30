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
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length === 2, true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length === 2, true);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const testArray = (array) => {
      for (let object of array) {
        if(Object.keys(object).length === 0) {
          return false;
        } return true;
      } 
    }

    assert.strictEqual(testArray(productDetails('Alcool gel', 'Máscara')), true);

    // Teste que os dois objetos são diferentes entre si.
    const checkEquals = (array) => {
      for (let index = 0; index < array.length; index += 1) {
        if (array[index] === array[index + 1]) {
          return true;
        } return false;
      }
    }

    assert.deepStrictEqual(checkEquals(productDetails('Alcool gel', 'Máscara')), false);

    // (Difícil) Teste que os dois productIds terminam com 123.
    const verifyId = (array) => {
  
      for (let index = 0; index < array.length; index += 1) {
        let getId = array[index].details.productId;
        let idToArray = getId.split('');
    
        if (idToArray[idToArray.length - 1] === '3' &&
          idToArray[idToArray.length - 2] === '2' &&
          idToArray[idToArray.length - 3] === '3') {
          result = true;
        } return true;
      }
    }

    assert.strictEqual(verifyId(productDetails('Alcool gel', 'Máscara')), true);
  });
});
