/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

const longestOnes = (A, K) => {
  let ans = 0, usedBridges = 0, previousOnes = 0, lastMax = 0, linkHistory = [];
  A.forEach(num => {
    if (num === 0) {
      if (usedBridges < K) {
        lastMax = lastMax + 1;
        usedBridges += 1;
        linkHistory.push(1 + previousOnes);
      } else {
        if (linkHistory.length === 0) {
          lastMax = 0;
        } else {
          const abandoned = linkHistory.shift();
          lastMax = lastMax + 1 - abandoned;
          linkHistory.push(1 + previousOnes);
        }
      }
      previousOnes = 0;
    } else {
      previousOnes += 1;
      lastMax += 1;
    }
    ans = Math.max(ans, lastMax);
  });
  return ans;
};
