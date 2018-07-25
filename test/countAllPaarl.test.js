let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe('The countAllPaarl function' , function(){
    it('paarl reg numbers' , function(){
      assert.equal(3,countAllPaarl("CA 125 252, CJ 251 255, CJ 254 365, CJ 2584 888"));
    });
    it('How many paarl reg numbers' , function(){
      assert.equal(1,countAllPaarl("CA 125 252, CJ 251 255, CX 254 365 EC, CY 2584 888"));
    });
    it('No paarl reg numbers' , function(){
      assert.equal(0,countAllPaarl("CA 125 252, CY 251 255, CX 254 365 EC, CY 2584 888"));
    });
});
