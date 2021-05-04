const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui, 
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    const menu = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} };
    assert.deepStrictEqual(typeof createMenu(menu), 'object');

    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, 
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    assert.deepStrictEqual(Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu()), ['food', 'drink']);
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    assert.deepStrictEqual(menu, createMenu(menu).fetchMenu());

    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    const fourthObjTest = createMenu(menu);
    fourthObjTest.consumption;
    assert.deepStrictEqual(fourthObjTest.consumption, []);

    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, 
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    const fifthObjTest  = createMenu(menu);
    fifthObjTest.order("coxinha");
    assert.deepStrictEqual(fifthObjTest.consumption.includes('coxinha'), true);

    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    const sixthObjTest = createMenu(menu);
    sixthObjTest.order("coxinha");
    sixthObjTest.order("agua");
    sixthObjTest.order("sopa");
    sixthObjTest.order("sashimi");
    assert.deepStrictEqual(sixthObjTest.consumption.length, 4);

    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    const objTestSeven = createMenu(menu);
    objTestSeven.order('coxinha');
    objTestSeven.order('agua');
    objTestSeven.order('coxinha');
    assert.deepStrictEqual(objTestSeven.consumption, ['coxinha', 'agua', 'coxinha']);

    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    const eighthTestObj = createMenu(menu);
    eighthTestObj.order('coxinha');
    eighthTestObj.order('agua');
    eighthTestObj.order('coxinha');
    assert.deepStrictEqual(eighthTestObj.pay(), 12.87)
  });
});