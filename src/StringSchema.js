class StringSchema {
  constructor() {
    this.validators = [((value) => typeof value === 'string')];
  }

  hasSpaces() {
    const validator = ((str) => {
      const arrStr = str.split('');
      const result = arrStr.map((el) => el === ' ');
      return result.includes(true);
    });

    this.validators.push(validator);
    return this;
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }
}

export default StringSchema;
