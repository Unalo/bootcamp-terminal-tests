module.exports = function(salesData) {
  var departmentMap = [];
  var salesList = [];
 for (var i=0;i<salesData.length;i++) {
 	salesList.push(salesData[i].sales);
   var max = Math.max.apply(null, salesList);
   if (max === salesData[i].sales)
   {
   var department = salesData[i].department;

 	}
}
  //console.log(department)
  return department;
}
