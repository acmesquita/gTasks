import { UserDTO } from '../domain/dto/user-dto'
import { InvalidParams } from '../domain/errors'
import { User } from '../domain/models/user'
import { UserRepository } from '../domain/repositories/user-repository'
import { CreateUser } from '../domain/usecases/create-user'
export class LocalCreateUser implements CreateUser{

  constructor(
    private userRepository: UserRepository
  ){}

  async create(params: UserDTO): Promise<User> {
    if (!params) {
      throw new InvalidParams()
    }
    
    return await this.userRepository.create(params)
  }
}