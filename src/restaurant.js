const createMenu = (menuObj) => ({
  fetchMenu: () => menuObj,
  consumption: [],
});

console.log(createMenu({ food: {}, drink: {} }).fetchMenu());

module.exports = createMenu;