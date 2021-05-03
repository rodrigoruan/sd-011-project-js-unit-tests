const { TestScheduler } = require('jest');

// referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this.
const consumptions = [];

function addConsumption(item) {
  consumptions.push(item);
}

const createMenu = (obj) => ({
  consumption: consumptions,
  fetchMenu: () => obj,
  order: addConsumption,
  pay: () => {
    let sum = 0;
    for (let item of consumptions) {
      let items = obj.drink[item] ? obj.drink[item] : obj.food[item];
      
      sum += items;
    }

    let amount = Math.round(sum + (sum * 0.10));
    return amount;
  },
});

module.exports = createMenu; 