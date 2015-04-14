var mocha = require('mocha');
var expect = require('chai').expect;

describe('Array.reduce', function () {
  describe('(with errors)', function () {
    it('re-throws the error the reducer threw', function () {
      expect(function () {
        [1].reduce(function (prev, cur) {
          throw new Error('from the reducer');
        }, 0);
      }).to.throw('from the reducer');
    });
    
    it('stops calling the reducer once it throws', function () {
      var totalCalls = 0;
      try {
        [1, 2].reduce(function (prev, cur) {
          ++totalCalls;
          throw new Error('from the reducer');
        }, 0);
      } catch (e) {}
      expect(totalCalls).to.equal(1);
    });
  });
});