const assert = require("assert");
const { type } = require("os");
const productDetails = require("../src/productDetails");

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

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    // https://www.w3schools.com/jsref/jsref_isarray.asp
    assert.strictEqual(Array.isArray(productDetails("a", "b")), true);
    // Teste que o retorno da função é um array.
    assert.strictEqual(Object.keys(productDetails("a", "b")).length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(typeof Object.keys(productDetails("a", "b")), "object");
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notStrictEqual(productDetails("a", "b"), "a" !== "b");
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
