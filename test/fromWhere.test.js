let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function' , function(){
    it('takes a car registration number from Cape Town.' , function(){
      assert.equal(fromWhere("CA"),('Cape Town'));
    });
      it('takes a car registration number from Bellville' , function(){
        assert.equal(fromWhere("CY"),('Bellville'));
        });
        it('takes a car registration number from Paarl.' , function(){
          assert.equal(fromWhere("CJ"),('Paarl'));
          });
});
