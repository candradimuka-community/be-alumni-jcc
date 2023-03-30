import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterToken from 'App/Models/RegisterToken'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'
import RegisterValidator from 'App/Validators/RegisterValidator'
import { DateTime } from 'luxon'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)

    const tokenData = await RegisterToken.findByOrFail('token', payload.token)

    if (tokenData.expiresAt < DateTime.now()) {
      return response.unprocessableEntity({ message: "Token expired" })
      // TODO: lanjut disini, kirim email
    }

    const data = await User.create(payload)

    response.created({
      message: "Successfully registered",
      data
    })
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)
    try {
      const data = await auth.use('api').attempt(email, password)
      //TODO: tampilin data user untuk save user id ke FE
      response.ok({
        message: "Succesfully logged in",
        data
      })
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
