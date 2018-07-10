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
        console.log(typeof users[0]._id.toString());
        console.log(typeof joe._id.toString());
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });
  it('finds a user with a particular id', (done) => {
    User.findOne({ _id: joe._id })
      .then(user => {
        assert(user.name === 'joe');
        done();
      });
  });
});
