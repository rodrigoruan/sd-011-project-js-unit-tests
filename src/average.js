const average = (array) => {
  let sum = 0;
  let size = array.length;

  if (size === 0) return undefined; 

  for (let index = 0; index < size; index += 1) {
    if (typeof array[index] !== 'number') return undefined;
    sum += array[index]; 
  }

  const result = Math.round(sum / size);
  return result;
};

module.exports = average;
