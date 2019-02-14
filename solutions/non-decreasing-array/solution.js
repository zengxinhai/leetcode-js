/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
  let disorders = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      disorders++;
      if (disorders > 1) return false;
      const left = i > 1 ? nums[i - 2] : -Infinity;
      if (left > nums[i]) {
        nums[i] = nums[i - 1];
      } else {
        nums[i - 1] = left;
      }
    }
  }
  return true;
};
