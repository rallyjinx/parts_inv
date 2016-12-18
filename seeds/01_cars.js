exports.seed = knex =>
  // Deletes ALL existing entries
  knex('cars').del()
  .then(() =>
    knex('cars').insert([{
      id: 1,
      owner: 'Rally Jinx',
      year: '1979',
      make: 'Austin',
      model: 'Mini',
      vin: 'cdf93434jsncv'
    }, {
      id: 2,
      owner: 'Rally Jinx',
      year: '1993',
      make: 'GMC',
      model: 'K1500',
      vin: 'kadfla2wr8owz'
    }]),
    knex.raw('SELECT setval(\'cars_id_seq\', (SELECT MAX(id) FROM cars))')
  );
