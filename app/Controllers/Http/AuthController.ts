import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterToken from 'App/Models/RegisterToken'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'
import RegisterValidator from 'App/Validators/RegisterValidator'
import { DateTime } from 'luxon'
import Env from '@ioc:Adonis/Core/Env'
import { generateToken } from 'App/Helpers/SignUpTokenHelper'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)

    const tokenData = await RegisterToken.findByOrFail('token', payload.token)

    if (tokenData.expiresAt < DateTime.now()) {
      return response.unprocessableEntity({ message: "Token expired" })
    }

    const newToken = generateToken(20)
    payload.token = newToken
    payload['tokenExpiredTime'] = DateTime.now().plus({ minutes: 5 })
    const data = await User.create(payload)

    await tokenData.delete()

    const host = 'http://' + Env.get('HOST')
    const port = Env.get('PORT') ? ':' + Env.get('PORT') : ''
    const url = host + port + '/verify?t=' + newToken

    await Mail.send((message) => {
      message
        .from('info@example.com')
        .to(payload.email)
        .subject('Welcome Onboard!')
        // .text(url)
        .htmlView('emails/welcome', { url })
    })

    //TODO: hapus semua register_token by telegram id karena sudah berhasil

    response.created({
      message: "Successfully registered, check your email for verification",
      data
    })
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)
    try {
      const token = await auth.use('api').attempt(email, password)
      response.ok({
        message: "Succesfully logged in",
        data: auth.user,
        token
      })
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async verify({ request, response, view }: HttpContextContract) {
    const { t } = request.qs()
    const data = await User.findByOrFail('token', t)
    if (data.tokenExpiredTime < DateTime.now()) {
      return response.unprocessableEntity({ message: "Token expired" })
    }

    //TODO: verify user, nullify token & expiry

    // response.ok({
    //   message: "Successfully verified, redirecting to login page"
    // })

    const html = await view.render('verified')
    return html
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
