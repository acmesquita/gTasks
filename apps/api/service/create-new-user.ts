import { User } from "../@types/user";
import { UserDTO } from "../@types/user-dto";

export class CreateNewUser {
  create(params: UserDTO): User {

    // Enviar as informações via gRPC para o account service

    return {
      id: 'any',
      ...params
    }
  }
}