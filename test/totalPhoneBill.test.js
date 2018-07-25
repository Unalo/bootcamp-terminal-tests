let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function' , function(){
    it('should take in a string of calls and sms and calculate the total phone bill' , function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });
    it('should take in a string of calls ' , function(){
      assert.equal(totalPhoneBill('call, call, call, call'),'R11.00');
    });
    it('should take in a string of sms' , function(){
      assert.equal(totalPhoneBill('sms, sms, sms, sms, sms, sms'),'R3.90');
    });
});
