/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
const strWithout3a3b = (A, B, a = 'a', b = 'b') => {
  if (B > A) return strWithout3a3b(B, A, b, a);
  if (A >= B * 2) {
      return ''.padEnd(B * 3, `${a}${a}${b}`).padEnd(A + B, a);
  }
  return ''.padEnd((A - B) * 3, `${a}${a}${b}`).padEnd(A + B, `${a}${b}`);     
};

/* Another very short solution */
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
