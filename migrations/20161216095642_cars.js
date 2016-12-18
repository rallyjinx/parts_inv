exports.up = knex =>
  knex.schema.createTable('cars', (table) => {
    table.increments();
    table.string('owner').notNullable().defaultTo('');
    table.string('year').notNullable().defaultTo('');
    table.string('make').notNullable().defaultTo('');
    table.string('model').notNullable().defaultTo('');
    table.string('vin').notNullable().defaultTo('');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('cars');

// ┌──────────────────────────────────────────────────────────────────────────────────────────┐
// │                                          cars                                            │
// ├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
// │id           │serial                   │primary key                                       │
// │owner        │varchar(255)             │not null default ''                               │
// │year         │varchar(255)             │not null default ''                               │
// │make         │varchar(255)             │not null default ''                               │
// │model        │varchar(255)             │not null default ''                               │
// │VIN          │varchar(255)             │not null default ''                               │
// │created_at   │timestamp with time zone │not null default now()                            │
// │updated_at   │timestamp with time zone │not null default now()                            │
// └─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
