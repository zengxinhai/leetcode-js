/**
 * @param {string} S
 * @return {number[]}
 */

const partitionLabels = (S) => {

  const firstAppearMap = new Map();

  let ans = [];
  for (let i = 0; i < S.length; i++) {
    const firstAppear = firstAppearMap.get(S[i]);
    if (firstAppear !== undefined) {
      let count = 0, nextAns = [];
      for (gL of ans) {
        if (firstAppear >= count + gL) {
          nextAns.push(gL);
          count += gL;
        } else {
          nextAns.push(i - count + 1);
          break;
        }
      }
      ans = nextAns;
    } else {
      firstAppearMap.set(S[i], i);
      ans.push(1);
    }

  }
  return ans;
};