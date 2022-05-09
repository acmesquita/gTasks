import { TaskResponse } from "grpc/proto/taskPackage/TaskResponse"
import { TasksResponse } from "grpc/proto/taskPackage/TasksResponse"
import { RequestDTO } from "../@types/request-dto"
import {
  CreateUserService,
  FindUsersService,
  CreateTaskService,
  DeleteTaskService,
  ListAllTasksService,
  MarkDoneTaskService
} from "../services"
import { TaskSerializer } from "../views/task.serializer"

export class TaskController {

  async listAll(): Promise<TasksResponse> {
    const listAllTasksService = new ListAllTasksService()
    const service = new FindUsersService()
    const tasks = await listAllTasksService.listAll()

    const userIds = tasks
      .map(task => task.userId)
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })

    const users = await service.find(userIds)

    const data = tasks.map(task => {
      const user = users.find(user => user.id === task.userId)
      return TaskSerializer.serialize(task, user)
    })


    return {
      tasks: [
        ...data
      ]
    }

  }

  async create(params: RequestDTO): Promise<TaskResponse> {
    const { name, avatarUrl, content } = params

    if (name && avatarUrl && content) {
      const createUserService = new CreateUserService()
      const userCreated = await createUserService.create({ name, avatarUrl })

      if (userCreated) {
        const service = new CreateTaskService()
        const task = await service.create({
          content,
          userId: userCreated.id
        })
        return TaskSerializer.serialize(task, userCreated)
      }
    }
    return TaskSerializer.empty()
  }

  async markToDone(id: string): Promise<TaskResponse> {
    const service = new MarkDoneTaskService()
    const findUserServide = new FindUsersService()

    const task = await service.mark(id)

    if (task) {
      const users = await findUserServide.find([task.userId])
      const user = users[0]

      return TaskSerializer.serialize(task, user)

    }
    return TaskSerializer.empty()
  }

  async delete(id: string): Promise<TaskResponse> {
    const service = new DeleteTaskService()

    await service.delete(id)

    return TaskSerializer.empty()
  }
}