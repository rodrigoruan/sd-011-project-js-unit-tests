/* eslint-disable max-len */
function insertOrder(str) {
  this.consumption.push(str);
}

function foodPrice(foodOrder) {
  let foodSum = 0;
  for (let index = 0; index < foodOrder.length; index += 1) {
    foodSum += foodOrder[index];
  }
  return foodSum;
}

function drinkPrice(drinkOrder) {
  let drinkSum = 0;
  for (let index = 0; index < drinkOrder.length; index += 1) {
    drinkSum += drinkOrder[index];
  }
  return drinkSum;
}

function sumPrices(restaurant) {
  let payment = 0;
  const foodOrder = Object.values(restaurant.fetchMenu().food);
  const drinkOrder = Object.values(restaurant.fetchMenu().drink);
  payment = foodPrice(foodOrder) + drinkPrice(drinkOrder);
  return payment * 1.1;
}

const createMenu = (menuInput) => {
  const restaurant = {
   fetchMenu: () => menuInput,
   consumption: [],
   order: insertOrder,
   pay: () => sumPrices(restaurant),
 };
 return restaurant;
};

module.exports = createMenu;
