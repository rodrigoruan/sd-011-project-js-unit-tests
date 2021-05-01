/* eslint-disable guard-for-in */
const _ = require('lodash');
const assert = require('assert');
const { create } = require('domain');
/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, 
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado; 
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. 
  Eles guiarão você pelo desenvolvimento.

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

  IMPORTANTE: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E NÃO PELO PASSO 1 DESTE ARQUIVO!
*/
const expected = {
  food: { coxinha: 4, sopa: 10 },
  drink: { agua: 1.5, cerveja: 7 },
};

const createMenu = (order) => ({
  fetchMenu: () => order,
  consumption: [],
  order(item) {
    this.consumption.push(item);
  },
  pay: () => totalPrice(order),
});

const meuRestaurante = createMenu(expected);

let repeatedOrder = createMenu(expected);
meuRestaurante.order('coxinha');
meuRestaurante.order('agua');
meuRestaurante.order('coxinha');
console.log(meuRestaurante.consumption);

function foodPrice(clienteOrder) {
  let foodSum = 0;
  clienteOrder.consumption.forEach((j) => {
    for (let i in Object.entries(expected.food)) {
      let foodItem = Object.entries(expected.food)[i];
      if (foodItem[0] === j) {
        console.log(foodItem);
        foodSum += foodItem[1];
      }
    }
  });
  return foodSum;
}

function drinkPrice(clientOrder) {
  let drinkSum = 0;
  clientOrder.consumption.forEach((j) => {
    for (let i in Object.entries(expected.drink)) {
      let drinkItem = Object.entries(expected.drink)[i];
      if (drinkItem[0] === j) {
        console.log(drinkItem);
        drinkSum += drinkItem[1];
      }
    }
  });

  return drinkSum;
}

const totalPrice = (clientOrder) => drinkPrice(clientOrder) + foodPrice(clientOrder);

console.log(totalPrice(meuRestaurante));
//------------------------------------------------------------------------------------------

// PASSO 4: Adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função que varre todo os itens de `objetoRetornado.consumption`,
// soma o preço de todos checando-os no menu e retorna o valor somado acrescido de 10%. DICA: para isso,
// você precisará varrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

module.exports = createMenu;
