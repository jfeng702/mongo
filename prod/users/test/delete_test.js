const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'joe' });
    joe.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    joe.remove()
    .then(() => User.findOne({ name: 'joe' }))
    .then((user) => {
      assert(user === null);
      done();
    });

  it('class method remove', () => {

  });

  it('class method findAndRemove', () => {

  });

  it('class method findByIdAndRemove', () => {

  });

  });
});
