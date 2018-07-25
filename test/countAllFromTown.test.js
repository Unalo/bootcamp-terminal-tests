let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('The countAllFromTown function' , function(){
    it('Count stellies reg numbers' , function(){
      assert.equal(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it('count Paarl reg numbers' , function(){
      assert.equal(1,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'));
    });
});
