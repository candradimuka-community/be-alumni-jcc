import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public firstName: string

  @column()
  public middleName: string

  @column()
  public lastName: string

  @column()
  public phone: string

  @column.date()
  public birthDate: DateTime

  @column()
  public birthCity: string

  @column()
  public role: string

  @column()
  public telegramUserId: string

  @column()
  public isVerified: boolean

  @column({ serializeAs: null })
  public token: string

  @column.dateTime({ serializeAs: null })
  public tokenExpiredTime: DateTime

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeCreate()
  public static async createId(user: User) {
    if (!user.id) {
      console.log(user.email + " : Creating a new user with automated id");
      user.id = uuid()
    }
  }
}
