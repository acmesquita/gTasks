import { User } from "../@types/user";
import { client } from "../config/userClient/client";

export class FindUserService {
  async find(id: string): Promise<User> {
    return new Promise((res) => {
      const stream = client.Find({
        id
      })
      stream.on('data', (user) => {
        res(user)
      })
      stream.on('end', () => {
        console.log('user create')
      })
    })
  }
}