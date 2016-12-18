exports.up = knex =>
  knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('email').notNullable().unique();
    table.specificType('digest', 'char(60)').notNullable();
    table.timestamps(true, true);
  });

exports.down = knex => knex.raw('DROP TABLE users CASCADE');
