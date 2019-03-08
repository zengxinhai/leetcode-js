/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */

const getIntersections = (section, sectionList, startPosition) => {
  const commonSections = [];
  let position = startPosition, sectionLen = sectionList.length;
  const sectionStart = section.start, sectionEnd = section.end;
  while (position < sectionLen) {
    const currentStart = sectionList[position].start;
    const currentEnd = sectionList[position].end;

    if (currentEnd < sectionStart) { ++position; }
    else if (currentStart <= sectionEnd) {
      const start = Math.max(currentStart, sectionStart);
      const end = Math.min(currentEnd, sectionEnd);
      commonSections.push({ start, end });
      ++position;
    } else {
      break;
    }
  }
  return { commonSections, position: position > 0 ? position - 1 : 0 };
};

const intervalIntersection = (A, B) => {
  let i = 0, j = 0, aLen = A.length, bLen = B.length;
  let ans = [];
  while (i < aLen && j < bLen) {
    const currentSection = A[i];
    const { commonSections, position } = getIntersections(currentSection, B, j);
    ans = ans.concat(commonSections);
    j = position;
    ++i;
  }
  return ans;
};