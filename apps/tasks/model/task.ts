export type Task = {
  id: string
  content: string
  done: boolean
  createdAt: Date
  userId: string
}

export type TaskDTO = {
  content: string
  userId: string
}