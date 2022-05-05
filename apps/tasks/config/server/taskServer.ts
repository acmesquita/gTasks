import { grpc, TaskHandlers, taskPackage } from "grpc/configTaskPackage"
import { TaskController } from "../../controller/task.controller"

export const getTaskServer = () => {
  const controller = new TaskController()
  const server = new grpc.Server()
  server.addService(taskPackage.Task.service, {
    Create: async (call) => {
      try {
        const params = call.request

        const task = await controller.create(params)
        console.log('task criada.')
        call.write(task)
      }catch(err) {
        console.log(err)
      }finally {
        call.end()
      }
      
    },
    List: async (call) => {
      try {
        const tasks = await controller.listAll()
        call.write(tasks)
      }catch(err) {
        console.log(err)
      }finally {
        call.end()
      }
    },
    MarkDone: async (call) => {
      try {
        const { id } = call.request
        const task = await controller.markToDone(id as string)
        if (task) {
          call.write(task)
        }
      }catch(err) {
        console.log(err)
      }finally {
        call.end()
      }
    }
  } as TaskHandlers)

  return server
}