import { UserDTO } from "../../domain/dto/user-dto";
import { User } from "../../domain/models/user";
import { PrismaUserRepository } from "../../services/repositories/user-repository";
import { LocalCreateUser } from "../../services/usecases/local-create-user";
import { dbClient } from "../config/prisma";

type Request = UserDTO
type Response = User

export async function createUser(request: Request): Promise<Response> {
  const userRepository = new PrismaUserRepository(dbClient.user)
  const createUserUseCase = new LocalCreateUser(userRepository)

  const user = await createUserUseCase.create(request)

  return user
}