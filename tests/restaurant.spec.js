const assert = require('assert');
const { create } = require('domain');
const createMenu = require('../src/restaurant');
 

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    assert.strictEqual(typeof createMenu().fetchMenu, 'function');
    let menu = { food: {}, drink: {} };
    let restaurantIF = createMenu(menu);
    let fetchedMenu = restaurantIF.fetchMenu();
    assert.deepStrictEqual(Object.keys(fetchedMenu), ['food', 'drink']);
    assert.strictEqual(fetchedMenu, menu);
    assert.deepStrictEqual(restaurantIF.consumption, []);
    restaurantIF.order('coxinha');
    assert.strictEqual(restaurantIF.consumption.includes('coxinha'), true);
    restaurantIF.order('fanta');
    restaurantIF.order('beijinho');
    assert.deepStrictEqual(restaurantIF.consumption, ['coxinha', 'fanta', 'beijinho']);
    restaurantIF.order('fanta');
    assert.deepStrictEqual(restaurantIF.consumption, ['coxinha', 'fanta', 'beijinho', 'fanta']);
    let functionalMenu = {
      food: {
        coxinha: 5.50,
        beijinho: 3.00,
      },
      drink: {
        fanta: 4.00,
      },
    };
    let wInterface = createMenu(functionalMenu);
    wInterface.order('coxinha');
    wInterface.order('fanta');
    wInterface.order('coxinha');
    wInterface.order('beijinho');
    assert.strictEqual(wInterface.pay(), 19.8);

  });
});
