import { InvalidParams } from "../../domain/errors";
import { User } from "../../domain/models/user";
import { UserRepository } from "../../domain/repositories/user-repository";
import { FindAllUser } from "../../domain/usecases/find-all-user";

export class LocalFindAllUser implements FindAllUser{
  constructor(
    private userRepository: UserRepository
  ){}

  async findAll(ids: string[]): Promise<User[] | null> {
    
    if (!ids) {
      throw new InvalidParams()
    }

    const users = await this.userRepository.findAll(ids)

    console.log('LocalFindAllUser -> find users: ', users?.length)

    return users
  }
}