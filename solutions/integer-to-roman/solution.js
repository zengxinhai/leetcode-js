const digitToRoman = (num, smallUnit, mediumUnit, largeUnit) => {
  if (num < 4) {
    return ''.padEnd(num, smallUnit);
  }
  if (num === 4) {
    return `${smallUnit}${mediumUnit}`;
  }
  if (num > 4 && num < 9) {
    return `${mediumUnit}${''.padEnd(num - 5, smallUnit)}`;
  }
  if (num === 9) {
    return `${smallUnit}${largeUnit}`;
  }
};

const intToRoman = (num) => {
  const unitsArray = [
    { smallUnit: 'I', mediumUnit: 'V', largeUnit: 'X' },
    { smallUnit: 'X', mediumUnit: 'L', largeUnit: 'C' },
    { smallUnit: 'C', mediumUnit: 'D', largeUnit: 'M' },
    { smallUnit: 'M', mediumUnit: 'K', largeUnit: 'G' },
  ];

  let left = num, ans = '', i = 0;
  while (left > 0) {
    const digit = left % 10;
    const { smallUnit, mediumUnit, largeUnit } = unitsArray[i];
    ans = digitToRoman(digit, smallUnit, mediumUnit, largeUnit) + ans;
    left = (left - digit) / 10;
    i++;
  }
  return ans;
};
