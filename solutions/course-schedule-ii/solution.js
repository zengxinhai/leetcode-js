/*
Intuition:
1. Sort the courses in toplogical order
2. If there's loop in the DAG, return empty array
3. Else return the order as a rray
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, rels) => {
  const depNumsMap = {};
  const inEdgesMap = {};
  rels.forEach(([ from, to ]) => {
    depNumsMap[from] = depNumsMap[from] ? depNumsMap[from] + 1 : 1;
    inEdgesMap[to] = inEdgesMap[to] ? inEdgesMap[to].concat([from]) : [from];
  });

  let noDepCourses = [];
  for(let i = 0; i < numCourses; ++i) {
    if (!depNumsMap[i]) { noDepCourses.push(i); }
  }

  let ans = noDepCourses;
  while (noDepCourses.length) {
    let nextNoDepCourses = [];
    noDepCourses.forEach(course => {
      const fromCourses = inEdgesMap[course];
      fromCourses && fromCourses.forEach(fromCourse => {
        if (--depNumsMap[fromCourse] === 0) { nextNoDepCourses.push(fromCourse); }
      });
    });

    noDepCourses = nextNoDepCourses;
    ans = ans.concat(noDepCourses);
  }

  if (ans.length < numCourses) return [];
  return ans;
};