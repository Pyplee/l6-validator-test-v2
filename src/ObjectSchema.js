import _ from 'lodash';

class ObjectSchema {
  constructor() {
    this.validators = null;
  }

  shape(fields) {
    this.validators = fields;
    return this;
  }

  isValid(data) {
    const keys = Object.keys(data);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }

    const iter = (obj, key, schema) => {
      if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
        return schema[key].isValid(obj);
      }

      const keys = Object.keys(obj);
      const validator = schema[key];
      return keys.map((key) => iter(obj[key], key, validator));
    };
    return _.flattenDeep(keys.map((key) => iter(data[key], key, this.validators)))
      .every((val) => val === true);
  }
}

export default ObjectSchema;
