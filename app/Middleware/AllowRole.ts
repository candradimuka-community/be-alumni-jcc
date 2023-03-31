import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AllowRole {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>, roles: string[]) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    if (roles.indexOf(auth.user!.role) < 0) {
      return response.unauthorized({ message: "You are not allowed to access this url" })
    }
    await next()
  }
}
