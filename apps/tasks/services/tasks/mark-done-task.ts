import { dbClient } from "../../config/dbClient";
import { Task } from "../../model/task";

export class MarkDoneTaskService {
  async mark(id: string): Promise<Task | null> {
    const task = await dbClient.task.update({
      data: {
        done: true
      },
      where: {
        id
      }
    })

    return task
  }
}