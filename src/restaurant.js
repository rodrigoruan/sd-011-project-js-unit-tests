function addItem(item) {
  this.consumption.push(item);
}
const createMenu = (menuObject) => ({
  consumption: [],
  fetchMenu: () => menuObject,
  order: addItem,
  pay() {
    let payout = 0;
    const menu = this.fetchMenu();
    for (let index of this.consumption) {
      let currentItemPrice = menu.drink[index] ? menu.drink[index] : menu.food[index];
      payout += currentItemPrice;
    }
    payout = Math.round(payout * 110) / 100;
    return payout;
  },
});
module.exports = createMenu;
