const myCounter = () => {
  let myArray = [];
  for (let index = 0; index <= 3; index += 1) {
    myArray.push(index);
    for (let counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
    }
  }
  return myArray;
};
console.log(myCounter());

module.exports = myCounter;
