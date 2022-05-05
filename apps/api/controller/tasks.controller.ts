import { Request, Response } from "express";
import { TaskDTO } from "../@types/task-dto";
import { CreateTask } from "../service/create-task";
import { DeleteTask } from "../service/delete-task";
import { ListTasks } from "../service/list-tasks";
import { MarkDone } from "../service/mark-done";
import { present } from "../validations/present";

export class TasksController {
  constructor(){
  }

  async list(req: Request, res: Response) {
    const listTasks = new ListTasks()
    const tasks = await listTasks.list()

    res.json(tasks)
  }
  
  async create(req:Request, res: Response) {
    const createTask = new CreateTask()

    const { name, avatarUrl, content } = req.body


    if (!validateParams(name, avatarUrl, content)) {
      return res.status(404).json({
        error: {
          msg: 'Bad Request',
          details: 'Invalid params, send name and avatar_url valid'
        }
      })
    }

    const task = await createTask.create({
      name,
      avatarUrl,
      content
    } as TaskDTO)

    return res.json({
      task: {
        ...task
      }
    })
    
    function validateParams(name: any, avatar_url: any, content: any) {
      return present(name) || present(avatar_url) || present(content)
    }
  }

  async mark(req:Request, res: Response) {
    const { id } = req.params
    const service = new MarkDone()
    const task = await service.mark(id as string)

    return res.json({
      task: {
        ...task
      }
    })
  }

  async delete(req:Request, res: Response) {
    const { id } = req.params
    const service = new DeleteTask()
    await service.delete(id as string)

    return res.status(204)
  }
}