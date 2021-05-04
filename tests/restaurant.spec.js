const assert = require('assert');
const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.
  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.
  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:
  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).
  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }
  meuRestaurante.order('coxinha') // Retorno: undefined
  meuRestaurante.consumption // Retorno: ['coxinha']
  meuRestaurante.pay() // Retorno: 3.9
  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:
  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });
  meuRestaurante.fetchMenu() // Retorno: Menu acima
  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']
  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.
  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.
  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!
  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    const objetoQualquer = {
      food: {
        coxinha: 3.5,
        sopa: 5,
        sashimi: 6.4,
      }, drink: {
        água: 4,
        refrigerante: 5.5,
      }};
    const objetoRetornado = createMenu(objetoQualquer);
    assert.strictEqual(typeof objetoRetornado.fetchMenu, 'function');

    const objetoRetornado1 = createMenu({food: {}, drink: {}});
    assert.deepStrictEqual(objetoRetornado1.fetchMenu(), {food: {}, drink: {}});

    const objetoRetornado3 = createMenu(objetoQualquer);
    assert.deepStrictEqual(objetoRetornado3.fetchMenu(), objetoQualquer);
    assert.deepStrictEqual(objetoRetornado3.consumption, []);

    const objetoRetornado4 = createMenu(objetoQualquer);
    objetoRetornado4.order('coxinha');
    assert.deepStrictEqual(objetoRetornado4.consumption, ['coxinha']);

    const objetoRetornado5 = createMenu(objetoQualquer);
    objetoRetornado5.order('coxinha');
    objetoRetornado5.order('água');
    objetoRetornado5.order('sopa');
    objetoRetornado5.order('sashimi');
    assert.deepStrictEqual(objetoRetornado5.consumption, ['coxinha', 'água', 'sopa', 'sashimi']);

    objetoRetornado5.order('coxinha');
    assert.deepStrictEqual(objetoRetornado5.consumption, ['coxinha', 'água', 'sopa', 'sashimi', 'coxinha']);

    const objetoRetornado6 = createMenu(objetoQualquer);
    objetoRetornado6.order('coxinha');
    objetoRetornado6.order('água');
    objetoRetornado6.order('coxinha');

    assert.strictEqual(objetoRetornado6.pay(), 11);
  });
});
