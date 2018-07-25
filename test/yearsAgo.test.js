let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('The yearsAgo function' , function(){
    it('23 years ago' , function(){
      assert.equal(23,yearsAgo('1995'));
    });
    it('5 years ago' , function(){
      assert.equal(5,yearsAgo('2013'));
    });
    it('should not take words' , function(){
      assert.notEqual('Siyanda',30,'not a number');
    });
});
