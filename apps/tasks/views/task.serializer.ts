import { TaskResponse } from "grpc/proto/taskPackage/TaskResponse";
import { User } from "../@types/user";
import { Task } from "../model/task";

export class TaskSerializer {
  static empty(): TaskResponse {
    return {
      id: '',
      content: '',
      done: '',
      createdAt: '',
      name: '',
      avatarUrl: ''
    } as TaskResponse
  }

  static serialize(task: Task, user?: User): TaskResponse {
    return {
      id: task?.id,
      content: task?.content,
      done: task?.done,
      createdAt: task?.createdAt.toLocaleDateString('pt-br'),
      name: user?.name || 'unknown',
      avatarUrl: user?.avatarUrl || 'https://freesvg.org/img/Penguin-Icon.png'
    } as unknown as TaskResponse
  }
}