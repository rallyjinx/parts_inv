exports.up = knex =>
  knex.schema.createTable('parts', (table) => {
    table.increments();
    table.integer('car_id').notNullable().references('cars.id').onDelete('CASCADE').index();
    table.string('part_num').notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.specificType('location', 'char(5)').notNullable().defaultTo('');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('parts');


// ┌──────────────────────────────────────────────────────────────────────────────────────────┐
// │                                         parts                                            │
// ├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
// │id           │serial                   │primary key                                       │
// │car_id       │integer                  │not null default '' foreign key references cars   │
// │part_num     │varchar(255)             │not null default ''                               │
// │description  │text                     │not null default ''                               │
// │location     │char(5)                  │not null default ''                               │
// │created_at   │timestamp with time zone │not null default now()                            │
// │updated_at   │timestamp with time zone │not null default now()                            │
// └─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
