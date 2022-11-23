
exports.up = function (knex) {
  return knex.schema.createTable('phones', (table) => {
    table.increments('id').primary()
    table.string('label').notNullable()
    table.string('number').notNullable()

    table.string('phonableType').notNullable()
    table.integer('phonableId').notNullable()
    
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('phones')
}
