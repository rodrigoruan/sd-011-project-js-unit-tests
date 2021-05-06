function addOrder(newOrder) {
  this.consumption.push(newOrder);
}

const createMenu = (menuObj) => ({
  consumption: [],
  fetchMenu: () => menuObj,
  order: addOrder,
  pay() {
    let pay = 0;
    const myMenu = this.fetchMenu();
    for (let eatFood of this.consumption) {
      let price = myMenu.drink[eatFood] ? myMenu.drink[eatFood] : myMenu.food[eatFood];
      pay += price;
    }

    pay = Math.round(pay * 110) / 100;
    return pay;
  },
});

module.exports = createMenu;