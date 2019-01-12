/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
  if (nums.length < 2) return nums.length;

  let [maxLISLen, currentLISLen] = [1, 1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      currentLISLen = 1;
    }
    else if (nums[i] > nums[i - 1] && ++currentLISLen > maxLISLen) {
      maxLISLen = currentLISLen;
    }
  }
  return maxLISLen;
};