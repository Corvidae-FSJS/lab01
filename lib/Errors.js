
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`make up meaningful message, there is no deep meaning, we are all objects on the never-ending immortal string of the universe`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(input) {
    super(`the model could not be coerced because ${input}`);
  }
}

module.exports = {
  CastError,
  ModelError
};