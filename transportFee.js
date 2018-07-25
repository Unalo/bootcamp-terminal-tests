module.exports = function(Shifts) {
  console.log(Shifts);
switch(Shifts) {
     case "morning":
          return "R20";
      break;
     case "afternoon":
          return "R10";
     break;
 case "Night":
     return "free";
     break;
  default:
    return "not a shift";
          }
}
