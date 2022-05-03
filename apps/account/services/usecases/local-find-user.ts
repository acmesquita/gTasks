import { InvalidParams } from "../../domain/errors";
import { User } from "../../domain/models/user";
import { UserRepository } from "../../domain/repositories/user-repository";
import { FindUser } from "../../domain/usecases/find-user";

export class LocalFindUser implements FindUser{
  constructor(
    private userRepository: UserRepository
  ){}

  async find(id: string): Promise<User> {
    
    if (!id) {
      throw new InvalidParams()
    }

    const user = await this.userRepository.find(id)

    return user
  }
}