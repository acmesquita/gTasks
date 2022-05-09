import { handleServerStreamingCall } from "@grpc/grpc-js";
import { TaskHandlers } from "grpc/configTaskPackage"
import { Empty, Empty__Output } from "grpc/proto/taskPackage/Empty";
import { TaskIdResquest__Output } from "grpc/proto/taskPackage/TaskIdResquest";
import { TaskRequest__Output } from "grpc/proto/taskPackage/TaskRequest";
import { TaskResponse } from "grpc/proto/taskPackage/TaskResponse";
import { TasksResponse } from "grpc/proto/taskPackage/TasksResponse";
import { TaskController } from "../controller/task.controller"

export class TaskRouter implements TaskHandlers {

  #controller: TaskController

  constructor(){
    this.#controller = new TaskController()
  }

  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
  
  Create: handleServerStreamingCall<TaskRequest__Output, TaskResponse> = async (call) => {
    try {
      const params = call.request

      const task = await this.#controller.create(params)
      console.log('task criada.')
      call.write(task)
    }catch(err) {
      console.log(err)
    }finally {
      call.end()
    }
  }

  Delete: handleServerStreamingCall<TaskIdResquest__Output, Empty> = async (call) => {
    try {
      const { id } = call.request
      await this.#controller.delete(id as string)
      call.write({})
    }catch(err) {
      console.log(err)
    }finally {
      call.end()
    }
  }

  List: handleServerStreamingCall<Empty__Output, TasksResponse> = async (call) => {
    try {
      const tasks = await this.#controller.listAll()
      call.write(tasks)
    }catch(err) {
      console.log(err)
    }finally {
      call.end()
    }
  }

  MarkDone: handleServerStreamingCall<TaskIdResquest__Output, TaskResponse> = async (call) => {
    try {
      const { id } = call.request
      const task = await this.#controller.markToDone(id as string)
      if (task) {
        call.write(task)
      }
    }catch(err) {
      console.log(err)
    }finally {
      call.end()
    }
  }
}