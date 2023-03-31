import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    const { keyword = "", page = 1, limit = 10 } = request.qs()
    const data = await User.query()
      .where(query => {
        query.whereILike('firstName', `%${keyword}%`)
        query.orWhereILike('middleName', `%${keyword}%`)
        query.orWhereILike('lastName', `%${keyword}%`)
      })
      .paginate(page, limit)

    response.ok({
      message: "Get data success",
      data
    })
  }

  public async show({ params, auth, response }: HttpContextContract) {
    const { role, id: userId } = auth.user!
    const { id } = params

    if (userId !== id && role === 'member') {
      return response.unauthorized({ message: "You are not allowed to access this data" })
    }

    const data = await User.query()
      .where('id', id)
      .firstOrFail()

    response.ok({
      message: "Get data success",
      data
    })

  }


  //TODO: create & delete user by admin / chairman, update by all
  public async store({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
