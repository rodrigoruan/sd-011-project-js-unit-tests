const average = (array) => {
  let sumArray = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    }  
      sumArray += array[index];
  }
  let consolePrint = Math.round(sumArray / array.length);
  return consolePrint;
};

module.exports = average;
