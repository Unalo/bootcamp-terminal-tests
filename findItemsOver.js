module.exports = function(itemList, threshold) {
  //console.log(itemList);
  var fruitList = [];
  for  (var i =0;i<itemList.length;i++) {
    var list = itemList[i];
    if (list.qty> 20) {
    fruitList.push(list);
    }
  }
  //console.log(fruitList);
  return fruitList.length;
}
