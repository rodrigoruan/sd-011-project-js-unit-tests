const calculator = {
  add: (valueA, valueB) => valueA + valueB,
  mult: (valueA, valueB) => valueA * valueB,
  div: (valueA, valueB) => Math.floor(valueA / valueB),
  sub: (valueA, valueB) => (valueA - valueB),
};

module.exports = calculator;
