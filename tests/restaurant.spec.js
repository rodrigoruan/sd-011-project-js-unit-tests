// const assert = require('assert');
// const createMenu = require('../src/restaurant');

// describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
//   it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
//     let menu = { food: {}, drink: {} }
//     let restaurantInterface = createMenu(menu);
//     let fetchedMenu = restaurantInterface.fetchMenu();

//     assert.deepStrictEqual(Object.keys(fetchedMenu), ['food', 'drink']);
//     assert.strictEqual(fetchedMenu, menu);
//     assert.deepStrictEqual(restaurantInterface.consumption, []);

//     restaurantInterface.order('coxinha');
//     assert.strictEqual(restaurantInterface.consumption.includes('coxinha'), true);

//     restaurantInterface.order('coca');
//     restaurantInterface.order('brigadeiro');

//     assert.deepStrictEqual(restaurantInterface.consumption, ['coxinha', 'coca', 'brigadeiro']);

//     restaurantInterface.order('coca');

//     assert.deepStrictEqual(restaurantInterface.consumption, ['coxinha', 'coca', 'brigadeiro', 'coca']);

//     let functionalMenu = {
//       food: {
//         coxinha: 5.90,
//         brigadeiro: 2.50,
//       },

//       drink: {
//         coca: 3.95,
//       },
//     };

//     let workingInterface = createMenu(functionalMenu);
//     workingInterface.order('coxinha');
//     workingInterface.order('coca');
//     workingInterface.order('coxinha');
//     workingInterface.order('brigadeiro');

//     assert.strictEqual(workingInterface.pay(), 20.08);
//   });
// });
