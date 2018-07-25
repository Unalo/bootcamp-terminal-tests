module.exports = function(day) {
  var isDay = day.endsWith('day');
  var weekEnd = day.startsWith('S');
  //console.log(isDay);
  return !weekEnd;
};
// isWeekday('Saturday');
// assert.equal(isWeekday('Saturday'), false);
// assert.equal(isWeekday('Monday'), true);