module.exports = function(regNumber) {
  switch (regNumber) {
    case "CY":
      return "Bellville";
      break;
    case "CJ":
      return "Paarl";
      break;
    case "CA":
      return "Cape Town";
      break;
    default:
      return "Some other place!";
  }
}
// fromWhere("CJ");
// assert.equal(fromWhere("CY"), "Bellville");
// assert.equal(fromWhere("CJ"), "Paarl");
// assert.equal(fromWhere("CA"), "Cape Town");