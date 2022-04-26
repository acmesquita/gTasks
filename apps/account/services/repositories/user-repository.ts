import { PrismaClient } from '@prisma/client'
import { UserDTO } from "../../domain/dto/user-dto";
import { User } from "../../domain/models/user";
import { UserRepository } from "../../domain/repositories/user-repository";

export class PrismaUserRepository implements UserRepository {
  constructor(
    private readonly dbClient: PrismaClient["user"]
  ){}

  async create(userDTO: UserDTO): Promise<User> {
    return await this.dbClient.create({
      data: {
        id: crypto.randomUUID(),
        ...userDTO
      }
    })
  }
}
