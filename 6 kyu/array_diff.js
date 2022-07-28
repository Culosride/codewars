function arrayDiff(a, b) {
  return a.filter(digit => !b.includes(digit))
}
