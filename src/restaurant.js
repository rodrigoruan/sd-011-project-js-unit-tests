function orderConsumption(string) {
  this.consumption.push(string);
}

/*
Para implementar o passo 4 consultei a Pull Request de Vitor Hugo
Link: https://github.com/tryber/sd-011-project-js-unit-tests/pull/152
*/
function payableAmount() {
  let payout = 0;
  // Constante menu, sendo declarada e recebendo a função fetchMenu.
  const menu = this.fetchMenu();
  // Laço de repetição for of, varrendo o array consumption.
  for (let index of this.consumption) {
    // Declaração da variável e iteração da mesma, por meio de um operador ternário.
    let currentItemPrice = menu.drink[index] ? menu.drink[index] : menu.food[index];
    // Variável payout acumulando os valores de currentItemPrice.
    payout += currentItemPrice;
  }
  // Variável Payout recebendo a função Math.Round responsavel por arredondar o valor da mesma, acrescido de 10%.
  payout = Math.round(payout * 110) / 100; 
  return payout;
}

const createMenu = (object) => ({
  fetchMenu: () => object,
  consumption: [],
  order: orderConsumption,
  pay: payableAmount,
});

module.exports = createMenu;
