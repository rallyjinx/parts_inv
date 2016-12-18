exports.seed = knex =>
  // Deletes ALL existing entries
  knex('users').del()
  .then(() =>
    knex('users').insert({
      id: 1,
      first_name: 'Rally',
      last_name: 'Jinx',
      email: 'rally@rally.com',
      digest: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
    }),
    knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users))')

  );
