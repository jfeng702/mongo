const assert = require('assert');
const User = require('../src/user');

describe('updating records', () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: 'joe' });
    joe.save()
      .then(() => done());
  });

  function assertName(operation, done) {
    operation
    .then(() => User.find({}))
    .then((users) => {
      assert(users.length === 1);
      assert(users[0].name === 'alex');
      done();
    });
  }

  it('instance type using set and save', (done) => {
    joe.set('name', 'alex');
    assertName(joe.save(), done);
  });

  it('a model instance can update', (done) => {
    assertName(joe.update({'name': 'alex'}), done);
  });

  it('a model class can update', (done) => {

  });

  it('a model class can update one record', (done) => {

  });

  it('a model class can find a record with an id and update', done => {

  });
});
