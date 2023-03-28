import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'wilayah'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 15).notNullable().primary()
      table.string('nama', 100)
      table.enum('tingkat', ['provinsi', 'kota', 'kecamatan', 'kelurahan'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
