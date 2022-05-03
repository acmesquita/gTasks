import { TaskResponse } from "grpc/proto/taskPackage/TaskResponse"
import { TasksResponse } from "grpc/proto/taskPackage/TasksResponse"
import { RequestDTO } from "../@types/request-dto"
import { User } from "../@types/user"
import { CreateUserService } from "../service/create-new-user"
import { CreateTaskService } from "../service/create-task"
import { FindUserService } from "../service/find-user"
import { ListAllTasksService } from "../service/list-all-tasks"

export class TaskController {

  async listAll(): Promise<TasksResponse> {
    const listAllTasksService = new ListAllTasksService()
    const findUserServide = new FindUserService()
    const tasks = await listAllTasksService.listAll()
    
    const userIds = tasks
      .map(task => task.userId)
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })

    const users: User[] = []

    const user = await findUserServide.find(userIds[0])
    users.push(user)

    const data = tasks.map(task => {
      const user = users.filter(user => user.id == task.userId)[0]
      return {
        id: task.id,
        content: task.content,
        done: task.done,
        createdAt: task.createdAt,
        name: user?.name || 'unknown',
        avatarUrl: user?.avatarUrl || 'https://freesvg.org/img/Penguin-Icon.png'
      } as unknown as TaskResponse
    })
      
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
      id: '',
      content: '',
      done: '',
      createdAt: '',
      name: '',
      avatarUrl: '',
    }
  }
}