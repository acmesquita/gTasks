import { handleServerStreamingCall } from "@grpc/grpc-js";
import { UserHandlers } from "grpc/configUserPackage";
import { UserIdRequest__Output } from "grpc/proto/userPackage/UserIdRequest";
import { UserIdsRequest__Output } from "grpc/proto/userPackage/UserIdsRequest";
import { UserRequest__Output } from "grpc/proto/userPackage/UserRequest";
import { UserResponse } from "grpc/proto/userPackage/UserResponse";
import { UsersResponse } from "grpc/proto/userPackage/UsersResponse";
import { UserDTO } from "../../domain/dto/user-dto";
import * as userService from "../factory/userService";

export class UserRoutes implements UserHandlers {

  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
  
  Create: handleServerStreamingCall<UserRequest__Output, UserResponse> = async (call) => {
    try {
      const user = await userService.createUser({
        name: call.request.name,
        avatarUrl: call.request.avatarUrl
      } as UserDTO)
      if (user) {
        call.write(user)
      }
    }catch(err) {
      console.log(err)
    }finally {
      call.end()
    }
  }
  
  Find: handleServerStreamingCall<UserIdRequest__Output, UserResponse> = async (call) => {
    try {
      const { id } = call.request
      const user = await userService.findUser(id as string)
      if (user) {
        call.write(user)
      }
    }catch(err) {
      console.log(err)
    }finally {
      call.end()
    }
  }
  
  FindAll: handleServerStreamingCall<UserIdsRequest__Output, UsersResponse> = async (call) => {
    try {
      const { ids } = call.request
      const users = await userService.findAllUser(ids as string[])
      if (users) {
        call.write({
          users
        })
      }
    }catch(err) {
      console.log(err)
    }finally {
      call.end()
    }
  }
}