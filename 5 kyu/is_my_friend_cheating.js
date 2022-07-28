function removeNb (n) {
  const sum = (n*(n+1))/2;
  const arr = [];
  for (let b=n; b>0; b--) {
    let a = (sum-b)/(b+1)
    if (Number.isInteger(a) && a <= n) {
      arr.push([a, b]);
      }
  }
  return arr;
}

// https://www.codewars.com/kata/5547cc7dcad755e480000004
