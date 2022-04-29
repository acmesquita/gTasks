import { User } from "../@types/user";
import { UserDTO } from "../@types/user-dto";
import { client } from "../config/userClient";

export class CreateNewUser {
  constructor(){}
  async create(params: UserDTO): Promise<User> {

    return null    
  }
}