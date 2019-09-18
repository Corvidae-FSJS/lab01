
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`can not coerce ${providedValue} into type ${expectedType}`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {

}

module.exports = {
  CastError,
  ModelError
};