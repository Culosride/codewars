function persistence(num) {
  let count = 0;
  num = num.toString();
  while (num.length > 1) {
      count++;
      num = num.split('')
        .map(Number)
        .reduce((a, b) => a * b).toString();
  }
  return count;
}

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
