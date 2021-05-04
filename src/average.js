const average = (arrayNumbers) => {
  let sum = 0;
  if (arrayNumbers.length === 0) {
    return undefined;
  }
  for (let index of arrayNumbers) {
    if (typeof index !== 'number') {
      return undefined;
    }
    sum += index;
  }
  return Math.round(sum / arrayNumbers.length);
};
module.exports = average;
