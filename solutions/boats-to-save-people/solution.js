/*
Intuitive:
1. Sort the people in non-decreasing order
2. Set 2 pointers i, j at the begin and end of the array, let boats = 0;
3. Do a while loop until i > j
4. Each time:
    if people[j] + people[i] > limit { j--, boats++ }
    else { j--, i++, boats++ }
5. Return boats

Time complexity: O(nlgn)
Space complexity: O(1)
*/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);
  for (var i = 0, j = people.length - 1, boats = 0; i <= j; --j, ++boats) {
    people[j] + people[i] <= limit && ++i;
  }
  return boats;
};
