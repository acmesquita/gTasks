import { grpc, TaskHandlers, taskPackage } from "grpc/configTaskPackage"
import { TaskController } from "../../controller/task.controller"

export const getTaskServer = () => {
  const server = new grpc.Server()
  server.addService(taskPackage.Task.service, {
    Create: async (call) => {
      try {
        const controller = new TaskController()
        const params = call.request
        console.log('task craindo.', params)

        const task = await controller.create(params)
        console.log('task criada.', task)
        call.write(task)
      }catch(err) {
        console.log(err)
      }finally {
        call.end()
      }
      
    }
  } as TaskHandlers)

  return server
}