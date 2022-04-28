import express from 'express'
import { router as UserRouter } from './routes/user.routes'

const app = express()

app.use(express.json())
app.use(UserRouter)

app.listen(5678, () => {
  console.log('Server running in http://localhost:5678')
})