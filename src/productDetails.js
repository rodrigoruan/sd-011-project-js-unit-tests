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
assert.deepStrictEqual(typeof(productDetails()), 'object');

// ------ Porque retorna object se o retorno é um array? 
//assert.deepStrictEqual(typeof(productDetails()), '[]');
// Teste que o array retornado pela função contém dois itens dentro.

const product = productDetails('Alcool gel', 'Máscara');
assert.deepStrictEqual(product.length, 2);

const product1 = product[0];
const product2 = product[1];

// Teste que os dois itens dentro do array retornado pela função são objetos.
assert.deepStrictEqual( typeof(product1), 'object');
assert.deepStrictEqual( typeof(product2), 'object');

// Teste que os dois objetos são diferentes entre si.
assert.deepStrictEqual(product1 !== product2, true);

// (Difícil) Teste que os dois productIds terminam com 123.

assert.deepStrictEqual(product1.details.productId.slice(-3), '123');
assert.deepStrictEqual(product2.details.productId.slice(-3), '123');

module.exports = productDetails;
