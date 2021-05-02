/* eslint-disable max-len */

const { TestScheduler } = require('jest');

// referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this.

const createMenu = (obj) => ({
  fetchMenu: () => obj,
    consumption: [],
    order: (str) =>
    this.consumption.push(str),
    pay: () => {
      let sum = 0;
      let menu = this.fetchMenu();
      for (let item of this.consumption) {
        let items = menu.drink[item] ? menu.drink[item] : menu.food[item];
        sum += items;
      }
      let amount = Math.round(sum + sum * 0.10);
      return amount;
    },
  });

  module.exports = createMenu; 