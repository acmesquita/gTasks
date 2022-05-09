import { dbClient } from "../../config/dbClient";
import { Task } from "../../model/task";

export class ListAllTasksService {
  async listAll(): Promise<Task[]> {
    return await dbClient.task.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  }
}