/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = (A) => {
  const wordLen = A[0].length, dp = { 0: 1 };
  let ans = 1;
  for (let i = 1; i < wordLen; ++i) {
      dp[i] = 1;
      for (let j = 0; j < i; ++j) {
          if (compareCols(A, j, i)) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
      ans = Math.max(dp[i], ans);
  }
  return wordLen - ans;
};

// Return true is col1 not bigger than col2
const compareCols = (A, col1, col2) => {
  if (col1 < 0 || col2 >= A[0].length) return true;
  for (let i = 0, aLen = A.length; i < aLen; ++i) {
      if (A[i][col1] > A[i][col2]) return false;
  }
  return true;
}
