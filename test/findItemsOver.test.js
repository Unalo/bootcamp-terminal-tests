let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function' , function(){
    it('should take in list of items and return the ones over the threshold' , function(){
      assert.equal(findItemsOver(
        [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
      ]
      ,20),2);
    });
    it('Not equal to the given threshold' , function(){
      assert.notEqual(
        [
          {name : 'apples', qty : 1},
          {name : 'pears', qty : 3},
          {name : 'bananas', qty : 7},
          {name : 'apples', qty : 3}
        ]

        ,
        [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
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
