/**
 * @fileoverview TypeLock tests
 */

var expect = require('expect.js');
var TypeLock = require('./typelock');

var FnNullArg = function () {
  var args = TypeLock(arguments);
  args.match(null);
  return true;
};

var FnNumberArg = function () {
  var args = TypeLock(arguments);
  args.match(0);
  return true;
};

var expectRefErr = function (e) { expect(e).to.be.a(ReferenceError); }

describe('TypeLock', function () {
  it('Null args +ve', function () {
    expect(FnNullArg).to.not.throwException();
  });
  it('Null args -ve', function () {
    expect(FnNullArg).withArgs(1).to.throwException(expectRefErr);
    expect(FnNullArg).withArgs(null).to.throwException(expectRefErr);
    expect(FnNullArg).withArgs(undefined).to.throwException(expectRefErr);
  });

  it('Number arg +ve', function () {
    expect(FnNumberArg).withArgs(42).to.not.throwException();
    expect(FnNumberArg).withArgs(0).to.not.throwException();
  });

  it('Number arg -ve', function () {
    expect(FnNumberArg).to.throwException(expectRefErr);
    expect(FnNumberArg).withArgs('A').to.throwException(expectRefErr);
    expect(FnNumberArg).withArgs([]).to.throwException(expectRefErr);
    expect(FnNumberArg).withArgs(undefined).to.throwException(expectRefErr);
    expect(FnNumberArg).withArgs(1,2).to.throwException(expectRefErr);
  });
});

