import { TaskResponse } from "grpc/proto/taskPackage/TaskResponse"
import { RequestDTO } from "../@types/request-dto"
import { CreateUserService } from "../service/create-new-user"
import { CreateTaskService } from "../service/create-task"

export class TaskController {
  async create(params: RequestDTO): Promise<TaskResponse> {
    const {
      name,
      avatarUrl,
      content,
    } = params

    if (name && avatarUrl && content) {
      const createUserService = new CreateUserService()
      const userCreated = await createUserService.create({ name, avatarUrl })

      if (userCreated) {
        const createTask = new CreateTaskService()
        const task = await createTask.create({
          content,
          userId: userCreated.id
        })
  
        return {
          id: task.id,
          content: task.content,
          done: task.done,
          createdAt: task.createdAt,
          name,
          avatarUrl
        } as unknown as TaskResponse
      }
    }
    return {
      id:'',
      content:'',
      done:'',
      createdAt:'',
      name:'',
      avatarUrl:'',
    }
  }
}