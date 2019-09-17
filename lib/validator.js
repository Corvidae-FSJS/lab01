
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

const isNumber = input => {
  return typeof input === 'number';
};

const isArray = input => {
  return input.constructor === Array;
};

const isObject = input => {
  if(input.constructor === Array) {
  return false; 
  } else {
    return typeof input === 'object'};
};

const isFunction = input => {
  return typeof input === 'function';
};

const isBoolean = input => {
  return typeof input === 'boolean';
};


/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = (input) => {
  return input.every(isString);
};

const isArrayOfNumbers = (input) => {
  return input.every(isNumber);
};

const isArrayOfObjects = (input) => {
  return input.every(isObject);
};

const isArrayOfBooleans = (input) => {
  return input.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (rules) => {
  // CHANGE ME
  return isString;
};

module.exports = {
  isString,
  isNumber,
  isArray,
  isObject,
  isFunction,
  isBoolean,
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,
  getValidator
};


