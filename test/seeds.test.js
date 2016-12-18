process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const {
  suite,
  test
} = require('mocha');
const knex = require('../knex');

suite('seeds', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('cars rows', (done) => {
    knex('cars').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          owner: 'Rally Jinx',
          year: '1979',
          make: 'Austin',
          model: 'Mini',
          VIN: 'cdf93434jsncv'
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC'),
        }, {
          id: 2,
          owner: 'Rally Jinx',
          year: '1993',
          make: 'GMC',
          model: 'K1500',
          VIN: 'kadfla2wr8owz'
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC'),
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`
          );
        }
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
