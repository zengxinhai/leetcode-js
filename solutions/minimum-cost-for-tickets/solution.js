const mincostTickets = (days, costs, validPeriods = [1,7,30]) => {
    
  const lastTravelDay = days[days.length - 1];
  const travelDaysDic = days.reduce((pre, day) => {
      pre[day] = true;
      return pre;
  }, {});
  const costTillDay = { 0: 0 };
  for (let i = 1; i <= lastTravelDay; i++) {
      if (travelDaysDic[i] === undefined) {
          costTillDay[i] = costTillDay[i - 1];
          continue;
      }
      costTillDay[i] = Math.min(
          ...validPeriods.map((period, idx) => costTillDay[Math.max(i - period, 0)] + costs[idx])
      );
  }    
  return costTillDay[lastTravelDay];
};
