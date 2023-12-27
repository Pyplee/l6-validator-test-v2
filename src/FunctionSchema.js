class FunctionSchema {
  constructor() {
    this.properties = {};
    this.expected = null;
    this.withProp = false;
    this.args = null;
  }

  arguments(...data) {
    this.args = data;
    this.withProp = true;
    return this;
  }

  context(func) {
    const result = func.apply(this.properties, this.args);
    if (result === this.expected) {
      return true;
    }
    return false;
  }

  isValid(value) {
    if (typeof value !== 'function') {
      return false;
    }
    if (this.withProp && !this.context(value)) {
      return false;
    }
    return true;
  }

  expect(expectedValue) {
    this.expected = expectedValue;
    this.withProp = true;
    return this;
  }

  callWith(prop) {
    this.properties = prop;
    this.withProp = true;
    return this;
  }
}

export default FunctionSchema;
