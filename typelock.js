/**
 * @fileoverview TypeLock
 */

var TypeLock = function (actualArgs) {
  this.actualArgs = actualArgs;
};

TypeLock.prototype.match = function (formalArguments) {

  if(formalArguments === null || formalArguments === undefined) {
    if(this.actualArgs.length > 0) {
      throw new ReferenceError("Do not accept any arguments");
    }
  }

};

module.exports = function (actualArgs) { return new TypeLock(actualArgs); };
