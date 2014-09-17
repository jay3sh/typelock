/**
 * @fileoverview TypeLock
 */

var TypeLock = function (actualArgs) {
  this.actualArgs = actualArgs;
};

TypeLock.prototype.match = function (formalArguments) {

  if(formalArguments === null || formalArguments === undefined) {
    if(this.actualArgs.length > 0) {
      throw new ReferenceError();
    }
  }
  if(typeof formalArguments === "number") {
    if(this.actualArgs.length != 1 ||
      typeof this.actualArgs[0] !== "number")
    {
      throw new ReferenceError();
    }
  }

};

module.exports = function (actualArgs) { return new TypeLock(actualArgs); };
