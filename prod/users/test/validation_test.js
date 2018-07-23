const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    console.log(validationResult);
    const { message } = validationResult.errors.name;

    assert(message === 'Name is required');
  });
});
