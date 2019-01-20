/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

const getAdjSame = (image, color, sr, sc) => {
  const rowLength = image.length;
  const columnLength = image[0].length;
  const adjSameList = [];
  if (sr - 1 >= 0 && image[sr - 1][sc] === color) {
    adjSameList.push([sr - 1, sc]);
  }
  if (sr + 1 < rowLength && image[sr + 1][sc] === color) {
    adjSameList.push([sr + 1, sc]);
  }
  if (sc - 1 >= 0 && image[sr][sc - 1] === color) {
    adjSameList.push([sr, sc - 1]);
  }
  if (sc + 1 < columnLength && image[sr][sc + 1] === color) {
    adjSameList.push([sr, sc + 1]);
  }
  return adjSameList;
}

const floodFill = (image, sr, sc, newColor) => {
  const initialColor = image[sr][sc];
  const stepList = [[sr, sc]];
  while (stepList.length > 0) {
    const [x, y] = stepList.pop();
    if (image[x][y] !== initialColor) continue;
    image[x][y] = newColor;
    const adjSameList = getAdjSame(image, initialColor, x, y);
    for (const [x, y] of adjSameList) {
      image[x][y] != newColor && stepList.push([x, y]);
    }
  }
  return image;
}