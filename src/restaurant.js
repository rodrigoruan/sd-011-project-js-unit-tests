function checkKey(value, key) {
  for (let index = 0; index < key.length; index += 1) {
    if (value === key[0][index]) {
      return key[index][1];
    }
  }
  return 0;
}

function payTotal(menu) {
  let priceTotal = 0;
  const food = Object.entries(menu.fetchMenu().food);
  const drink = Object.entries(menu.fetchMenu().drink);

  for (let value of menu.consumption) {
    priceTotal += checkKey(value, food);
    priceTotal += checkKey(value, drink);
  }

  priceTotal += ((priceTotal * 10) / 100);
  return priceTotal;
}

let menuComplete = {};

function orderFromMenu(item) {
  menuComplete.consumption.push(item);
}

const createMenu = (objeto) => {
  menuComplete = {
  fetchMenu: () => objeto,
  consumption: [],
  order: orderFromMenu,
  pay: () => payTotal(menuComplete),
  };

  return menuComplete;
};

module.exports = createMenu;
