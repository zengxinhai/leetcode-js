/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
const strWithout3a3b = (A, B, a = 'a', b = 'b') => {
  if (B > A) return strWithout3a3b(B, A, b, a);

  const total = A + B;
  let ans = '';
  let i = 0;
  while (i < total) {
    if (B === 0) {
      while (A-- > 0) { ans += a; }
      break;
    }
    if (A === B) {
      while (A-- > 0) { ans += (a + b); }
      break;
    }
    if (A > B) {
      ans += (a + a + b);
      A -= 2, B--, i += 3;
    }
  }
  return ans;
};

/* A very short solution */
const strWithout3a3b = (A, B, a = 'a', b = 'b') => {
  if (B > A) return strWithout3a3b(B, A, b, a);
  let ans = '';
  while (A-- > 0) {
    ans += a;
    if (A > B) ans += a, A--;
    if (B-- > 0) ans += b;
  }
  return ans;
};
