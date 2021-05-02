/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
// console.log(typeof(productDetails()));
// console.log(productDetails());
// console.log(typeof(productDetails('Alcool gel', 'Máscara')[1]));
// console.log(productDetails('Alcool gel', 'Máscara')[0].details.productId)

const assert = require('assert');

// ESCREVA SEUS TESTES ABAIXO:
// Teste que o retorno da função é um array.
// assert.deepStrictEqual(typeof(productDetails()), []);
// ------ Porque retorna object se o retorno é um array? 
// Teste que o array retornado pela função contém dois itens dentro.
assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);

// Teste que os dois itens dentro do array retornado pela função são objetos.
assert.deepStrictEqual(typeof(productDetails('Alcool gel', 'Máscara')[0]), 'object');
assert.deepStrictEqual(typeof(productDetails('Alcool gel', 'Máscara')[1]), 'object');

// Teste que os dois objetos são diferentes entre si.
assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1], true);

// (Difícil) Teste que os dois productIds terminam com 123.
assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0].details.productId.slice(-3), '123');
assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[1].details.productId.slice(-3), '123');



module.exports = productDetails;
