/*eslint-disable-next-line*/
const SchemaValidator = require('../lib/Schema');
const errors = require('../lib/Errors');

describe('Schema', () => {

  const personSchema = {
    firstName: { type: 'string', require: true },
    lastName: { type: 'string', required: true },
    married: { type: 'boolean' },
    kids: { type: 'number' },
  };

  const schemaValidator = new SchemaValidator(personSchema);

  const validModel = {
    firstName: 'Dylan',
    lastName: 'Corvidae',
    married: true,
    kids: 1,
  };

  const semiValidModel = {
    firstName: 'Dylan',
    lastName: 'Corvidae',
    married: 'true',
    kids: 1,
  };

  const invalidModel = {
    firstName: [12, 16, 20, 24],
    lastName: 'Corvidae',
    married: 'purple',
    kids: 1,
  };

  it('validates a valid model', () => {
    expect(schemaValidator.validate(validModel)).toEqual(validModel);
  });

  it('validates a semivalid model', () => {
    expect(schemaValidator.validate(semiValidModel)).toEqual(validModel);
  });

  it('throws on an invalid model', () => {
    expect(() => {
      schemaValidator.validate(invalidModel);
    }).toThrow(errors.ModelError);
  }); 
}); 






//Marty's Demo
  // add a test schema
  // const schema = new Schema({
  //   name : {
  //     type: String,
  //     required: true
  //   },
  //   isFun: {
  //     type:Boolean,
  //     required:false
  //   },
  //   luckyNumber: {
  //     type:Number,
  //     required: false
  //   }
  // });



  // it('validates a correct model', () => {
  //   const model = {
  //     name: 'Good',
  //     isFun: true,
  //     luckyNumber: 79
  //   };
  //   const record = schema.validate(model);

  //   expect(record).not.toBe(model);
  //   expect(record).toEqual(model);
  // });

  // it('throws on invalid model', () => {

  // });

  // more test cases...
