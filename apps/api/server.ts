import express from 'express'
import cors from 'cors'
import { router as UserRouter } from './routes/user.routes'
import { router as TasksRouter } from './routes/tasks.routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(UserRouter)
app.use(TasksRouter)

app.listen(5678, () => {
  console.log('Server running in http://localhost:5678')
})