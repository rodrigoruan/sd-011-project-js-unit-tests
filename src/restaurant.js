function orderFromMenu(str) {
  this.consumption.push(str);
}

function calculateTotal() {
  let result = 0;
  const priceFood = Object.entries(this.fetchMenu().food);
  const priceDrinks = Object.entries(this.fetchMenu().drink);
  this.consumption.forEach(order => {
    priceFood.forEach(food => order === food[0]? result += food[1] : null);
    priceDrinks.forEach(drink => order === drink[0]? result += drink[1] : null);
  })
  return Math.round(result * 1.1);
}

const createMenu = (objetoRetornado) => ({
  fetchMenu: () => objetoRetornado,
  consumption: [],
  order: orderFromMenu,
  pay: calculateTotal
});

module.exports = createMenu;
