const average = (array) => {
    let media = 0;
    for (let key of array) {
      if (typeof(key) !== 'number' || array.length === 0) {
        return undefined;
      } else {
        media += Math.round(key);
      }
    }
    return media/array.length
  };
  console.log(average([1,2,3,4,10]))