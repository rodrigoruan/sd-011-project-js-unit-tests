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
    assert.deepStrictEqual(productDetails('teste1', 'teste2').length, 2 ); // Fonte: Só juntei a lógica obtida pelos conteúdos do Trybe Course ... ;-) 
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('teste1', 'teste2').length, 2 ); // Essa veio de brinde..rs
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('teste1', 'teste2'), 'object' ); // Fonte: MDN da vida... pra ver se o typeof ajudava em algo mais ;-)
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual((productDetails('teste1', 'teste2')[0]) === (productDetails('teste1', 'teste2')[1]), false, 'Ops, what is that, man?'); //Fonte ("Nenhuma"): Só uma questão de Lógica ;-)
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('teste1', 'teste2')[0].details.productId.slice(-3), productDetails('teste1', 'teste2')[1].details.productId.slice(-3), 'Nada a ver..'); // Fonte: Conhecia slice(), graças a um aluno no slack que o confundiu com splice() no projeto ToDolist (kk) aí o Panta o respondeu ;-)
  });
});
