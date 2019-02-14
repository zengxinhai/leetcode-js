/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) => {
  for (let i = 0, j = -1, arrLen = A.length; i < arrLen; ++i) {
    if ((A[i] & 1) === 0 && j >= 0) { [A[i], A[j++]] = [A[j], A[i]]; }
    else if (A[i] & 1) { j = j === -1 ? i : j; }
  }
  return A;
};
