import { UserDTO } from "../dto/user-dto";
import { User } from "../models/user";

export interface UserRepository {
  create(userDTO: UserDTO): Promise<User | null>
  find(id: string):Promise<User | null>
  findAll(ids: string[]):Promise<User[] | null>
}
