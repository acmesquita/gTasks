import { client } from "../config/taskClient";

export class DeleteTask {
  constructor(){}
  async delete(id: string): Promise<void> {
    return new Promise((res) => {
      const stream = client.Delete({ id })
      stream.on('data', () => {
        res()
      })
      stream.on('end', () => {
        console.log('mark task')
      })
    })
  }
}