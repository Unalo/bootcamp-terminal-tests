let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function() {
  it('It should not take registration number from other places', function() {
    assert.equal(false, isFromBellville('CJ 123'));
  });
  it('It should take registration number from Bellville', function() {
    assert.equal(true, isFromBellville('CY 123'));
  });
});