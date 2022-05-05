import { User } from "../models/user";

export interface FindAllUser {
  findAll(ids: string[]): Promise<User[] | null>
}