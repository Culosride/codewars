function incrementString (string) {
  return string.replace(/[0-8]?9*$/, n => n*1 + 1)
}

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/javascript
