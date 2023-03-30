import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.string('first_name', 75).notNullable()
      table.string('middle_name', 75)
      table.string('last_name', 75).notNullable()
      table.date('birth_date').notNullable()
      table.string('birth_city').notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.string('phone', 25)
      table.enum('role', ['admin', 'chairman', 'member'])
      table.string('telegram_user_id')
      table.string('telegram_user_name')
      table.boolean('is_verified').defaultTo(false)
      table.string('token').comment('untuk reset password')
      table.datetime('token_expired_time', { useTz: false })

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
