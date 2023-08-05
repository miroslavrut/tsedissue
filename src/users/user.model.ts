import { User } from '@prisma/client'
import { Integer, Required, Property, Format, Email, Description, Allow } from '@tsed/schema'

export class UserModel implements User {
  @Property(Number)
  @Integer()
  id: number

  @Property(Date)
  @Format('date-time')
  createdAt: Date

  @Property(String)
  @Required()
  @Email()
  @Description('User email. This email must be unique!')
  email: string

  @Property(String)
  @Allow(null)
  name: string | null
}
