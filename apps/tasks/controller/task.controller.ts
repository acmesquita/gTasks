import { TaskResponse } from "grpc/proto/taskPackage/TaskResponse"
import { TasksResponse } from "grpc/proto/taskPackage/TasksResponse"
import { RequestDTO } from "../@types/request-dto"
import { CreateUserService } from "../service/create-new-user"
import { CreateTaskService } from "../service/create-task"
import { ListAllTasksService } from "../service/list-all-tasks"

export class TaskController {
  
  async listAll(): Promise<TasksResponse> {
    const listAllTasksService = new ListAllTasksService
    const tasks = await listAllTasksService.listAll()
    const data = tasks.map(task => ({
      id: task.id,
      content: task.content,
      done: task.done,
      createdAt: task.createdAt,
      name: 'unknown',
      avatarUrl: 'https://freesvg.org/img/Penguin-Icon.png'
    } as unknown as TaskResponse))
    return {
      tasks: [
        ...data
      ]
    }
    
  }

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