import { grpc, taskPackage } from "grpc/configTaskPackage"
import { TaskRouter } from "../../routes/task.routes"

export const getTaskServer = () => {
  const server = new grpc.Server()
  server.addService(taskPackage.Task.service, new TaskRouter())
  return server
}