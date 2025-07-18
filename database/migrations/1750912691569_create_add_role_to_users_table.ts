import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'add_role_to_users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('role').notNullable().defaultTo('member')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
