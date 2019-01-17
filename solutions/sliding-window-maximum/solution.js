/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const maxSlidingWindow = (nums, k) => {
  if (k < 1) return [];
  
  const ans = [];
  for (let i = 0; i <= nums.length - k; i++) {
      ans.push(Math.max.apply(this, nums.slice(i, k + i)));
  }
  return ans;
};