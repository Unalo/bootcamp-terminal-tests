let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function' , function(){
    it('It Checks registration number from Eastern Cape' , function(){
      assert.equal(false,regCheck('DV 23 LP EC', 'MP'));
    });
    it('It Checks registration numbers from Gauteng' , function(){
      assert.equal(true,regCheck('DV 23 LP GP', 'GP'));
    });
});
