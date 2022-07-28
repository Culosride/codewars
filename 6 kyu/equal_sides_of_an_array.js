function findEvenIndex(arr) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i).reduce((curr, next) => curr + next, 0);
    const right = arr.slice(i+1).reduce((curr, next) => curr + next, 0);

    if (left === right) {
      result = i;
    }
  }

  return result;
}
