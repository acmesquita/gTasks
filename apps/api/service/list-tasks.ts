import { Task } from "../../tasks/model/task";
import { TaskDTO } from "../@types/task-dto";
import { client } from "../config/taskClient";

export class ListTasks {
  constructor(){}
  async list(): Promise<Task[]> {
    return new Promise((res) => {
      const stream = client.List({})
      stream.on('data', (tasks) => {
        res(tasks)
      })
      stream.on('end', () => {
        console.log('fim da listagem de tasks')
      })
    })
  }
}