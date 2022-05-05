import { Task } from "../../tasks/model/task";
import { TaskDTO } from "../@types/task-dto";
import { client } from "../config/taskClient";

export class MarkDone {
  constructor(){}
  async mark(id: string): Promise<Task> {
    return new Promise((res) => {
      const stream = client.MarkDone({ id })
      stream.on('data', (task) => {
        res(task)
      })
      stream.on('end', () => {
        console.log('mark task')
      })
    })
  }
}