import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestricRole {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>, roles: string[]) {
    if (roles.indexOf(auth.user!.role) + 1) {
      return response.unauthorized({ message: "Your Role is not allowed to access this url" })
    }
    await next()
  }
}
