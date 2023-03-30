import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.log('--- Start Seeding User')
    await User.create({
      id: '33c64f0b-3556-4a4e-8b65-f2cf2a1d611f',
      email: 'ajcc@getnada.com',
      password: 'abdoluteSECRET',
      firstName: 'Admin',
      middleName: 'Komunitas',
      lastName: 'AJCC',
      phone: '0823982938',
      birthDate: DateTime.fromSQL("2020-12-01"),
      birthCity: 'Bandung',
      role: 'admin',
      isVerified: true,
    })

    console.log('--- End Seeding User')

  }
}
