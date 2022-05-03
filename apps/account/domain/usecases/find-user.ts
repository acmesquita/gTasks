import { User } from "../models/user";

export interface FindUser {
  find(id: string): Promise<User | null>
}