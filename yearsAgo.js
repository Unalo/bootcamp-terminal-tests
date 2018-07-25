module.exports = function(myYear) {
  var dt = new Date();
  var year = dt.getFullYear()
  return year - myYear;
}

// console.log(yearsAgo(1995));