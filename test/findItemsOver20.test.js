let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function' , function(){
    it('should take in list of items and retun the ones over 20 ' , function(){
      assert.equal(findItemsOver20(
        [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3}
        ]
        ,20),2);
    });
    it('Expected results not equal to the given threshold  ' , function(){
      assert.notEqual(
        [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 3},
          {name : 'bananas', qty : 7},
          {name : 'lemons', qty : 4},
          {name : 'apples', qty : 3}
        ]

        ,
        [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'lemons', qty : 4},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3}
        ]
        ,'not equal');
    });
    it('Expected results not deep equal to the given threshold' , function(){
      assert.notDeepEqual(
        [
          {name : 'apples', qty : 0},
          {name : 'pears', qty : 0},
          {name : 'bananas', qty : 0},
          {name : 'apples', qty : 0}
        ]

        ,
        [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3}
        ]
        ,'not deeply equal');
    });
});
