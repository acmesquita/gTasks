import crypto from 'crypto';
import { Task, TaskDTO } from "../model/task";
import { dbClient } from '../config/dbClient'

export class CreateTaskService {
  async create(params: TaskDTO): Promise<Task> {
    const data = {
      id: crypto.randomUUID(),
      content: params.content,
      createdAt: new Date(),
      done: false,
      userId: params.userId
    }
    try {
      // const task = await dbClient.task.create({
      //   data
      // })
  
      console.log('task criada no banco')
  
      // return task
    } catch (error) {
      console.log(error)
    }
    return data
  }
}