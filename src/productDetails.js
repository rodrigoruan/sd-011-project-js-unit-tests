const assert = require('assert');
const lodash = require('lodash');
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

const output = productDetails(1, 2);
// console.log(output);

// ESCREVA SEUS TESTES ABAIXO:
// Teste que o retorno da função é um array.
assert.ok(lodash.isArray(productDetails(1)) === true, 'Check if it is an array');
// Teste que o array retornado pela função contém dois itens dentro.
assert.ok(productDetails(1).length === 2);
// Teste que os dois itens dentro do array retornado pela função são objetos.
assert.ok(lodash.isObject(output[0]) === true && lodash.isObject(output[1]) === true);
// Teste que os dois objetos são diferentes entre si.
assert.ok(lodash.isEqual(output[0], output[1]) === false);
// (Difícil) Teste que os dois productIds terminam com 123.
// assert.ok(Object.values(output[1]));

module.exports = productDetails;

console.log(Object.values(output[1]));
