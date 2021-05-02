const assert = require('assert');
const createMenu = require('../src/restaurant');
 


describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    
    let menu = { food: {}, drink: {}};
    const objetoRetornado = createMenu(menu);
    const fetchMenus = objetoRetornado.fetchMenu();

    assert.strictEqual(typeof createMenu(), 'object');
    assert.deepStrictEqual(Object.keys(fetchMenus), ['food','drink']);
    assert.strictEqual(fetchMenus, menu);
    assert.deepStrictEqual(objetoRetornado.consumption, []);

    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(Object.values(objetoRetornado.consumption), 'coxinha');

    objetoRetornado.order("coxinha");
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    assert.strictEqual(objetoRetornado.consumption, ["coxinha", "agua", "sopa", "sashimi"]);
    
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    assert.strictEqual(objetoRetornado.comsuption,['coxinha', 'agua', 'coxinha']);
  
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    assert.strictEqual(objetoRetornado.pay(), (3,9 * 3));
  });
});
