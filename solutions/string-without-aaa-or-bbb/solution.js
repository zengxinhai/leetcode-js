/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
const strWithout3a3b = (A, B) => {

  let largeAlpha = 'a', large = A, smallAlpha = 'b', small = B;
  if (B > A) {
    [largeAlpha, smallAlpha] = [smallAlpha, largeAlpha];
    [large, small] = [small, large];
  }

  const total = A + B;
  let ans = '';
  let i = 0;
  while (i < total) {
    if (small === 0) {
      for (let j = 0; j < large; j++) { ans += largeAlpha };
      break;
    }
    if (large === small) {
      for (let j = 0; j < large; j++) { ans += `${largeAlpha}${smallAlpha}`; }
      break;
    }
    if (large > small) {
      ans += `${largeAlpha}${largeAlpha}${smallAlpha}`;
      large -= 2;
      small--;
      i += 3;
    }
  }
  return ans;
};