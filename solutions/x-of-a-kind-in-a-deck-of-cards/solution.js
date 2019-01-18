/**
*- 1, Use map to find the count of each element in the deck.
*- 2, Transform the count of each element to an array.
*- 3, Find the smallest in the array, and get all the factors of it (including itself, but except for '1')
*- 4, Test whether one of the factors could be the common factor for all the number in the array. If No, *return false, else return true.
*/
const hasMinFactor = (arr) => {
  const minValue = Math.min(...arr);
  if (minValue < 2) return false;

  const minSqrt = Math.sqrt(minValue);
  const smallFactor = [];
  const largeFactor = [];
  for (let i = 2; i <= minSqrt; i++) {
    if (minValue % i === 0) {
      smallFactor.push(i);
      largeFactor.push(minValue / i);
    }
  }
  const allFactor = smallFactor.concat(largeFactor).concat(minValue);
  for (let factor of allFactor) {
    if (arr.every(item => item % factor === 0)) return true;
  }
  return false;
}

/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = (deck) => {
  if (deck.length === 0) return false;

  const appearMap = deck.reduce((appearMap, item) => {
    const itemAppearTimes = appearMap.get(item);
    if (itemAppearTimes !== undefined) {
      appearMap.set(item, itemAppearTimes + 1);
    } else {
      appearMap.set(item, 1);
    }
    return appearMap;
  }, new Map());
  const appearTimesArray = Array.from(appearMap.values());
  return hasMinFactor(appearTimesArray);
};