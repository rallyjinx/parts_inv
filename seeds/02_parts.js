exports.seed = knex =>
  // Deletes ALL existing entries
  knex('parts').del()
  .then(() =>
    knex('parts').insert([{
      id: 1,
      car_id: 1,
      part_num: '1',
      description: 'boot lid',
      location: 'A0001'
    }, {
      id: 2,
      car_id: 1,
      part_num: '2',
      description: 'fresh air intake',
      location: 'B0002'
    }]),
    knex.raw('SELECT setval(\'parts_id_seq\', (SELECT MAX(id) FROM parts))')

  );
