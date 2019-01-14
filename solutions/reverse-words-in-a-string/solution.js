/**
 * @param {string} str
 * @returns {string}
 */

const reverseWords = (str) => {
    const words = str.trim().split(/ +/);
    if (words.length === 0) return "";
    if (words.length === 1) return words[0];
    let ans = words[words.length - 1];
    for (let i = words.length - 2; i >= 0; i--) {
        ans = `${ans} ${words[i]}`;
    }
    return ans;
}

const reverseWordsShort = (str) => {
  return str.trim().split(/\s+/).reverse().join(' ');
}


