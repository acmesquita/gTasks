import { UserHandlers, grpc, userPackage } from 'grpc/configUserPackage'
import { UserDTO } from '../../domain/dto/user-dto';
import { InvalidParams } from '../../domain/errors/invalid-params';
import { createUser } from './userService';

export function getUserServer() {
  const server = new grpc.Server()
  server.addService(userPackage.User.service, {
    Create: async (req, res) => {
      const isValid = req.request.name && req.request.avatarUrl

      if (isValid) {
        const user = await createUser({
          name: req.request.name,
          avatar_url: req.request.avatarUrl
        } as UserDTO)
  
        res(null, user)
      } else {
        res(new InvalidParams(), {})
      }
    }
  } as UserHandlers)
  return server;
}