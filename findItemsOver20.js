module.exports = function(itemList) {
  var fruitList = [];
  for (var i=0;i<itemList.length;i++) {
	var listItem = itemList[i];
    if (listItem.qty > 20) {
      fruitList.push(listItem);
    }
  }
 // console.log(fruitList);
  return fruitList.length;
}
