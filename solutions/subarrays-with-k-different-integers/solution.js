/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

const subarraysWithKDistinct = (A, K) => {
  let ans = 0;
  let l = 0, r = 0;
  let leftUniques = 0;
  let leftDic = {};
  let rightUniques = 0;
  let rightDic = {};
  for (let i = 0; i < A.length; i++) {
    leftDic[A[i]] = leftDic[A[i]] ? leftDic[A[i]] + 1 : 1;
    rightDic[A[i]] = rightDic[A[i]] ? rightDic[A[i]] + 1 : 1;
    if (leftDic[A[i]] === 1) leftUniques++;
    if (rightDic[A[i]] === 1) rightUniques++;

    while (leftUniques > K) {
      if (leftDic[A[l]] === 1) {
        leftUniques--;
      }
      leftDic[A[l]] -= 1;
      l++;
    }

    while (rightUniques >= K) {
      if (rightDic[A[r]] === 1) {
        rightUniques--;
      }
      rightDic[A[r]] -= 1;
      r++;
    }
    ans += r - l;
  }
  return ans;
}
