module.exports = function(regNum, location) {
  var List = regNum.split(',');
  var stellies = [];
  for (var i = 0; i < List.length; i++) {
    var currrentReg = List[i].trim();
    if (currrentReg.startsWith(location)) {
      stellies.push(currrentReg);
      //console.log(List[i]);
    }
  }
  return stellies.length;
}
// var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
// //fromStellies should contains
// assert.deepEqual(fromStellies, 3)