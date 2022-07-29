function count (string) {
  let count = {}
  string.split("").forEach(char => (!count[char]) ? count[char] = 1 : count[char] ++)
  return count;
}

// https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript
