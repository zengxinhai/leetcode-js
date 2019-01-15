/**
 * @param {number[]} nums
 * @return {number}
 */

 // Be careful for the test case [0,-1]

const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  const map = new Map();
  let ans = 1;
  for (num of nums) {
    const state = map.get(num);
    if (state !== undefined) continue;
    const leftState = map.get(num-1);
    const rightState = map.get(num+1);
    if (leftState !== undefined && rightState !== undefined) {
      map.set(leftState, rightState);
      map.set(rightState, leftState);
      map.set(num, true);
      ans = Math.max(ans, rightState - leftState + 1);
    } else if (leftState !== undefined) {
      map.set(leftState, num);
      map.set(num, leftState);
      ans = Math.max(ans, num - leftState + 1);
    } else if (rightState !== undefined) {
      map.set(num, rightState);
      map.set(rightState, num);
      ans = Math.max(ans, rightState - num + 1);
    } else {
      map.set(num, num);
    }
  }
  return ans;
}