const equationsPossible = (equations) => {
  const groupDic = {};
  equations.filter(equation => equation[1] === '=').forEach(equation => {
    const [left, _, __, right] = equation;
    if (!groupDic[left] && !groupDic[right]) {
      groupDic[left] = groupDic[right] = { mark: left };
    }
    else if (groupDic[left] && groupDic[right]) {
      groupDic[right].mark = groupDic[left].mark;
    }
    else {
      const [hasGroup, noGroup] = groupDic[left] ? [left, right] : [right, left];
      groupDic[noGroup] = groupDic[hasGroup];
    }
  });

  for (let i = 0; i < equations.length; i++) {
    const [left, sigh, _, right] = equations[i];
    if (sigh === '!') {
      if (left === right) return false;
      if (groupDic[left] && groupDic[right] && groupDic[left].mark === groupDic[right].mark) {
        return false;
      }
    }
  }
  return true;
}
