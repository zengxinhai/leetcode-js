// Track by calendar day
const mincostTickets = (days, costs, validPeriods = [1, 7, 30]) => {

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

// Track by travel day
const mincostTickets = (days, costs, validPeriods = [1, 7, 30]) => {

  // Construct a cost rule map,
  // so that we could get the cost for each period just by period value
  const costRule = validPeriods.reduce((reduced, period, idx) => {
    reduced[period] = costs[idx];
    return reduced;
  }, {});

  // costHistory stores the cost history for each travel day
  const costHistory = { 0: 0 };


  // This cursor records the current neareast day for each period
  const cursors = validPeriods.map(period => ({ period, position: 0 }));

  for (const day of days) {
    // Move cursors to the right position
    for (const cursor of cursors) {
      while (days[cursor.position] + cursor.period < day) cursor.position++;
    }
    // Get the optimal cost for each ticket type
    costHistory[day] = Math.min(
      ...cursors.map(cursor => {
        let lastTicketDay = days[cursor.position];
        if (lastTicketDay + cursor.period > day) {
          lastTicketDay = cursor.position > 0 ? days[cursor.position - 1] : 0;
        }
        return costHistory[lastTicketDay] + costRule[cursor.period];
      })
    )
  }

  // Return the last travel day costs
  const lastTravelDay = days[days.length - 1];
  return costHistory[lastTravelDay];
};
