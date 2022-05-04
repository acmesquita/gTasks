import { UserDTO } from "../../domain/dto/user-dto";
import { User } from "../../domain/models/user";
import { PrismaUserRepository } from "../../services/repositories/user-repository";
import { LocalCreateUser } from "../../services/usecases/local-create-user";
import { LocalFindUser } from "../../services/usecases/local-find-user";
import { dbClient } from "../config/prisma";

type Request = UserDTO
type Response = User | null

export async function createUser(request: Request): Promise<Response> {
  try {
    const userRepository = new PrismaUserRepository(dbClient.user)
    const createUserUseCase = new LocalCreateUser(userRepository)
  
    return await createUserUseCase.create(request)
  } catch (error) {
    console.log(error)
    throw new Error('Deu errado')
  }

}

export async function findUser(id: string): Promise<Response> {
  try {
    const userRepository = new PrismaUserRepository(dbClient.user)
    const findUser = new LocalFindUser(userRepository)
  
    return await findUser.find(id)
  } catch (error) {
    throw new Error('Deu errado')
  }

}