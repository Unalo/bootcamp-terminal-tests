module.exports = function(regNum) {
 var List = regNum.split(', ')
 var paarlArray = [];
 // console.log(regNum);
  console.log(paarlArray)
  for(var i=0;i<List.length; i++) {
    if(List[i].startsWith('CJ')) {
      paarlArray.push(List[i])
    }
   }
  return paarlArray.length;
  //console.log(paarlArray);
}
