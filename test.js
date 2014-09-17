/**
 * @fileoverview TypeLock tests
 */

var mocha = require('mocha');
var expect = require('expect.js');
var assert = require('assert');
var TypeLock = require('./typelock');

var FnNullArg = function () {
  var args = TypeLock(arguments);
  args.match(null);
  return true;
};

describe('TypeLock', function () {
  it('Null args +ve', function () {
    expect(FnNullArg).to.not.throwException();
  });
  it('Null args -ve', function () {
    expect(FnNullArg).withArgs(1).to.throwException(function (e) {
      expect(e).to.be.a(ReferenceError);
    });
    expect(FnNullArg).withArgs(null).to.throwException(function (e) {
      expect(e).to.be.a(ReferenceError);
    });
    expect(FnNullArg).withArgs(undefined).to.throwException(function (e) {
      expect(e).to.be.a(ReferenceError);
    });
  });

});


