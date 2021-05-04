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
const assert = require('assert');

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

assert.strictEqual(typeof productDetails('firstProduct', 'secondProduct'), 'object');
assert.strictEqual(productDetails('firstProduct', 'secondProduct').length, 2);
assert.strictEqual(typeof (productDetails('firstProduct', 'secondProduct')[0]), 'object');
assert.strictEqual(typeof (productDetails('firstProduct', 'secondProduct')[1]), 'object');
assert.notDeepStrictEqual(productDetails('firstProduct', 'secondProduct')[0],
productDetails('firstProduct', 'secondProduct')[1]);
assert.strictEqual(productDetails('alcool', 'mascara')[0].details.productId.slice(-3), '123');
assert.strictEqual(productDetails('alcool', 'mascara')[1].details.productId.slice(-3), '123');

module.exports = productDetails;