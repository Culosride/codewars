function guessGifts(wishlist, presents) {
  let gifts = []
  presents.forEach(present => {
    wishlist.forEach((wish) => {
      if(wish.size === present.size && wish.clatters === present.clatters && wish.weight === present.weight) {
        gifts.push(wish.name);
      }
    })
  })
  return gifts = [...new Set(gifts)];
}

//  https://www.codewars.com/kata/52ae6b6623b443d9090002c8/javascript
