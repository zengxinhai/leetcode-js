const mincostTickets = (days, costs, lastDay = days[days.length - 1]) => {

  const daysDic = days.reduce((reduced, day) => {
    reduced[day] = true;
    return reduced;
  }, {});

  const costTillDay = { 0: 0 };

  let i = 0;
  while (i++ < lastDay) {
    if (daysDic[i] === undefined) {
      costTillDay[i] = costTillDay[i - 1];
      continue;
    }
    const preOneDayCost = i >= 1 ? costTillDay[i - 1] : 0;
    const preSevenDayAgoCost = i >= 7 ? costTillDay[i - 7] : 0;
    const preThirtyDayCost = i >= 30 ? costTillDay[i - 30] : 0;
    costTillDay[i] = Math.min(
      preOneDayCost + costs[0],
      preSevenDayAgoCost + costs[1],
      preThirtyDayCost + costs[2],
    );
  }
  return costTillDay[lastDay];
};
