import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) { }

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    registerToken: schema.string([rules.exists({ table: 'register_tokens', column: 'token' })]),
    email: schema.string([rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string([rules.confirmed(), rules.minLength(6)]),
    firstName: schema.string([rules.alpha(), rules.trim()]),
    middleName: schema.string.optional([rules.alpha(), rules.trim()]),
    lastName: schema.string([rules.alpha(), rules.trim()]),
    phone: schema.string([rules.regex(/^[0-9]+$/), rules.unique({ table: 'users', column: 'phone' })]),
    birthDate: schema.date({ format: "yyyy-MM-dd" }),
    birthCity: schema.string(),
    feUrl: schema.string.optional([rules.url()])
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    exists: 'data not exist in database',
    unique: 'data duplicate in database',
    confirmed: 'password does not match'
  }
}
