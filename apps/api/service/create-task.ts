import { Task } from "../../tasks/model/task";
import { TaskDTO } from "../@types/task-dto";
import { client } from "../config/taskClient";

export class CreateTask {
  constructor(){}
  async create(params: TaskDTO): Promise<Task> {
    return new Promise((res) => {
      const stream = client.Create({
        name: params.name,
        avatarUrl: params.avatarUrl,
        content: params.content,
      })
      stream.on('data', (task) => {
        res(task)
      })
      stream.on('end', () => {
        console.log('fim da taks')
      })
    })
  }
}