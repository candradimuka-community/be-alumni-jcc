import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterToken from 'App/Models/RegisterToken'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'
import RegisterValidator from 'App/Validators/RegisterValidator'
import { DateTime } from 'luxon'
import Env from '@ioc:Adonis/Core/Env'
import { generateToken } from 'App/Helpers/SignUpTokenHelper'
import Mail from '@ioc:Adonis/Addons/Mail'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator)
    let { registerToken, ...payloadData } = payload

    const tokenData = await RegisterToken.findByOrFail('token', registerToken)

    if (tokenData.expiresAt < DateTime.now()) {
      return response.unprocessableEntity({ message: "Token expired" })
    }

    const newToken = generateToken(20)

    payloadData['token'] = newToken
    payloadData['tokenExpiredTime'] = DateTime.now().plus({ minutes: 5 })
    payloadData['telegramUserId'] = tokenData.telegramUserId
    payloadData['telegramUserName'] = tokenData.telegramUserName

    const data = await User.create(payloadData)

    await RegisterToken.query().where('telegramUserId', tokenData.telegramUserId).delete()

    const host =Env.get('HOST_SERVE')
    const verifyUrl = host + '/api/verify?t=' + newToken

    await Mail.send((message) => {
      message
        .from('info@example.com')
        .to(payload.email)
        .subject('Welcome Onboard!')
        .htmlView('emails/welcome', { verifyUrl })
    })

    response.created({
      message: "Successfully registered, check your email for verification",
      data
    })
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)
    try {
      const token = await auth.use('api').attempt(email, password)
      const { firstName, lastName, middleName, role, isVerified, id } = auth.user!
      if (!isVerified) {
        return response.unauthorized({ message: "User is not verified, please check email to verify or request for resend verification email" })
      }
      response.ok({
        message: "Succesfully logged in",
        token,
        data: {
          id,
          name: firstName + " " + middleName + " " + lastName,
          role,
        }
      })
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async verify({ request, response, view }: HttpContextContract) {
    const { t } = request.qs()
    const data = await User.findByOrFail('token', t)
    if (data.tokenExpiredTime != null && data.tokenExpiredTime < DateTime.now()) {
      return response.unprocessableEntity({ message: "Token expired" })
    }

    await data.merge({
      token: null,
      tokenExpiredTime: null,
      isVerified: true
    }).save()

    const urlFE = Env.get('URL_FE')
    const html = await view.render('verified', { urlFE })
    return html
  }

  public async resendVerification({ response, request }: HttpContextContract) {
    const checkEmailSchema = schema.create({
      email: schema.string([rules.email(), rules.exists({ table: 'users', column: 'email' })])
    })

    const { email } = await request.validate({ schema: checkEmailSchema })

    const user = await User.findByOrFail('email', email)

    if (user.isVerified) {
      return response.unprocessableEntity({ message: "User has been verified" })
    }

    const newToken = generateToken(20)
    await user.merge({ token: newToken, tokenExpiredTime: DateTime.now().plus({ minutes: 5 }) }).save()

    const host = 'http://' + Env.get('HOST')
    const port = Env.get('PORT') ? ':' + Env.get('PORT') : ''
    const verifyUrl = host + port + '/verify?t=' + newToken

    await Mail.send((message) => {
      message
        .from('admin@candradimuka.club')
        .to(email)
        .subject('Welcome Onboard!')
        .htmlView('emails/welcome', { verifyUrl })
    })

    response.created({
      message: "Successfully registered, check your email for verification"
    })
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.use('api').logout()
    response.ok({ message: "Successfully logged out" })
  }
}
