/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */


const checkSubarraySum = (nums, k) => {
  // Handle special case when k === 0
  if (k === 0) {
    // We need to find at least 2 zero together
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] !== 0) continue;
      if (nums[i] === 0 && nums[i + 1] === 0) return true;
    }
    return false;
    /* We calculate for each sum of i (0 < i < nums.length), nums[0] + nums[1] + ... + nums[i]
    ** Denote the sum as sum[i], define mod[i] as sum[i] % k.
    ** If sum[i] % k === 0, then nums[0 to i] is the answer.
    ** Else if There exist some j (0 <= j < i - 1), that satisfied: mod[j] === mod[i],
    ** Then we can say, we've find the answer. And the sub array is nums[j+1 to i]
    */
  } else {
    let currentSum = nums[0];
    const modMap = {};
    modMap[0] = -1;
    for (let i = 1; i < nums.length; i++) {
      const nextSum = currentSum + nums[i];
      const mod = nextSum % k;
      if (modMap[mod] !== undefined) {
        console.log(`Sub Array is: from index ${modMap[mod] + 1} to ${i}`);
        return true;
      }
      const prevMod = currentSum % k;
      modMap[prevMod] = i - 1;
      currentSum = nextSum;
    }
    return false;
  }
};