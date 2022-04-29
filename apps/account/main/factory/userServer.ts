import { grpc, UserHandlers, userPackage } from 'grpc/configUserPackage'
import { UserDTO } from '../../domain/dto/user-dto';
import { createUser } from './userService';

export function getUserServer() {
  const server = new grpc.Server()
  server.addService(userPackage.User.service, {
    Create: async (call) => {
      const user = await createUser({
        name: call.request.name,
        avatarUrl: call.request.avatarUrl
      } as UserDTO)
      call.write(user)
      call.end()
    }
  } as UserHandlers)
  return server;
}