const assert = require('assert');
const User = require('../src/user');

describe('reading a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users with name of joe', (done) => {
    User.find({ name: 'joe' })
      .then((users) => {
        console.log(users[0]._id);
        console.log(joe._id);
        assert(users[0]._id === joe._id);
        done();
      });
  });
});
