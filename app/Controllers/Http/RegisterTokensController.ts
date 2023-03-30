import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateRegisterTokenValidator from 'App/Validators/CreateRegisterTokenValidator'
import { generateToken } from 'App/Helpers/SignUpTokenHelper'
import RegisterToken from 'App/Models/RegisterToken'
import { DateTime } from 'luxon'

export default class RegisterTokensController {
  public async index({ }: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateRegisterTokenValidator)
    const token = generateToken(10)

    //TODO:  hapus token sebelumnya dengan telegramId yang sama
    const data = await RegisterToken.create({
      ...payload,
      token,
      expiresAt: DateTime.now().plus({ minutes: 5 })
    })

    response.created({
      message: "Token created successfully and only valid for 5 minutes",
      data
    })
  }

  public async show({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
