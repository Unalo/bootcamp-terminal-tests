let assert = require("assert");
let isWeekday = require("../isWeekday");


describe('The isWeekday function' , function(){
    it('Check if its a  week day' , function(){
      assert.equal(true,isWeekday('Monday'));
    });
    it('check weekeday' , function(){
      assert.equal(false,isWeekday('Saturday'));
    });
})
