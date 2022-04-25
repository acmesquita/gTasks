import { UserDTO } from "../dto/user-dto";
import { User } from "../models/user";

export interface CreateUser {
  create(params: UserDTO): User
}