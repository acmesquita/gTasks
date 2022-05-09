import { User } from "../../@types/user";
import { client } from "../../config/userClient/client";

export class FindUsersService {
  async find(ids: string[]): Promise<User[]> {
    return new Promise((res) => {
      const stream = client.FindAll({
        ids
      })
      stream.on('data', (users) => {
        res(users.users)
      })
      stream.on('end', () => {
        console.log('users find')
      })
    })
  }
}