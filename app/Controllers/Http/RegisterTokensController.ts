import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateRegisterTokenValidator from 'App/Validators/CreateRegisterTokenValidator'
import { generateToken } from 'App/Helpers/generateToken'

export default class RegisterTokensController {
  public async index({ }: HttpContextContract) { }

  public async create({ }: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateRegisterTokenValidator)
    //TODO: lanjut disini
    return generateToken.generate(10)
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
