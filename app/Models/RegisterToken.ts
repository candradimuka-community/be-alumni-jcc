import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RegisterToken extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'register_token' })
  public token: string

  @column()
  public telegramUserId: string

  @column()
  public telegramUserName: string

  @column.dateTime()
  public expiresAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
