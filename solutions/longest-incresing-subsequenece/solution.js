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
  let [updatePos, low, high] = [0, 0, historyLIS.length - 1];

  while (low <= high) {
    const comparePos = low + Math.floor((high - low) / 2);
    if (historyLIS[comparePos] > numToPlace) {
      high = comparePos - 1;
    } else if (historyLIS[comparePos] < numToPlace) {
      low = comparePos + 1;
    } else {
      updatePos = comparePos;
      break;
    }
  }
  updatePos = updatePos || low;

  if (updatePos < historyLIS.length) {
    historyLIS[updatePos] = numToPlace;
  } else {
    historyLIS.push(numToPlace);
  }
}