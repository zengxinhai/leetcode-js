/*
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  let historyLIS = [];
  for (const num of nums) {
    updateHistoryLIS(historyLIS, num);
  }
  return historyLIS.length;
}

const updateHistoryLIS = (historyLIS, numToPlace) => {
  let updatePos = 0;

  for (const num of historyLIS) {
    if (num < numToPlace) updatePos++;
  }

  if (updatePos < historyLIS.length) {
    historyLIS[updatePos] = numToPlace;
  } else {
    historyLIS.push(numToPlace);
  }
}