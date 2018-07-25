let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function' , function(){
    it('count registration numbers' , function(){
      assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('four registration numbers' , function(){
      assert.equal(4,countRegNumber('CA 182736,CY 523519,CJ 812328, MX 1253 EC'));
    });
});
