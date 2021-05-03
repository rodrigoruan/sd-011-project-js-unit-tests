const assert = require('assert');
const createMenu = require('../src/restaurant');
 


describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    
    let menu = {food:{},drink: {}};
    const objetoRetornado = createMenu(menu);
    const fetchMenus = objetoRetornado.fetchMenu();

    assert.strictEqual(typeof createMenu(), 'object');
    assert.deepStrictEqual(Object.keys(fetchMenus), ['food','drink']);
    assert.strictEqual(fetchMenus, menu);
    assert.deepStrictEqual(objetoRetornado.consumption, []);

// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    objetoRetornado.order('coxinha');
    assert.strictEqual(objetoRetornado.consumption.includes('coxinha'), true);

    objetoRetornado.order('agua');
    objetoRetornado.order('sopa');

    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha', 'agua', 'sopa']);
    

    objetoRetornado.order('coca');

    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha', 'agua', 'sopa', 'coca']);
  
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
   
    let testeMenu = {
      food: {
        coxinha: 3.9,
        sopa: 3.9,
      },
      drink: {
        agua: 3.9,
        coca: 3.9,
      },
    }
    const objetoRetornado2 = createMenu(testeMenu);
    objetoRetornado2.order('coxinha');
    objetoRetornado2.order('sopa');
    objetoRetornado2.order('agua')

    assert.strictEqual(objetoRetornado2.pay(), 43);

  });
});
