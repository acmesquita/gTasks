import { dbClient } from '../../config/dbClient'

export class DeleteTaskService {
  async delete(id: string): Promise<void> {

    try {
      await dbClient.task.delete({
        where: {
          id
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}