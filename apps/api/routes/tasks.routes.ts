import { Router } from 'express'
import { TasksController } from '../controller/tasks.controller'

const router = Router()
const tasksController = new TasksController()

router.post('/tasks', tasksController.create)

export {
  router
}