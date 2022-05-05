import { Router } from 'express'
import { TasksController } from '../controller/tasks.controller'

const router = Router()
const tasksController = new TasksController()

router.get('/tasks', tasksController.list)
router.post('/tasks', tasksController.create)
router.patch('/tasks/:id/mark', tasksController.mark)

export {
  router
}