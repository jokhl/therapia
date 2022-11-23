
exports.up = function (knex) {
  return knex.schema.createTable('patients', (table) => {
    table.increments('id').primary()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.date('birthday').notNullable()
    table.string('gender').notNullable()
    table.string('street').notNullable()
    table.string('postalCode').notNullable()
    table.string('city').notNullable()
    table.string('country').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('patients')
}
