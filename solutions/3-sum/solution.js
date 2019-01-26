
/**
 * Two sum first solution:
 * 1, First solve twoSum problem
 * 2, Iterate through each elem, and find twoSum for -elem.
 * 3, Use dic to avoid adding duplicate combination.
 */

const twoSum = (nums, target, skipIndex) => {
  const ans = [];
  const appearDic = {};
  nums.forEach((num, index) => {
    if (index === skipIndex) return;
    if (appearDic[target - num] !== undefined) {
      ans.push([target - num, num]);
    }
    appearDic[num] = true;
  });
  return ans;
}

const threeSum_withTwoSum = (nums) => {
  const ans = [];
  const appearDic = {};
  const combDic = {};
  nums.forEach((num, index) => {
    if (appearDic[num] !== undefined) return;
    const combs = twoSum(nums, -num, index);
    for (comb of combs) {
      const newComb = [num].concat(comb).sort();
      const combKey = newComb.join('-');
      if (combDic[combKey] === undefined) {
        ans.push(newComb);
        combDic[combKey] = true;
      }
    }
    appearDic[num] = true;
  });
  return ans;
}

/**
 * Sort first solution:
 * 1, First sort the array
 * 2, Fix position for one elem, and find the other two.
 * 3, In a sorted array, it's easy to find the sum of two elems equal to a given number.
 */
const threeSum = (nums) => {

  // clone the nums and sort
  const clonedNums = nums.slice().sort((a, b) => a - b);

  // Looping through the nums
  const targetSum = 0;
  const ans = [];
  const numsTail = clonedNums.length - 1;
  for (let i = 0; i <= numsTail; i++) {

    // Skip duplicate case
    if (i > 0 && clonedNums[i] === clonedNums[i - 1]) continue;
    // Avoid doing unnecessary looping
    if (clonedNums[i] * 3 > targetSum) break;

    // find sum by sliding in the sorted array
    let left = i + 1, right = numsTail;
    while (left < right) {
      const sum = clonedNums[i] + clonedNums[left] + clonedNums[right];
      if (sum < targetSum) {
        while (left < right && clonedNums[++left] === clonedNums[left - 1]);
      } else if (sum > targetSum) {
        while (left < right && clonedNums[--right] === clonedNums[right + 1]);
      } else {
        ans.push([clonedNums[i], clonedNums[left], clonedNums[right]]);
        while (left < right && clonedNums[++left] === clonedNums[left - 1]);
        while (left < right && clonedNums[--right] === clonedNums[right + 1]);
      }
    }
  };
  return ans;
}
