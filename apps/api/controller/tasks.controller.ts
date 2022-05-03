import { Request, Response } from "express";
import { TaskDTO } from "../@types/task-dto";
import { CreateTask } from "../service/create-task";
import { ListTasks } from "../service/list-tasks";
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

}