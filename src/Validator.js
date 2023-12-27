import StringSchema from './StringSchema.js';
import ObjectSchema from './ObjectSchema.js';
import FunctionSchema from './FunctionSchema.js';

class Validator {
  string() {
    return new StringSchema();
  }

  function() {
    return new FunctionSchema();
  }

  object() {
    return new ObjectSchema();
  }
}

export default Validator;
