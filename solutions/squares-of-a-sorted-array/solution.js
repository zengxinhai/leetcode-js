// Get the far-most index of negative number
const getLastIdxOfNeg = (A) => {
  let lastIdxOfNeg = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
      lastIdxOfNeg = i - 1;
      break;
    }
  }
  return lastIdxOfNeg;
}

const sortedSquares = (A) => {
  // Since we know the length of final array, we can fix the length at once
  const ans = new Array(A.length);
  let negCursor = getLastIdxOfNeg(A);
  let nonNegCursor = negCursor + 1;
  // Do a merge sort process
  let i = 0;
  while (negCursor > -1 || nonNegCursor < A.length) {
    const negSquare = negCursor > -1 ? A[negCursor] * A[negCursor] : Infinity;
    const nonNegSquare = nonNegCursor < A.length ? A[nonNegCursor] * A[nonNegCursor] : Infinity;
    if (negSquare < nonNegSquare) {
      negCursor--;
      ans[i] = negSquare;
    } else {
      nonNegCursor++;
      ans[i] = nonNegSquare;
    }
    i++;
  }
  return ans;
};
