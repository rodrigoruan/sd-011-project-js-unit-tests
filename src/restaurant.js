const createMenu = (menu) => {
  const restaurant = {
  fetchMenu: () => menu,
  consumption: [],
  order: (orderInput) => restaurant.consumption.push(orderInput),
  pay: () => {
    let total = 0;
    restaurant.consumption.forEach((element) => {
      let priceItem = menu.food[element] ? menu.food[element] : menu.drink[element];
      total += priceItem;
    });
    return Math.round(total * 1.10);
  }
}
return restaurant;
};

module.exports = createMenu;
