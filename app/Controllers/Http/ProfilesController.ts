import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfilesController {
  public async index({ auth, response }: HttpContextContract) {
    const { id, firstName, middleName, lastName, role } = auth.user!

    response.ok({
      message: "Berhasil mengambil data",
      data: {
        id,
        name: firstName + " " + middleName + " " + lastName,
        role
      }
    })
  }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
