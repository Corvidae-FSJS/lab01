/* import and use validators */
const errors = require('./Errors');
const validator = require('./validator');

class SchemaValidator {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */
  /*eslint-disable-next-line*/
  validate(model) {
    const returnObject = {};
    console.log(model);
    try {
      const schemaKeys = Object.keys(this.schema);
      for(let i = 0; i < schemaKeys.length; i++) {
        const caster = validator.getCaster(this.schema[schemaKeys[i]].type);
        returnObject[schemaKeys[i]] = caster(model[schemaKeys[i]]);
      }
      console.log(returnObject);
      return returnObject;
    }
    catch(error) {
      console.log('error from caster', error);
      throw new errors.ModelError(error);
    }

    //Marty's Demo
  // // make return object
  //   const data = {};
  // //get keys from model
  //   //loop the keys
  //   //copy property to new object
  //   Object.keys(this.schema).forEach(key => {
  //     data[key] = model[key];
  //   });
  // //return object  
  //   return data;
  }
}

module.exports = SchemaValidator;